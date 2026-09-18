/**
 * outsource.hub — single source of truth for copy, links and contact details.
 *
 * Every value that is not yet confirmed is marked PLACEHOLDER below, so
 *     grep -rn PLACEHOLDER src/
 * prints exactly what is still outstanding before launch. As each real value
 * arrives, replace the PLACEHOLDER comment with a descriptive one — the token
 * count is the remaining-work count.
 */

export const site = {
  name: "outsource.hub",
  tagline: "Your next hire, already vetted.",
  description:
    "outsource.hub places vetted professionals with the companies that need them: engineers, designers, marketers and operators, screened, reference-checked and matched to the hours you actually work.",

  /** PLACEHOLDER — digits only, including country code. This is what wa.me expects. */
  whatsappNumber: "2340000000000",
  /** PLACEHOLDER — the same number, formatted for display. */
  whatsappDisplay: "+234 000 000 0000",
  /** PLACEHOLDER — the real inbox that briefs should land in. */
  email: "hello@outsourcehub.com",
  /** PLACEHOLDER — where the team is based, shown in the footer. */
  location: "Lagos, Nigeria",

  /**
   * Hidden until real profile URLs exist — a link to "#" is a dead link.
   * Set a value to the full profile URL and it appears in the footer.
   */
  socials: {
    linkedin: null,
    x: null,
    instagram: null,
  } as Record<string, string | null>,
} as const;

/**
 * Numeric claims. Nothing here is invented: every field is null until the real
 * figure is confirmed, and each component falls back to qualitative copy when
 * it is. Putting a number in below turns the stronger sentence on automatically.
 */
export const claims = {
  /** PLACEHOLDER — real median time to first shortlist, in business days. */
  shortlistDays: null as number | null,
  /** PLACEHOLDER — hours of overlap with a US/EU working day. */
  overlapHours: null as number | null,
  /** PLACEHOLDER — free-replacement window, in days. */
  replacementDays: null as number | null,
  /** PLACEHOLDER — share of applicants who make it through vetting, e.g. 4 for "top 4%". */
  acceptanceRatePct: null as number | null,
};

export const navLinks = [
  { label: "Roles", href: "#roles" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Why us", href: "#why" },
  { label: "Talk to us", href: "#contact" },
] as const;

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${site.whatsappNumber}`;
  const text =
    message ?? `Hi ${site.name}, I'd like to talk about hiring through you.`;
  return `${base}?text=${encodeURIComponent(text)}`;
}

/**
 * Client logos. Nothing is invented here — the rail only renders once real
 * marks exist. Drop files in `public/logos/` and add `{ name, src }` entries.
 */
export const clientLogos: { name: string; src: string }[] = [];

export type RoleGroupKey =
  | "engineering"
  | "design"
  | "growth"
  | "support"
  | "data"
  | "finance";

export const roleGroups: {
  key: RoleGroupKey;
  title: string;
  blurb: string;
  roles: string[];
}[] = [
  {
    key: "engineering",
    title: "Engineering",
    blurb:
      "Product engineers who ship against a roadmap, not ticket-takers waiting to be told what to build.",
    roles: [
      "Frontend",
      "Backend",
      "Full-stack",
      "Mobile",
      "DevOps / SRE",
      "QA",
    ],
  },
  {
    key: "design",
    title: "Design",
    blurb:
      "Designers who can hold a design system together and defend a decision in a product review.",
    roles: ["Product / UX", "UI & design systems", "Brand", "Motion"],
  },
  {
    key: "growth",
    title: "Growth & Marketing",
    blurb:
      "Operators who own a channel end to end and report on it in numbers you can audit.",
    roles: ["Performance", "Content & SEO", "Lifecycle", "Social"],
  },
  {
    key: "support",
    title: "Operations & Support",
    blurb:
      "The people who keep the day running: queues cleared, customers answered, process documented.",
    roles: [
      "Customer support",
      "Executive assistance",
      "Community",
      "Ops coordination",
    ],
  },
  {
    key: "data",
    title: "Data",
    blurb:
      "Analysts and engineers who turn a warehouse nobody trusts into reporting the team actually opens.",
    roles: ["Analytics", "Data engineering", "BI & reporting"],
  },
  {
    key: "finance",
    title: "Finance & Admin",
    blurb: "Back-office depth without adding another full-time head to payroll.",
    roles: ["Bookkeeping", "Accounts payable", "Payroll admin", "Reporting"],
  },
];

