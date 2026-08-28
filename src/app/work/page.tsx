"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { ImageIcon } from "lucide-react";

type Project = {
  name: string;
  developer: string;
  status: "Completed" | "Ongoing";
  folder: "completed_projects" | "ongoing_projects";
  slug: string;
};

const projects: Project[] = [
  {
    name: "The Paragon Tower",
    developer: "IGO",
    status: "Completed",
    folder: "completed_projects",
    slug: "paragon",
  },
  {
    name: "Society House",
    developer: "IGO",
    status: "Completed",
    folder: "completed_projects",
    slug: "society",
  },
  {
    name: "Pelagos",
    developer: "IGO",
    status: "Ongoing",
    folder: "ongoing_projects",
    slug: "pelagos",
  },
  {
    name: "Azura",
    developer: "IGO",
    status: "Ongoing",
    folder: "ongoing_projects",
    slug: "azura",
  },
];

const shots = [
  { key: "exterior", label: "Exterior" },
  { key: "reception", label: "Reception Area" },
  { key: "living", label: "Living Area" },
  { key: "bedroom", label: "Bedroom" },
];

function StatusBadge({ status }: { status: Project["status"] }) {
  const isCompleted = status === "Completed";
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${
        isCompleted
          ? "bg-navy-50 text-navy-700"
          : "bg-amber-50 text-amber-700"
      }`}
    >
      {status}
    </span>
  );
}

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-5xl px-6 pt-16 pb-10 md:pt-24">
          <p className="text-sm font-semibold tracking-wide text-amber-600 uppercase mb-4">
            Our work
          </p>
          <h1 className="font-display font-700 text-4xl md:text-5xl leading-tight text-navy-900">
            Delivered across UAE developments
          </h1>
          <p className="mt-6 text-lg text-navy-400 leading-relaxed max-w-2xl">
            Smart home systems designed and installed in partnership with
            IGO, across their residential developments.
          </p>
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-20 space-y-16">
          {projects.map((project) => (
            <div key={project.name}>
              <div className="flex items-center gap-3 mb-5">
                <h2 className="font-display font-600 text-2xl text-navy-900">
                  {project.name}
                </h2>
                <StatusBadge status={project.status} />
              </div>
              <p className="text-sm text-navy-400 mb-5">
                Developed by {project.developer}
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {shots.map((shot) => {
                  const src = `/mediola_projects/${project.folder}/${project.slug}-${shot.key}.jpg`;
                  return (
                    <div
                      key={shot.key}
                      className="rounded-lg overflow-hidden border border-stone-300"
                    >
                      <div className="relative aspect-square bg-navy-50 flex items-center justify-center">
                        <ImageIcon
                          className="w-6 h-6 text-navy-100 absolute z-0"
                          strokeWidth={1.5}
                        />
                        <Image
                          src={src}
                          alt={`${project.name} ${shot.label}`}
                          fill
                          sizes="(min-width: 768px) 25vw, 50vw"
                          className="object-cover relative z-10"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                          }}
                        />
                      </div>
                      <div className="px-3 py-2 bg-white">
                        <p className="text-xs font-medium text-navy-900">
                          {shot.label}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
