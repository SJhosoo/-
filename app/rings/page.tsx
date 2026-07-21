import { RINGS } from "@/lib/data";

export const metadata = {
  title: "반지 라인업 | 아뜰리에호수",
};

export default function RingsPage() {
  const rings = Object.values(RINGS);

  return (
    <main className="min-h-screen px-6 py-12 md:py-16">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs tracking-[0.3em] text-[var(--muted)] mb-3 text-center">
          ATELIER HOSOO
        </p>
        <h1 className="font-serifkr text-2xl md:text-3xl text-center mb-2">
          반지 라인업
        </h1>
        <p className="text-sm text-[var(--muted)] text-center mb-12">
          총 {rings.length}종
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {rings.map((ring) => (
            <div
              key={ring.key}
              className="rounded-xl overflow-hidden border border-[var(--panel-line)] bg-[var(--panel)]"
            >
              <div className="relative w-full aspect-square">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={ring.imageSrc}
                  alt={`아뜰리에호수 ${ring.name} 반지`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h2 className="font-serifkr text-lg mb-1">
                  {ring.name}{" "}
                  <span className="text-[var(--muted)] text-sm">
                    | {ring.nameEn}
                  </span>
                </h2>
                <p className="text-sm leading-relaxed text-[var(--muted)] mt-2">
                  {ring.description}
                </p>
                
                  href={ring.productUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring inline-block text-xs text-[var(--muted)] hover:text-[var(--moon)] transition-colors underline underline-offset-4 mt-4"
                >
                  상품 페이지에서 보기 →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
