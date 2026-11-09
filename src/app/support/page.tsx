import type { Metadata } from "next";
import FormShell from "@/components/FormShell";
import { Field, TextAreaField, SelectField, ChoiceGroup } from "@/components/FormField";
import { PageHeader } from "@/components/ui";
import { homes, systems } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/support" },
  title: "Resident support",
  description:
    "Living with a Mediola system? Tell us what’s happening and our local team will help — or help you add new scenes and features.",
};

export default function SupportPage() {
  return (
    <>
      <PageHeader eyebrow="For residents" title="We’re here when your home needs us.">
        <p>
          Something not working as it should, or want your home to do more?
          Tell us below and our local team will follow up.
        </p>
      </PageHeader>

      <section className="mx-auto max-w-3xl px-5 sm:px-8 pb-24">
        <div className="rounded-3xl bg-sand-100 border border-sand-200 p-6 sm:p-10">
          <FormShell
            submitLabel="Send to our support team"
            successTitle="Got it — we’re on it."
            successText="Our support team will contact you shortly to help."
          >
            <ChoiceGroup
              legend="How can we help?"
              name="request_type"
              options={["Something isn’t working", "I want to add or change something", "A question"]}
              defaultValue="Something isn’t working"
              required
            />
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Your name" name="name" autoComplete="name" required />
              <Field label="Phone / WhatsApp" name="phone" type="tel" autoComplete="tel" required />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <SelectField label="Building" name="building" required defaultValue="">
                <option value="" disabled>
                  Select your building
                </option>
                {homes.map((h) => (
                  <option key={h.slug}>{h.name}</option>
                ))}
                <option>Other / private home</option>
              </SelectField>
              <Field label="Unit / villa number" name="unit" required />
            </div>
            <SelectField label="Which system?" name="system" required defaultValue="">
              <option value="" disabled>
                Select a system
              </option>
              {systems.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </SelectField>
            <TextAreaField
              label="What’s happening?"
              name="message"
              rows={5}
              placeholder="E.g. the living room lights don’t respond to the panel since yesterday."
              required
            />
          </FormShell>
        </div>
      </section>
    </>
  );
}
