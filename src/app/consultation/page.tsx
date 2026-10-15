import type { Metadata } from "next";
import { Check } from "lucide-react";
import FormShell from "@/components/FormShell";
import { Field, TextAreaField, ChoiceGroup } from "@/components/FormField";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Book a free home visit",
  description:
    "Tell us a little about your home. We’ll visit, listen to how you live, and show you what Mediola could do — free and with no obligation.",
};

const situations = [
  "I’m building or renovating",
  "I live in a Mediola building",
  "I’m moving into a new home",
  "Just exploring",
];

const promises = [
  "Free, with no obligation",
  "A real person gets back to you",
  "A plan built around your routines",
];

export default async function ConsultationPage(props: PageProps<"/consultation">) {
  const { for: audience } = await props.searchParams;
  const defaultSituation = audience === "resident" ? situations[1] : undefined;

  return (
    <>
      <PageHeader
        eyebrow="Free home visit"
        title={
          <>
            Let’s talk about <em className="text-amber-700">your</em> home.
          </>
        }
      >
        <p>
          Tell us a little about where you live. We’ll visit, listen to how
          your days actually go, and show you what your home could do for you.
        </p>
      </PageHeader>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 pb-24 grid lg:grid-cols-[1fr_1.5fr] gap-12">
        <aside className="lg:pt-2">
          <ul className="space-y-4">
            {promises.map((p) => (
              <li key={p} className="flex items-center gap-3 text-navy-700">
                <span className="grid place-items-center w-7 h-7 rounded-full bg-amber-50 border border-amber-100">
                  <Check className="w-4 h-4 text-amber-700" />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </aside>

        <div className="rounded-3xl bg-sand-100 border border-sand-200 p-6 sm:p-10">
          <FormShell
            submitLabel="Book my free home visit"
            successTitle="Thank you — we’ll be in touch soon."
            successText="Someone from our team will reach out to find a time that suits you. In the meantime, picture your first evening with one-touch lighting."
          >
            <ChoiceGroup
              legend="Which sounds most like you?"
              name="situation"
              options={situations}
              defaultValue={defaultSituation}
              required
            />
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Your name" name="name" autoComplete="name" required />
              <Field label="Phone / WhatsApp" name="phone" type="tel" autoComplete="tel" required />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Email" name="email" type="email" autoComplete="email" optional />
              <Field
                label="Area or building"
                name="location"
                placeholder="e.g. Dubai Marina, The Paragon"
                optional
              />
            </div>
            <ChoiceGroup
              legend="Your home"
              name="home_type"
              options={["Apartment", "Villa", "Townhouse", "Penthouse"]}
            />
            <ChoiceGroup
              legend="What would you love your home to do?"
              name="interests"
              type="checkbox"
              options={[
                "Lighting & moods",
                "Cool before I arrive",
                "Security & intercom",
                "Music in every room",
                "Voice control",
                "Leak & door alerts",
              ]}
            />
            <ChoiceGroup
              legend="Best way to reach you"
              name="contact_method"
              options={["Call", "WhatsApp", "Email"]}
              defaultValue="WhatsApp"
            />
            <TextAreaField
              label="Anything else we should know?"
              name="message"
              rows={4}
              placeholder="Your routines, family, timeline — anything that helps."
              optional
            />
          </FormShell>
        </div>
      </section>
    </>
  );
}
