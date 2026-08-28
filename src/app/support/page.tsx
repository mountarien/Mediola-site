"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Field, TextAreaField, SelectField } from "@/components/FormField";
import { CheckCircle2 } from "lucide-react";

const products = [
  "Switches",
  "Thermostats",
  "Bell Push Buttons",
  "Background Music",
  "Alexa Integration",
  "Intercoms",
  "Sensors",
];

export default function SupportPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: connect to form backend (e.g. Formspree) in Phase 5
    setSubmitted(true);
  }

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-2xl px-6 pt-16 pb-20 md:pt-24">
          <p className="text-sm font-semibold tracking-wide text-amber-600 uppercase mb-4">
            For existing customers
          </p>
          <h1 className="font-display font-700 text-4xl leading-tight text-navy-900">
            Request Support
          </h1>
          <p className="mt-4 text-navy-400 leading-relaxed">
            Having an issue with a Mediola smart home device? Let us know and
            our support team will follow up.
          </p>

          {submitted ? (
            <div className="mt-10 flex items-start gap-3 rounded-xl bg-stone-50 border border-stone-300 p-6">
              <CheckCircle2
                className="w-6 h-6 text-amber-600 shrink-0"
                strokeWidth={1.75}
              />
              <div>
                <p className="font-semibold text-navy-900">
                  Thanks — request received.
                </p>
                <p className="mt-1 text-sm text-navy-400">
                  Our support team will get back to you shortly.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-10 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Name" name="name" type="text" required />
                <Field label="Phone" name="phone" type="tel" required />
              </div>
              <Field label="Address" name="address" type="text" required />
              <SelectField label="Product" name="product" required>
                <option value="">Select a product</option>
                {products.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </SelectField>
              <TextAreaField
                label="Issue description"
                name="message"
                rows={5}
                placeholder="Describe the issue you're experiencing..."
                required
              />

              <button
                type="submit"
                className="w-full rounded-md bg-navy-900 px-6 py-3 text-sm font-semibold text-white hover:bg-navy-700 transition-colors"
              >
                Submit Request
              </button>
            </form>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
