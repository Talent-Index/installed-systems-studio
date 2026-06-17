import { Reveal } from "./Reveal";

const APPLY_URL = "https://tally.so/r/LZMbQl";

const cols = [
  {
    label: "AI Automation",
    items: [
      "Claude Skills Suite (3–5 custom named AI tools)",
      "Claude Team / Enterprise setup + team training",
      "Custom internal AI assistants",
    ],
  },
  {
    label: "Operational Infrastructure",
    items: [
      "CRM setup and automation",
      "WhatsApp workflow automation",
      "Lead capture and follow-up systems",
      "Operational dashboards",
    ],
  },
  {
    label: "Compliance Systems",
    tag: "FINTECH / VASP READY",
    items: [
      "VASP Act 2025 compliance operations",
      "License-ready operational systems",
      "Policy-to-process implementation",
    ],
  },
];

export function Offer() {
  return (
    <section id="offer" className="bg-ink py-28 md:py-40 border-t border-divider">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <p className="font-mono text-xs tracking-[0.2em] text-volt">THE SPRINT</p>
        <Reveal>
          <h2 className="mt-5 font-display font-extrabold text-4xl md:text-6xl lg:text-7xl tracking-tight leading-[1.02] max-w-5xl">
            30-Day Systems Implementation Sprint
          </h2>
        </Reveal>
        <p className="mt-6 max-w-2xl text-paper/65 text-lg">
          Three workstreams. One installed system. Fixed scope. Milestone-paid.
        </p>

        <div className="mt-16 grid md:grid-cols-3 gap-5">
          {cols.map((c, i) => (
            <Reveal key={c.label} delay={i * 100}>
              <div className="card-surface h-full p-8 bg-surface border border-divider rounded-md flex flex-col">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-mute">0{i + 1}</span>
                  {c.tag && (
                    <span className="font-mono text-[10px] tracking-widest text-volt border border-volt/40 px-2 py-1 rounded-full">
                      {c.tag}
                    </span>
                  )}
                </div>
                <h3 className="mt-10 font-display font-bold text-2xl">{c.label}</h3>
                <ul className="mt-6 space-y-3 text-paper/75 text-[15px]">
                  {c.items.map((it) => (
                    <li key={it} className="flex gap-3">
                      <span className="text-volt mt-1.5 h-1 w-3 bg-volt shrink-0" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 bg-surface border border-divider rounded-md p-8 md:p-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="font-mono text-xs text-mute tracking-widest">PRICING & TERMS</p>
              <p className="mt-3 font-display text-2xl md:text-3xl font-bold leading-tight">
                KSh 400,000 – 650,000
              </p>
              <p className="mt-3 text-paper/70 text-sm leading-relaxed">
                Fixed scope · Milestone payments (50 / 30 / 20) · 3 clients per month maximum
              </p>
            </div>
            <div className="md:border-l md:border-divider md:pl-10">
              <p className="font-mono text-xs text-volt tracking-widest">THE GUARANTEE</p>
              <p className="mt-3 font-display text-xl md:text-2xl font-bold leading-snug">
                Working systems live and in use by Day 30. Or we keep building. Free.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-12">
          <a
            href={APPLY_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-volt link-arrow inline-block rounded-full px-8 py-4 font-semibold"
          >
            Apply Now <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
