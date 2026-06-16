import { Reveal } from "./Reveal";

const stats = [
  { n: "KSh 400K–650K", l: "Per Sprint" },
  { n: "3", l: "Maximum Clients / Month" },
  { n: "30 Days", l: "Guaranteed Delivery" },
];

export function Investor() {
  return (
    <section className="bg-paper text-ink py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid md:grid-cols-3 gap-10 md:gap-6 border-y border-ink/15 py-12 md:py-16">
          {stats.map((s, i) => (
            <Reveal key={s.l} delay={i * 80}>
              <div className={`flex flex-col ${i !== 0 ? "md:border-l md:border-ink/15 md:pl-10" : ""}`}>
                <span className="font-mono text-3xl md:text-5xl text-ink tracking-tight">{s.n}</span>
                <span className="mt-3 text-ink/55 text-sm uppercase tracking-widest font-mono">{s.l}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-16 font-display text-2xl md:text-4xl leading-[1.15] tracking-tight max-w-5xl text-ink">
            FOEG Labs is a systems implementation studio registered in Kenya, operating at the intersection of
            AI automation, business operations, and ecosystem growth. We are selectively open to strategic
            partnerships, implementation partnerships, and institutional relationships that compound the commercial engine.
          </p>
        </Reveal>

        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href="https://calendly.com/foeglabslimited/30min"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-volt text-ink px-7 py-3.5 font-semibold hover:opacity-90 transition"
          >
            Book a Discovery Call →
          </a>
          <a
            href="mailto:Foeglabslimited@gmail.com?subject=Partner%20Brief%20Request"
            className="rounded-full border border-ink text-ink px-7 py-3.5 font-medium hover:bg-ink hover:text-paper transition"
          >
            Download Partner Brief
          </a>
        </div>
      </div>
    </section>
  );
}
