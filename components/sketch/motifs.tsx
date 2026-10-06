import type { ReactNode } from "react";

/**
 * The motif library.
 *
 * Each entry is one illustration, drawn on a shared 400×300 canvas as pure
 * geometry: contour, interior detail, and tone laid in with the hatch patterns
 * from SketchDefs (`bcs-t1` lightest → `bcs-t4` darkest, `bcs-grit` for broken
 * surfaces). No colour, no stroke settings, no filters — <Sketch /> supplies
 * all of that, so every plate is rendered the same way and stays on the same
 * pencil-on-paper identity even though the surrounding UI runs on gold.
 *
 * The subjects are drawn from the staging of the scenes rather than traced from
 * frames: observed composition, original line work. No still, no logo image.
 *
 * Adding an illustration means adding one entry here and referencing its id
 * from data/season*.ts. `npm run assets` then checks nothing is orphaned.
 */

export type MotifId =
  | "suzuki-esteem"
  | "cocobolo-desk"
  | "cucumber-water"
  | "nail-salon"
  | "worlds-best-mug"
  | "inflatable-liberty"
  | "matchbook"
  | "space-blanket"
  | "gas-lantern"
  | "newspaper-stack"
  | "switch-tape"
  | "courthouse"
  | "bus-bench-ad"
  | "billboard"
  | "bingo-cage"
  | "parking-booth"
  | "pimento-sandwich"
  | "hummel-figurine"
  | "zafiro-anejo"
  | "legal-pad"
  | "parking-garage"
  | "pollos-sign"
  | "tio-bell"
  | "salamanca-twins"
  | "travel-wire"
  | "well-ladder"
  | "superlab-dig"
  | "dam-schematic"
  | "desert-walk"
  | "bullet-canteen"
  | "pill-capsule"
  | "pay-phone"
  | "cinnabon"
  | "gene-glasses"
  | "vacuum-shop"
  | "desert-horizon";

interface Motif {
  /** Korean caption shown under the drawing. */
  label: string;
  node: ReactNode;
}

/* ── shared helpers ───────────────────────────────────────────────────── */

/** Distant mesa-and-scrub skyline; the show's default backdrop. */
const mesaLine = (y: number) => (
  <>
    <path
      d={`M0 ${y} L34 ${y - 12} L58 ${y - 13} L74 ${y - 4} L112 ${y - 22} L150 ${y - 24} L168 ${y - 10} L214 ${y - 8} L246 ${y - 26} L286 ${y - 27} L306 ${y - 12} L340 ${y - 16} L400 ${y - 6}`}
      opacity="0.55"
    />
    <path
      d={`M0 ${y} L34 ${y - 12} L58 ${y - 13} L74 ${y - 4} L112 ${y - 22} L150 ${y - 24} L168 ${y - 10} L214 ${y - 8} L246 ${y - 26} L286 ${y - 27} L306 ${y - 12} L340 ${y - 16} L400 ${y - 6} V${y + 4} H0 Z`}
      fill="url(#bcs-t1)"
      stroke="none"
    />
  </>
);

/** Flat desert floor with a little broken tone on it. */
const groundPlane = (y: number) => (
  <>
    <path d={`M0 ${y} C 96 ${y - 4}, 208 ${y + 4}, 400 ${y - 2}`} />
    <path
      d={`M0 ${y} C 96 ${y - 4}, 208 ${y + 4}, 400 ${y - 2} V300 H0 Z`}
      fill="url(#bcs-grit)"
      stroke="none"
    />
    <path d={`M26 ${y + 18} h34 m22 10 h26 m48 -6 h40 m36 14 h30 m40 -18 h28`} opacity="0.3" />
  </>
);

const saguaro = (x: number, baseY: number, s = 1) => (
  <g transform={`translate(${x} ${baseY}) scale(${s})`}>
    <path d="M-7 0 V-52 a7 7 0 0 1 14 0 V0 Z" />
    <path d="M-7 -20 h-9 a7 7 0 0 0 -7 7 v12 a7 7 0 0 0 14 0 v-6 h2" />
    <path d="M7 -30 h8 a7 7 0 0 1 7 7 v18 a7 7 0 0 1 -14 0 v-10 h-1" />
    <path d="M-3 -46 V-8 M2 -44 V-10" opacity="0.4" />
    <path d="M-9 0 h18" />
  </g>
);

/* ── the library ──────────────────────────────────────────────────────── */

