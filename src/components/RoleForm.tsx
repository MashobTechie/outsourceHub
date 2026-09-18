"use client";

import { useState, type FormEvent } from "react";

import { Check } from "@/components/icons";
import { SubmitButton } from "@/components/primitives";
import { engagementTypes, roleTypes, site, whatsappLink } from "@/data/site";

const fieldBase =
  "w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm text-ink placeholder:text-muted-2/80 " +
  "transition-colors duration-200 focus:border-clay focus:outline-none focus-visible:outline-none";

const labelBase = "block text-sm font-medium text-ink-2";

/**
 * There is no backend. The brief is composed into a plain-text WhatsApp
 * message and handed to wa.me — a submission always has somewhere to go.
 * Optional fields drop out of the message instead of sending empty lines.
 */
function compose(data: FormData) {
  const get = (k: string) => String(data.get(k) ?? "").trim();

  return [
    `New hiring brief from the ${site.name} site`,
    "",
    `Name: ${get("name")}`,
    get("company") && `Company: ${get("company")}`,
    get("email") && `Email: ${get("email")}`,
    `Role area: ${get("roleType")}`,
    `Engagement: ${get("engagement")}`,
    "",
    "Details:",
    get("details") || "(none given)",
  ]
    .filter(Boolean)
    .join("\n");
}

export function RoleForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = compose(new FormData(event.currentTarget));
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-clay/25 bg-clay-tint p-8 text-center">
        <span className="inline-flex size-11 items-center justify-center rounded-full bg-clay text-white">
          <Check className="size-5" />
        </span>
        <h3 className="mt-5 text-lg font-semibold text-ink">
          Your brief is ready to send.
        </h3>
        <p className="mt-2.5 text-sm leading-relaxed text-muted">
          WhatsApp should have opened in a new tab with everything filled in.
          Press send there and we will come back to you. If nothing opened,{" "}
          <a
            href={`mailto:${site.email}`}
            className="font-medium text-clay underline decoration-clay/30 underline-offset-4 hover:decoration-clay"
          >
            email us instead
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 text-sm font-medium text-muted underline underline-offset-4 transition-colors hover:text-ink"
        >
          Send another brief
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-line bg-paper p-6 shadow-[0_1px_2px_rgba(28,25,23,0.04)] sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label className={labelBase} htmlFor="name">
            Your name
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            placeholder="Jane Okafor"
            className={`${fieldBase} mt-2`}
          />
        </div>

        <div className="sm:col-span-1">
          <label className={labelBase} htmlFor="company">
            Company{" "}
            <span className="font-normal text-muted-2">(optional)</span>
          </label>
          <input
            id="company"
            name="company"
            autoComplete="organization"
            placeholder="Acme Inc."
            className={`${fieldBase} mt-2`}
          />
        </div>

        <div className="sm:col-span-2">
          <label className={labelBase} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="jane@acme.com"
            className={`${fieldBase} mt-2`}
          />
        </div>

        <div>
          <label className={labelBase} htmlFor="roleType">
            What do you need?
          </label>
          <select
            id="roleType"
            name="roleType"
            required
            defaultValue={roleTypes[0]}
            className={`${fieldBase} mt-2`}
          >
            {roleTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelBase} htmlFor="engagement">
            Engagement
          </label>
          <select
            id="engagement"
            name="engagement"
            required
            defaultValue={engagementTypes[0]}
            className={`${fieldBase} mt-2`}
          >
            {engagementTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label className={labelBase} htmlFor="details">
            The role, in your words
          </label>
          <textarea
            id="details"
            name="details"
            rows={4}
            placeholder="What the person will own, the stack or tools, seniority, and when you would like them to start."
            className={`${fieldBase} mt-2 resize-y`}
          />
        </div>
      </div>

      <SubmitButton className="mt-7 w-full sm:w-auto">
        Send the brief
      </SubmitButton>

      <p className="mt-4 text-xs leading-relaxed text-muted-2">
        This opens WhatsApp with your brief already written out. Nothing is sent
        until you press send there.
      </p>
    </form>
  );
}
