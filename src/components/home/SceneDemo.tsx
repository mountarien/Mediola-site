"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Sunrise,
  House,
  Clapperboard,
  Moon,
  Plane,
  Lightbulb,
  Thermometer,
  Blinds,
  Music,
  Lock,
  type LucideIcon,
} from "lucide-react";
import { Eyebrow } from "@/components/ui";

type Scene = {
  id: string;
  label: string;
  icon: LucideIcon;
  story: string;
  // How the room photo should look under this scene
  filter: string;
  tint: string;
  devices: { lights: string; climate: string; curtains: string; music: string; door: string };
};

const scenes: Scene[] = [
  {
    id: "welcome",
    label: "Welcome home",
    icon: House,
    story:
      "You tap it as you park. By the time the lift opens, the room is cool, softly lit and playing your music.",
    filter: "brightness(1) saturate(1.05)",
    tint: "radial-gradient(ellipse at 60% 40%, rgba(255,190,100,0.35), transparent 70%)",
    devices: {
      lights: "Warm, 70%",
      climate: "22° — pre-cooled",
      curtains: "Half open",
      music: "Your evening playlist",
      door: "Locked behind you",
    },
  },
  {
    id: "morning",
    label: "Good morning",
    icon: Sunrise,
    story:
      "Curtains drift open and daylight does the rest. No alarm, no fumbling for switches — just a slow, easy start.",
    filter: "brightness(1.12) saturate(1.1)",
    tint: "linear-gradient(120deg, rgba(255,236,200,0.35), transparent 60%)",
    devices: {
      lights: "Off — daylight",
      climate: "23°",
      curtains: "Open",
      music: "Morning news, low",
      door: "Unlocked for you",
    },
  },
  {
    id: "movie",
    label: "Movie night",
    icon: Clapperboard,
    story:
      "“Alexa, movie time.” The lights fade, the curtains close and the room becomes a cinema. Nobody has to get up.",
    filter: "brightness(0.5) saturate(0.85)",
    tint: "radial-gradient(ellipse at 25% 75%, rgba(255,170,80,0.28), rgba(14,22,50,0.45) 65%)",
    devices: {
      lights: "Ambient, 10%",
      climate: "21°",
      curtains: "Closed",
      music: "TV sound",
      door: "Locked",
    },
  },
  {
    id: "night",
    label: "Good night",
    icon: Moon,
    story:
      "One touch by the bed. Every light in the house goes off, the door locks, and a soft path light guides you if you wake.",
    filter: "brightness(0.28) saturate(0.6)",
    tint: "linear-gradient(180deg, rgba(14,22,70,0.55), rgba(9,14,34,0.6))",
    devices: {
      lights: "All off · night path 5%",
      climate: "21° sleep mode",
      curtains: "Closed",
      music: "Off",
      door: "Locked & secured",
    },
  },
  {
    id: "away",
    label: "Away",
    icon: Plane,
    story:
      "Two weeks abroad and you never wonder. Lights come on as if someone’s home, and any leak or open door reaches your phone.",
    filter: "brightness(0.7) saturate(0.4)",
    tint: "linear-gradient(180deg, rgba(14,22,50,0.15), rgba(14,22,50,0.35))",
    devices: {
      lights: "Simulating presence",
      climate: "27° eco",
      curtains: "Closed",
      music: "Off",
      door: "Locked · sensors armed",
    },
  },
];

const deviceRows = [
  { key: "lights", label: "Lighting", icon: Lightbulb },
  { key: "climate", label: "Climate", icon: Thermometer },
  { key: "curtains", label: "Curtains", icon: Blinds },
  { key: "music", label: "Music", icon: Music },
  { key: "door", label: "Front door", icon: Lock },
] as const;

export default function SceneDemo() {
  const [active, setActive] = useState(scenes[0]);

  return (
    <section id="scenes" className="scroll-mt-16 bg-navy-950 text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 md:py-28">
        <div className="max-w-2xl">
          <Eyebrow tone="light">Try it yourself</Eyebrow>
          <h2 className="mt-5 text-4xl md:text-5xl leading-[1.08]">
            One touch. <em className="text-amber-200">The whole room listens.</em>
          </h2>
          <p className="mt-5 text-lg text-navy-100 leading-relaxed">
            Tap a moment from your day and watch the home change with you.
          </p>
        </div>

        <div className="mt-10 grid lg:grid-cols-[1.6fr_1fr] gap-6">
          <div>
            <div
              className="mb-4 grid grid-cols-3 sm:grid-cols-5 gap-2"
              role="group"
              aria-label="Choose a scene"
            >
              {scenes.map((s) => {
                const isActive = s.id === active.id;
                return (
                  <button
                    key={s.id}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActive(s)}
                    className={`flex flex-col items-center gap-2 rounded-2xl px-3 py-4 text-xs font-semibold transition-colors ${
                      isActive
                        ? "bg-amber-500 text-navy-950"
                        : "bg-white/5 text-navy-100 hover:bg-white/10"
                    }`}
                  >
                    <s.icon className="w-5 h-5" />
                    {s.label}
                  </button>
                );
              })}
            </div>
            <div className="relative aspect-[16/10] lg:aspect-auto lg:h-[min(52vh,520px)] overflow-hidden rounded-3xl">
              <Image
                src="/mediola_projects/completed_projects/paragon-living.jpg"
                alt="Living room responding to the selected scene"
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover transition-[filter] duration-[1400ms] ease-[var(--ease-calm)]"
                style={{ filter: active.filter }}
              />
              {scenes.map((s) => (
                <div
                  key={s.id}
                  aria-hidden="true"
                  className="absolute inset-0 transition-opacity duration-[1400ms] ease-[var(--ease-calm)]"
                  style={{ background: s.tint, opacity: s.id === active.id ? 1 : 0 }}
                />
              ))}
              <div className="absolute left-4 bottom-4 rounded-full bg-navy-950/70 backdrop-blur px-4 py-2 text-sm">
                {active.label}
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white/[0.04] border border-white/10 p-7 flex flex-col">
            <p className="text-sm text-navy-200">Your home, right now</p>
            <ul className="mt-5 divide-y divide-white/10" aria-live="polite">
              {deviceRows.map(({ key, label, icon: Icon }) => (
                <li key={key} className="flex items-center gap-4 py-3.5">
                  <Icon className="w-5 h-5 text-amber-400 shrink-0" />
                  <span className="text-sm text-navy-200 w-24 shrink-0">{label}</span>
                  <span className="text-sm font-semibold text-white ml-auto text-right">
                    {active.devices[key]}
                  </span>
                </li>
              ))}
            </ul>
            <p
              key={active.id}
              className="mt-auto pt-8 font-display text-xl leading-snug text-white/90 animate-rise"
            >
              {active.story}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
