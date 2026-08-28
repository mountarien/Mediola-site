"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Field, TextAreaField } from "@/components/FormField";
import { CheckCircle2 } from "lucide-react";

export default function QuotePage() {
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
            For developers &amp; contractors
          </p>
          <h1 className="font-display font-700 text-4xl leading-tight text-navy-900">
            Request a Quote
          </h1>
          <p className="mt-4 text-navy-400 leading-relaxed">
            Tell us about your project and we&rsquo;ll get back to you with a
            tailored proposal.
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
                  Our team will get back to you shortly.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-10 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Name" name="name" type="text" required />
                <Field label="Email" name="email" type="email" required />
              </div>
              <Field label="Phone" name="phone" type="tel" required />
              <div className="grid sm:grid-cols-2 gap-5">
                <Field
                  label="Project name & location"
                  name="project"
                  type="text"
                  required
                />
                <Field
                  label="Estimated timeline"
                  name="timeline"
                  type="text"
                  placeholder="e.g. Q1 2027"
                />
              </div>
              <Field
                label="Budget range"
                name="budget"
                type="text"
                placeholder="e.g. AED 50,000 - 100,000"
              />
              <TextAreaField
                label="Project details"
                name="message"
                rows={5}
                placeholder="Tell us about the project — number of units, scope, requirements..."
                required
              />

              <button
                type="submit"
                className="w-full rounded-md bg-amber-500 px-6 py-3 text-sm font-semibold text-navy-900 hover:bg-amber-600 transition-colors"
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
