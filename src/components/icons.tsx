import type { SVGProps } from "react";

import type { RoleGroupKey } from "@/data/site";

/**
 * Hand-rolled 24px / 1.5-stroke set. No icon dependency: the page uses a dozen
 * glyphs, and a library would ship several hundred.
 */
type IconProps = SVGProps<SVGSVGElement>;

function Icon({ children, ...rest }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {children}
    </svg>
  );
}

export const ArrowRight = (p: IconProps) => (
  <Icon {...p}>
    <path d="M4 12h15" />
    <path d="m13 6 6 6-6 6" />
  </Icon>
);

export const Check = (p: IconProps) => (
  <Icon {...p}>
    <path d="m4.5 12.5 5 5 10-11" />
  </Icon>
);

export const Minus = (p: IconProps) => (
  <Icon {...p}>
    <path d="M6 12h12" />
  </Icon>
);

export const Shield = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 3 5 6v6c0 4.2 2.9 7.6 7 9 4.1-1.4 7-4.8 7-9V6l-7-3Z" />
    <path d="m9.2 12.2 2 2 3.6-4" />
  </Icon>
);

export const Clock = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </Icon>
);

export const FileText = (p: IconProps) => (
  <Icon {...p}>
    <path d="M14 3H7a1.5 1.5 0 0 0-1.5 1.5v15A1.5 1.5 0 0 0 7 21h10a1.5 1.5 0 0 0 1.5-1.5V7.5L14 3Z" />
    <path d="M13.75 3.2V8h4.8" />
    <path d="M9 13h6M9 16.5h4" />
  </Icon>
);

export const Repeat = (p: IconProps) => (
  <Icon {...p}>
    <path d="M4 9.5A3.5 3.5 0 0 1 7.5 6H19" />
    <path d="m16 3 3 3-3 3" />
    <path d="M20 14.5a3.5 3.5 0 0 1-3.5 3.5H5" />
    <path d="m8 21-3-3 3-3" />
  </Icon>
);

export const Code = (p: IconProps) => (
  <Icon {...p}>
    <path d="m8.5 8.5-4 3.5 4 3.5" />
    <path d="m15.5 8.5 4 3.5-4 3.5" />
    <path d="m13.5 5.5-3 13" />
  </Icon>
);

export const Palette = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 3.5a8.5 8.5 0 0 0 0 17c1.1 0 1.8-.8 1.8-1.7 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.2 0-.9.8-1.7 1.7-1.7h1.3a4.7 4.7 0 0 0 4.7-4.7C20.5 6.4 16.7 3.5 12 3.5Z" />
    <circle cx="8" cy="10" r="1" fill="currentColor" stroke="none" />
    <circle cx="12" cy="7.8" r="1" fill="currentColor" stroke="none" />
    <circle cx="16" cy="10" r="1" fill="currentColor" stroke="none" />
  </Icon>
);

export const Megaphone = (p: IconProps) => (
  <Icon {...p}>
    <path d="M4 10v4a1.5 1.5 0 0 0 1.5 1.5H8l7 4V6l-7 4H5.5A1.5 1.5 0 0 0 4 11.5Z" />
    <path d="M18 9.5a3.5 3.5 0 0 1 0 5" />
    <path d="M8 15.5V20" />
  </Icon>
);

export const Headset = (p: IconProps) => (
  <Icon {...p}>
    <path d="M5 13v-1a7 7 0 0 1 14 0v1" />
    <path d="M5 13h1.8a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H6a2 2 0 0 1-2-2v-2a1 1 0 0 1 1-1Z" />
    <path d="M19 13h-1.8a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1H18a2 2 0 0 0 2-2v-2a1 1 0 0 0-1-1Z" />
    <path d="M18 18.5v.5a2 2 0 0 1-2 2h-3" />
  </Icon>
);

export const ChartBar = (p: IconProps) => (
  <Icon {...p}>
    <path d="M4 20h16" />
    <path d="M7 20v-6M12 20V6M17 20v-9" />
  </Icon>
);

export const Calculator = (p: IconProps) => (
  <Icon {...p}>
    <rect x="5" y="3" width="14" height="18" rx="2" />
    <path d="M8.5 7.5h7" />
    <path d="M9 12h.01M12 12h.01M15 12h.01M9 16h.01M12 16h.01M15 16h.01" />
  </Icon>
);

export const Users = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="9.5" cy="8.5" r="3" />
    <path d="M4 19c0-2.8 2.5-4.5 5.5-4.5S15 16.2 15 19" />
    <path d="M16 6.2a3 3 0 0 1 0 5.6" />
    <path d="M17.5 14.9c1.6.6 2.5 1.9 2.5 4.1" />
  </Icon>
);

export const Globe = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M3.5 12h17" />
    <path d="M12 3.5c2.2 2.3 3.3 5.2 3.3 8.5S14.2 18.2 12 20.5c-2.2-2.3-3.3-5.2-3.3-8.5S9.8 5.8 12 3.5Z" />
  </Icon>
);

export const Mail = (p: IconProps) => (
  <Icon {...p}>
    <rect x="3" y="5.5" width="18" height="13" rx="2" />
    <path d="m4 7 8 5.5L20 7" />
  </Icon>
);

