import { Reveal } from "./Reveal";

const blocks = [
  {
    week: "WEEK 1 · DISCOVERY & DIAGNOSIS",
    title: "We audit before we build.",
    body: "We map your workflows, identify the biggest operational bottlenecks, and agree on exactly what gets installed. No scope creep. No surprises.",
    milestone: "Milestone 1 — 50% payment due",
  },
  {
    week: "WEEK 2 · BUILD",
    title: "Systems go in. Fast.",
    body: "Our team builds and configures your AI workflows, CRM automations, and operational infrastructure. You can see it happening in real time.",
    milestone: "Active build sprint",
  },
  {
    week: "WEEK 3 · INTEGRATION & TRAINING",
    title: "Your team gets trained. Not handed a manual.",
    body: "We run live training sessions, handle edge cases, and wire everything into your actual daily operations.",
    milestone: "Milestone 2 — 30% payment due",
  },
  {
    week: "WEEK 4 · HANDOVER & GUARANTEE",
    title: "Live. Documented. Guaranteed.",
    body: "Everything running. Full documentation delivered. If it's not live and in use by Day 30, we keep building. Free.",
    milestone: "Milestone 3 — 20% payment due",
  },
];

function Visual({ index }: { index: number }) {
  // 4 distinct abstract geometric placeholders
  const variants = [
    "from-volt/30 via-volt/5 to-transparent",
    "from-paper/20 via-paper/5 to-transparent",
    "from-volt/20 via-paper/5 to-transparent",
    "from-paper/15 via-volt/10 to-transparent",
  ];
  return (
    <div className="relative aspect-[4/5] md:aspect-square bg-surface border border-divider rounded-md overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br ${variants[index]}`} />
      <div className="absolute inset-0 grid grid-cols-8 grid-rows-8">
        {Array.from({ length: 64 }).map((_, i) => (
          <div key={i} className="border-r border-b border-paper/5" />
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-display font-extrabold text-[18vw] md:text-[10vw] text-paper/10 leading-none">
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

export function Process() {
  return (
    <section className="bg-ink py-28 md:py-40 border-t border-divider">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <p className="font-mono text-xs tracking-[0.2em] text-volt">HOW IT WORKS</p>
        <Reveal>
          <h2 className="mt-5 font-display font-extrabold text-4xl md:text-6xl lg:text-7xl tracking-tight leading-[1.02] max-w-4xl">
            Four weeks. Four milestones. One working system.
          </h2>
        </Reveal>

        <div className="mt-20 space-y-24 md:space-y-32">
          {blocks.map((b, i) => {
            const imageLeft = i % 2 === 1;
            return (
              <div key={b.week} className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
                <div className={`md:col-span-6 ${imageLeft ? "md:order-2" : ""}`}>
                  <Reveal>
                    <p className="font-mono text-xs tracking-[0.2em] text-mute">{b.week}</p>
                    <h3 className="mt-6 font-display font-bold text-3xl md:text-5xl leading-[1.05] tracking-tight">
                      {b.title}
                    </h3>
                    <p className="mt-6 text-paper/70 text-lg leading-relaxed max-w-lg">{b.body}</p>
                    <div className="mt-8 inline-flex items-center gap-3 border-t border-divider pt-5">
                      <span className="h-2 w-2 bg-volt" />
                      <span className="font-mono text-xs tracking-widest text-paper">{b.milestone}</span>
                    </div>
                  </Reveal>
                </div>
                <div className={`md:col-span-6 ${imageLeft ? "md:order-1" : ""}`}>
                  <Reveal delay={100}>
                    <Visual index={i} />
                  </Reveal>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
