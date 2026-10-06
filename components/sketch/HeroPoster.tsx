import { cn } from "@/lib/utils";

/**
 * The home-screen poster.
 *
 * Bespoke rather than a library motif: portrait, denser, and carrying the
 * mark. Same rules as every other plate — the scene is one colour, drawn with
 * `currentColor` strokes and the SketchDefs tonal ramp for shading. The only
 * concession to the show's palette is the plate furniture (the two corner
 * tiles and the wordmark), which prints in gold — the one accent the brief
 * reserves for poster lettering.
 *
 * The subject is the man himself: slicked part, heavy glasses, a loud wide
 * tie, an earpiece, and behind him the strip-mall sky with the inflatable
 * Liberty that stood on the office roof.
 */
export function HeroPoster({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 660"
      role="img"
      aria-label="베터 콜 사울 흑백 연필 드로잉 포스터"
      className={cn("block w-full text-foreground", className)}
    >
      <rect width="480" height="660" fill="hsl(var(--paper))" />
      <rect
        width="480"
        height="660"
        filter="url(#bcs-paper)"
        opacity="0.4"
        className="dark:hidden"
      />
      <rect
        width="480"
        height="660"
        filter="url(#bcs-fibre)"
        opacity="0.28"
        className="dark:hidden"
      />
      <rect
        width="480"
        height="660"
        filter="url(#bcs-paper-light)"
        opacity="0.17"
        className="hidden dark:block"
      />
      <rect
        width="480"
        height="660"
        filter="url(#bcs-fibre-light)"
        opacity="0.12"
        className="hidden dark:block"
      />

      {/* ── background: desert sky, mesas, strip mall, inflatable Liberty ── */}
      <g
        filter="url(#bcs-pencil)"
        stroke="currentColor"
        fill="none"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.6"
      >
        <circle cx="360" cy="126" r="30" opacity="0.7" />
        <path d="M330 126 h60" opacity="0.3" />
        <path d="M16 212 L64 176 L96 184 L132 152 L182 172 L226 150 L282 176 L332 160 L400 180 L464 168" opacity="0.5" />
        <path d="M16 250 L58 224 L92 228 L120 240 L166 210 L214 206 L240 228 L292 220 L330 200 L372 214 L414 206 L464 220" />
        <path
          d="M16 250 L58 224 L92 228 L120 240 L166 210 L214 206 L240 228 L292 220 L330 200 L372 214 L414 206 L464 220 V290 H16 Z"
          fill="url(#bcs-t1)"
          stroke="none"
        />
        {/* strip-mall roofline */}
        <path d="M16 290 h120 v-22 h150 v22 h178" />
        <path d="M16 290 h448 v26 H16 Z" fill="url(#bcs-t1)" stroke="none" />
        <path d="M60 290 v-16 h40 v16 M300 290 v-12 h44 v12" opacity="0.4" />
      </g>

      {/* the inflatable Liberty on the roof, small */}
      <g
        filter="url(#bcs-pencil-fine)"
        stroke="currentColor"
        fill="none"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.55"
        transform="translate(392 196) scale(0.42)"
      >
        <path d="M-14 160 c -6 -26, 4 -40, 0 -66 c -4 -20, 6 -30, 4 -52 l28 0 c -2 22, 8 32, 4 52 c -4 26, 6 40, 0 66 Z" />
        <circle cx="0" cy="22" r="18" />
        <path d="M0 4 v-12 M-12 8 l-6 -10 M12 8 l6 -10 M-18 18 l-14 -4 M18 18 l14 -4" />
        <path d="M12 16 c 16 -8, 28 -22, 34 -42" />
        <circle cx="46" cy="-28" r="6" />
      </g>

      {/* ── figure ────────────────────────────────────────────────────── */}
      <g
        filter="url(#bcs-pencil)"
        stroke="currentColor"
        fill="none"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* suit shoulders + jacket */}
        <path d="M70 660 C 76 556, 120 500, 192 480 L240 468 L288 480 C 360 500, 404 556, 410 660" />
        <path
          d="M70 660 C 76 556, 120 500, 192 480 L240 540 L214 660 Z"
          fill="url(#bcs-t1)"
          stroke="none"
        />
        <path
          d="M410 660 C 404 556, 360 500, 288 480 L240 540 L266 660 Z"
          fill="url(#bcs-t2)"
          stroke="none"
        />
        {/* lapels + pointed collar */}
        <path d="M192 480 L240 540 L288 480" />
        <path d="M206 486 L240 540 L274 486" opacity="0.6" />
        <path d="M192 480 C 182 528, 176 588, 172 660" opacity="0.4" />
        <path d="M288 480 C 298 528, 304 588, 308 660" opacity="0.4" />
        {/* shirt + loud wide tie */}
        <path d="M222 486 L240 512 L258 486" />
        <path d="M240 512 L218 560 L240 636 L262 560 Z" />
        <path d="M240 512 L218 560 L240 636 L262 560 Z" fill="url(#bcs-t3)" stroke="none" />
        <path d="M226 548 h28 M222 582 h36 M230 616 h20" opacity="0.5" />
        <path d="M232 506 l8 10 8 -10" />

        {/* neck */}
        <path d="M214 440 c 0 18, -2 30, -8 44 M266 440 c 0 18, 2 30, 8 44" />
        <path d="M210 462 c 16 14, 48 14, 60 0" fill="url(#bcs-t2)" stroke="none" />

        {/* jaw + skull */}
        <path d="M176 330 c -6 48, 6 86, 30 108 c 12 12, 22 18, 34 18 c 12 0, 22 -6, 34 -18 c 24 -22, 36 -60, 30 -108" />
        <path d="M180 338 c 8 44, 28 78, 60 78 c 32 0, 52 -34, 60 -78" opacity="0.3" />
        {/* clean-shaven cheek modelling */}
        <path d="M300 352 c 12 26, 8 58, -12 82" opacity="0.3" />
        <path d="M180 352 c -10 22, -8 48, 4 66" opacity="0.26" />
        <path
          d="M298 356 c 12 24, 8 54, -10 78 c -5 7, -12 12, -18 14 c 14 -24, 22 -56, 20 -84 Z"
          fill="url(#bcs-t2)"
          stroke="none"
        />

        {/* mouth + nose + chin */}
        <path d="M240 312 c -4 26, -10 42, -18 50 c 6 6, 20 6, 26 0" />
        <path d="M222 360 c 6 4, 14 5, 22 2" opacity="0.5" />
        <path d="M206 404 c 14 12, 54 12, 68 0" opacity="0.6" />
        <path d="M214 420 c 10 8, 42 8, 52 0" opacity="0.35" />

        {/* heavy rectangular glasses */}
        <path d="M150 300 h78 a8 8 0 0 1 8 8 v24 a12 12 0 0 1 -12 12 h-70 a12 12 0 0 1 -12 -12 v-24 a8 8 0 0 1 8 -8 Z" />
        <path d="M252 300 h78 a8 8 0 0 1 8 8 v24 a12 12 0 0 1 -12 12 h-70 a12 12 0 0 1 -12 -12 v-24 a8 8 0 0 1 8 -8 Z" />
        <path d="M236 310 c 4 -8, 8 -8, 16 0" />
        <path d="M142 306 l-24 -6 M338 306 l24 -6" />
        {/* eyes */}
        <path d="M168 322 c 8 -8, 28 -8, 36 0 c -8 8, -28 8, -36 0 Z" />
        <circle cx="186" cy="322" r="5" fill="currentColor" stroke="none" />
        <path d="M276 322 c 8 -8, 28 -8, 36 0 c -8 8, -28 8, -36 0 Z" />
        <circle cx="294" cy="322" r="5" fill="currentColor" stroke="none" />
        {/* brows */}
        <path d="M158 288 c 20 -8, 54 -8, 72 0" opacity="0.5" />
        <path d="M250 288 c 18 -8, 52 -8, 72 0" opacity="0.5" />

        {/* earpiece on the right ear */}
        <path d="M322 352 c 16 -2, 24 10, 22 24 c -2 12, -14 18, -24 14" opacity="0.7" />
        <path d="M330 360 h18 v26 h-18 Z" fill="url(#bcs-t3)" stroke="none" />
        <path d="M330 360 h18 v26 h-18 Z" />

        {/* slicked-back hair with a hard side part */}
        <path d="M156 300 c -6 -64, 34 -118, 86 -118 c 50 0, 86 46, 82 112" />
        <path d="M162 286 c 0 -56, 36 -96, 80 -96 c 42 0, 74 36, 78 92" opacity="0.5" />
        <path d="M196 196 c 24 -8, 60 -6, 84 10" opacity="0.55" />
        {/* combed strands */}
        <path d="M178 250 c 30 -30, 78 -40, 128 -26" opacity="0.4" />
        <path d="M172 276 c 34 -34, 92 -46, 142 -30" opacity="0.35" />
        <path d="M204 206 c 2 20, 0 40, -10 60" opacity="0.4" />
        {/* the part */}
        <path d="M214 196 c 8 20, 8 44, 2 66" />
        <path
          d="M156 300 c -6 -64, 34 -118, 86 -118 c 10 0, 20 2, 30 6 c -40 2, -74 30, -92 72 c -8 18, -14 30, -16 40 Z"
          fill="url(#bcs-t2)"
          stroke="none"
        />
      </g>

      {/* ── plate furniture: border, corner tiles, wordmark (gold) ────── */}
      <g
        filter="url(#bcs-pencil-fine)"
        stroke="hsl(var(--gold))"
        fill="none"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.9"
      >
        <rect x="16" y="16" width="448" height="628" opacity="0.32" />
        <rect x="25" y="25" width="430" height="610" opacity="0.18" />

        <g transform="translate(36 38)">
          <rect x="0" y="0" width="72" height="84" rx="3" opacity="0.85" />
          <text
            x="7"
            y="18"
            fontSize="12"
            fill="hsl(var(--gold))"
            stroke="none"
            fontFamily="ui-monospace, monospace"
          >
            79
          </text>
          <text
            x="36"
            y="57"
            fontSize="32"
            textAnchor="middle"
            fill="hsl(var(--gold))"
            stroke="none"
            fontFamily="Georgia, serif"
          >
            Au
          </text>
          <text
            x="36"
            y="74"
            fontSize="9"
            textAnchor="middle"
            fill="hsl(var(--gold))"
            stroke="none"
            fontFamily="Georgia, serif"
          >
            196.97
          </text>
        </g>

        <g transform="translate(372 38)">
          <rect x="0" y="0" width="72" height="84" rx="3" opacity="0.85" />
          <text
            x="7"
            y="18"
            fontSize="12"
            fill="hsl(var(--gold))"
            stroke="none"
            fontFamily="ui-monospace, monospace"
          >
            §
          </text>
          <text
            x="36"
            y="57"
            fontSize="32"
            textAnchor="middle"
            fill="hsl(var(--gold))"
            stroke="none"
            fontFamily="Georgia, serif"
          >
            Sa
          </text>
          <text
            x="36"
            y="74"
            fontSize="9"
            textAnchor="middle"
            fill="hsl(var(--gold))"
            stroke="none"
            fontFamily="Georgia, serif"
          >
            esq.
          </text>
        </g>

        <text
          x="240"
          y="614"
          fontSize="42"
          textAnchor="middle"
          fill="hsl(var(--gold))"
          stroke="none"
          fontFamily="Georgia, serif"
          letterSpacing="16"
          opacity="0.95"
        >
          BCS
        </text>
        <path d="M150 628 h180" opacity="0.3" />
      </g>
    </svg>
  );
}
