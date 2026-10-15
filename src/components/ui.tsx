import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "amber" | "navy" | "ghost-light" | "ghost-dark";
  className?: string;
};

const variants = {
  amber: "bg-amber-500 text-navy-950 hover:bg-amber-400",
  navy: "bg-navy-900 text-white hover:bg-navy-700",
  "ghost-light": "border border-white/40 text-white hover:bg-white/10",
  "ghost-dark": "border border-navy-900/20 text-navy-900 hover:bg-navy-900/5",
};

export function Button({ href, children, variant = "amber", className = "" }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-colors ${variants[variant]} ${className}`}
    >
      {children}
      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}

export function Eyebrow({
  children,
  tone = "dark",
}: {
  children: React.ReactNode;
  tone?: "dark" | "light";
}) {
  return (
    <p
      className={`text-xs font-semibold uppercase tracking-[0.2em] ${
        tone === "light" ? "text-amber-400" : "text-amber-700"
      }`}
    >
      {children}
    </p>
  );
}

export function PageHeader({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="mx-auto max-w-7xl px-5 sm:px-8 pt-16 pb-12 md:pt-24 md:pb-16">
      <div className="max-w-3xl animate-rise">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-navy-900">
          {title}
        </h1>
        {children && (
          <div className="mt-6 text-lg text-navy-400 leading-relaxed max-w-2xl">{children}</div>
        )}
      </div>
    </section>
  );
}
