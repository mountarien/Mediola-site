import {
  ToggleLeft,
  Thermometer,
  Bell,
  Music,
  Mic,
  PhoneCall,
  Radar,
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

export default function ServicesPreview() {
  return (
    <section className="bg-stone-50 border-y border-stone-300">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <p className="text-sm font-semibold tracking-wide text-amber-600 uppercase mb-3">
          What we install
        </p>
        <h2 className="font-display font-600 text-2xl md:text-3xl text-navy-900 max-w-lg">
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
    </section>
  );
}