/** The trust strip. Deliberately qualitative — no unverified numbers. */
export const assurances = [
  {
    icon: "shield" as const,
    title: "Vetted before you meet them",
    body: "Every candidate clears a skills assessment and reference checks. You only spend interview time on people who already passed.",
  },
  {
    icon: "clock" as const,
    title: "Your working day, covered",
    body: "We shortlist against the hours the role needs covered, so the overlap is there from day one. Standups happen live, not overnight.",
  },
  {
    icon: "file" as const,
    title: "Written terms, not handshakes",
    body: "Clear contracts, defined notice periods and IP that belongs to you from day one. Nothing important lives in a chat thread.",
  },
  {
    icon: "repeat" as const,
    title: "If it isn't working, we replace them",
    body: "A bad fit is our problem to solve, not yours to absorb. We start the search again at no extra cost.",
  },
];

/** The "hiring locally vs. through the hub" contrast rows. */
export const contrastRows = [
  {
    label: "Time to first shortlist",
    without: "Weeks of sourcing before a single qualified CV lands",
    with: "A shortlist of pre-vetted candidates, already interested",
  },
  {
    label: "Cost per senior hire",
    without: "Full market rate, plus agency fees on top",
    with: "Senior-level depth at a rate that survives a budget review",
  },
  {
    label: "Screening burden",
    without: "Your team runs every first-round interview themselves",
    with: "We screen. You meet the last three, not the first thirty",
  },
  {
    label: "When someone leaves",
    without: "Back to the start, with the role open for months",
    with: "We restart the search under the existing agreement",
  },
  {
    label: "Admin overhead",
    without: "New contracts, new onboarding, new invoicing each time",
    with: "One agreement, one point of contact, one invoice",
  },
];

export const steps = [
  {
    number: "01",
    title: "Tell us the role",
    body: "A short brief is enough: what the person will own, the stack or tools, and the seniority you need. We come back with questions, not a template.",
  },
  {
    number: "02",
    title: "We shortlist",
    body: "We source, assess and reference-check, then send you a small set of candidates with honest notes on each, including where they are weaker.",
  },
  {
    number: "03",
    title: "You interview",
    body: "You talk to the shortlist and run whatever technical bar you already use. We handle the scheduling around your calendar.",
  },
  {
    number: "04",
    title: "Onboard, then keep going",
    body: "Contracts, payments and the ongoing relationship run through us. You manage the work; we handle everything around it.",
  },
];

export const benefits = [
  {
    title: "Hired to stay",
    body: "We place people into roles they actually want, at rates that keep them there. Churn is expensive for you and embarrassing for us.",
  },
  {
    title: "Real overlap, not 'async-friendly'",
    body: "Enough of the working day is shared that your team can ask a question and get an answer before they go home.",
  },
  {
    title: "Senior depth, sensible rates",
    body: "You are not trading experience for budget. We shortlist at the level you asked for, at a rate that survives a budget review.",
  },
  {
    title: "One relationship to manage",
    body: "Sourcing, contracting, payments and replacements sit with us. You get a team, not five vendors and a spreadsheet.",
  },
];

/** Options offered in the contact form. */
export const roleTypes = [
  "Engineering",
  "Design",
  "Growth & Marketing",
  "Operations & Support",
  "Data",
  "Finance & Admin",
  "Something else",
] as const;

export const engagementTypes = [
  "Full-time",
  "Part-time",
  "Project-based",
  "Not sure yet",
] as const;
