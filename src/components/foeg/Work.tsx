import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { TeamAvatar } from "./TeamAvatar";

const APPLY_URL = "https://tally.so/r/LZMbQl";

type Project = {
  name: string;
  initial: string;
  variant: "volt" | "paper";
  description: string;
  status: "LIVE" | "OPEN";
  cta: { label: string; to?: "/work"; href?: string };
};

const projects: Project[] = [
  {
    name: "AvaRamp",
    initial: "A",
    variant: "volt",
    description: "USDC on Avalanche, settled to M-Pesa in under 3 minutes.",
    status: "LIVE",
    cta: { label: "View All Work →", to: "/work" },
  },
  {
    name: "AutopayKE",
    initial: "K",
    variant: "paper",
    description: "Phone-first money across Africa — M-Pesa, MoMo, Wave, bank.",
    status: "LIVE",
    cta: { label: "View All Work →", to: "/work" },
  },
  {
    name: "Open Sprint Slot",
    initial: "◆",
    variant: "volt",
    description: "One slot open for July 2026. Serious operators only.",
    status: "OPEN",
    cta: { label: "Apply →", href: APPLY_URL },
  },
];

export function Work() {
  return (
    <section id="work" className="bg-paper text-ink py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-ink/60">Our Work</p>
            <Reveal>
              <h2 className="mt-5 font-display font-extrabold text-5xl md:text-7xl tracking-tight leading-[1]">
                Systems we've installed.
              </h2>
            </Reveal>
          </div>
          <p className="text-ink/60 max-w-xs text-sm font-mono">
            Documented proof. Not testimonials.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-5">
          {projects.map((p, i) => {
            const inner = (
              <div className="card-surface group h-full bg-ink text-paper border border-divider rounded-md p-8 flex flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div className="w-20">
                    <TeamAvatar initial={p.initial} variant={p.variant} />
                  </div>
                  <span className="font-mono text-[10px] tracking-widest text-volt border border-volt/40 px-2.5 py-1 rounded-full shrink-0">
                    {p.status}
                  </span>
                </div>
                <h3 className="mt-8 font-display font-bold text-2xl leading-tight">{p.name}</h3>
                <p className="mt-3 text-paper/70 text-[15px] leading-relaxed">{p.description}</p>
                <p className="mt-8 text-sm font-medium text-volt">{p.cta.label}</p>
              </div>
            );
            return (
              <Reveal key={p.name} delay={i * 100}>
                {p.cta.href ? (
                  <a href={p.cta.href} target="_blank" rel="noreferrer">{inner}</a>
                ) : (
                  <Link to={p.cta.to!}>{inner}</Link>
                )}
              </Reveal>
            );
          })}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4">
          <p className="font-mono text-xs text-ink/55 max-w-2xl">
            No fabricated testimonials. No revenue outcome guarantees.
            Just documented proof of installed, working systems.
          </p>
          <Link to="/work" className="font-mono text-xs tracking-widest text-ink underline underline-offset-4 hover:text-[color:var(--volt-deep)]">
            VIEW ALL OUR WORK →
          </Link>
        </div>
      </div>
    </section>
  );
}
