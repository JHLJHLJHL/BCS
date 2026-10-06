import { cn } from "@/lib/utils";

/**
 * The BCS mark — two periodic-table cells dealt like a pair of cards: a faint
 * [Au] (gold, the show's one warm colour) behind a solid [Sa] monogram. "Sa"
 * is a law-office monogram in the show's periodic-tile idiom, not a chemistry
 * claim, so it carries a legal section mark (§) where an element would print
 * its atomic number. Mirrors app/icon.svg so the in-app mark and the favicon
 * read as one object.
 */
export function BrandIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      role="img"
      aria-label="BCS"
      className={cn("text-foreground", className)}
    >
      <g
        filter="url(#bcs-pencil-fine)"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect
          x="6.5"
          y="7.5"
          width="31"
          height="33"
          rx="3"
          strokeWidth="2.2"
          opacity="0.5"
        />
        <rect
          x="27.5"
          y="24.5"
          width="31"
          height="33"
          rx="3"
          strokeWidth="2.2"
          fill="hsl(var(--background))"
        />
        <path d="M12 36.5h20M33 53.5h20" strokeWidth="1.1" opacity="0.5" />
      </g>
      <g
        filter="url(#bcs-pencil-fine)"
        stroke="none"
        fontFamily="Georgia, 'Times New Roman', serif"
        textAnchor="middle"
      >
        <text x="22" y="30" fontSize="15" fill="hsl(var(--gold))" opacity="0.7">
          Au
        </text>
        <text x="43" y="47" fontSize="17" fill="hsl(var(--gold))">
          Sa
        </text>
      </g>
      <g
        filter="url(#bcs-pencil-fine)"
        fill="hsl(var(--gold))"
        stroke="none"
        fontFamily="ui-monospace, monospace"
        fontSize="6"
        opacity="0.8"
      >
        <text x="9.5" y="16" opacity="0.7">
          79
        </text>
        <text x="30.5" y="33">§</text>
      </g>
    </svg>
  );
}
