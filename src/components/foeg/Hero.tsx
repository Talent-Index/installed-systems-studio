const APPLY_URL = "https://tally.so/r/LZMbQl";
const TICKER = [
  "Systems Implementation Sprint",
  "KSh 400K–650K",
  "30 Days",
  "50/30/20 Milestones",
  "3 Clients/Month",
  "VASP Act Compliance Ready",
  "Nairobi, Kenya",
];

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex flex-col bg-ink pt-24 md:pt-28">
      <div className="mx-auto max-w-[1400px] w-full px-6 md:px-10 flex-1 flex flex-col">
        <div className="flex items-start justify-between">
          <p className="label-mono">Systems Implementation Studio · Nairobi, Kenya</p>
          <p className="label-mono hidden md:block">EST. 2026 / FOEG-001</p>
        </div>

        <div className="flex-1 flex flex-col justify-center py-16 md:py-24">
          <h1 className="font-display font-extrabold tracking-[-0.03em] leading-[0.92] text-[14vw] md:text-[9.5vw] lg:text-[8.5vw]">
            <span className="block text-paper">African businesses</span>
            <span className="block text-volt">don't need more consultants.</span>
            <span className="block text-paper">They need working systems.</span>
          </h1>

          <p className="mt-10 max-w-2xl text-lg md:text-xl text-paper/75 leading-relaxed">
            FOEG Labs installs AI-powered operational systems for revenue-generating
            African businesses — in 30 days, fixed scope, milestone payments.
            <span className="text-paper"> We build it. You run it. Guaranteed.</span>
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={APPLY_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-volt text-ink px-7 py-3.5 font-semibold hover:opacity-90 transition"
            >
              Apply for System Diagnosis →
            </a>
            <a
              href="#work"
              className="rounded-full border border-paper/30 text-paper px-7 py-3.5 font-medium hover:border-paper transition"
            >
              See Our Work
            </a>
          </div>
        </div>
      </div>

      <div className="border-y border-divider overflow-hidden py-4">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, k) => (
            <div key={k} className="flex shrink-0">
              {TICKER.map((t, i) => (
                <span key={`${k}-${i}`} className="font-mono text-xs md:text-sm text-mute px-6 flex items-center gap-6">
                  {t}
                  <span className="text-volt">·</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
