import { Logo } from "@/components/Logo";
import { Instagram, LinkedIn, XMark } from "@/components/icons";
import { navLinks, site } from "@/data/site";

const socialIcons = {
  linkedin: { Icon: LinkedIn, label: "LinkedIn" },
  x: { Icon: XMark, label: "X" },
  instagram: { Icon: Instagram, label: "Instagram" },
} as const;

export function Footer() {
  // Unset socials are null, not "#" — filter them out rather than ship dead links.
  const socials = Object.entries(site.socials).filter(([, href]) =>
    Boolean(href),
  ) as [keyof typeof socialIcons, string][];

  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="shell py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Logo tone="dark" />
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              {site.description}
            </p>
          </div>

          <nav aria-label="Footer" className="md:pt-1">
            <ul className="grid grid-cols-2 gap-x-12 gap-y-3 sm:grid-cols-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="text-sm text-white/60">
            <p className="font-medium text-white/85">Get in touch</p>
            <p className="mt-3">
              <a
                href={`mailto:${site.email}`}
                className="transition-colors duration-200 hover:text-white"
              >
                {site.email}
              </a>
            </p>
            <p className="mt-1.5">{site.whatsappDisplay}</p>
            <p className="mt-1.5">{site.location}</p>

            {socials.length > 0 && (
              <ul className="mt-5 flex gap-3">
                {socials.map(([key, href]) => {
                  const { Icon, label } = socialIcons[key];
                  return (
                    <li key={key}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="inline-flex size-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors duration-200 hover:border-white/40 hover:text-white"
                      >
                        <Icon className="size-4" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-xs text-white/55">
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
