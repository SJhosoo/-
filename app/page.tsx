"use client";

import { useState } from "react";
import { BRANCHES, STYLE_OPTIONS, RingProduct } from "@/lib/data";
 
type Calendar = "solar" | "lunar";

interface FormState {
  name1: string;
  name2: string;
  birth1: { date: string; time: string; calendar: Calendar };
  birth2: { date: string; time: string; calendar: Calendar };
  branchKey: string;
  styles: string[];
}

interface AnalyzeResult {
  elementSummary: string;
  keywords: string[];
  story: string;
  ring: RingProduct;
  ringReason: string;
  elementScores: Record<string, number>;
}

const TOTAL_STEPS = 4;

const ELEMENT_META: Record<string, { label: string; varName: string }> = {
  wood: { label: "목(木)", varName: "--wood" },
  fire: { label: "화(火)", varName: "--fire" },
  earth: { label: "토(土)", varName: "--earth" },
  metal: { label: "금(金)", varName: "--metal" },
  water: { label: "수(水)", varName: "--water" },
};

export default function Home() {
  const [step, setStep] = useState(0); // 0 = intro, 1..4 = questions, 5 = loading, 6 = result
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState<FormState>({
    name1: "",
    name2: "",
    birth1: { date: "", time: "", calendar: "solar" },
    birth2: { date: "", time: "", calendar: "solar" },
    branchKey: "",
    styles: [],
  });
  const [result, setResult] = useState<AnalyzeResult | null>(null);

  const canProceed = (): boolean => {
    switch (step) {
      case 1:
        return form.name1.trim().length > 0 && form.name2.trim().length > 0;
      case 2:
        return (
          form.birth1.date.length > 0 &&
          form.birth1.time.length > 0 &&
          form.birth2.date.length > 0 &&
          form.birth2.time.length > 0
        );
      case 3:
        return form.branchKey.length > 0;
      case 4:
        return form.styles.length > 0;
      default:
        return true;
    }
  };

  const toggleStyle = (style: string) => {
    setForm((prev) => ({
      ...prev,
      styles: prev.styles.includes(style)
        ? prev.styles.filter((s) => s !== style)
        : [...prev.styles, style],
    }));
  };

  const submit = async () => {
    setStep(5);
    setError(null);
    const branch = BRANCHES.find((b) => b.key === form.branchKey);
    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name1: form.name1,
          name2: form.name2,
          birth1: form.birth1,
          birth2: form.birth2,
          branchName: branch?.name ?? "",
          styles: form.styles,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error ?? "분석에 실패했습니다.");
      }
      setResult(data);
      setStep(6);
    } catch (e) {
      setError(e instanceof Error ? e.message : "알 수 없는 오류가 발생했습니다.");
      setStep(4);
    }
  };

  const selectedBranch = BRANCHES.find((b) => b.key === form.branchKey);

  return (
    <main className="min-h-screen flex flex-col items-center px-6 py-12 md:py-20">
      {step >= 1 && step <= 4 && (
        <div className="w-full max-w-md mb-10">
          <div className="h-px w-full bg-[var(--panel-line)] relative overflow-hidden rounded-full">
            <div
              className="h-px absolute left-0 top-0 bg-[var(--silver)] transition-all duration-500 ease-out"
              style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
            />
          </div>
        </div>
      )}

      {step === 0 && <IntroScreen onStart={() => setStep(1)} />}

      {step === 1 && (
        <QuestionCard title="두 분의 이름을 알려주세요" sub="애칭도 좋아요.">
          <div className="flex flex-col gap-4">
            <TextField
              label="첫 번째 분"
              value={form.name1}
              onChange={(v) => setForm((p) => ({ ...p, name1: v }))}
              placeholder=""
            />
            <TextField
              label="두 번째 분"
              value={form.name2}
              onChange={(v) => setForm((p) => ({ ...p, name2: v }))}
              placeholder=""
            />
          </div>
          <NavButtons onNext={() => setStep(2)} disabled={!canProceed()} />
        </QuestionCard>
      )}

      {step === 2 && (
        <QuestionCard
          title="생년월일시를 알려주세요"
          sub="정확한 시간을 모르시면 대략적인 시간대도 괜찮아요."
        >
          <div className="flex flex-col gap-8">
            <BirthField
              label={form.name1 || "첫 번째 분"}
              value={form.birth1}
              onChange={(v) => setForm((p) => ({ ...p, birth1: v }))}
            />
            <BirthField
              label={form.name2 || "두 번째 분"}
              value={form.birth2}
              onChange={(v) => setForm((p) => ({ ...p, birth2: v }))}
            />
          </div>
          <NavButtons
            onBack={() => setStep(1)}
            onNext={() => setStep(3)}
            disabled={!canProceed()}
          />
        </QuestionCard>
      )}

      {step === 3 && (
        <QuestionCard title="방문하고 싶은 지점을 선택해주세요">
          <div
            className="flex flex-col gap-3 overflow-y-auto pr-1"
            style={{ maxHeight: "360px" }}
          >
            {BRANCHES.map((b) => (
              <button
                key={b.key}
                onClick={() => setForm((p) => ({ ...p, branchKey: b.key }))}
                className={`focus-ring text-left px-5 py-4 rounded-lg border transition-colors ${
                  form.branchKey === b.key
                    ? "border-[var(--silver)] bg-[var(--panel)]"
                    : "border-[var(--panel-line)] hover:border-[var(--muted)]"
                }`}
              >
                <span className="font-serifkr text-lg">{b.name}</span>
              </button>
            ))}
          </div>
          <NavButtons
            onBack={() => setStep(2)}
            onNext={() => setStep(4)}
            disabled={!canProceed()}
          />
        </QuestionCard>
      )}

      {step === 4 && (
        <QuestionCard title="선호하는 스타일을 골라주세요" sub="중복 선택 가능해요.">
          <div className="flex flex-wrap gap-3">
            {STYLE_OPTIONS.map((style) => (
              <button
                key={style}
                onClick={() => toggleStyle(style)}
                className={`focus-ring px-5 py-3 rounded-full border text-sm transition-colors ${
                  form.styles.includes(style)
                    ? "border-[var(--silver)] bg-[var(--panel)]"
                    : "border-[var(--panel-line)] hover:border-[var(--muted)]"
                }`}
              >
                {style}
              </button>
            ))}
          </div>
          {error && <p className="mt-4 text-sm text-[var(--fire)]">{error}</p>}
          <NavButtons
            onBack={() => setStep(3)}
            onNext={submit}
            disabled={!canProceed()}
            nextLabel="궁합 분석하기"
          />
        </QuestionCard>
      )}

      {step === 5 && <LoadingScreen />}

      {step === 6 && result && (
        <ResultScreen
          name1={form.name1}
          name2={form.name2}
          result={result}
          branchName={selectedBranch?.name ?? ""}
          reservationUrl={selectedBranch?.reservationUrl ?? "#"}
        />
      )}
    </main>
  );
}

