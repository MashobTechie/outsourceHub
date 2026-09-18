import { Section } from "@/components/Section";
import { SectionHeading, revealDelay } from "@/components/primitives";
import { benefits } from "@/data/site";

export function Why() {
  return (
    <Section id="why" className="border-y border-line bg-bone-2">
      <div className="shell grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <SectionHeading
          eyebrow="Why us"
          title={
            <>
              The real question is
              <br className="hidden sm:block" /> whether they stay.
            </>
          }
          lede="Anyone can send you CVs. The cost of outsourcing shows up six months later, when the person you trained leaves and the search starts again."
          className="lg:sticky lg:top-28 lg:self-start"
        />

        <ul className="grid gap-x-8 gap-y-9 sm:grid-cols-2">
          {benefits.map((item, i) => (
            <li key={item.title} className="reveal" style={revealDelay(i * 70)}>
              <div className="h-px w-10 bg-clay" />
              <h3 className="mt-5 text-lg font-semibold text-ink">
                {item.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
