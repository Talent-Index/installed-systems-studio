import { Reveal } from "./Reveal";

const APPLY_URL = "https://tally.so/r/FOEG-APPLY";

const projects = [
  {
    name: "RickyBags",
    tag: "Manufacturing · Sustainable",
    price: "KSh 550,000 Sprint",
    bullets: [
      "Installed inventory workflow automation",
      "WhatsApp order management system",
    ],
    status: "Sprint 1 — Delivered",
    cta: { label: "View Build Log →", href: "#work" },
    accent: false,
  },
  {
    name: "Upcoming Sprint",
    tag: "Fintech · VASP Compliance Ops",
    price: "Slot Open",
    bullets: ["This slot is open.", "Apply before June 30."],
    status: "July Cohort — Open",
    cta: { label: "Apply →", href: APPLY_URL },
    accent: true,
  },
  {
    name: "One Slot Remaining",
    tag: "July Cohort",
    price: "Final Slot",
    bullets: [
      "Serious operators only.",
      "Maximum 3 clients per month.",
    ],
    status: "Closing Soon",
    cta: { label: "Apply →", href: APPLY_URL },
    accent: false,
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
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <a
                href={p.cta.href}
                target={p.cta.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className={`group block h-full rounded-md overflow-hidden border transition ${
                  p.accent
                    ? "bg-volt text-ink border-volt"
                    : "bg-ink text-paper border-ink hover:bg-[#0e0e0e]"
                }`}
              >
                <div className={`aspect-[4/3] relative overflow-hidden ${p.accent ? "bg-ink" : "bg-surface"}`}>
                  <div className="absolute inset-0 opacity-60"
                       style={{
                         backgroundImage:
                           "radial-gradient(circle at 20% 30%, color-mix(in oklab, var(--color-volt) 20%, transparent), transparent 50%), radial-gradient(circle at 80% 70%, color-mix(in oklab, var(--color-paper) 8%, transparent), transparent 60%)",
                       }}
                  />
                  <div className="absolute inset-0 grid grid-cols-6 grid-rows-6">
                    {Array.from({ length: 36 }).map((_, idx) => (
                      <div key={idx} className="border-r border-b border-paper/5" />
                    ))}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className={`font-mono text-[10px] tracking-widest ${p.accent ? "text-volt" : "text-mute"}`}>
                      / {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className={`font-mono text-[10px] tracking-widest ${p.accent ? "text-volt" : "text-mute"}`}>
                      {p.status}
                    </span>
                  </div>
                </div>
                <div className="p-7">
                  <div className="flex items-center justify-between">
                    <span className={`font-mono text-[10px] tracking-widest ${p.accent ? "text-ink/70" : "text-mute"}`}>
                      {p.tag}
                    </span>
                    <span className={`font-mono text-[10px] tracking-widest ${p.accent ? "text-ink/70" : "text-mute"}`}>
                      {p.price}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display font-bold text-2xl leading-tight">{p.name}</h3>
                  <ul className={`mt-4 space-y-1.5 text-[14px] ${p.accent ? "text-ink/80" : "text-paper/70"}`}>
                    {p.bullets.map((b) => <li key={b}>— {b}</li>)}
                  </ul>
                  <p className={`mt-8 text-sm font-medium ${p.accent ? "text-ink" : "text-volt"}`}>
                    {p.cta.label}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <p className="mt-12 font-mono text-xs text-ink/55 max-w-2xl">
          No fabricated testimonials. No revenue outcome guarantees.
          Just documented proof of installed, working systems.
        </p>
      </div>
    </section>
  );
}
