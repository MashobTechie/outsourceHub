import { Section } from "@/components/Section";
import { roleIcons } from "@/components/icons";
import { SectionHeading, revealDelay } from "@/components/primitives";
import { roleGroups } from "@/data/site";

export function Roles() {
  return (
    <Section id="roles" className="border-y border-line bg-bone-2">
      <div className="shell">
        <SectionHeading
          eyebrow="Who we place"
          title="The roles you have been trying to fill."
          lede="Individual hires or a whole function. If the role is not listed, ask — the network is wider than the page."
        />

        <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {roleGroups.map((group, i) => {
            const Icon = roleIcons[group.key];
            return (
              <li
                key={group.key}
                className="reveal group flex flex-col rounded-2xl border border-line bg-paper p-7 transition-[border-color,box-shadow,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-clay/35 hover:shadow-[0_18px_40px_-28px_rgba(28,25,23,0.4)]"
                style={revealDelay((i % 3) * 70)}
              >
                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-clay-soft text-clay transition-colors duration-300 group-hover:bg-clay group-hover:text-white">
                  <Icon className="size-5" />
                </span>

                <h3 className="mt-5 text-lg font-semibold text-ink">
                  {group.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">
                  {group.blurb}
                </p>

                <ul className="mt-5 flex flex-wrap gap-1.5 border-t border-line-2 pt-5">
                  {group.roles.map((role) => (
                    <li
                      key={role}
                      className="rounded-full border border-line bg-bone px-2.5 py-1 text-xs font-medium text-muted"
                    >
                      {role}
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
