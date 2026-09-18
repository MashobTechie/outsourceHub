import { Section } from "@/components/Section";
import { Check, Minus } from "@/components/icons";
import { SectionHeading, revealDelay } from "@/components/primitives";
import { contrastRows } from "@/data/site";

export function Contrast() {
  return (
    <Section id="compare">
      <div className="shell">
        <SectionHeading
          eyebrow="The difference"
          title="Same role. Two very different quarters."
          lede="Nothing here is a knock on hiring locally. It is just what the two processes cost you in time, money and attention."
        />

        <div className="mt-14 overflow-hidden rounded-3xl border border-line bg-paper">
          {/* Column headers — hidden on small screens, where each row stacks. */}
          <div className="hidden border-b border-line bg-bone-2 md:grid md:grid-cols-[1fr_1fr_1fr]">
            <div className="p-5" />
            <div className="border-l border-line p-5">
              <p className="text-sm font-semibold text-muted">
                Hiring locally
              </p>
            </div>
            <div className="border-l border-line bg-clay-tint p-5">
              <p className="text-sm font-semibold text-clay">
                Through outsource.hub
              </p>
            </div>
          </div>

          <ul>
            {contrastRows.map((row, i) => (
              <li
                key={row.label}
                className="reveal border-b border-line-2 last:border-b-0 md:grid md:grid-cols-[1fr_1fr_1fr]"
                style={revealDelay(i * 60)}
              >
                <div className="px-5 pt-5 pb-2 md:py-6">
                  <p className="text-sm font-semibold text-ink">{row.label}</p>
                </div>

                <div className="flex gap-3 px-5 py-2 md:border-l md:border-line md:py-6">
                  <Minus className="mt-0.5 size-4 shrink-0 text-muted-2" />
                  <p className="text-sm leading-relaxed text-muted">
                    {row.without}
                  </p>
                </div>

                <div className="flex gap-3 bg-clay-tint/60 px-5 py-4 md:border-l md:border-line md:py-6">
                  <Check className="mt-0.5 size-4 shrink-0 text-clay" />
                  <p className="text-sm leading-relaxed text-ink-2">
                    {row.with}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
