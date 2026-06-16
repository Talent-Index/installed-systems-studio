import { Reveal } from "./Reveal";

const pains = [
  {
    n: "01",
    t: "Leads falling through the cracks",
    d: "No CRM. No follow-up. No pipeline visibility.",
  },
  {
    n: "02",
    t: "Manual everything",
    d: "WhatsApp for sales. Excel for tracking. Staff for tasks that should be automated.",
  },
  {
    n: "03",
    t: "Can't see the business",
    d: "No real-time reporting. Decisions made on gut, not data.",
  },
  {
    n: "04",
    t: "Hiring to patch system gaps",
    d: "Adding headcount where software should do the work.",
  },
];

export function Problem() {
  return (
    <section className="bg-paper text-ink py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-4">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-ink/60">The Problem</p>
            <Reveal>
              <h2 className="mt-6 font-display font-extrabold text-4xl md:text-5xl lg:text-6xl leading-[1.02] tracking-tight">
                Most businesses are running on WhatsApp and prayer.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-8 grid sm:grid-cols-2 gap-5">
            {pains.map((p, i) => (
              <Reveal key={p.n} delay={i * 80}>
                <div className="group h-full bg-ink text-paper p-8 rounded-md border border-ink hover:bg-[#0e0e0e] transition">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-mute">{p.n}</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-volt" />
                  </div>
                  <h3 className="mt-10 font-display font-bold text-2xl leading-tight">{p.t}</h3>
                  <p className="mt-3 text-paper/65 text-[15px] leading-relaxed">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal>
          <p className="mt-24 md:mt-32 font-display font-bold text-3xl md:text-5xl text-center max-w-4xl mx-auto leading-[1.1] tracking-tight">
            The fix isn't more staff or more consultants.
            <br />
            <span className="text-ink">It's </span>
            <span className="bg-volt text-ink px-3">one working system</span>
            <span className="text-ink">, installed.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
