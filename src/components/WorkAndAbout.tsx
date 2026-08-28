import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function WorkAndAbout() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <div className="grid md:grid-cols-2 gap-10 md:gap-14">
        <div>
          <p className="text-sm font-semibold tracking-wide text-amber-600 uppercase mb-3">
            Recent work
          </p>
          <h2 className="font-display font-600 text-2xl text-navy-900">
            Delivered across UAE developments
          </h2>
          <p className="mt-4 text-navy-400 leading-relaxed">
            Smart home systems designed and installed in partnership with
            IGO, across their residential developments in Dubai.
          </p>
          <Link
            href="/work"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-amber-600 transition-colors"
          >
            See our work
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div>
          <p className="text-sm font-semibold tracking-wide text-amber-600 uppercase mb-3">
            About Mediola
          </p>
          <h2 className="font-display font-600 text-2xl text-navy-900">
            Custom, not cookie-cutter
          </h2>
          <p className="mt-4 text-navy-400 leading-relaxed">
            Mediola brings smart home technology to real estate projects
            across the UAE. For the past few years, we&rsquo;ve partnered
            with developers and contractors to design and install smart
            living solutions built around how people actually live.
          </p>
          <Link
            href="/about"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-amber-600 transition-colors"
          >
            Read our story
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