export const WhatsApp = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M12.05 2C6.6 2 2.2 6.4 2.2 11.85c0 1.74.46 3.44 1.32 4.94L2 22l5.35-1.4a9.8 9.8 0 0 0 4.7 1.2h.01c5.44 0 9.85-4.4 9.85-9.85A9.78 9.78 0 0 0 19 4.88 9.78 9.78 0 0 0 12.05 2Zm0 18.05a8.2 8.2 0 0 1-4.17-1.14l-.3-.18-3.1.81.83-3.02-.2-.31a8.15 8.15 0 0 1-1.25-4.36c0-4.52 3.68-8.2 8.2-8.2a8.15 8.15 0 0 1 8.19 8.2c0 4.52-3.68 8.2-8.2 8.2Zm4.5-6.14c-.25-.13-1.46-.72-1.69-.8-.22-.08-.39-.13-.55.12-.17.25-.63.8-.78.96-.14.17-.28.19-.53.06a6.7 6.7 0 0 1-1.97-1.22 7.4 7.4 0 0 1-1.37-1.7c-.14-.25-.01-.38.11-.5.11-.12.25-.29.37-.44.12-.15.16-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47a.9.9 0 0 0-.65.3c-.22.25-.86.84-.86 2.04s.88 2.37 1 2.53c.13.17 1.73 2.64 4.2 3.7.58.26 1.04.4 1.4.51.59.19 1.13.16 1.55.1.47-.07 1.46-.6 1.66-1.17.21-.58.21-1.07.15-1.17-.06-.11-.23-.17-.48-.3Z" />
  </svg>
);

export const LinkedIn = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M6.94 5.5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.4 8.9h3.2V21H3.4V8.9Zm5.6 0h3.07v1.65h.04a3.37 3.37 0 0 1 3.03-1.66c3.24 0 3.84 2.13 3.84 4.9V21h-3.2v-5.5c0-1.31-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21H9V8.9Z" />
  </svg>
);

export const XMark = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M17.3 3h3.3l-7.2 8.2L21.9 21h-6.6l-5.2-6.7L4.2 21H.9l7.7-8.8L.4 3H7l4.7 6.2L17.3 3Zm-1.2 16h1.8L7.9 4.8H6L16.1 19Z" />
  </svg>
);

export const Instagram = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M12 2.9c3 0 3.3 0 4.5.07 1.1.05 1.7.24 2.1.4.5.2.9.45 1.3.85.4.4.65.8.85 1.3.16.4.35 1 .4 2.1.06 1.2.07 1.5.07 4.5s0 3.3-.07 4.5c-.05 1.1-.24 1.7-.4 2.1-.2.5-.45.9-.85 1.3-.4.4-.8.65-1.3.85-.4.16-1 .35-2.1.4-1.2.06-1.5.07-4.5.07s-3.3 0-4.5-.07c-1.1-.05-1.7-.24-2.1-.4-.5-.2-.9-.45-1.3-.85-.4-.4-.65-.8-.85-1.3-.16-.4-.35-1-.4-2.1C2.9 15.3 2.9 15 2.9 12s0-3.3.07-4.5c.05-1.1.24-1.7.4-2.1.2-.5.45-.9.85-1.3.4-.4.8-.65 1.3-.85.4-.16 1-.35 2.1-.4C8.7 2.9 9 2.9 12 2.9Zm0 1.98c-2.95 0-3.3.01-4.46.06-.86.04-1.33.19-1.64.31-.41.16-.7.35-1.01.66-.31.31-.5.6-.66 1.01-.12.31-.27.78-.31 1.64-.05 1.16-.06 1.51-.06 4.44s.01 3.28.06 4.44c.04.86.19 1.33.31 1.64.16.41.35.7.66 1.01.31.31.6.5 1.01.66.31.12.78.27 1.64.31 1.16.05 1.51.06 4.46.06s3.3-.01 4.46-.06c.86-.04 1.33-.19 1.64-.31.41-.16.7-.35 1.01-.66.31-.31.5-.6.66-1.01.12-.31.27-.78.31-1.64.05-1.16.06-1.51.06-4.44s-.01-3.28-.06-4.44c-.04-.86-.19-1.33-.31-1.64a2.72 2.72 0 0 0-.66-1.01 2.72 2.72 0 0 0-1.01-.66c-.31-.12-.78-.27-1.64-.31-1.16-.05-1.51-.06-4.46-.06Zm0 3.37a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5Zm0 6.19a2.44 2.44 0 1 0 0-4.88 2.44 2.44 0 0 0 0 4.88Zm4.78-6.34a.88.88 0 1 1-1.75 0 .88.88 0 0 1 1.75 0Z" />
  </svg>
);

export const Menu = (p: IconProps) => (
  <Icon {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Icon>
);

export const Close = (p: IconProps) => (
  <Icon {...p}>
    <path d="m6 6 12 12M18 6 6 18" />
  </Icon>
);

export const roleIcons: Record<
  RoleGroupKey,
  (p: IconProps) => React.ReactElement
> = {
  engineering: Code,
  design: Palette,
  growth: Megaphone,
  support: Headset,
  data: ChartBar,
  finance: Calculator,
};

export const assuranceIcons = {
  shield: Shield,
  clock: Clock,
  file: FileText,
  repeat: Repeat,
} as const;
