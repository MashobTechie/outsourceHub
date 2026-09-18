import { Section } from "@/components/Section";
import { SectionHeading, revealDelay } from "@/components/primitives";
import { steps } from "@/data/site";

export function Process() {
  return (
    <Section id="how-it-works">
      <div className="shell">
        <SectionHeading
          eyebrow="How it works"
          title="Four steps, and only one of them is yours."
          lede="You write a brief and run the interviews you would run anyway. Everything in between sits with us."
        />

        <ol className="mt-14 grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li
              key={step.number}
              className="reveal relative"
              style={revealDelay(i * 80)}
            >
              {/* Connector — drawn between cards on wide screens only. */}
              {i < steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute left-[3.25rem] top-5 hidden h-px w-[calc(100%-1.5rem)] bg-[linear-gradient(to_right,var(--color-line),transparent)] lg:block"
                />
              )}

              <span className="inline-flex size-10 items-center justify-center rounded-full border border-clay/25 bg-clay-soft font-display text-sm font-semibold text-clay">
                {step.number}
              </span>

              <h3 className="mt-5 text-lg font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