function IntroScreen({ onStart }: { onStart: () => void }) {
  return (
    <div className="max-w-lg text-center animate-fadeUp">
      <p className="text-xs tracking-[0.3em] text-[var(--muted)] mb-6">
        ATELIER HOSU
      </p>
      <h1 className="font-serifkr text-3xl md:text-4xl leading-relaxed mb-6">
        새벽 호수처럼,
        <br />
        두 사람의 기운을 읽습니다
      </h1>
      <p className="text-[var(--muted)] text-sm leading-relaxed mb-10">
        생년월일시로 오행 궁합을 살펴보고,
        <br />
        두 분에게 어울리는 커플링을 찾아드려요.
      </p>
      <button
        onClick={onStart}
        className="focus-ring px-8 py-3 rounded-full bg-[var(--silver)] text-[var(--ink)] font-medium hover:opacity-90 transition-opacity"
      >
        궁합 보러가기
      </button>
    </div>
  );
}

function QuestionCard({
  title,
  sub,
  children,
}: {
  title: string;
  sub?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="w-full max-w-md animate-fadeUp">
      <h2 className="font-serifkr text-2xl mb-2">{title}</h2>
      {sub ? (
        <p className="text-sm text-[var(--muted)] mb-8">{sub}</p>
      ) : (
        <div className="mb-8" />
      )}
      {children}
    </div>
  );
}

function TextField({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-xs text-[var(--muted)]">{label}</span>
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="focus-ring bg-[var(--panel)] border border-[var(--panel-line)] rounded-lg px-4 py-3 text-[var(--moon)] placeholder:text-[var(--muted)]"
      />
    </label>
  );
}

function BirthField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: { date: string; time: string; calendar: Calendar };
  onChange: (v: { date: string; time: string; calendar: Calendar }) => void;
}) {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-sm font-serifkr">{label}</span>
      <div className="flex gap-3">
        <input
          type="date"
          value={value.date}
          onChange={(e) => onChange({ ...value, date: e.target.value })}
          className="focus-ring flex-1 bg-[var(--panel)] border border-[var(--panel-line)] rounded-lg px-3 py-3 text-[var(--moon)]"
        />
        <input
          type="time"
          value={value.time}
          onChange={(e) => onChange({ ...value, time: e.target.value })}
          className="focus-ring w-28 bg-[var(--panel)] border border-[var(--panel-line)] rounded-lg px-3 py-3 text-[var(--moon)]"
        />
      </div>
      <div className="flex gap-2">
        {(["solar", "lunar"] as Calendar[]).map((cal) => (
          <button
            key={cal}
            onClick={() => onChange({ ...value, calendar: cal })}
            className={`focus-ring px-4 py-1.5 rounded-full text-xs border transition-colors ${
              value.calendar === cal
                ? "border-[var(--silver)] text-[var(--moon)]"
                : "border-[var(--panel-line)] text-[var(--muted)]"
            }`}
          >
            {cal === "solar" ? "양력" : "음력"}
          </button>
        ))}
      </div>
    </div>
  );
}

