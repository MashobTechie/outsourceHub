import { Section } from "@/components/Section";
import { assuranceIcons } from "@/components/icons";
import { revealDelay } from "@/components/primitives";
import { assurances, claims, clientLogos } from "@/data/site";

/** Only stated once a real window is confirmed — see `claims` in site.ts. */
function replacementNote() {
  if (!claims.replacementDays) return null;
  return `Replacements are free within ${claims.replacementDays} days of a start date.`;
}

export function Trust() {
  const note = replacementNote();

  return (
    <Section className="border-y border-line bg-bone-2 py-16! md:py-20!">
      <div className="shell">
        <ul className="grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
          {assurances.map((item, i) => {
            const Icon = assuranceIcons[item.icon];
            return (
              <li key={item.title} className="reveal" style={revealDelay(i * 70)}>
                <Icon className="size-5 text-clay" />
                <h3 className="mt-4 text-base font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.body}
                  {item.icon === "repeat" && note ? ` ${note}` : ""}
                </p>
              </li>
            );
          })}
        </ul>

        <div className="reveal mt-14 border-t border-line pt-8">
          {clientLogos.length > 0 ? (
            <>
              <p className="text-center text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-muted-2">
                Teams we have hired for
              </p>
              <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
                {clientLogos.map((logo) => (
                  <li key={logo.name}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={logo.src}
                      alt={logo.name}
                      loading="lazy"
                      className="h-7 w-auto opacity-55 grayscale transition-opacity duration-300 hover:opacity-90"
                    />
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p className="text-center text-sm text-muted">
              References and examples of placements we have made are available on
              request &mdash;{" "}
              <a
                href="#contact"
                className="font-medium text-clay underline decoration-clay/30 underline-offset-4 transition-colors hover:decoration-clay"
              >
                just ask when you send your brief
              </a>
              .
            </p>
          )}
        </div>
      </div>
    </Section>
  );
}
