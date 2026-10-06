# BCS

《베터 콜 사울》 여섯 시즌 63편을 한 편씩 풀어 둔 읽을거리. 각 회차마다 줄거리,
제목에 숨은 의미, 명대사, 방영 당시와 이후의 반응, 비하인드, 그리고 팬 커뮤니티에서
반복되는 질문을 정리하고, 흑백 연필 드로잉 삽화를 함께 싣는다.

공개된 사이트: <https://jhljhljhl.github.io/BCS/>

## 실행

```bash
npm install
```

```bash
npm run dev
```

http://localhost:3220 에서 열린다.

| 명령 | 하는 일 |
| --- | --- |
| `npm run dev` | 개발 서버 (포트 3220) |
| `npm run build` | 프로덕션 빌드 |
| `npm start` | 빌드 결과 서빙 |
| `npm run typecheck` | 타입 검사만 |
| `npm run build:single` | 정적 익스포트 후 `dist/BCS.html` 한 파일로 합침 |
| `npm run assets` | `ASSETS.md` 재생성 |

## 배포

리포지토리 루트의 `index.html` 이 곧 사이트다. `.github/workflows/pages.yml` 이
`_site/` 를 만들어 그 파일만 GitHub Pages 아티팩트로 올린다. 소스 파일은 배포에
포함되지 않는다.

내용을 고친 뒤 사이트를 갱신하려면:

```bash
npm run build:single && cp dist/BCS.html index.html
```

그리고 `index.html` 을 커밋해 `main` 에 푸시하면 워크플로가 배포한다.

## 스택

Next.js 14 (App Router) · TypeScript · Tailwind CSS 3 · shadcn/ui · Radix UI ·
Framer Motion · Lucide React. 웹폰트를 내려받지 않고 OS 글꼴 스택만 쓰므로
오프라인에서도 그대로 빌드된다. 화면은 다크 테마 하나뿐이다 — 사울 굿맨을
떠올리는 짙은 자줏빛 밤과 금빛 포인트.

## 구조

```
app/
  layout.tsx          루트 레이아웃 · 공용 SVG defs
  page.tsx            AppShell 하나만 렌더
  icon.svg            [Sa]/[Au] 파비콘 (법률 모노그램 + 금)
  globals.css         디자인 토큰, 종이 질감, 연필 음영 상호작용
components/
  AppShell.tsx        2단 컨테이너 · 해시 라우팅 · 모바일 드로어
  Sidebar.tsx         시즌 아코디언 + 클립보드 푸터
  Hero.tsx            기본 화면 (포스터만)
  EpisodeDetail.tsx   회차 상세 여섯 섹션
  BrandIcon.tsx       앱 내 [Sa]/[Au] 마크
  sketch/
    SketchDefs.tsx    연필 필터, 종이 그레인, 4단계 명암 패턴 (한 번만 마운트)
    motifs.tsx        도판 원본 36종 (400×300)
    Sketch.tsx        도판 렌더러 (흑연 · 밑그림 · 확정선 3패스)
    HeroPoster.tsx    홈 포스터 (480×660)
  ui/                 shadcn 컴포넌트
data/
  types.ts            Episode / Season 타입
  season1–6.ts        본문 데이터
  episodes.ts         집계 · 조회 헬퍼
scripts/
  asset-audit.mjs         ASSETS.md 재생성
  bundle-single-file.mjs  정적 익스포트를 한 파일로 인라인
  serve-dist.mjs          dist/BCS.html 을 로컬에서 확인용으로 서빙
```

## 회차 본문의 구성

`data/season*.ts` 의 `Episode` 객체 하나가 화면 한 개다.

| 필드 | 화면 | 내용 |
| --- | --- | --- |
| `plot` | 01 줄거리 | 문단 배열. 도판이 문단 사이에 자동으로 끼워진다 |
| `titleMeaning` | 02 제목의 의미 | 제목의 출처와 층위 |
| `quotes` | 03 명대사 | 영어 원문 · 한국어 · 화자 · 상황 |
| `reception` | 04 방영 당시와 그 후 | 시청자 수, 평단 반응, 회고 평가, 수상 |
| `trivia` | 05 비하인드 | 출처 라벨과 본문 쌍 |
| `redditQuestions` | 06 자주 나오는 질문 | 해당 회차까지의 내용만으로 답한다 |

`quotes` 와 `reception`, `redditQuestions` 는 선택 항목이라 없으면 섹션이
통째로 빠진다.

### 출처에 관하여

방영일·각본·연출·회차 제목은 Wikipedia 의 《베터 콜 사울》 회차 목록에서
확인해 적었다. 작품 특성상 스포일러를 피하기 위해, `plot` 과 `redditQuestions`
의 답은 **그 회차까지 방송된 내용만으로** 쓴다. 사울의 이야기는 2002년 전후의
과거와 《브레이킹 배드》 이후의 '진' 시간선이 섞이므로, 뒤 시즌 사건이 앞 회차
해설에 새어 들어가지 않도록 주의했다.

