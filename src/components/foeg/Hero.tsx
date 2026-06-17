import { useEffect, useState } from "react";

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

const ROTATING = ["systems.", "operations.", "infrastructure.", "automation.", "clarity."];

function RotatingWord() {
  const [i, setI] = useState(0);
  const [phase, setPhase] = useState<"in" | "out">("in");

  useEffect(() => {
    const reduce = typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    let outTimer: number;
    const inTimer = window.setInterval(() => {
      setPhase("out");
      outTimer = window.setTimeout(() => {
        setI((p) => (p + 1) % ROTATING.length);
        setPhase("in");
      }, 200);
    }, 2500);
    return () => {
      window.clearInterval(inTimer);
      window.clearTimeout(outTimer);
    };
  }, []);

  return (
    <span
      className="relative inline-block overflow-hidden align-baseline text-volt"
      style={{ minWidth: "11ch", verticalAlign: "baseline" }}
    >
      <span
        key={`${i}-${phase}`}
        className={phase === "in" ? "rotate-word-enter inline-block" : "rotate-word-exit inline-block"}
      >
        {ROTATING[i]}
      </span>
    </span>
  );
}

export function Hero() {
  // Only run staggered entrance once per session
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    try {
      const played = sessionStorage.getItem("foeg_hero_played");
      if (!played) {
        setAnimate(true);
        sessionStorage.setItem("foeg_hero_played", "1");
      }
    } catch {
      setAnimate(true);
    }
  }, []);

  const a = (cls: string, delay: number) =>
    animate ? { className: cls, style: { animationDelay: `${delay}ms` } } : { className: "" };

  return (
    <section id="top" className="relative min-h-screen flex flex-col bg-ink pt-24 md:pt-28">
      <div className="mx-auto max-w-[1400px] w-full px-6 md:px-10 flex-1 flex flex-col">
        <div className="flex items-start justify-between">
          <p {...a("hero-anim-label", 0)}>
            <span className="label-mono">Systems Implementation Studio · Nairobi, Kenya</span>
          </p>
          <p className="label-mono hidden md:block">EST. 2026 / FOEG-001</p>
        </div>

        <div className="flex-1 flex flex-col justify-center py-16 md:py-24">
          <h1 className="font-display font-extrabold tracking-[-0.03em] leading-[0.92] text-[14vw] md:text-[9.5vw] lg:text-[8.5vw]">
            <span {...a("hero-anim block text-paper", 150)} className={`block text-paper ${animate ? "hero-anim" : ""}`} style={animate ? { animationDelay: "150ms" } : undefined}>
              African businesses
            </span>
            <span className={`block text-volt ${animate ? "hero-anim" : ""}`} style={animate ? { animationDelay: "250ms" } : undefined}>
              don't need more consultants.
            </span>
            <span className={`block text-paper ${animate ? "hero-anim" : ""}`} style={animate ? { animationDelay: "350ms" } : undefined}>
              They need working <RotatingWord />
            </span>
          </h1>

          <p
            className={`mt-10 max-w-2xl text-lg md:text-xl text-paper/75 leading-relaxed ${animate ? "hero-anim-soft" : ""}`}
            style={animate ? { animationDelay: "600ms" } : undefined}
          >
            FOEG Labs installs AI-powered operational systems for revenue-generating
            African businesses — in 30 days, fixed scope, milestone payments.
            <span className="text-paper"> We build it. You run it. Guaranteed.</span>
          </p>

          <div
            className={`mt-10 flex flex-wrap items-center gap-4 ${animate ? "hero-anim-soft" : ""}`}
            style={animate ? { animationDelay: "850ms" } : undefined}
          >
            <a
              href={APPLY_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-volt rounded-full px-7 py-3.5 font-semibold link-arrow"
            >
              Apply for System Diagnosis <span className="arrow">→</span>
            </a>
            <a
              href="#work"
              className="rounded-full border border-paper/30 text-paper px-7 py-3.5 font-medium hover:border-paper transition link-arrow"
            >
              See Our Work
            </a>
          </div>
        </div>
      </div>

      <div
        className={`border-y border-divider overflow-hidden py-4 ticker-mask ${animate ? "hero-anim-fade" : ""}`}
        style={animate ? { animationDelay: "1100ms" } : undefined}
      >
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, k) => (
            <div key={k} className="flex shrink-0">
              {TICKER.map((t, i) => (
                <span key={`${k}-${i}`} className="font-mono text-[14px] text-mute px-6 flex items-center gap-6">
                  {t}
                  <span className="text-volt">●</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
