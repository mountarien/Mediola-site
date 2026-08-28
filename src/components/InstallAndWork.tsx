import Image from "next/image";
import Link from "next/link";
import {
  ToggleLeft,
  Thermometer,
  Bell,
  Music,
  Mic,
  PhoneCall,
  Radar,
  ArrowRight,
} from "lucide-react";

const categories = [
  { icon: ToggleLeft, label: "Switches" },
  { icon: Thermometer, label: "Thermostats" },
  { icon: Bell, label: "Bell Push Buttons" },
  { icon: Music, label: "Background Music" },
  { icon: Mic, label: "Alexa Integration" },
  { icon: PhoneCall, label: "Intercoms" },
  { icon: Radar, label: "Sensors" },
];

export default function InstallAndWork() {
  return (
    <section className="relative overflow-hidden">
      {/* One continuous background photo behind both blocks below */}
      <Image
        src="/images/products/switch-panel-thermostat-intercom-01.jpg"
        alt="Installed smart home panel"
        fill
        sizes="100vw"
        className="object-cover"
      />
      {/* Blue overlay so text stays readable while the photo shows through */}
      <div className="absolute inset-0 bg-navy-600/50" />

      {/* What we install */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-16 pb-16 md:pt-20">
        <p className="text-sm font-semibold tracking-wide text-amber-500 uppercase mb-3">
          What we install
        </p>
        <h2 className="font-display font-600 text-2xl md:text-3xl text-white max-w-lg">
          A full range of smart home systems, in one integrated build.
        </h2>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {categories.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="rounded-xl bg-white border border-stone-300 p-5 flex flex-col gap-3"
            >
              <Icon className="w-6 h-6 text-navy-700" strokeWidth={1.75} />
              <span className="text-sm font-medium text-navy-900">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Recent work + About teaser */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14">
          <div>
            <p className="text-sm font-semibold tracking-wide text-amber-500 uppercase mb-3">
              Recent work
            </p>
            <h2 className="font-display font-600 text-2xl text-white">
              Delivered across UAE developments
            </h2>
            <Link
              href="/work"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-amber-500 transition-colors"
            >
              See our work
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-wide text-amber-500 uppercase mb-3">
              About Mediola
            </p>
            <h2 className="font-display font-600 text-2xl text-white">
              Custom, not cookie-cutter
            </h2>
            <p className="mt-4 text-white/85 leading-relaxed">
              Mediola brings smart home technology to real estate projects
              across the UAE. For the past few years, we&rsquo;ve partnered
              with developers and contractors to design and install smart
              living solutions built around how people actually live.
            </p>
            <Link
              href="/about"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-amber-500 transition-colors"
            >
              Read our story
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