`reception`(04 방영 당시와 그 후)은 **개별 회차 단위의 평점·순위 수치를 이 작업
환경에서 매체별로 일일이 대조하지는 못했다.** 그래서 이 항목은 널리 알려진 비평적
합의(전반적 호평, 특정 회차의 평가)와, 웹에서 직접 확인한 두 가지 사실에 한정해
보수적으로 적었다 — ① 첫 방송(〈Uno〉)의 시청자 약 690만 명, 당시 '케이블 역사상
최대 규모 시리즈 데뷔', ② 통산 에미상 후보 53회·무관이라는 '수상 없는 최다 후보'
기록. 그 밖의 구체적 수치는 적지 않았고, 아래 "확인하지 못한 사실"에 남긴다.
(BBB 와 달리 회차별 Wikipedia Reception 섹션을 한 편씩 대조하지는 않았다.)

`redditQuestions` 라는 필드 이름과 달리, 내용은 reddit.com 에서 직접 가져온 것이
아니다. 팬 커뮤니티에서 반복되는 질문을 정리한 것이고, `trivia` 의 출처 라벨도
`제작 배경`, `팬덤 논의`, `팬 커뮤니티`, `IMDb Trivia`, `수상 기록` 처럼 실제
확인 경로에 맞춰 적었다.

## 삽화 규칙

삽화는 예외 없이 한 가지 규칙만 따른다. **종이 질감 위 흑백 연필 선.** 색도,
사진도, 스틸컷도, 로고 이미지도 쓰지 않는다. 실제 프레임을 따라 그리지 않고,
장면의 구도와 소품 배치를 근거로 선화를 새로 그린다. 색 강조(자줏빛·금빛)는 오직
UI 쪽에만 쓰고, 삽화는 흑백 연필 규칙을 지킨다.

- 모든 선은 `currentColor` 로 그린다.
- 음영은 `SketchDefs` 의 4단계 명암 패턴(`bcs-t1`~`bcs-t4`)과 파쇄 톤(`bcs-grit`)으로만 준다.
- `Sketch` 가 같은 도형을 세 번 그린다. 번진 흑연, 어긋난 밑그림, 확정선.
- 손그림 느낌은 `feTurbulence` + `feDisplacementMap` 이 만든다. 글자가 들어간
  도판은 흔들림이 약한 `bcs-pencil-fine` 을 쓴다.
- 캔버스는 400×300 고정. 포스터만 480×660.

삽화를 추가하려면 `components/sketch/motifs.tsx` 의 `MotifId` 에 id를 더하고
`MOTIFS` 에 항목을 쓴 뒤, 회차 데이터의 `sketches` 에서 참조한다. 그다음
`npm run assets` 를 돌리면 [ASSETS.md](ASSETS.md) 가 다시 생성되고, 정의만 하고
안 쓴 도판이나 참조만 하고 안 그린 도판이 맨 아래 "감사 결과"에 뜬다.

## 내비게이션

선택한 회차는 URL 해시(`#/s06e13`)에 남으므로 링크로 공유하거나 뒤로 가기로
돌아갈 수 있다. 사이드바 푸터의 메일 주소를 누르면 클립보드에 복사된다.

## 확인하지 못한 사실

작업 환경에서 끝까지 확정하지 못한 항목. 공개 전에 한 번 더 대조할 것.

- **회차별 평점·순위**: IGN·《벌처》·《더 링어》 등의 개별 회차 점수와 순위는
  대조하지 않았다. `reception` 은 전반적 합의와 웹 확인 사실 두 건에 한정했다.
- **회차별 시청자 수**: 첫 방송(〈Uno〉, 약 690만) 외의 개별 회차 시청률은 적지
  않았다.
- **각본·연출 공동 크레딧의 표기 순서**: Wikipedia 회차 목록을 따랐으나, 공동
  집필의 정확한 순서·'스토리/각본' 구분은 공식 크레딧으로 재확인이 필요하다.
- **수상 기록 세부**: 통산 에미 후보 53회·무관(2위 《뉴하트》 25회)은 웹에서
  확인했으나, 연도별·부문별 내역은 적지 않았다.
- **대사 인용**: 명대사는 기억·요약에 기반한 짧은 인용이며, 일부는 어조를 살린
  해석적 각색이다(특히 S05E07 는 원작 대사를 비튼 것임을 본문에 명시). 정확한
  대본 표기는 공식 자막으로 확인할 것.

---

LJH2026 · honeymath.gbe@gmail.com

<!-- TODO: 소유자 확인 — OWNER(LJH2026)와 메일 주소는 BBB 를 그대로 따랐다. BCS 공개 전 실제 소유자 표기가 맞는지 확인할 것. -->
