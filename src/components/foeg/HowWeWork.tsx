import { Reveal } from "./Reveal";

const pillars = [
  {
    title: "Audit Before We Build",
    body: "We map the workflow before touching anything. No scope creep, no surprises.",
  },
  {
    title: "Installed, Not Handed Off",
    body: "Live training, real edge cases, wired into your actual operations — not a PDF manual.",
  },
  {
    title: "Milestone-Paid, Milestone-Proven",
    body: "50/30/20. You pay as it's built, not before.",
  },
  {
    title: "Guarantee, Not a Promise",
    body: "Not live by Day 30? We keep building. Free.",
  },
];

export function HowWeWork() {
  return (
    <section id="how-we-work" className="bg-ink py-28 md:py-40 border-t border-divider">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <p className="font-mono text-xs tracking-[0.2em] text-volt">HOW WE WORK</p>
        <Reveal>
          <h2 className="mt-5 font-display font-extrabold text-4xl md:text-6xl lg:text-7xl tracking-tight leading-[1.02] max-w-4xl">
            Four rules. No exceptions.
          </h2>
        </Reveal>
        <p className="mt-6 max-w-2xl text-paper/65 text-lg">
          The operating principles behind every FOEG Labs Sprint.
        </p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <div className="card-surface h-full p-8 bg-surface border border-divider rounded-md flex flex-col">
                <span className="font-mono text-xs text-mute">0{i + 1}</span>
                <h3 className="mt-10 font-display font-bold text-xl leading-tight">{p.title}</h3>
                <p className="mt-4 text-paper/70 text-[15px] leading-relaxed">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
