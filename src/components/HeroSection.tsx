import Image from "next/image";
import Link from "next/link";
import { Building2, LifeBuoy, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background photo */}
      <Image
        src="/images/products/switch-panel-thermostat-intercom-01.jpg"
        alt="Society House by IGO"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Navy overlay so text stays readable while the photo shows through */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/20 via-navy-900/55 to-navy-900/85" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-16 pb-14 md:pt-24 md:pb-20">
        <p className="text-sm font-semibold tracking-wide text-amber-500 uppercase mb-4">
          Smart home solutions · UAE
        </p>
        <h1 className="font-display font-700 text-4xl md:text-6xl leading-[1.05] text-white max-w-3xl">
          Smart living, built into every development.
        </h1>
        <p className="mt-6 text-lg text-white/85 max-w-xl">
          Mediola designs and installs custom smart home systems for real
          estate projects across the UAE — from lighting and climate to
          security and sound.
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {/* Developers / Contractors path */}
          <div className="rounded-2xl bg-navy-900 text-white p-8 md:p-10 flex flex-col justify-between min-h-[260px]">
            <div>
              <Building2
                className="w-8 h-8 text-amber-500"
                strokeWidth={1.75}
              />
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
          <div className="rounded-2xl bg-white p-8 md:p-10 flex flex-col justify-between min-h-[260px]">
            <div>
              <LifeBuoy className="w-8 h-8 text-navy-700" strokeWidth={1.75} />
              <h2 className="mt-5 text-2xl font-display font-600 text-navy-900">
                Existing customers
              </h2>
              <p className="mt-3 text-navy-400 text-sm leading-relaxed">
                Already living with a Mediola smart home system? Get help
                from our support team.
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
      </div>
    </section>
  );
}
