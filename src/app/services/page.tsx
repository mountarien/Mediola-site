import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
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

type Category = {
  icon: typeof ToggleLeft;
  label: string;
  description: string;
  image?: string;
};

const categories: Category[] = [
  {
    icon: ToggleLeft,
    label: "Smart Switches",
    description:
      "Control lighting and connected devices with a tap, a voice command, or on a schedule. Clean, modern panels that fit any interior style.",
    image: "/images/products/switch-single-clean-01.jpg",
  },
  {
    icon: Thermometer,
    label: "Thermostats",
    description:
      "Smart climate control that learns and adapts — comfortable homes, lower energy bills, and full remote control from anywhere.",
    image: "/images/products/thermostat-switch-panel-01.jpg",
  },
  {
    icon: Bell,
    label: "Bell Push Buttons",
    description:
      "Smart doorbells connected to the home system — see, hear, and respond to visitors from any room, or anywhere in the world.",
    image: "/images/products/bell-push-society-house-01.jpg",
  },
  {
    icon: Music,
    label: "Background Music",
    description:
      "Background music systems installed in living areas — set the mood with smooth, ambient sound controlled from a single app or voice command.",
    image: "/images/products/bg-music-01.jpg",
  },
  {
    icon: Mic,
    label: "Alexa Integration",
    description:
      "Voice-controlled living — lights, climate, entertainment, and security, all connected to Alexa for hands-free convenience.",
    image: "/images/products/alexa-01.jpg",
  },
  {
    icon: PhoneCall,
    label: "Intercoms",
    description:
      "Seamless communication across the home or building — video and audio intercoms integrated into the broader smart system.",
    image: "/images/products/intercom-01.jpg",
  },
  {
    icon: Radar,
    label: "Sensors",
    description:
      "Door, motion, and water leakage sensors that keep residents informed and protected — automatic alerts the moment something needs attention.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-4xl px-6 pt-16 pb-10 md:pt-24">
          <p className="text-sm font-semibold tracking-wide text-amber-600 uppercase mb-4">
            What we install
          </p>
          <h1 className="font-display font-700 text-4xl md:text-5xl leading-tight text-navy-900">
            A full range of smart home systems.
          </h1>
          <p className="mt-6 text-lg text-navy-400 leading-relaxed max-w-2xl">
            Every category below is installed and integrated as one system —
            tailored to your project, not sold as a generic package.
          </p>
        </section>

        <section className="mx-auto max-w-4xl px-6 pb-16 md:pb-20">
          <div className="grid sm:grid-cols-2 gap-5">
            {categories.map(({ icon: Icon, label, description, image }) => (
              <div
                key={label}
                className="rounded-xl bg-stone-50 border border-stone-300 overflow-hidden"
              >
                {image && (
                  <div className="relative aspect-[4/3] bg-navy-50">
                    <Image
                      src={image}
                      alt={label}
                      fill
                      sizes="(min-width: 640px) 440px, 100vw"
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  <Icon
                    className="w-7 h-7 text-navy-700"
                    strokeWidth={1.75}
                  />
                  <h2 className="mt-4 font-display font-600 text-lg text-navy-900">
                    {label}
                  </h2>
                  <p className="mt-2 text-sm text-navy-400 leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-navy-900">
          <div className="mx-auto max-w-4xl px-6 py-16 md:py-20 text-center">
            <h2 className="font-display font-600 text-2xl md:text-3xl text-white">
              Planning a development? Let&rsquo;s design the right system for
              it.
            </h2>
            <Link
              href="/quote"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-amber-500 px-6 py-3 text-sm font-semibold text-navy-900 hover:bg-amber-600 transition-colors"
            >
              Request a Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
