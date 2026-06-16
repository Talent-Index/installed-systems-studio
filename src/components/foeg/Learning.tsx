import { Reveal } from "./Reveal";

const cards = [
  {
    tag: "UPCOMING · APPLICATION-GATED",
    title: "Business Safari",
    desc: "A paid, application-gated operator event for vetted founders. Not a networking event. A working session.",
    detail: "KSh 2,500 · ~30 operators · Nairobi",
    cta: "Apply for a Seat →",
  },
  {
    tag: "MASTERCLASS",
    title: "How to Install AI in Your Business (Without Hiring a Dev)",
    desc: "A practical session on Claude AI, workflow automation, and operational systems for non-technical founders.",
    detail: "Live · Cohort-based",
    cta: "Join Waitlist →",
  },
  {
    tag: "FINTECH · VASP ACT 2025",
    title: "From Policy to Running System: VASP Compliance Operations",
    desc: "Built for Kenyan crypto operators facing the November 4, 2026 deadline. We turn your compliance policy into a live operational system.",
    detail: "Deadline: Nov 4, 2026",
    cta: "Register Interest →",
  },
];

export function Learning() {
  return (
    <section id="learning" className="bg-paper text-ink py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-ink/60">Learning</p>
            <Reveal>
              <h2 className="mt-5 font-display font-extrabold text-5xl md:text-7xl tracking-tight leading-[1]">
                Operator-grade education.
                <br />
                <span className="text-ink/40">Not tutorials.</span>
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-5">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 100}>
              <div className="h-full bg-ink text-paper rounded-md border border-ink p-8 flex flex-col">
                <span className="font-mono text-[10px] tracking-widest text-volt">{c.tag}</span>
                <h3 className="mt-8 font-display font-bold text-2xl leading-tight min-h-[5rem]">{c.title}</h3>
                <p className="mt-4 text-paper/70 text-[15px] leading-relaxed flex-1">{c.desc}</p>
                <div className="mt-8 pt-5 border-t border-divider flex items-center justify-between">
                  <span className="font-mono text-[11px] text-mute">{c.detail}</span>
                  <a href="#community" className="text-volt text-sm font-medium">{c.cta}</a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 font-mono text-xs italic text-ink/55 max-w-2xl">
          All learning at FOEG Labs is designed to create qualified clients or equipped operators.
          We don't teach for teaching's sake.
        </p>
      </div>
    </section>
  );
}
