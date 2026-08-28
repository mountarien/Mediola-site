import Link from "next/link";
import { Building2, LifeBuoy, ArrowRight } from "lucide-react";

export default function AudiencePaths() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 md:pb-28">
      <div className="grid md:grid-cols-2 gap-5">
        {/* Developers / Contractors path */}
        <div className="rounded-2xl bg-navy-900 text-white p-8 md:p-10 flex flex-col justify-between min-h-[280px]">
          <div>
            <Building2 className="w-8 h-8 text-amber-500" strokeWidth={1.75} />
            <h2 className="mt-5 text-2xl font-display font-600">
              Developers &amp; contractors
            </h2>
            <p className="mt-3 text-navy-100 text-sm leading-relaxed">
              Planning smart home integration for a new project? Get a
              tailored proposal for your development.
            </p>
          </div>
          <Link
            href="/quote"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-amber-500 px-5 py-3 text-sm font-semibold text-navy-900 hover:bg-amber-600 transition-colors w-fit"
          >
            Request a Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Existing customers path */}
        <div className="rounded-2xl bg-stone-50 border border-stone-300 p-8 md:p-10 flex flex-col justify-between min-h-[280px]">
          <div>
            <LifeBuoy className="w-8 h-8 text-navy-700" strokeWidth={1.75} />
            <h2 className="mt-5 text-2xl font-display font-600 text-navy-900">
              Existing customers
            </h2>
            <p className="mt-3 text-navy-400 text-sm leading-relaxed">
              Already living with a Mediola smart home system? Get help from
              our support team.
            </p>
          </div>
          <Link
            href="/support"
            className="mt-8 inline-flex items-center gap-2 rounded-md border border-navy-700 px-5 py-3 text-sm font-semibold text-navy-900 hover:bg-navy-900 hover:text-white transition-colors w-fit"
          >
            Request Support
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
