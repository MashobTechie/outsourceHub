import { Clock } from "@/components/icons";
import { cx } from "@/components/primitives";

/**
 * Coverage, expressed as hours rather than places.
 *
 * Deliberately geography-free: the page does not claim a region, so neither
 * does the chart. Each bar is a working-day pattern plotted on a 24-hour local
 * axis, so what it shows is a shape you can choose, not a statistic to defend.
 */
const AXIS_START = 0;
const AXIS_END = 24;
const SPAN = AXIS_END - AXIS_START;

const pct = (hour: number) => ((hour - AXIS_START) / SPAN) * 100;

const patterns = [
  {
    label: "Standard day",
    detail: "09:00 – 17:00",
    start: 9,
    end: 17,
    accent: true,
  },
  {
    label: "Extended cover",
    detail: "08:00 – 20:00",
    start: 8,
    end: 20,
    accent: false,
  },
  {
    label: "Around the clock",
    detail: "Shifted handover",
    start: 0,
    end: 24,
    accent: false,
  },
];

export function HeroVisual() {
  return (
    <div className="relative">
      {/* Ambient warmth behind the card. */}
      <div
        aria-hidden="true"
        className="animate-sheen absolute -inset-10 -z-10 rounded-[3rem] bg-[radial-gradient(60%_60%_at_70%_30%,rgba(180,72,42,0.16),transparent_70%)] blur-2xl"
      />

      <div className="rounded-3xl border border-line bg-paper p-6 shadow-[0_1px_2px_rgba(28,25,23,0.04),0_28px_60px_-32px_rgba(28,25,23,0.28)] sm:p-8">
        <div className="flex items-center gap-2.5">
          <Clock className="size-4 text-clay" />
          <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-muted-2">
            Whatever hours you keep
          </p>
        </div>

        <p className="mt-4 font-display text-xl leading-snug text-ink">
          We hire to your window, not ours.
        </p>

        <div className="mt-7 space-y-5">
          {patterns.map((pattern) => (
            <div key={pattern.label}>
              <div className="flex items-baseline justify-between text-sm">
                <span className="font-medium text-ink-2">{pattern.label}</span>
                <span className="text-xs tabular-nums text-muted-2">
                  {pattern.detail}
                </span>
              </div>
              <div className="relative mt-2 h-2.5 overflow-hidden rounded-full bg-sand">
                <div
                  className={cx(
                    "absolute inset-y-0 rounded-full",
                    pattern.accent ? "bg-clay" : "bg-ink/25",
                  )}
                  style={{
                    left: `${pct(pattern.start)}%`,
                    width: `${pct(pattern.end) - pct(pattern.start)}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between text-[0.6875rem] tabular-nums text-muted-2">
          <span>00:00</span>
          <span>Your local time</span>
          <span>24:00</span>
        </div>

        <p className="mt-5 border-t border-line-2 pt-5 text-sm leading-relaxed text-muted">
          Tell us the hours the role needs covered and we shortlist against them.
          Overlap is a hiring requirement here, not something you hope for after
          someone starts.
        </p>
      </div>

      {/* Floating chips — decorative, and the only motion on the page. */}
      <div
        aria-hidden="true"
        className="animate-drift absolute -left-4 -top-5 hidden rounded-full border border-line bg-paper px-4 py-2 text-xs font-medium text-ink-2 shadow-[0_10px_30px_-18px_rgba(28,25,23,0.5)] sm:block"
      >
        Standups, live
      </div>
      <div
        aria-hidden="true"
        className="animate-drift absolute -bottom-5 -right-3 hidden rounded-full border border-line bg-paper px-4 py-2 text-xs font-medium text-ink-2 shadow-[0_10px_30px_-18px_rgba(28,25,23,0.5)] [animation-delay:1.6s] sm:block"
      >
        Same-day answers
      </div>
    </div>
  );
}
