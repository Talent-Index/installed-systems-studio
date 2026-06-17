import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";

const blocks = [
  {
    week: "WEEK 1 · DISCOVERY & DIAGNOSIS",
    short: "Discovery & Diagnosis",
    title: "We audit before we build.",
    body: "We map your workflows, identify the biggest operational bottlenecks, and agree on exactly what gets installed. No scope creep. No surprises.",
    milestone: "Milestone 1 — 50% payment due",
  },
  {
    week: "WEEK 2 · BUILD",
    short: "Build",
    title: "Systems go in. Fast.",
    body: "Our team builds and configures your AI workflows, CRM automations, and operational infrastructure. You can see it happening in real time.",
    milestone: "Active build sprint",
  },
  {
    week: "WEEK 3 · INTEGRATION & TRAINING",
    short: "Integration & Training",
    title: "Your team gets trained. Not handed a manual.",
    body: "We run live training sessions, handle edge cases, and wire everything into your actual daily operations.",
    milestone: "Milestone 2 — 30% payment due",
  },
  {
    week: "WEEK 4 · HANDOVER & GUARANTEE",
    short: "Handover & Guarantee",
    title: "Live. Documented. Guaranteed.",
    body: "Everything running. Full documentation delivered. If it's not live and in use by Day 30, we keep building. Free.",
    milestone: "Milestone 3 — 20% payment due",
  },
];

function Visual({ index }: { index: number }) {
  const variants = [
    "from-volt/30 via-volt/5 to-transparent",
    "from-paper/20 via-paper/5 to-transparent",
    "from-volt/20 via-paper/5 to-transparent",
    "from-paper/15 via-volt/10 to-transparent",
  ];
  return (
    <div className="relative aspect-[5/3] bg-ink border border-divider rounded-md overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br ${variants[index]}`} />
      <div className="absolute inset-0 grid grid-cols-8 grid-rows-6">
        {Array.from({ length: 48 }).map((_, i) => (
          <div key={i} className="border-r border-b border-paper/5" />
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-display font-extrabold text-[14vw] md:text-[8vw] text-paper/10 leading-none">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="absolute top-5 left-5 right-5 flex justify-between font-mono text-[10px] tracking-widest text-mute">
        <span>FOEG / SPRINT</span>
        <span>WK.{index + 1}</span>
      </div>
      <div className="absolute bottom-5 left-5 right-5 flex justify-between font-mono text-[10px] tracking-widest text-mute">
        <span>NAIROBI</span>
        <span className="text-volt">●</span>
      </div>
    </div>
  );
}

function DesktopSplit() {
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);
  const userInteracted = useRef(false);

  useEffect(() => {
    if (userInteracted.current) return;
    const id = window.setInterval(() => {
      if (userInteracted.current) return;
      setFading(true);
      window.setTimeout(() => {
        setActive((p) => (p + 1) % blocks.length);
        setFading(false);
      }, 150);
    }, 4000);
    return () => window.clearInterval(id);
  }, []);

  const select = (i: number) => {
    userInteracted.current = true;
    if (i === active) return;
    setFading(true);
    window.setTimeout(() => {
      setActive(i);
      setFading(false);
    }, 150);
  };

  const b = blocks[active];
  return (
    <div className="mt-20 hidden md:grid grid-cols-12 gap-12">
      <div className="col-span-5 flex flex-col">
        {blocks.map((blk, i) => {
          const isActive = i === active;
          return (
            <button
              key={blk.week}
              onClick={() => select(i)}
              className={`text-left pl-6 py-6 border-l-[2px] transition-colors duration-300 ${
                isActive ? "border-l-volt" : "border-l-[color:var(--divider)] hover:border-l-paper/30"
              }`}
            >
              <p
                className={`font-mono text-[11px] tracking-[0.18em] ${
                  isActive ? "text-volt" : "text-mute"
                }`}
              >
                {blk.week.split(" · ")[0]}
              </p>
              <p
                className={`mt-2 font-display font-bold text-2xl transition-colors ${
                  isActive ? "text-paper" : "text-mute"
                }`}
              >
                {blk.short}
              </p>
            </button>
          );
        })}
      </div>

      <div className="col-span-7">
        <div
          className="transition-opacity duration-200"
          style={{ opacity: fading ? 0 : 1 }}
        >
          <p className="font-mono text-xs tracking-[0.2em] text-volt uppercase">{b.week}</p>
          <h3 className="mt-5 font-display font-extrabold text-4xl lg:text-5xl leading-[1.05] tracking-tight text-paper">
            {b.title}
          </h3>
          <p className="mt-6 text-paper/70 text-lg leading-relaxed max-w-xl">{b.body}</p>
          <div className="mt-8">
            <span className="inline-flex items-center gap-2 font-mono text-[11px] tracking-widest text-volt border border-volt/50 px-3 py-1.5 rounded-full">
              <span className="h-1.5 w-1.5 rounded-full bg-volt" />
              {b.milestone}
            </span>
          </div>
          <div className="mt-10">
            <Visual index={active} />
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileAccordion() {
  const [open, setOpen] = useState(0);
  return (
    <div className="mt-12 md:hidden space-y-3">
      {blocks.map((b, i) => {
        const isOpen = i === open;
        return (
          <div key={b.week} className="border border-divider rounded-md overflow-hidden bg-surface">
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="w-full flex items-center justify-between text-left px-5 py-4"
            >
              <div>
                <p className={`font-mono text-[10px] tracking-widest ${isOpen ? "text-volt" : "text-mute"}`}>
                  {b.week.split(" · ")[0]}
                </p>
                <p className="mt-1 font-display font-bold text-lg text-paper">{b.short}</p>
              </div>
              <span className={`text-volt text-xl transition-transform ${isOpen ? "rotate-45" : ""}`}>+</span>
            </button>
            {isOpen && (
              <div className="px-5 pb-5">
                <h3 className="font-display font-bold text-xl text-paper leading-tight">{b.title}</h3>
                <p className="mt-3 text-paper/70 text-sm leading-relaxed">{b.body}</p>
                <span className="mt-4 inline-flex items-center gap-2 font-mono text-[10px] tracking-widest text-volt border border-volt/50 px-2.5 py-1 rounded-full">
                  <span className="h-1.5 w-1.5 rounded-full bg-volt" />
                  {b.milestone}
                </span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export function Process() {
  return (
    <section className="bg-ink py-28 md:py-40 border-t border-divider">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.2em] text-volt">HOW IT WORKS</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-5 font-display font-extrabold text-4xl md:text-6xl lg:text-7xl tracking-tight leading-[1.02] max-w-4xl">
            Four weeks. Four milestones. One working system.
          </h2>
        </Reveal>

        <DesktopSplit />
        <MobileAccordion />
      </div>
    </section>
  );
}
