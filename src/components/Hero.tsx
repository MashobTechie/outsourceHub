import { HeroVisual } from "@/components/HeroVisual";
import { Section } from "@/components/Section";
import { ButtonLink, Eyebrow, revealDelay } from "@/components/primitives";
import { claims } from "@/data/site";

/**
 * The shortlist promise flexes on real data: put a number in
 * `claims.shortlistDays` and the specific sentence turns on. Until then it
 * stays qualitative rather than inventing a figure.
 */
function shortlistLine() {
  return claims.shortlistDays
    ? `Shortlists in ${claims.shortlistDays} business days.`
    : "Shortlists in days, not months.";
}

export function Hero() {
  return (
    <Section id="top" className="relative overflow-hidden pt-14! md:pt-20!">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-152 bg-[radial-gradient(70%_50%_at_50%_0%,rgba(239,233,221,0.9),transparent_75%)]"
      />

      <div className="shell grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
        <div>
          <div className="reveal">
            <Eyebrow>Vetted talent, matched to your hours</Eyebrow>
          </div>

          <h1
            className="reveal mt-5 text-[2.75rem] leading-[1.05] sm:text-6xl lg:text-[4.25rem]"
            style={revealDelay(70)}
          >
            The shortlist you
            <br />
            actually wanted.
          </h1>

          <p
            className="reveal mt-7 max-w-xl text-lg leading-relaxed text-muted sm:text-xl"
            style={revealDelay(140)}
          >
            Engineers, designers, marketers and operators &mdash; screened,
            reference-checked and matched to the hours you work. You run the
            work. We handle everything around it.
          </p>

          <div
            className="reveal mt-9 flex flex-wrap items-center gap-3"
            style={revealDelay(210)}
          >
            <ButtonLink href="#contact" withArrow>
              Tell us the role
            </ButtonLink>
            <ButtonLink href="#roles" variant="secondary">
              See who we place
            </ButtonLink>
          </div>

          <p
            className="reveal mt-7 text-sm text-muted-2"
            style={revealDelay(280)}
          >
            {shortlistLine()} No fee until you hire.
          </p>
        </div>

        <div className="reveal" style={revealDelay(180)}>
          <HeroVisual />
        </div>
      </div>
    </Section>
  );
}
