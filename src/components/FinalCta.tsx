import { Section } from "@/components/Section";
import { ButtonLink, Eyebrow } from "@/components/primitives";
import { whatsappLink } from "@/data/site";

export function FinalCta() {
  return (
    <Section className="bg-ink !py-20 md:!py-28">
      <div className="shell relative overflow-hidden">
        <div
          aria-hidden="true"
          className="animate-sheen pointer-events-none absolute -right-24 -top-32 size-[28rem] rounded-full bg-[radial-gradient(circle,rgba(217,102,63,0.28),transparent_65%)] blur-2xl"
        />

        <div className="relative max-w-2xl">
          <div className="reveal">
            <Eyebrow tone="dark">Next step</Eyebrow>
          </div>
          <h2 className="reveal mt-4 text-3xl leading-[1.12] text-bone sm:text-4xl lg:text-[2.75rem]">
            The role is still open. Let&rsquo;s close it.
          </h2>
          <p className="reveal mt-5 text-lg leading-relaxed text-bone/70">
            Send us a brief today and we will come back with a shortlist worth
            your interview time.
          </p>

          <div className="reveal mt-9 flex flex-wrap gap-3">
            <ButtonLink href="#contact" variant="onDark" withArrow>
              Tell us the role
            </ButtonLink>
            <ButtonLink
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              variant="ghostDark"
            >
              Message us on WhatsApp
            </ButtonLink>
          </div>
        </div>
      </div>
    </Section>
  );
}