function NavButtons({
  onBack,
  onNext,
  disabled,
  nextLabel = "다음",
}: {
  onBack?: () => void;
  onNext: () => void;
  disabled?: boolean;
  nextLabel?: string;
}) {
  return (
    <div className="flex items-center gap-3 mt-10">
      {onBack && (
        <button
          onClick={onBack}
          className="focus-ring px-5 py-3 rounded-full text-sm text-[var(--muted)] hover:text-[var(--moon)] transition-colors"
        >
          이전
        </button>
      )}
      <button
        onClick={onNext}
        disabled={disabled}
        className="focus-ring flex-1 px-5 py-3 rounded-full bg-[var(--silver)] text-[var(--ink)] font-medium disabled:opacity-30 disabled:cursor-not-allowed hover:opacity-90 transition-opacity"
      >
        {nextLabel}
      </button>
    </div>
  );
}

function LoadingScreen() {
  return (
    <div className="flex flex-col items-center gap-4 mt-24 animate-fadeUp">
      <div className="w-10 h-10 rounded-full border-2 border-[var(--panel-line)] border-t-[var(--silver)] animate-spin" />
      <p className="text-sm text-[var(--muted)] animate-shimmer">
        두 분의 오행을 읽어들이는 중이에요
      </p>
    </div>
  );
}

function ResultScreen({
  name1,
  name2,
  result,
  branchName,
  reservationUrl,
}: {
  name1: string;
  name2: string;
  result: AnalyzeResult;
  branchName: string;
  reservationUrl: string;
}) {
  return (
    <div className="w-full max-w-lg animate-fadeUp">
      <p className="text-xs tracking-[0.3em] text-[var(--muted)] mb-3 text-center">
        운명적 궁합 분석 결과
      </p>
      <h2 className="font-serifkr text-2xl md:text-3xl text-center mb-10">
        {name1} & {name2}
      </h2>

      <section className="mb-10">
        <p className="text-sm text-[var(--silver)] mb-2">
          {result.elementSummary}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {result.keywords.map((k) => (
            <span
              key={k}
              className="text-xs px-3 py-1 rounded-full border border-[var(--panel-line)] text-[var(--muted)]"
            >
              #{k}
            </span>
          ))}
        </div>
        <p className="text-sm leading-relaxed text-[var(--moon)]">
          {result.story}
        </p>
      </section>

      <section className="mb-10 border-t border-b border-[var(--panel-line)] py-6">
        <p className="text-xs text-[var(--muted)] mb-4">오행 밸런스</p>
        <div className="flex flex-col gap-3">
          {Object.entries(result.elementScores ?? {}).map(([key, score]) => {
            const meta = ELEMENT_META[key];
            if (!meta) return null;
            return (
              <div key={key} className="flex items-center gap-3">
                <span className="text-xs w-10 text-[var(--muted)]">
                  {meta.label}
                </span>
                <div className="flex-1 h-1.5 rounded-full bg-[var(--panel)] overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-700 ease-out"
                    style={{
                      width: `${score}%`,
                      backgroundColor: `var(${meta.varName})`,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mb-10">
        <p className="text-xs tracking-[0.2em] text-[var(--muted)] mb-4 text-center">
          추천 커플링
        </p>
        <div className="rounded-xl overflow-hidden border border-[var(--panel-line)] bg-[var(--panel)]">
          <div className="relative w-full aspect-square">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={result.ring.imageSrc}
              alt={`아뜰리에호수 ${result.ring.name} 반지`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="font-serifkr text-xl mb-1">
              {result.ring.name}{" "}
              <span className="text-[var(--muted)] text-sm">
                | {result.ring.nameEn}
              </span>
            </h3>
            <p className="text-sm leading-relaxed text-[var(--moon)] mt-3 mb-4">
              {result.ringReason}
            </p>
            <a
              href={result.ring.productUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-block text-xs text-[var(--muted)] hover:text-[var(--moon)] transition-colors underline underline-offset-4"
            >
              상품 페이지에서 자세히 보기 →
            </a>
          </div>
        </div>
      </section>

      <section className="text-center">
        <p className="text-sm text-[var(--muted)] mb-1">
          {branchName}에서 만드는
        </p>
        <p className="font-serifkr text-lg mb-6">우리만의 반짝임</p>
        <a
          href={reservationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring inline-block w-full px-6 py-4 rounded-full bg-[var(--silver)] text-[var(--ink)] font-medium hover:opacity-90 transition-opacity"
        >
          {branchName} 예약하러 가기
        </a>
      </section>
    </div>
  );
}
