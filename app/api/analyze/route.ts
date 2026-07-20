import { NextRequest, NextResponse } from "next/server";
import { RINGS, RingKey } from "@/lib/data";

export const runtime = "nodejs";

interface AnalyzeRequestBody {
  name1: string;
  name2: string;
  birth1: { date: string; time: string; calendar: "solar" | "lunar" };
  birth2: { date: string; time: string; calendar: "solar" | "lunar" };
  branchName: string;
  styles: string[];
}

const SYSTEM_PROMPT = `너는 전국 지점을 보유한 감성 커플링 공방 '아뜰리에호수'의 AI 사주/궁합 매칭 아티스트야.
사용자 커플의 생년월일시를 바탕으로 오행(목/화/토/금/수) 궁합을 분석하고,
아래 3개의 실제 반지 라인업 중 궁합에 가장 잘 어울리는 반지 1개를 선택해야 해.

[반지 라인업]
1. 노드 (Node): 서로 다른 시간과 기억이 쌓여 만들어진 관계를 상징. 구조적인 리듬감과 단단한 인상.
2. 세그먼트 (Segment): 분리된 선과 면이 자연스럽게 맞물려 조화를 이룸. 단단하지만 부드러운 균형.
3. 헤이즈 (Haze): 아지랑이처럼 미세한 결과 섬세한 감정. 은은하고 깊은 인상.

반드시 아래 JSON 형식으로만 응답해. 마크다운 코드펜스, 설명, 전제 텍스트 없이 순수 JSON만 출력해.

{
  "element_summary": "두 사람의 오행 궁합을 한 줄로 요약 (한국어)",
  "keywords": ["키워드1", "키워드2", "키워드3"],
  "story": "감성적이고 흥미로운 궁합 해설 2~3문장 (한국어)",
  "recommended_ring": "node" | "segment" | "haze" 중 하나,
  "ring_reason": "왜 이 반지가 두 사람에게 어울리는지, 디자인 특징과 연결한 위트있고 따뜻한 설명 (한국어, 3~4문장)",
  "element_scores": {
    "wood": 0-100 사이 정수,
    "fire": 0-100 사이 정수,
    "earth": 0-100 사이 정수,
    "metal": 0-100 사이 정수,
    "water": 0-100 사이 정수
  }
}`;

export async function POST(req: NextRequest) {
  try {
    const body: AnalyzeRequestBody = await req.json();
    const { name1, name2, birth1, birth2, branchName, styles } = body;

    if (!name1 || !name2 || !birth1?.date || !birth2?.date) {
      return NextResponse.json(
        { error: "필수 정보가 누락되었습니다." },
        { status: 400 }
      );
    }

    const userPrompt = `
[커플 정보]
- 이름1: ${name1}
- 생년월일시1: ${birth1.date} ${birth1.time} (${birth1.calendar === "lunar" ? "음력" : "양력"})
- 이름2: ${name2}
- 생년월일시2: ${birth2.date} ${birth2.time} (${birth2.calendar === "lunar" ? "음력" : "양력"})
- 방문 지점: ${branchName}
- 선호 스타일: ${styles.join(", ")}

위 정보를 바탕으로 오행 궁합을 분석하고 JSON으로만 응답해줘.`;

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "서버에 ANTHROPIC_API_KEY가 설정되어 있지 않습니다." },
        { status: 500 }
      );
    }

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-5",
        max_tokens: 1000,
        system: SYSTEM_PROMPT,
        messages: [{ role: "user", content: userPrompt }],
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Anthropic API error:", errText);
      return NextResponse.json(
        { error: "AI 분석 요청에 실패했습니다." },
        { status: 502 }
      );
    }

    const data = await response.json();
    const rawText = (data.content ?? [])
      .map((block: { type: string; text?: string }) =>
        block.type === "text" ? block.text : ""
      )
      .filter(Boolean)
      .join("\n");

    const cleaned = rawText.replace(/```json|```/g, "").trim();

    let parsed: {
      element_summary: string;
      keywords: string[];
      story: string;
      recommended_ring: RingKey;
      ring_reason: string;
      element_scores: Record<string, number>;
    };

    try {
      parsed = JSON.parse(cleaned);
    } catch (e) {
      console.error("JSON parse error:", cleaned);
      return NextResponse.json(
        { error: "AI 응답을 해석하는 데 실패했습니다." },
        { status: 502 }
      );
    }

    const ringKey: RingKey = RINGS[parsed.recommended_ring]
      ? parsed.recommended_ring
      : "haze";

    return NextResponse.json({
      elementSummary: parsed.element_summary,
      keywords: parsed.keywords,
      story: parsed.story,
      ring: RINGS[ringKey],
      ringReason: parsed.ring_reason,
      elementScores: parsed.element_scores,
    });
  } catch (err) {
    console.error("Analyze route error:", err);
    return NextResponse.json(
      { error: "알 수 없는 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
