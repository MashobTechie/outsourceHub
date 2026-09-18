import { RoleForm } from "@/components/RoleForm";
import { Section } from "@/components/Section";
import { Mail, WhatsApp } from "@/components/icons";
import { SectionHeading } from "@/components/primitives";
import { site, whatsappLink } from "@/data/site";

export function Contact() {
  return (
    <Section id="contact">
      <div className="shell grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Talk to us"
            title="Tell us the role."
            lede="A paragraph is enough to start. We will come back with questions, and a shortlist after that."
          />

          <ul className="reveal mt-10 space-y-3">
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-line bg-paper p-4 transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-clay/40"
              >
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-clay-soft text-clay">
                  <WhatsApp className="size-5" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-ink">
                    WhatsApp
                  </span>
                  <span className="block text-sm text-muted">
                    {site.whatsappDisplay}
                  </span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="group flex items-center gap-4 rounded-2xl border border-line bg-paper p-4 transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-clay/40"
              >
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-clay-soft text-clay">
                  <Mail className="size-5" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-ink">
                    Email
                  </span>
                  <span className="block text-sm text-muted">{site.email}</span>
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div className="reveal">
          <RoleForm />
        </div>
      </div>
    </Section>
  );
}
