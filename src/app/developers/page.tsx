import type { Metadata } from "next";
import FormShell from "@/components/FormShell";
import { Field, TextAreaField } from "@/components/FormField";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "For developers & contractors",
  description:
    "Planning smart home integration for a development in the UAE? Request a tailored proposal from Mediola.",
};

export default function DevelopersPage() {
  return (
    <>
      <PageHeader eyebrow="For developers & contractors" title="Smart living, built into your development.">
        <p>
          We design and install integrated smart home systems for residential
          projects across the UAE, from planning through handover. Tell us
          about your project and we’ll prepare a tailored proposal.
        </p>
      </PageHeader>

      <section className="mx-auto max-w-3xl px-5 sm:px-8 pb-24">
        <div className="rounded-3xl bg-sand-100 border border-sand-200 p-6 sm:p-10">
          <FormShell
            submitLabel="Request a proposal"
            successTitle="Thanks — request received."
            successText="Our projects team will get back to you shortly."
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Name" name="name" autoComplete="name" required />
              <Field label="Company" name="company" autoComplete="organization" required />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Email" name="email" type="email" autoComplete="email" required />
              <Field label="Phone" name="phone" type="tel" autoComplete="tel" required />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Project name & location" name="project" required />
              <Field label="Number of units" name="units" inputMode="numeric" optional />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Estimated timeline" name="timeline" placeholder="e.g. Q1 2027" optional />
              <Field label="Budget range" name="budget" placeholder="e.g. AED 50,000 – 100,000" optional />
            </div>
            <TextAreaField
              label="Project details"
              name="message"
              rows={5}
              placeholder="Scope, systems you’re considering, requirements…"
              required
            />
          </FormShell>
        </div>
      </section>
    </>
  );
}
