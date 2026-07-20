# 아뜰리에호수 궁합 커플링 매칭 웹앱

생년월일시 기반 오행 궁합 분석 + 실제 커플링 라인업 추천 + 지점 예약 연결까지,
`mumum-tarot-v4.vercel.app` 같은 인터랙티브 운세 웹앱 구조를 그대로 따라 만든
**Next.js 14 (App Router) + Tailwind CSS + Claude API** 프로젝트입니다.

## 1. 로컬에서 실행하기

```bash
# 압축 해제 후 폴더로 이동
cd atelier-hosu-couple

# 의존성 설치
npm install

# 환경변수 파일 만들기
cp .env.local.example .env.local
```

`.env.local` 파일을 열어 실제 Anthropic API 키를 넣어주세요.

```
ANTHROPIC_API_KEY=sk-ant-...
```

API 키는 https://console.anthropic.com 에서 발급받을 수 있습니다 (회원가입 → API Keys → Create Key).

```bash
npm run dev
```

브라우저에서 http://localhost:3000 접속하면 바로 확인 가능합니다.

## 2. 실제 배포하기 (Vercel)

가장 간단한 방법은 GitHub + Vercel 연동입니다.

### 방법 A — GitHub 연동 (추천)

1. 이 폴더를 GitHub 새 저장소에 업로드
   ```bash
   git init
   git add .
   git commit -m "init"
   git remote add origin https://github.com/{내계정}/atelier-hosu-couple.git
   git push -u origin main
   ```
2. https://vercel.com 접속 → 로그인 → "Add New Project"
3. 방금 만든 GitHub 저장소 선택 → Import
4. **Environment Variables** 항목에 `ANTHROPIC_API_KEY` 추가 (Production/Preview/Development 모두 체크)
5. Deploy 클릭 → 몇 분 후 `https://atelier-hosu-couple.vercel.app` 같은 주소로 실제 배포 완료

### 방법 B — Vercel CLI로 바로 배포

```bash
npm install -g vercel
vercel login
vercel
# 질문에 답하면서 진행 → 프로젝트 이름, 스코프 등 설정
vercel env add ANTHROPIC_API_KEY
# 값 입력 후 프로덕션에도 반영
vercel --prod
```

## 3. 커스터마이징 포인트

| 항목 | 위치 |
|---|---|
| 반지 라인업 (이름/설명/이미지 URL) | `lib/data.ts` → `RINGS` |
| 지점 및 예약 링크 (추가/수정) | `lib/data.ts` → `BRANCHES` |
| 스타일 옵션 (실버/골드 등) | `lib/data.ts` → `STYLE_OPTIONS` |
| AI 프롬프트/분석 로직 | `app/api/analyze/route.ts` → `SYSTEM_PROMPT` |
| 디자인 색상/폰트 | `app/globals.css` (CSS 변수), `tailwind.config.ts` |
| 질문 단계 순서/UI | `app/page.tsx` |

## 4. 실제 상품 사진 넣기

지금은 `public/images/node.svg`, `segment.svg`, `haze.svg` 자리에 브랜드 톤의 플레이스홀더 일러스트를 넣어둬서,
**바로 실행해도 결과 화면에 이미지가 정상적으로 뜹니다.**

실제 상품 사진으로 교체하려면:

1. 상품 사진 파일(jpg/png, 정사각형 비율 권장)을 준비
2. `public/images/` 폴더에 넣기 (예: `node.jpg`, `segment.jpg`, `haze.jpg`)
3. `lib/data.ts`에서 해당 반지의 `imageSrc` 값만 확장자에 맞게 수정

```ts
// lib/data.ts
node: {
  ...
  imageSrc: "/images/node.jpg", // .svg → .jpg로 교체
  ...
}
```

그게 끝입니다. 코드 수정 없이 파일 교체 + 경로 한 줄만 바꾸면 실제 사진이 웹앱에 바로 뜹니다.

`productUrl`은 아뜰리에호수 실제 상품 상세페이지 링크로, 결과 화면 이미지 아래 "상품 페이지에서 자세히 보기 →" 버튼에 연결되어 있습니다.

## 5. 구조 한눈에 보기

```
atelier-hosu-couple/
├─ app/
│  ├─ page.tsx              # 단계별 질문 + 결과 화면 (클라이언트)
│  ├─ layout.tsx             # 폰트/메타데이터
│  ├─ globals.css            # 브랜드 컬러 토큰 (새벽 호수 팔레트)
│  └─ api/analyze/route.ts   # Claude API 호출 → 궁합 분석 + 반지 추천
├─ lib/data.ts                # 반지 라인업 · 지점 · 스타일 옵션 데이터
├─ public/images/              # 반지 상품 사진 (지금은 플레이스홀더 SVG)
│  ├─ node.svg
│  ├─ segment.svg
│  └─ haze.svg
├─ package.json
└─ .env.local.example
```

## 6. 참고

- Claude API 문서: https://docs.claude.com
- Vercel 배포 문서: https://vercel.com/docs
