import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";

const strengths = [
  {
    title: "Reliable installs, done right the first time",
    description:
      "Our technicians are trained to deliver clean, tested, dependable systems.",
  },
  {
    title: "Custom, not cookie-cutter",
    description:
      "Every property gets a solution designed for it, not a generic package.",
  },
  {
    title: "A trusted network behind every project",
    description:
      "Access to a wide range of proven smart home technology, matched to your project's needs.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      
      <main className="relative min-h-screen overflow-hidden bg-white text-slate-900">
        {/* Background Logo Watermark (Centered) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
          <Image
            src="/images/mediola-logo.svg"
            alt=""
            width={1200}
            height={1075}
            aria-hidden="true"
            className="w-[800px] md:w-[1200px] h-auto opacity-[0.04]"
          />
        </div>

        {/* Hero Section Container (z-10 sits above the background watermark) */}
        <div className="relative z-10">
          <section className="mx-auto max-w-4xl px-6 pt-16 pb-10 md:pt-24">
            <p className="text-sm font-semibold tracking-wide text-amber-600 uppercase mb-4">
              About Mediola
            </p>
            <h1 className="font-display font-bold text-4xl md:text-5xl leading-tight text-navy-900">
              Who we are
            </h1>
            <p className="mt-6 text-lg text-navy-400 leading-relaxed max-w-2xl">
              Mediola brings smart home technology to real estate projects
              across the UAE. For the past few years, we&rsquo;ve partnered
              with developers and contractors to design and install smart
              living solutions — from lighting and climate control to
              entertainment and security — built around how people actually
              live.
            </p>
          </section>

          <section className="mx-auto max-w-4xl px-6 py-10">
            <h2 className="font-display font-semibold text-2xl text-navy-900">
              Our approach
            </h2>
            <p className="mt-4 text-navy-400 leading-relaxed max-w-2xl">
              No two projects get the same solution. We work with developers
              from planning through handover, tailoring each system to the
              property and its residents — backed by a trusted network of
              proven smart home technology.
            </p>
          </section>

          <section className="mx-auto max-w-4xl px-6 py-16">
            <h2 className="font-display font-semibold text-2xl text-navy-900 mb-8">
              Why developers choose us
            </h2>
            <div className="space-y-6">
              {strengths.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <CheckCircle2
                    className="w-6 h-6 text-amber-600 shrink-0 mt-0.5"
                    strokeWidth={1.75}
                  />
                  <div>
                    <p className="font-semibold text-navy-900">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm text-navy-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-4xl px-6 py-16 md:py-20 text-center">
            <h2 className="font-display font-semibold text-2xl md:text-3xl text-navy-900">
              We&rsquo;re based in the UAE and growing across the GCC — one
              project, one partnership at a time.
            </h2>
            <Link
              href="/quote"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-amber-500 px-6 py-3 text-sm font-semibold text-navy-900 hover:bg-amber-600 transition-colors"
            >
              Start a Project With Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}