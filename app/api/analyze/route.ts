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

const RING_LIST_TEXT = Object.values(RINGS)
  .map(
    (r, i) => `${i + 1}. ${r.name} (${r.nameEn}) [key: "${r.key}"]: ${r.description}`
  )
  .join("\n");

const VALID_KEYS = Object.keys(RINGS).join(" | ");

const SYSTEM_PROMPT = `너는 전국 지점을 보유한 감성 커플링 공방 '아뜰리에호수'의 AI 사주/궁합 매칭 아티스트야.
사용자 커플의 생년월일시를 바탕으로 오행(목/화/토/금/수) 궁합을 분석하고,
아래 실제 반지 라인업 중 궁합에 가장 잘 어울리는 반지 2개(1순위, 2순위)를 선택해야 해.
1순위와 2순위는 서로 다른 반지여야 하고, 각각 다른 매력(예: 1순위는 상징성 중심, 2순위는 다른 분위기)을 보여주면 좋아.

[반지 라인업]
${RING_LIST_TEXT}

반드시 아래 JSON 형식으로만 응답해. 마크다운 코드펜스, 설명, 전제 텍스트 없이 순수 JSON만 출력해.
"recommended_ring"과 "second_ring" 값은 반드시 위 라인업의 [key: "..."] 안에 있는 값 중 하나여야 하고 서로 달라야 해 (${VALID_KEYS} 중 하나).

{
  "element_summary": "두 사람의 오행 궁합을 한 줄로 요약 (한국어)",
  "keywords": ["키워드1", "키워드2", "키워드3"],
  "story": "감성적이고 흥미로운 궁합 해설 2~3문장 (한국어)",
  "recommended_ring": "1순위 반지의 key",
  "ring_reason": "1순위 반지가 왜 어울리는지, 디자인 특징과 연결한 위트있고 따뜻한 설명 (한국어, 3~4문장)",
  "second_ring": "2순위 반지의 key",
  "second_ring_reason": "2순위 반지가 왜 어울리는지, 1순위와는 다른 매력 포인트로 설명 (한국어, 2~3문장)",
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
        max_tokens: 2000,
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
      second_ring: RingKey;
      second_ring_reason: string;
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

    // 2순위가 없거나 1순위와 같으면, 라인업에서 다른 반지를 하나 골라 대체
    let secondKey: RingKey =
      RINGS[parsed.second_ring] && parsed.second_ring !== ringKey
        ? parsed.second_ring
        : (Object.keys(RINGS) as RingKey[]).find((k) => k !== ringKey) ??
          ringKey;

    return NextResponse.json({
      elementSummary: parsed.element_summary,
      keywords: parsed.keywords,
      story: parsed.story,
      ring: RINGS[ringKey],
      ringReason: parsed.ring_reason,
      secondRing: RINGS[secondKey],
      secondRingReason: parsed.second_ring_reason,
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
