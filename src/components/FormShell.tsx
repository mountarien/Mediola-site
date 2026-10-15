"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export default function FormShell({
  children,
  submitLabel,
  successTitle,
  successText,
}: {
  children: React.ReactNode;
  submitLabel: string;
  successTitle: string;
  successText: string;
}) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: send the form data to a backend (e.g. Formspree, email, or CRM).
    // Right now submissions are not delivered anywhere.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex items-start gap-4 rounded-3xl bg-white border border-sand-200 p-8" role="status">
        <CheckCircle2 className="w-7 h-7 text-amber-600 shrink-0" strokeWidth={1.75} />
        <div>
          <p className="font-display text-2xl text-navy-900">{successTitle}</p>
          <p className="mt-2 text-navy-400 leading-relaxed">{successText}</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-7">
      {children}
      <button
        type="submit"
        className="w-full rounded-full bg-amber-500 px-6 py-4 text-sm font-semibold text-navy-950 hover:bg-amber-400 transition-colors"
      >
        {submitLabel}
      </button>
    </form>
  );
}