export const MOTIFS: Record<MotifId, Motif> = {
  "suzuki-esteem": {
    label: "지미의 낡은 스즈키 에스팀",
    node: (
      <g>
        {mesaLine(150)}
        {groundPlane(236)}
        {/* body, three-quarter */}
        <path d="M44 214 c -4 -20, 2 -40, 18 -48 l34 -34 c 10 -8, 26 -12, 44 -12 h120 c 30 0, 54 8, 72 26 l30 24 c 16 4, 24 18, 24 40 v8 H44 Z" />
        <path d="M44 214 c -4 -20, 2 -40, 18 -48 l34 -34 c 10 -8, 26 -12, 44 -12 h120 c 30 0, 54 8, 72 26 l30 24 c 16 4, 24 18, 24 40 v8 H44 Z" fill="url(#bcs-t1)" stroke="none" />
        {/* greenhouse */}
        <path d="M104 134 l20 -20 h126 l24 22 v30 H104 Z" />
        <path d="M172 116 v48 M250 136 h-146" opacity="0.5" />
        <path d="M118 140 h48 v22 h-48 Z" fill="url(#bcs-t2)" stroke="none" />
        {/* the mismatched driver door — the Esteem's famous yellow door */}
        <path d="M108 168 h74 v44 h-74 Z" />
        <path d="M108 168 h74 v44 h-74 Z" fill="url(#bcs-t3)" stroke="none" />
        <path d="M168 190 a4 4 0 1 1 0 2 Z" />
        <path d="M112 172 h46" opacity="0.45" />
        {/* far door + dent */}
        <path d="M184 168 h70 v44 h-70 Z" />
        <path d="M214 196 c 10 -6, 18 -4, 22 4" opacity="0.6" />
        {/* bumper + lights */}
        <path d="M44 214 h340" />
        <path d="M352 196 a10 8 0 0 1 20 0 v10 h-20 Z" fill="url(#bcs-t2)" stroke="none" />
        <path d="M352 196 a10 8 0 0 1 20 0 v10 h-20 Z" />
        {/* wheels */}
        <circle cx="120" cy="226" r="26" />
        <circle cx="120" cy="226" r="11" />
        <circle cx="120" cy="226" r="26" fill="url(#bcs-t2x)" stroke="none" opacity="0.5" />
        <circle cx="300" cy="226" r="26" />
        <circle cx="300" cy="226" r="11" />
        <circle cx="300" cy="226" r="26" fill="url(#bcs-t2x)" stroke="none" opacity="0.5" />
        <circle cx="120" cy="226" r="11" fill="hsl(var(--paper))" stroke="currentColor" />
        <circle cx="300" cy="226" r="11" fill="hsl(var(--paper))" stroke="currentColor" />
      </g>
    ),
  },

  "cocobolo-desk": {
    label: "코코볼로 원목 책상",
    node: (
      <g>
        {/* desktop slab in perspective */}
        <path d="M54 136 L300 112 L372 150 L120 182 Z" />
        <path d="M54 136 L300 112 L372 150 L120 182 Z" fill="url(#bcs-t1)" stroke="none" />
        <path d="M54 136 L120 182 v12 L54 150 Z" />
        <path d="M372 150 L372 162 L120 194 v-12 Z" fill="url(#bcs-t2)" stroke="none" />
        <path d="M372 150 L372 162 L120 194 v-12 Z" />
        <path d="M54 136 L54 150 L120 194" />
        {/* wood grain */}
        <path d="M86 140 L306 118 M98 150 L330 128 M120 168 L352 146" opacity="0.4" />
        {/* legs */}
        <path d="M74 150 v96 M112 190 v92 M352 158 v96 M120 194 v88" />
        <path d="M74 246 h40 M330 250 h26" opacity="0.5" />
        {/* a lamp + a small plaque on the desk */}
        <path d="M250 120 v-28 a14 10 0 0 1 28 4" />
        <path d="M278 96 a9 9 0 0 1 -18 0 a9 9 0 0 1 18 0 Z" fill="url(#bcs-t2)" stroke="none" />
        <path d="M150 150 h56 v12 l-56 6 Z" fill="url(#bcs-t2)" stroke="none" />
        <path d="M150 150 h56 v12 l-56 6 Z" />
      </g>
    ),
  },

  "cucumber-water": {
    label: "오이를 띄운 물 디스펜서",
    node: (
      <g>
        {/* stand */}
        <path d="M150 262 h100 l-10 -20 h-80 Z" />
        <path d="M150 262 h100 l-10 -20 h-80 Z" fill="url(#bcs-t2)" stroke="none" />
        <path d="M170 242 v-14 h60 v14" />
        {/* jar */}
        <path d="M156 92 h88 a8 8 0 0 1 8 8 v118 a10 10 0 0 1 -10 10 h-92 a10 10 0 0 1 -10 -10 V100 a8 8 0 0 1 8 -8 Z" />
        <path d="M150 112 h100" opacity="0.5" />
        {/* water + floating cucumber slices */}
        <path d="M150 130 h100 v96 a10 10 0 0 1 -10 10 h-80 a10 10 0 0 1 -10 -10 Z" fill="url(#bcs-grit)" stroke="none" opacity="0.5" />
        <ellipse cx="186" cy="156" rx="13" ry="6" />
        <ellipse cx="186" cy="156" rx="7" ry="3" opacity="0.5" />
        <ellipse cx="220" cy="180" rx="13" ry="6" />
        <ellipse cx="220" cy="180" rx="7" ry="3" opacity="0.5" />
        <ellipse cx="190" cy="204" rx="13" ry="6" />
        <ellipse cx="190" cy="204" rx="7" ry="3" opacity="0.5" />
        {/* lid */}
        <path d="M150 92 h100 l-6 -14 h-88 Z" />
        <path d="M150 92 h100 l-6 -14 h-88 Z" fill="url(#bcs-t1)" stroke="none" />
        <circle cx="200" cy="72" r="6" />
        {/* spigot */}
        <path d="M252 206 h18 v-10 h8 v26 h-8 v-8 h-18 Z" />
        <path d="M278 214 v14" />
        {/* a paper cup */}
        <path d="M284 240 l6 28 h18 l6 -28 Z" />
        <path d="M284 240 h30" opacity="0.5" />
      </g>
    ),
  },

  "nail-salon": {
    label: "네일 살롱 뒤편의 간이 사무실",
    node: (
      <g>
        {/* back wall + curtain divider */}
        <path d="M30 50 h340 v214 H30 Z" opacity="0.3" />
        <path d="M232 50 v214" opacity="0.5" />
        <path d="M232 50 c 8 20, -8 40, 0 60 c 8 20, -8 40, 0 60 c 8 20, -8 40, 0 60 c 6 14, -4 24, 0 34" opacity="0.5" />
        {/* small desk, cramped */}
        <path d="M58 196 h128 v10 H58 Z" />
        <path d="M58 206 h128 v8 L58 214 Z" fill="url(#bcs-t2)" stroke="none" />
        <path d="M66 214 v44 M178 214 v44" />
        <path d="M66 236 h112" opacity="0.4" />
        {/* desk lamp + paperwork + a phone */}
        <path d="M150 196 v-26 a12 9 0 0 1 24 2" />
        <path d="M174 172 a8 8 0 0 1 -16 0 a8 8 0 0 1 16 0 Z" fill="url(#bcs-t2)" stroke="none" />
        <path d="M74 186 h40 v10 l-40 2 Z" fill="url(#bcs-t1)" stroke="none" />
        <path d="M74 186 h40 v10 l-40 2 Z" />
        <path d="M120 190 h26 v6 h-26 Z" />
        {/* nail-polish bottles on a shelf */}
        <path d="M250 120 h120" opacity="0.6" />
        {[262, 288, 314, 340].map((x) => (
          <g key={x}>
            <path d={`M${x} 120 v-18 h12 v18 Z`} />
            <path d={`M${x + 3} 102 v-8 h6 v8`} />
            <path d={`M${x} 110 h12`} opacity="0.4" />
          </g>
        ))}
        {/* folding chair */}
        <path d="M96 258 v-40 l18 -10 v40 Z" opacity="0.6" />
      </g>
    ),
  },

  "worlds-best-mug": {
    label: "'세계 2위 변호사' 머그컵",
    node: (
      <g>
        {/* mug body */}
        <path d="M128 96 h132 v120 a22 30 0 0 1 -22 22 h-88 a22 30 0 0 1 -22 -22 Z" />
        <path d="M128 96 a66 20 0 0 0 132 0 a66 20 0 0 0 -132 0 Z" />
        <ellipse cx="194" cy="96" rx="66" ry="20" />
        <ellipse cx="194" cy="96" rx="52" ry="14" opacity="0.5" />
        {/* handle */}
        <path d="M260 120 c 44 -6, 46 70, 2 78" />
        <path d="M260 134 c 30 -2, 32 50, 2 56" opacity="0.5" />
        {/* lettering */}
        <text x="194" y="150" fontSize="22" textAnchor="middle" fill="currentColor" stroke="none" fontFamily="Georgia, serif">
          WORLD&#39;S
        </text>
        <text x="194" y="176" fontSize="30" textAnchor="middle" fill="currentColor" stroke="none" fontFamily="Georgia, serif">
          2ND BEST
        </text>
        <text x="194" y="198" fontSize="15" textAnchor="middle" fill="currentColor" stroke="none" fontFamily="ui-monospace, monospace">
          LAWYER
        </text>
        <path d="M140 210 h108" opacity="0.4" />
        {/* table shadow */}
        <path d="M110 240 h168" opacity="0.4" />
        <ellipse cx="196" cy="242" rx="86" ry="10" fill="url(#bcs-t1)" stroke="none" />
      </g>
    ),
  },

  "inflatable-liberty": {
    label: "지붕 위의 공기주입식 자유의 여신상",
    node: (
      <g>
        {/* roofline */}
        <path d="M0 250 H400" />
        <path d="M0 250 H400 v12 H0 Z" fill="url(#bcs-t2)" stroke="none" />
        <path d="M40 250 v-10 h26 v10 M300 250 v-14 h30 v14" opacity="0.4" />
        {/* the tube-man figure, wavy */}
        <path d="M176 250 c -8 -30, 6 -46, 2 -74 c -4 -24, 8 -36, 6 -58 c -2 -18, 6 -28, 8 -42" />
        <path d="M224 250 c 8 -28, -4 -46, 0 -72 c 4 -22, -6 -34, -2 -56" />
        <path d="M176 250 c -8 -30, 6 -46, 2 -74 c -4 -24, 8 -36, 6 -58 c -2 -18, 6 -28, 8 -42 l30 0 c 2 14, 12 24, 10 42 c -4 22, 6 34, 2 56 c 4 26, -8 44, 0 72 Z" fill="url(#bcs-t1)" stroke="none" />
        <path d="M184 120 c 8 10, 26 10, 34 0" opacity="0.4" />
        <path d="M182 168 c 10 10, 28 10, 38 0" opacity="0.4" />
        {/* head + crown spikes */}
        <circle cx="200" cy="80" r="22" />
        <path d="M200 58 v-14 M186 62 l-8 -12 M214 62 l8 -12 M176 74 l-16 -6 M224 74 l16 -6" />
        {/* raised torch arm */}
        <path d="M214 74 c 20 -10, 34 -28, 40 -52" />
        <path d="M254 22 a8 8 0 1 1 0 2 Z" />
        <path d="M250 16 c 2 -10, 10 -14, 8 -24 M258 18 c 6 -8, 14 -8, 18 -16" opacity="0.6" />
        {/* tether + fan */}
        <path d="M176 230 l-30 18 M224 230 l30 18" opacity="0.5" />
        <path d="M184 250 h32 v-6 h-32 Z" fill="url(#bcs-t2)" stroke="none" />
        <circle cx="330" cy="236" r="12" />
        <path d="M330 224 v24 M318 236 h24" opacity="0.5" />
      </g>
    ),
  },

  matchbook: {
    label: "성냥갑과 그어진 성냥",
    node: (
      <g>
        {/* open matchbook cover */}
        <path d="M110 150 h150 v108 h-150 Z" />
        <path d="M110 150 h150 v108 h-150 Z" fill="url(#bcs-t1)" stroke="none" />
        <path d="M110 150 l18 -40 h150 l-18 40 Z" />
        <path d="M110 150 l18 -40 h150 l-18 40 Z" fill="url(#bcs-t2)" stroke="none" />
        <path d="M260 150 l18 -40 v108 l-18 40 Z" fill="url(#bcs-t3)" stroke="none" />
        <path d="M260 150 l18 -40 v108 l-18 40 Z" />
        {/* striker strip */}
        <path d="M118 240 h134 v10 h-134 Z" fill="url(#bcs-t3)" stroke="none" />
        <path d="M118 240 h134 v10 h-134 Z" />
        {/* row of match heads inside the fold */}
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <g key={i} transform={`translate(${134 + i * 17} 112)`}>
            <path d="M0 0 v22" />
            <ellipse cx="0" cy="-4" rx="5" ry="7" />
            <ellipse cx="0" cy="-4" rx="5" ry="7" fill="url(#bcs-t3)" stroke="none" />
          </g>
        ))}
        {/* a single struck match, lit, leaning */}
        <path d="M300 236 l56 -74" strokeWidth="2" />
        <ellipse cx="356" cy="158" rx="7" ry="10" transform="rotate(30 356 158)" />
        <ellipse cx="356" cy="158" rx="7" ry="10" transform="rotate(30 356 158)" fill="url(#bcs-t3)" stroke="none" />
        <path d="M352 148 c 6 -12, -2 -20, 4 -30 c 4 8, 10 10, 6 22" opacity="0.7" />
        <path d="M360 150 c 6 -8, 2 -16, 8 -22" opacity="0.5" />
      </g>
    ),
  },

  "space-blanket": {
    label: "마일러 공간 담요를 두른 형상",
    node: (
      <g>
        {/* chair */}
        <path d="M110 268 v-70 M290 268 v-70" />
        <path d="M100 198 h200 v-8 h-200 Z" opacity="0.5" />
        {/* seated figure wrapped in the crinkled mylar sheet */}
        <path d="M120 266 c -2 -70, 20 -120, 80 -128 c 60 8, 82 58, 80 128 Z" />
        <path d="M120 266 c -2 -70, 20 -120, 80 -128 c 60 8, 82 58, 80 128 Z" fill="url(#bcs-t1)" stroke="none" />
        {/* crinkle facets */}
        <path d="M150 250 l28 -52 l-10 -40 M178 198 l34 44 M212 242 l18 -60 l22 46 M168 158 l40 20 l36 -12" opacity="0.6" />
        <path d="M140 220 l40 -8 M210 210 l44 10 M160 248 l60 -14 M150 180 l30 -24" opacity="0.4" />
        <path d="M176 196 l20 30 -34 10 Z" fill="url(#bcs-t2)" stroke="none" />
        <path d="M214 184 l26 18 -14 30 Z" fill="url(#bcs-t2)" stroke="none" />
        {/* a face gap in the hood */}
        <path d="M172 150 a30 30 0 0 1 56 0 c -6 20, -22 30, -28 30 c -6 0, -22 -10, -28 -30 Z" fill="hsl(var(--paper))" stroke="currentColor" />
        <path d="M184 158 a4 3 0 0 1 8 0 M208 158 a4 3 0 0 1 8 0" opacity="0.7" />
        <path d="M190 174 c 6 4, 14 4, 20 0" opacity="0.5" />
      </g>
    ),
  },

  "gas-lantern": {
    label: "전기 없는 방의 가스 랜턴",
    node: (
      <g>
        {/* dark room implied by hatch corners */}
        <path d="M24 24 h70 v70 Z" fill="url(#bcs-t1)" stroke="none" opacity="0.5" />
        <path d="M376 276 h-70 v-70 Z" fill="url(#bcs-t1)" stroke="none" opacity="0.5" />
        {/* handle bail */}
        <path d="M160 70 a40 36 0 0 1 80 0" />
        <circle cx="200" cy="64" r="6" />
        {/* top cap + vent */}
        <path d="M170 92 h60 l-6 -16 h-48 Z" />
        <path d="M170 92 h60 l-6 -16 h-48 Z" fill="url(#bcs-t2)" stroke="none" />
        <path d="M184 76 h32" opacity="0.5" />
        {/* glass globe */}
        <path d="M164 96 h72 v76 a36 30 0 0 1 -72 0 Z" />
        <path d="M164 96 h72 v76 a36 30 0 0 1 -72 0 Z" fill="url(#bcs-t1)" stroke="none" opacity="0.6" />
        <path d="M176 100 v70 M224 100 v70" opacity="0.35" />
        {/* the lit mantle */}
        <path d="M188 120 c 6 -14, 18 -14, 24 0 c 4 18, -4 34, -12 40 c -8 -6, -16 -22, -12 -40 Z" />
        <path d="M188 120 c 6 -14, 18 -14, 24 0 c 4 18, -4 34, -12 40 c -8 -6, -16 -22, -12 -40 Z" fill="url(#bcs-t3)" stroke="none" />
        <path d="M200 112 v-6 M176 128 l-10 -6 M224 128 l10 -6" opacity="0.6" />
        {/* fuel font + base */}
        <path d="M172 192 h56 v30 h-56 Z" />
        <path d="M160 222 h80 v16 a10 10 0 0 1 -10 10 h-60 a10 10 0 0 1 -10 -10 Z" />
        <path d="M160 222 h80 v16 a10 10 0 0 1 -10 10 h-60 a10 10 0 0 1 -10 -10 Z" fill="url(#bcs-t2)" stroke="none" />
        <path d="M232 206 a8 8 0 0 1 14 6 v10" />
        {/* table + pool of light */}
        <path d="M70 262 h260" />
        <ellipse cx="200" cy="262" rx="150" ry="14" fill="url(#bcs-t1)" stroke="none" opacity="0.5" />
      </g>
    ),
  },

  "newspaper-stack": {
    label: "끈으로 묶은 신문 더미",
    node: (
      <g>
        {/* floor */}
        <path d="M20 260 H380" />
        <path d="M20 260 H380 v12 H20 Z" fill="url(#bcs-t1)" stroke="none" />
        {/* three tied bundles */}
        {[
          { x: 60, y: 150, w: 120, h: 108 },
          { x: 196, y: 120, w: 118, h: 138 },
          { x: 150, y: 90, w: 110, h: 60 },
        ].map((b, i) => (
          <g key={i}>
            <path d={`M${b.x} ${b.y} h${b.w} v${b.h} h-${b.w} Z`} />
            <path d={`M${b.x} ${b.y} l14 -10 h${b.w} l-14 10 Z`} fill="url(#bcs-t1)" stroke="none" />
            <path d={`M${b.x} ${b.y} l14 -10 h${b.w} l-14 10`} />
            <path d={`M${b.x + b.w} ${b.y} l14 -10 v${b.h} l-14 10 Z`} fill="url(#bcs-t2)" stroke="none" />
            <path d={`M${b.x + b.w} ${b.y} l14 -10 v${b.h}`} />
            {/* page edges */}
            {Array.from({ length: 6 }).map((_, k) => (
              <path key={k} d={`M${b.x} ${b.y + 10 + k * (b.h / 7)} h${b.w}`} opacity="0.3" />
            ))}
            {/* twine cross */}
            <path d={`M${b.x + b.w * 0.3} ${b.y} v${b.h} M${b.x} ${b.y + b.h * 0.45} h${b.w}`} opacity="0.7" />
          </g>
        ))}
        {/* a masthead hint on the top bundle */}
        <path d="M170 104 h70" opacity="0.5" />
        <path d="M170 112 h40 m8 0 h18" opacity="0.35" />
      </g>
    ),
  },

  "switch-tape": {
    label: "테이프로 막은 전등 스위치",
    node: (
      <g>
        {/* wall tone */}
        <path d="M60 30 h280 v240 H60 Z" fill="url(#bcs-t1)" stroke="none" opacity="0.4" />
        {/* switch plate */}
        <path d="M150 80 h100 v160 h-100 Z" />
        <path d="M150 80 h100 v160 h-100 Z" fill="url(#bcs-t2)" stroke="none" />
        <circle cx="200" cy="100" r="3" />
        <circle cx="200" cy="220" r="3" />
        {/* toggle, taped down */}
        <path d="M184 140 h32 v40 h-32 Z" />
        <path d="M190 146 h20 v22 h-20 Z" fill="url(#bcs-t3)" stroke="none" />
        {/* strips of tape over the plate, crossed */}
        <path d="M120 120 l160 36 v22 l-160 -36 Z" fill="url(#bcs-t1)" stroke="none" opacity="0.75" />
        <path d="M120 120 l160 36 v22 l-160 -36 Z" />
        <path d="M280 120 l-160 36 v22 l160 -36 Z" fill="url(#bcs-t1)" stroke="none" opacity="0.75" />
        <path d="M280 120 l-160 36 v22 l160 -36 Z" />
        <path d="M128 126 l150 34 M126 140 l152 34" opacity="0.3" />
        {/* torn tape ends */}
        <path d="M118 118 l-10 2 6 8 Z M282 118 l10 2 -6 8 Z" opacity="0.6" />
      </g>
    ),
  },

  courthouse: {
    label: "앨버커키의 법원 파사드",
    node: (
      <g>
        {mesaLine(70)}
        {/* steps */}
        <path d="M30 262 h340 M50 250 h300 M70 238 h260" />
        <path d="M30 262 h340 v10 H30 Z" fill="url(#bcs-t2)" stroke="none" />
        {/* stylobate */}
        <path d="M78 238 h244 v-14 h-244 Z" fill="url(#bcs-t1)" stroke="none" />
        <path d="M78 224 h244" />
        {/* columns */}
        {[96, 138, 180, 222, 264, 306].map((x) => (
          <g key={x}>
            <path d={`M${x} 224 v-100`} />
            <path d={`M${x + 18} 224 v-100`} />
            <path d={`M${x} 224 h18 M${x} 124 h18`} />
            <path d={`M${x + 4} 220 v-92`} opacity="0.4" />
            <path d={`M${x} 224 h18 v6 h-18 Z`} fill="url(#bcs-t2)" stroke="none" />
          </g>
        ))}
        {/* architrave + pediment */}
        <path d="M78 124 h256 v-20 h-256 Z" />
        <path d="M74 104 L200 54 L326 104 Z" />
        <path d="M74 104 L200 54 L326 104 Z" fill="url(#bcs-t1)" stroke="none" />
        <path d="M200 54 L200 104" opacity="0.3" />
        {/* inscription band */}
        <path d="M120 116 h160" opacity="0.5" />
        <path d="M128 112 h20 m10 0 h26 m10 0 h18 m10 0 h30" opacity="0.4" />
      </g>
    ),
  },

  "bus-bench-ad": {
    label: "버스 벤치 변호사 광고",
    node: (
      <g>
        {/* ground */}
        <path d="M20 256 H380" />
        <path d="M20 256 H380 v12 H20 Z" fill="url(#bcs-t1)" stroke="none" />
        {/* bench legs */}
        <path d="M70 256 v-34 M330 256 v-34" />
        {/* the ad backrest panel */}
        <path d="M60 128 h280 v96 H60 Z" />
        <path d="M60 128 h280 v96 H60 Z" fill="url(#bcs-t1)" stroke="none" />
        <path d="M60 128 h280 v96 H60 Z" />
        {/* seat slats */}
        <path d="M66 224 h268 v16 H66 Z" fill="url(#bcs-t2)" stroke="none" />
        <path d="M66 230 h268 M66 236 h268" opacity="0.4" />
        {/* lettering */}
        <text x="200" y="166" fontSize="26" textAnchor="middle" fill="currentColor" stroke="none" fontFamily="Georgia, serif">
          BETTER CALL
        </text>
        <text x="200" y="206" fontSize="40" textAnchor="middle" fill="currentColor" stroke="none" fontFamily="Georgia, serif" letterSpacing="4">
          SAUL
        </text>
        {/* a small portrait box */}
        <path d="M74 140 h44 v60 h-44 Z" opacity="0.6" />
        <circle cx="96" cy="162" r="12" opacity="0.6" />
        <path d="M80 194 c 4 -14, 28 -14, 32 0" opacity="0.5" />
      </g>
    ),
  },

  billboard: {
    label: "고속도로 광고판과 매달린 사람",
    node: (
      <g>
        {mesaLine(210)}
        {groundPlane(246)}
        {/* posts */}
        <path d="M120 250 V96 M280 250 V96" strokeWidth="2" />
        <path d="M120 150 l160 -30 M120 190 l160 -30" opacity="0.4" />
        {/* board */}
        <path d="M80 40 h240 v80 H80 Z" />
        <path d="M80 40 h240 v80 H80 Z" fill="url(#bcs-t1)" stroke="none" />
        <path d="M80 40 h240 v80 H80 Z" />
        <text x="200" y="92" fontSize="40" textAnchor="middle" fill="currentColor" stroke="none" fontFamily="Georgia, serif" letterSpacing="3">
          CALL
        </text>
        {/* catwalk + the worker dangling from a safety line */}
        <path d="M80 120 h240" />
        <path d="M232 120 v40" opacity="0.7" />
        <circle cx="232" cy="172" r="12" />
        <path d="M232 184 c -10 10, -12 26, -8 40" />
        <path d="M232 184 c 10 10, 12 26, 8 40" />
        <path d="M226 196 l-20 10 M238 196 l20 10" />
        <path d="M222 120 a10 10 0 0 1 20 0" opacity="0.6" />
      </g>
    ),
  },

  "bingo-cage": {
    label: "빙고 추첨기와 번호 공",
    node: (
      <g>
        {/* table */}
        <path d="M40 252 H360" />
        <path d="M40 252 H360 v12 H40 Z" fill="url(#bcs-t1)" stroke="none" />
        {/* stand */}
        <path d="M150 252 v-30 h100 v30" />
        <path d="M184 222 v-18 h32 v18" />
        {/* wire cage */}
        <ellipse cx="200" cy="150" rx="86" ry="78" />
        <ellipse cx="200" cy="150" rx="86" ry="78" fill="url(#bcs-t1)" stroke="none" opacity="0.4" />
        <path d="M114 150 a86 78 0 0 1 172 0 M200 72 v156 M132 96 L268 204 M268 96 L132 204" opacity="0.45" />
        <path d="M128 118 a120 108 0 0 0 144 0 M128 182 a120 108 0 0 1 144 0" opacity="0.4" />
        {/* crank */}
        <path d="M286 150 h40 M326 150 v24 h14" />
        <circle cx="340" cy="174" r="6" />
        {/* balls inside + one in the chute */}
        {[
          [180, 140],
          [214, 132],
          [196, 168],
          [168, 176],
          [226, 166],
        ].map(([cx, cy], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="12" />
            <circle cx={cx} cy={cy} r="7" opacity="0.4" />
          </g>
        ))}
        {/* output tray + a called ball */}
        <path d="M200 228 v18 h40 v-10" />
        <circle cx="228" cy="240" r="11" />
        <text x="228" y="244" fontSize="10" textAnchor="middle" fill="currentColor" stroke="none" fontFamily="ui-monospace, monospace">
          B7
        </text>
      </g>
    ),
  },

  "parking-booth": {
    label: "주차장 요금 부스와 차단봉",
    node: (
      <g>
        {mesaLine(96)}
        {/* lot ground */}
        <path d="M0 236 H400" />
        <path d="M0 236 H400 v30 H0 Z" fill="url(#bcs-t1)" stroke="none" />
        <path d="M40 252 h40 m40 0 h40 m120 0 h40" opacity="0.4" />
        {/* booth */}
        <path d="M60 236 V128 h96 v108 Z" />
        <path d="M60 128 l16 -18 h96 l-16 18 Z" />
        <path d="M60 128 l16 -18 h96 l-16 18 Z" fill="url(#bcs-t1)" stroke="none" />
        <path d="M156 128 l16 -18 v108 l-16 18 Z" fill="url(#bcs-t2)" stroke="none" />
        <path d="M156 128 l16 -18 v108 l-16 18" />
        {/* window + sill */}
        <path d="M74 146 h70 v54 h-70 Z" />
        <path d="M74 146 h70 v54 h-70 Z" fill="url(#bcs-t1)" stroke="none" opacity="0.5" />
        <path d="M70 200 h78 v8 h-78 Z" />
        {/* attendant silhouette */}
        <circle cx="110" cy="166" r="11" />
        <path d="M94 200 c 2 -18, 30 -18, 32 0 Z" fill="url(#bcs-t2)" stroke="none" />
        {/* boom gate */}
        <path d="M172 210 h180" strokeWidth="3" />
        <path d="M172 210 h180" />
        {[200, 240, 280, 320].map((x) => (
          <path key={x} d={`M${x} 204 h14 v12 h-14 Z`} fill="url(#bcs-t3)" stroke="none" />
        ))}
        <path d="M168 236 v-40 h10 v40" />
        <circle cx="173" cy="210" r="7" />
      </g>
    ),
  },

  "pimento-sandwich": {
    label: "왁스페이퍼 위의 피멘토 샌드위치",
    node: (
      <g>
        {/* wax paper */}
        <path d="M70 196 l40 -40 h200 l20 44 -36 48 h-196 Z" />
        <path d="M70 196 l40 -40 h200 l20 44 -36 48 h-196 Z" fill="url(#bcs-t1)" stroke="none" />
        <path d="M110 156 l-14 92 M330 200 l-20 -44" opacity="0.3" />
        {/* two triangle halves */}
        <path d="M120 212 L196 128 L212 214 Z" />
        <path d="M120 212 L196 128 L212 214 Z" fill="url(#bcs-t1)" stroke="none" />
        <path d="M120 212 L196 128 L212 214 Z" />
        {/* filling band */}
        <path d="M128 196 L190 150 L202 198 Z" fill="url(#bcs-t3)" stroke="none" />
        <path d="M128 196 L202 198 M150 176 L196 160" opacity="0.5" />
        <path d="M200 206 L270 124 L300 206 Z" />
        <path d="M200 206 L270 124 L300 206 Z" fill="url(#bcs-t1)" stroke="none" />
        <path d="M200 206 L270 124 L300 206 Z" />
        <path d="M210 190 L268 146 L286 190 Z" fill="url(#bcs-t3)" stroke="none" />
        {/* crust shading + a little pimento speckle */}
        <path d="M196 128 c 8 -2, 14 0, 16 6 M270 124 c 10 -2, 18 2, 20 8" opacity="0.5" />
        <circle cx="168" cy="178" r="2" fill="currentColor" />
        <circle cx="236" cy="172" r="2" fill="currentColor" />
        <circle cx="250" cy="182" r="1.6" fill="currentColor" />
      </g>
    ),
  },

  "hummel-figurine": {
    label: "도자기 험멜 인형",
    node: (
      <g>
        {/* base */}
        <ellipse cx="200" cy="258" rx="70" ry="16" />
        <path d="M130 258 a70 16 0 0 0 140 0 v-12 a70 16 0 0 1 -140 0 Z" fill="url(#bcs-t2)" stroke="none" />
        <ellipse cx="200" cy="246" rx="70" ry="16" />
        {/* the little boy figure */}
        <circle cx="200" cy="96" r="30" />
        <path d="M172 92 a30 24 0 0 1 56 0 c -4 -22, -24 -34, -28 -34 c -4 0, -24 12, -28 34 Z" fill="url(#bcs-t2)" stroke="none" />
        <path d="M186 96 a3 3 0 0 1 6 0 M208 96 a3 3 0 0 1 6 0" opacity="0.7" />
        <path d="M190 110 c 6 6, 14 6, 20 0" opacity="0.6" />
        <path d="M178 76 a30 24 0 0 1 44 -4" opacity="0.5" />
        {/* body + lederhosen */}
        <path d="M172 150 c 0 -20, 10 -30, 28 -30 c 18 0, 28 10, 28 30 l6 70 h-68 Z" />
        <path d="M172 150 c 0 -20, 10 -30, 28 -30 c 18 0, 28 10, 28 30 l6 70 h-68 Z" fill="url(#bcs-t1)" stroke="none" />
        <path d="M188 128 l6 92 M212 128 l-6 92" opacity="0.4" />
        <path d="M180 170 h40" opacity="0.5" />
        {/* arms: one holding a tiny umbrella */}
        <path d="M174 156 c -16 6, -24 20, -22 40" />
        <path d="M226 156 c 16 4, 26 16, 28 30" />
        <path d="M254 186 v-46" />
        <path d="M236 142 a18 10 0 0 1 36 0 Z" />
        <path d="M236 142 a18 10 0 0 1 36 0 Z" fill="url(#bcs-t2)" stroke="none" />
        {/* legs + boots */}
        <path d="M184 220 v24 M216 220 v24" />
        <path d="M176 244 h20 v8 h-20 Z M204 244 h20 v8 h-20 Z" fill="url(#bcs-t3)" stroke="none" />
        {/* glaze highlight */}
        <path d="M186 70 c 6 -6, 14 -6, 20 -2" opacity="0.5" />
      </g>
    ),
  },

  "zafiro-anejo": {
    label: "사피로 아녜호 테킬라와 병마개",
    node: (
      <g>
        {/* bottle */}
        <path d="M168 258 V150 c 0 -18, 8 -26, 8 -44 v-30 h32 v30 c 0 18, 8 26, 8 44 v108 Z" />
        <path d="M168 258 V150 c 0 -18, 8 -26, 8 -44 v-30 h32 v30 c 0 18, 8 26, 8 44 v108 Z" fill="url(#bcs-t1)" stroke="none" />
        {/* neck + foil */}
        <path d="M176 76 h32 v-18 h-32 Z" />
        <path d="M176 76 h32 v10 h-32 Z" fill="url(#bcs-t3)" stroke="none" />
        {/* liquid level + label */}
        <path d="M168 168 h48" opacity="0.5" />
        <path d="M168 168 h48 v90 h-48 Z" fill="url(#bcs-grit)" stroke="none" opacity="0.4" />
        <path d="M172 186 h40 v54 h-40 Z" />
        <path d="M172 186 h40 v54 h-40 Z" fill="hsl(var(--paper))" stroke="currentColor" />
        <path d="M180 200 h24 m-24 10 h24 m-24 10 h16" opacity="0.5" />
        <path d="M192 196 l6 -8 6 8 Z" opacity="0.6" />
        {/* the removable stopper, set apart on the right */}
        <g transform="translate(290 150)">
          <path d="M-18 60 h36 v-20 h-36 Z" />
          <path d="M-18 60 h36 v-20 h-36 Z" fill="url(#bcs-t2)" stroke="none" />
          <path d="M-12 40 c 0 -22, 24 -22, 24 0 Z" />
          <path d="M-12 40 c 0 -22, 24 -22, 24 0 Z" fill="url(#bcs-t3)" stroke="none" />
          <path d="M0 18 v-14 M-8 8 l8 10 8 -10" />
          <path d="M-20 62 h40" opacity="0.4" />
        </g>
        <path d="M120 260 h220" opacity="0.35" />
      </g>
    ),
  },

  "legal-pad": {
    label: "노란 리갈 패드와 펜",
    node: (
      <g>
        {/* pad, slightly angled */}
        <path d="M96 60 l200 -14 l24 220 l-200 14 Z" />
        <path d="M96 60 l200 -14 l24 220 l-200 14 Z" fill="url(#bcs-t1)" stroke="none" />
        <path d="M96 60 l200 -14 l24 220 l-200 14 Z" />
        {/* top binding */}
        <path d="M96 60 l200 -14 l2 18 l-200 14 Z" fill="url(#bcs-t3)" stroke="none" />
        {Array.from({ length: 7 }).map((_, i) => (
          <circle key={i} cx={116 + i * 26} cy={62 - i * 1.8} r="2.4" />
        ))}
        {/* ruled lines */}
        {Array.from({ length: 9 }).map((_, i) => (
          <path key={i} d={`M104 ${104 + i * 18} l206 -14`} opacity="0.4" />
        ))}
        {/* red margin */}
        <path d="M128 70 l12 206" opacity="0.6" />
        {/* a few scrawled notes */}
        <path d="M150 112 l80 -6 m-78 22 l60 -4 m-58 24 l92 -6" opacity="0.55" />
        {/* pen lying across */}
        <path d="M150 220 l150 -40" strokeWidth="2" />
        <path d="M300 180 l18 -6 -6 14 Z" fill="url(#bcs-t3)" stroke="none" />
        <path d="M300 180 l18 -6 -6 14 Z" />
        <path d="M150 220 l-14 4 6 8 Z" />
      </g>
    ),
  },

  "parking-garage": {
    label: "주차장 난간과 담배 연기",
    node: (
      <g>
        {/* city lights far below */}
        <path d="M0 236 h40 v-14 h30 v18 h40 v-10 h50 v14 h36 v-18 h44 v12 h40 v-8 h46 v16 h24" opacity="0.4" />
        {/* deck slab + ceiling */}
        <path d="M0 150 H400" />
        <path d="M0 262 H400" />
        <path d="M0 262 H400 v8 H0 Z" fill="url(#bcs-t2)" stroke="none" />
        {/* concrete pillars */}
        <path d="M60 150 v112 M60 150 h26 v112 h-26 Z" />
        <path d="M60 150 h26 v112 h-26 Z" fill="url(#bcs-t1)" stroke="none" />
        {/* railing */}
        <path d="M30 206 H250" strokeWidth="2" />
        <path d="M30 230 H250" />
        <path d="M60 206 v24 M120 206 v24 M180 206 v24 M240 206 v24" opacity="0.6" />
        {/* a hand + cigarette resting on the rail */}
        <path d="M150 206 c 10 -2, 22 -2, 30 2 c 8 4, 6 10, -2 10 h-28 Z" fill="url(#bcs-t2)" stroke="none" />
        <path d="M150 206 c 10 -2, 22 -2, 30 2" />
        <path d="M178 202 l56 -8" strokeWidth="2" />
        <path d="M230 194 l12 -2" />
        {/* ember + smoke */}
        <circle cx="236" cy="193" r="3" fill="currentColor" />
        <path d="M238 190 c 8 -18, -8 -30, 2 -48 c 6 -12, -4 -22, 2 -34" opacity="0.5" />
        <path d="M244 188 c 10 -16, 0 -30, 8 -46" opacity="0.32" />
      </g>
    ),
  },

  "pollos-sign": {
    label: "로스 포요스 에르마노스 간판",
    node: (
      <g>
        {/* pole */}
        <path d="M194 266 V150 M206 266 V150" />
        <path d="M180 266 h40 v6 h-40 Z" fill="url(#bcs-t2)" stroke="none" />
        {/* sign panel */}
        <path d="M70 60 h260 v96 H70 Z" />
        <path d="M70 60 h260 v96 H70 Z" fill="url(#bcs-t1)" stroke="none" />
        <path d="M70 60 h260 v96 H70 Z" />
        {/* the rooster mark */}
        <g transform="translate(120 108)">
          <path d="M0 0 c -4 -24, 16 -40, 36 -36 c 8 -14, 24 -16, 30 -6 c 10 -2, 16 6, 10 14 c 8 2, 10 12, 2 18 c 6 8, -2 18, -12 16 c 0 10, -12 16, -22 10 c -14 8, -42 2, -44 -16 c -10 -2, -12 -14, 0 -14 Z" />
          <path d="M0 0 c -4 -24, 16 -40, 36 -36 c 8 -14, 24 -16, 30 -6 c 10 -2, 16 6, 10 14 c 8 2, 10 12, 2 18 c 6 8, -2 18, -12 16 c 0 10, -12 16, -22 10 c -14 8, -42 2, -44 -16 c -10 -2, -12 -14, 0 -14 Z" fill="url(#bcs-t2)" stroke="none" />
          <path d="M60 -30 l16 -10 -4 12 12 -2 -10 10" />
          <circle cx="54" cy="-16" r="2.5" fill="currentColor" />
          <path d="M-18 14 l-14 6 m16 -2 l-12 10" opacity="0.6" />
        </g>
        {/* lettering */}
        <text x="230" y="104" fontSize="19" textAnchor="middle" fill="currentColor" stroke="none" fontFamily="Georgia, serif">
          LOS POLLOS
        </text>
        <text x="230" y="128" fontSize="17" textAnchor="middle" fill="currentColor" stroke="none" fontFamily="Georgia, serif">
          HERMANOS
        </text>
        <path d="M150 140 h160" opacity="0.4" />
      </g>
    ),
  },

  "tio-bell": {
    label: "엑터의 호출 벨",
    node: (
      <g>
        {/* armrest */}
        <path d="M44 214 h248 l22 20 H66 Z" />
        <path d="M44 214 h248 l22 20 H66 Z" fill="url(#bcs-t1)" stroke="none" />
        <path d="M44 214 v20 h22" />
        {/* bell dome */}
        <path d="M120 200 a70 64 0 0 1 140 0 Z" />
        <path d="M120 200 a70 64 0 0 1 140 0 Z" fill="url(#bcs-t2)" stroke="none" />
        <path d="M150 158 c 8 -20, 28 -32, 50 -30" opacity="0.65" />
        <path d="M230 150 c 14 12, 22 30, 22 50" fill="url(#bcs-t3)" stroke="none" opacity="0.7" />
        {/* base */}
        <path d="M104 200 h172 a8 8 0 0 1 0 16 H104 a8 8 0 0 1 0 -16 Z" />
        {/* plunger */}
        <path d="M190 134 v-18 h20 v18" />
        <circle cx="200" cy="110" r="13" />
        {/* ring lines */}
        <path d="M292 130 c 18 -12, 18 -40, 0 -52" opacity="0.6" />
        <path d="M312 138 c 28 -18, 28 -62, 0 -80" opacity="0.4" />
        <path d="M88 130 c -18 -12, -18 -40, 0 -52" opacity="0.6" />
        <path d="M68 138 c -28 -18, -28 -62, 0 -80" opacity="0.4" />
        {/* a bony finger on the plunger */}
        <path d="M200 96 c 0 -16, 14 -24, 30 -20 c 20 4, 32 2, 44 -4" />
        <path d="M206 100 c 4 -10, 14 -16, 26 -14" opacity="0.5" />
      </g>
    ),
  },

  "salamanca-twins": {
    label: "침묵의 쌍둥이와 은빛 도끼",
    node: (
      <g>
        {/* two identical suited figures */}
        {[112, 244].map((x, i) => (
          <g key={x} transform={`translate(${x} 40)`}>
            <circle cx="0" cy="40" r="26" />
            <path d="M-26 40 a26 22 0 0 1 52 0 c -4 -20, -22 -32, -26 -32 c -4 0, -22 12, -26 32 Z" fill="url(#bcs-t2)" stroke="none" />
            <path d="M-12 38 a3 3 0 0 1 6 0 M6 38 a3 3 0 0 1 6 0" opacity="0.7" />
            <path d="M-8 54 h16" opacity="0.6" />
            {/* suit torso */}
            <path d="M-34 96 c 2 -22, 14 -34, 34 -34 c 20 0, 32 12, 34 34 l6 124 h-80 Z" />
            <path d="M-34 96 c 2 -22, 14 -34, 34 -34 c 20 0, 32 12, 34 34 l6 124 h-80 Z" fill="url(#bcs-t1)" stroke="none" />
            {/* lapels + shirt + tie */}
            <path d="M-18 66 L0 96 L18 66" />
            <path d="M-8 72 L0 96 L8 72 Z" fill="hsl(var(--paper))" stroke="currentColor" />
            <path d="M0 96 l-5 40 l5 18 l5 -18 Z" fill="url(#bcs-t3)" stroke="none" />
            {i === 0 ? (
              <path d="M-34 110 c -10 30, -10 70, -4 108" opacity="0.4" />
            ) : (
              <path d="M34 110 c 10 30, 10 70, 4 108" opacity="0.4" />
            )}
          </g>
        ))}
        {/* the chrome fire-axe held between them */}
        <path d="M196 70 l8 0 l0 190 l-8 0 Z" />
        <path d="M196 70 l8 0 l0 190 l-8 0 Z" fill="url(#bcs-t2)" stroke="none" />
        <path d="M184 60 c 18 -10, 40 -10, 36 10 c -2 12, -22 14, -40 8 Z" />
        <path d="M184 60 c 18 -10, 40 -10, 36 10 c -2 12, -22 14, -40 8 Z" fill="url(#bcs-t3)" stroke="none" />
        <path d="M190 64 c 12 -4, 24 -2, 24 8" opacity="0.6" />
        {/* floor */}
        <path d="M40 262 H360" opacity="0.4" />
      </g>
    ),
  },

  "travel-wire": {
    label: "트래블와이어 송금소 창구",
    node: (
      <g>
        {/* storefront box */}
        <path d="M40 60 h320 v70 H40 Z" />
        <path d="M40 60 h320 v70 H40 Z" fill="url(#bcs-t1)" stroke="none" />
        <path d="M40 60 h320 v70 H40 Z" />
        <text x="200" y="106" fontSize="30" textAnchor="middle" fill="currentColor" stroke="none" fontFamily="Georgia, serif" letterSpacing="2">
          TravelWire
        </text>
        {/* counter */}
        <path d="M40 210 h320 v40 H40 Z" />
        <path d="M40 210 h320 v40 H40 Z" fill="url(#bcs-t2)" stroke="none" />
        <path d="M40 210 h320" />
        {/* teller window with glass divider + speak hole */}
        <path d="M120 130 h160 v80 h-160 Z" />
        <path d="M120 130 h160 v80 h-160 Z" fill="url(#bcs-t1)" stroke="none" opacity="0.4" />
        <path d="M200 130 v80" opacity="0.4" />
        <circle cx="200" cy="176" r="12" />
        <circle cx="200" cy="176" r="5" />
        {/* a slide tray + an envelope of cash */}
        <path d="M160 210 h80 v-8 h-80 Z" />
        <path d="M176 202 h48 v-14 h-48 Z" />
        <path d="M176 202 h48 v-14 h-48 Z" fill="hsl(var(--paper))" stroke="currentColor" />
        <path d="M176 188 l24 10 24 -10" opacity="0.6" />
        {/* clerk silhouette */}
        <circle cx="156" cy="158" r="10" opacity="0.6" />
        <path d="M142 188 c 2 -16, 26 -16, 28 0" opacity="0.5" />
      </g>
    ),
  },

  "well-ladder": {
    label: "우물 속으로 내려가는 사다리",
    node: (
      <g>
        {/* ground around the shaft */}
        <path d="M0 150 H120 M280 150 H400" />
        <path d="M0 150 H120 v-18 H0 Z M280 150 H400 v-18 h-120 Z" fill="url(#bcs-t1)" stroke="none" />
        {/* well mouth ellipse */}
        <ellipse cx="200" cy="150" rx="90" ry="30" />
        <ellipse cx="200" cy="150" rx="90" ry="30" fill="url(#bcs-t1)" stroke="none" />
        <ellipse cx="200" cy="150" rx="74" ry="23" />
        {/* shaft walls going down into dark */}
        <path d="M126 150 C 150 230, 150 260, 170 300 M274 150 C 250 230, 250 260, 230 300" />
        <path d="M170 300 h60 C 250 260, 250 230, 274 150 a90 30 0 0 1 -148 0 C 150 230, 150 260, 170 300 Z" fill="url(#bcs-t3)" stroke="none" opacity="0.6" />
        {/* the ladder descending */}
        <path d="M184 150 C 182 210, 182 250, 188 300" strokeWidth="2" />
        <path d="M216 150 C 218 210, 218 250, 212 300" strokeWidth="2" />
        {Array.from({ length: 6 }).map((_, i) => (
          <path key={i} d={`M${184 - i * 0.4} ${150 + i * 26} h${32 + i * 0.8}`} />
        ))}
        {/* brick courses on the rim */}
        <path d="M126 150 a74 23 0 0 1 148 0" opacity="0.3" />
        <path d="M150 140 v12 m30 -18 v16 m40 -16 v16 m30 -12 v12" opacity="0.4" />
      </g>
    ),
  },

  "superlab-dig": {
    label: "세탁소 지하의 굴착 현장",
    node: (
      <g>
        {/* ground line + laundry floor slab above */}
        <path d="M0 96 H400" />
        <path d="M0 80 H400 v16 H0 Z" fill="url(#bcs-t2)" stroke="none" />
        {/* the excavated pit */}
        <path d="M40 96 L70 268 H330 L360 96" />
        <path d="M40 96 L70 268 H330 L360 96 Z" fill="url(#bcs-grit)" stroke="none" opacity="0.4" />
        {/* strata lines */}
        <path d="M54 150 H346 M62 200 H338 M68 240 H332" opacity="0.3" />
        {/* scaffolding + shoring beams */}
        <path d="M96 96 V268 M200 96 V268 M304 96 V268" opacity="0.6" />
        <path d="M96 150 H304 M96 210 H304" opacity="0.5" />
        {/* a timber brace, German-engineered precision */}
        <path d="M120 120 L180 200 M280 120 L220 200" opacity="0.5" />
        {/* the mini excavator */}
        <g transform="translate(150 196)">
          <path d="M0 40 h80 v-24 h-80 Z" />
          <path d="M0 40 h80 v-24 h-80 Z" fill="url(#bcs-t2)" stroke="none" />
          <path d="M14 16 h30 v-18 h-30 Z" />
          <path d="M44 10 l40 -8 l18 20" />
          <path d="M102 22 c 10 6, 10 20, -2 24 l-14 -10 Z" />
          <path d="M102 22 c 10 6, 10 20, -2 24 l-14 -10 Z" fill="url(#bcs-t3)" stroke="none" />
          {Array.from({ length: 10 }).map((_, i) => (
            <circle key={i} cx={i * 9} cy={46} r="5" />
          ))}
        </g>
        {/* dangling work light */}
        <path d="M250 96 v24" />
        <path d="M242 120 h16 l-2 14 h-12 Z" />
        <path d="M242 120 h16 l-2 14 h-12 Z" fill="url(#bcs-t3)" stroke="none" />
      </g>
    ),
  },

  "dam-schematic": {
    label: "독일식 토목 설계 도면",
    node: (
      <g>
        {/* blueprint sheet */}
        <path d="M40 40 h320 v220 H40 Z" />
        <path d="M40 40 h320 v220 H40 Z" fill="url(#bcs-t1)" stroke="none" opacity="0.4" />
        <path d="M40 40 h320 v220 H40 Z" />
        {/* grid */}
        {Array.from({ length: 7 }).map((_, i) => (
          <path key={`v${i}`} d={`M${80 + i * 40} 40 V260`} opacity="0.18" />
        ))}
        {Array.from({ length: 5 }).map((_, i) => (
          <path key={`h${i}`} d={`M40 ${80 + i * 40} H360`} opacity="0.18" />
        ))}
        {/* dam cross-section: a curved retaining wall holding water */}
        <path d="M110 220 C 150 180, 150 110, 190 80 L214 80 C 190 120, 196 190, 230 220 Z" />
        <path d="M110 220 C 150 180, 150 110, 190 80 L214 80 C 190 120, 196 190, 230 220 Z" fill="url(#bcs-t2)" stroke="none" />
        {/* water behind it + level ticks */}
        <path d="M60 130 H150 M60 150 H140 M60 170 H132 M60 190 H126" opacity="0.4" />
        <path d="M60 128 H150 V220 H60 Z" fill="url(#bcs-grit)" stroke="none" opacity="0.3" />
        {/* dimension lines + arrows */}
        <path d="M110 240 H230" opacity="0.6" />
        <path d="M110 236 v8 M230 236 v8" opacity="0.6" />
        <path d="M114 240 l-4 -3 m-0 3 l4 3 M226 240 l4 -3 m0 3 l-4 3" opacity="0.6" />
        {/* title block */}
        <path d="M250 210 h100 v44 h-100 Z" />
        <path d="M250 226 h100 M300 210 v44" opacity="0.4" />
        <path d="M258 220 h30 m-30 12 h22 m-22 12 h34" opacity="0.4" />
      </g>
    ),
  },

  "desert-walk": {
    label: "돈가방을 지고 사막을 걷는 두 사람",
    node: (
      <g>
        <circle cx="320" cy="70" r="24" opacity="0.5" />
        {mesaLine(150)}
        {/* dunes */}
        <path d="M0 210 C 90 180, 150 210, 230 196 C 300 184, 350 206, 400 196" />
        <path d="M0 210 C 90 180, 150 210, 230 196 C 300 184, 350 206, 400 196 V300 H0 Z" fill="url(#bcs-grit)" stroke="none" opacity="0.5" />
        <path d="M0 250 C 120 228, 220 258, 400 242" opacity="0.4" />
        {/* two trudging figures with duffels, long shadows */}
        {[
          { x: 150, s: 1 },
          { x: 214, s: 0.92 },
        ].map((f, i) => (
          <g key={i} transform={`translate(${f.x} 150) scale(${f.s})`}>
            <circle cx="0" cy="0" r="12" />
            <path d="M-12 0 a12 10 0 0 1 24 0 c -2 -12, -10 -16, -12 -16 c -2 0, -10 4, -12 16 Z" fill="url(#bcs-t2)" stroke="none" />
            <path d="M-10 18 c 0 -12, 20 -12, 20 0 l6 40 h-32 Z" />
            <path d="M-10 18 c 0 -12, 20 -12, 20 0 l6 40 h-32 Z" fill="url(#bcs-t1)" stroke="none" />
            <path d="M-12 58 l-4 42 M12 58 l4 42" />
            {/* duffel on the shoulder */}
            <path d="M8 22 h40 a10 10 0 0 1 0 20 h-40 Z" />
            <path d="M8 22 h40 a10 10 0 0 1 0 20 h-40 Z" fill="url(#bcs-t3)" stroke="none" />
            <path d="M8 22 h40 M12 32 h36" opacity="0.5" />
            <path d="M-6 20 l16 6" opacity="0.6" />
            {/* shadow */}
            <path d="M-16 100 l50 10 -8 6 -50 -8 Z" fill="url(#bcs-t1)" stroke="none" />
          </g>
        ))}
      </g>
    ),
  },

  "bullet-canteen": {
    label: "총알이 뚫은 물통",
    node: (
      <g>
        {groundPlane(246)}
        {/* the jug */}
        <path d="M150 110 h100 v16 l10 6 v108 a10 10 0 0 1 -10 10 h-100 a10 10 0 0 1 -10 -10 V132 l10 -6 Z" />
        <path d="M150 110 h100 v16 l10 6 v108 a10 10 0 0 1 -10 10 h-100 a10 10 0 0 1 -10 -10 V132 l10 -6 Z" fill="url(#bcs-t1)" stroke="none" />
        {/* cap + handle */}
        <path d="M184 110 h32 v-14 h-32 Z" />
        <path d="M216 118 c 24 -2, 24 30, 0 30" />
        {/* water level + grip ribs */}
        <path d="M140 170 h120" opacity="0.5" />
        <path d="M140 170 h120 v70 a10 10 0 0 1 -10 10 h-100 a10 10 0 0 1 -10 -10 Z" fill="url(#bcs-grit)" stroke="none" opacity="0.4" />
        <path d="M150 150 h100 m-100 14 h100" opacity="0.3" />
        {/* the bullet hole + the stream pouring out */}
        <circle cx="168" cy="196" r="7" />
        <circle cx="168" cy="196" r="7" fill="url(#bcs-t4)" stroke="none" />
        <path d="M162 190 l-8 -4 m10 14 l-8 4 m14 -12 l-10 -2" opacity="0.6" />
        <path d="M161 196 c -16 10, -22 34, -20 54" strokeWidth="2" />
        <path d="M156 202 c -10 10, -14 28, -12 44" opacity="0.5" />
        {/* puddle */}
        <ellipse cx="132" cy="252" rx="34" ry="8" fill="url(#bcs-grit)" stroke="none" opacity="0.6" />
        <path d="M100 252 h64" opacity="0.4" />
      </g>
    ),
  },

  "pill-capsule": {
    label: "바꿔치기된 알약 캡슐",
    node: (
      <g>
        {/* bottle on its side, spilling */}
        <g transform="rotate(-18 170 150)">
          <path d="M96 118 h108 v70 a14 14 0 0 1 -14 14 h-80 a14 14 0 0 1 -14 -14 Z" />
          <path d="M96 118 h108 v70 a14 14 0 0 1 -14 14 h-80 a14 14 0 0 1 -14 -14 Z" fill="url(#bcs-t1)" stroke="none" />
          <path d="M90 118 h120 v-16 h-120 Z" />
          <path d="M90 118 h120 v-16 h-120 Z" fill="url(#bcs-t2)" stroke="none" />
          <path d="M104 134 h92 v40 h-92 Z" />
          <path d="M104 134 h92 v40 h-92 Z" fill="hsl(var(--paper))" stroke="currentColor" />
          <path d="M112 146 h76 m-76 12 h60" opacity="0.5" />
        </g>
        {/* spilled capsules */}
        {[
          { x: 214, y: 196, r: 18 },
          { x: 250, y: 176, r: -40 },
          { x: 286, y: 210, r: 20 },
          { x: 236, y: 226, r: -10 },
        ].map((c, i) => (
          <g key={i} transform={`translate(${c.x} ${c.y}) rotate(${c.r})`}>
            <path d="M-22 0 a11 11 0 0 1 0 -22 h22 a11 11 0 0 1 0 22 Z" />
            <path d="M0 -22 a11 11 0 0 1 0 22 h-22 a11 11 0 0 1 0 -22 Z" fill="url(#bcs-t2)" stroke="none" />
            <path d="M0 -22 v22" opacity="0.5" />
          </g>
        ))}
        {/* the one swapped capsule, pulled apart, with a tweezer */}
        <g transform="translate(300 110)">
          <path d="M-20 0 a10 10 0 0 1 0 -20 h16 v20 Z" />
          <path d="M8 -22 a10 10 0 0 1 0 20 h-14 v-20 Z" fill="url(#bcs-t2)" stroke="none" />
          <path d="M8 -22 a10 10 0 0 1 0 20 h-14 v-20 Z" />
          <circle cx="2" cy="-4" r="2" fill="currentColor" />
          <circle cx="-6" cy="2" r="1.6" fill="currentColor" />
        </g>
        <path d="M250 60 l40 40 M262 54 l40 40" />
        <path d="M250 60 l40 40 l-6 6 -40 -40 Z" fill="url(#bcs-t2)" stroke="none" />
      </g>
    ),
  },

  "pay-phone": {
    label: "노상의 공중전화",
    node: (
      <g>
        {/* back panel */}
        <path d="M120 40 h160 v210 h-160 Z" />
        <path d="M120 40 h160 v210 h-160 Z" fill="url(#bcs-t1)" stroke="none" />
        <path d="M120 40 h160 v210 h-160 Z" />
        {/* enclosure hood */}
        <path d="M110 40 h180 l-18 -18 h-144 Z" />
        <path d="M110 40 h180 l-18 -18 h-144 Z" fill="url(#bcs-t2)" stroke="none" />
        {/* phone body */}
        <path d="M148 70 h104 v120 h-104 Z" />
        <path d="M148 70 h104 v120 h-104 Z" fill="url(#bcs-t1)" stroke="none" />
        {/* coin slots + display */}
        <path d="M168 84 h64 v18 h-64 Z" />
        <path d="M168 84 h64 v18 h-64 Z" fill="url(#bcs-t2)" stroke="none" />
        {/* keypad */}
        {Array.from({ length: 4 }).map((_, r) =>
          Array.from({ length: 3 }).map((_, c) => (
            <circle key={`${r}-${c}`} cx={178 + c * 22} cy={118 + r * 16} r="5" />
          )),
        )}
        {/* coin return */}
        <path d="M172 176 h26 v8 h-26 Z" />
        {/* handset on the hook, left side, cord coiled */}
        <path d="M120 96 c -20 0, -24 26, -24 48 c 0 22, 4 48, 24 48" strokeWidth="3" />
        <path d="M96 92 h18 v18 h-18 Z M96 174 h18 v18 h-18 Z" />
        <path d="M96 92 h18 v18 h-18 Z M96 174 h18 v18 h-18 Z" fill="url(#bcs-t3)" stroke="none" />
        <path d="M110 140 c -18 4, -18 -8, -34 -4 c -16 4, -16 -8, -32 -4" opacity="0.6" />
        <path d="M110 150 c -18 4, -18 -8, -34 -4 c -16 4, -16 -8, -32 -4" opacity="0.45" />
        <path d="M120 250 h160" opacity="0.4" />
      </g>
    ),
  },

  cinnabon: {
    label: "시나본 매장의 롤과 간판",
    node: (
      <g>
        {/* sign board */}
        <path d="M60 40 h280 v56 H60 Z" />
        <path d="M60 40 h280 v56 H60 Z" fill="url(#bcs-t1)" stroke="none" />
        <path d="M60 40 h280 v56 H60 Z" />
        <text x="200" y="80" fontSize="30" textAnchor="middle" fill="currentColor" stroke="none" fontFamily="Georgia, serif" letterSpacing="2">
          Cinnabon
        </text>
        {/* glass display case */}
        <path d="M60 150 h280 v86 H60 Z" />
        <path d="M60 150 h280 v86 H60 Z" fill="url(#bcs-t1)" stroke="none" opacity="0.4" />
        <path d="M60 150 h280 M60 236 h280" />
        <path d="M60 192 h280" opacity="0.4" />
        {/* a tray of rolls */}
        {[110, 170, 230, 290].map((x) => (
          <g key={x} transform={`translate(${x} 212)`}>
            <ellipse cx="0" cy="0" rx="26" ry="16" />
            <ellipse cx="0" cy="0" rx="26" ry="16" fill="url(#bcs-t1)" stroke="none" />
            <path d="M0 0 m0 -11 a11 11 0 1 1 -0.1 0 M0 0 m0 -6 a6 6 0 1 1 -0.1 0" opacity="0.6" />
            <path d="M-20 -6 c 10 -8, 30 -8, 40 0" opacity="0.5" />
          </g>
        ))}
        {/* one big hero roll on the counter with icing drip */}
        <g transform="translate(200 128)">
          <ellipse cx="0" cy="0" rx="34" ry="20" />
          <ellipse cx="0" cy="0" rx="34" ry="20" fill="url(#bcs-t1)" stroke="none" />
          <path d="M0 0 m0 -16 a16 16 0 1 1 -0.1 0 M0 0 m0 -9 a9 9 0 1 1 -0.1 0 M0 0 m0 -3 a3 3 0 1 1 -0.1 0" opacity="0.55" />
          <path d="M-30 2 c 6 10, 14 12, 10 22 M-6 8 c 2 10, -4 14, 0 22 M22 4 c 6 10, 0 14, 4 22" opacity="0.5" />
        </g>
      </g>
    ),
  },

  "gene-glasses": {
    label: "진 터카빅의 안경과 콧수염",
    node: (
      <g>
        {/* faint face oval */}
        <ellipse cx="200" cy="150" rx="96" ry="120" opacity="0.25" />
        {/* heavy squarish glasses */}
        <path d="M86 128 h108 a12 12 0 0 1 12 12 v30 a16 16 0 0 1 -16 16 h-100 a16 16 0 0 1 -16 -16 v-30 a12 12 0 0 1 12 -12 Z" />
        <path d="M206 128 h108 a12 12 0 0 1 12 12 v30 a16 16 0 0 1 -16 16 h-100 a16 16 0 0 1 -16 -16 v-30 a12 12 0 0 1 12 -12 Z" />
        <path d="M86 128 h108 v16 h-108 Z" fill="url(#bcs-t2)" stroke="none" />
        <path d="M206 128 h108 v16 h-108 Z" fill="url(#bcs-t2)" stroke="none" />
        {/* bridge + temples */}
        <path d="M194 148 c 4 -8, 8 -8, 12 0" />
        <path d="M74 136 l-30 -8 M326 136 l30 -8" />
        {/* eyes behind */}
        <path d="M118 158 a16 10 0 0 1 32 0 a16 10 0 0 1 -32 0 Z" />
        <circle cx="134" cy="158" r="4" fill="currentColor" />
        <path d="M250 158 a16 10 0 0 1 32 0 a16 10 0 0 1 -32 0 Z" />
        <circle cx="266" cy="158" r="4" fill="currentColor" />
        {/* brows */}
        <path d="M96 118 c 20 -8, 70 -8, 96 0" opacity="0.5" />
        <path d="M208 118 c 26 -8, 76 -8, 96 0" opacity="0.5" />
        {/* nose + the mustache */}
        <path d="M200 176 c -4 18, -8 28, -16 34" opacity="0.5" />
        <path d="M150 220 c 20 -12, 80 -12, 100 0 c -8 14, -34 20, -50 20 c -16 0, -42 -6, -50 -20 Z" />
        <path d="M150 220 c 20 -12, 80 -12, 100 0 c -8 14, -34 20, -50 20 c -16 0, -42 -6, -50 -20 Z" fill="url(#bcs-t3)" stroke="none" />
        <path d="M200 216 v24" opacity="0.5" />
        <path d="M160 222 c 14 -6, 30 -6, 40 -2 M240 222 c -14 -6, -30 -6, -40 -2" opacity="0.5" />
      </g>
    ),
  },

  "vacuum-shop": {
    label: "베스트 퀄리티 배큠 — 사라지는 남자",
    node: (
      <g>
        {/* sign */}
        <path d="M44 40 h312 v46 H44 Z" />
        <path d="M44 40 h312 v46 H44 Z" fill="url(#bcs-t1)" stroke="none" />
        <path d="M44 40 h312 v46 H44 Z" />
        <text x="200" y="64" fontSize="18" textAnchor="middle" fill="currentColor" stroke="none" fontFamily="Georgia, serif">
          BEST QUALITY
        </text>
        <text x="200" y="82" fontSize="15" textAnchor="middle" fill="currentColor" stroke="none" fontFamily="ui-monospace, monospace" letterSpacing="2">
          VACUUM
        </text>
        {/* counter */}
        <path d="M30 236 h340 v24 H30 Z" />
        <path d="M30 236 h340 v24 H30 Z" fill="url(#bcs-t2)" stroke="none" />
        {/* an upright vacuum cleaner */}
        <g transform="translate(150 110)">
          <path d="M-30 126 h100 v-18 a40 20 0 0 0 -100 0 Z" />
          <path d="M-30 126 h100 v-18 a40 20 0 0 0 -100 0 Z" fill="url(#bcs-t2)" stroke="none" />
          <path d="M-20 108 h80 v10 h-80 Z" />
          {/* body + bag */}
          <path d="M-2 90 c 0 -70, 6 -86, 10 -90 c 6 0, 8 2, 10 6 c 10 26, 8 60, 2 84 Z" />
          <path d="M-2 90 c 0 -70, 6 -86, 10 -90 c 6 0, 8 2, 10 6 c 10 26, 8 60, 2 84 Z" fill="url(#bcs-t1)" stroke="none" />
          <path d="M-2 40 h24 m-26 16 h26" opacity="0.4" />
          {/* handle */}
          <path d="M14 6 c 24 -4, 30 10, 30 30 v30" />
          <circle cx="44" cy="70" r="6" />
          {/* hose */}
          <path d="M44 90 c 26 6, 26 40, 2 54 c -20 12, -20 30, 0 36" opacity="0.6" />
        </g>
        {/* a cardboard box labelled with a destination */}
        <path d="M250 180 h90 v56 h-90 Z" />
        <path d="M250 180 l12 -14 h90 l-12 14 Z" fill="url(#bcs-t1)" stroke="none" />
        <path d="M250 180 l12 -14 h90 l-12 14 Z" />
        <path d="M340 180 l12 -14 v56 l-12 14 Z" fill="url(#bcs-t2)" stroke="none" />
        <path d="M340 180 l12 -14 v56" />
        <path d="M262 206 h64" opacity="0.5" />
        <path d="M278 196 h40 v4 h-40 Z" opacity="0.5" />
      </g>
    ),
  },

  "desert-horizon": {
    label: "뉴멕시코의 지평선",
    node: (
      <g>
        <circle cx="308" cy="86" r="26" opacity="0.55" />
        <path d="M282 86 h52" opacity="0.3" />
        <path d="M0 146 L54 116 L96 126 L140 100 L188 118 L232 96 L286 120 L336 108 L400 124" opacity="0.4" />
        {mesaLine(178)}
        {groundPlane(212)}
        <path d="M150 212 L20 300 M250 212 L380 300" />
        <path d="M150 212 L20 300 H380 L250 212 Z" fill="url(#bcs-t1)" stroke="none" />
        <path d="M200 220 v10 m0 14 v14 m0 18 v18 m0 22 v14" opacity="0.6" />
        <path d="M84 212 v-38 m-9 34 h18" opacity="0.6" />
        <path d="M128 208 v-26 m-7 23 h14" opacity="0.5" />
        <path d="M304 210 v-32 m-8 28 h16" opacity="0.6" />
        {saguaro(52, 240, 1.1)}
        {saguaro(348, 236, 0.85)}
        <path d="M262 238 c 10 -8, 24 -8, 34 0" opacity="0.4" />
        <path d="M108 66 c 5 -5, 10 -5, 14 0 c 4 -5, 9 -5, 14 0" opacity="0.5" />
        <path d="M138 52 c 4 -4, 8 -4, 11 0 c 3 -4, 7 -4, 11 0" opacity="0.4" />
      </g>
    ),
  },
};
