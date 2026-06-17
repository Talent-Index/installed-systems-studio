import { Reveal } from "./Reveal";

const blocks = [
  {
    glyph: "▲",
    title: "Avalanche",
    desc: "A curated WhatsApp and IRL community for serious African founders building systems-driven businesses. Access to FOEG Labs tools, sessions, and operator network.",
    cta: { label: "Join Community →", href: "https://chat.whatsapp.com/" },
  },
  {
    glyph: "◆",
    title: "Business Safari",
    desc: "Paid, application-gated events connecting vetted operators with implementation knowledge and each other. Sponsor opportunities available.",
    cta: { label: "Sponsor Deck →", href: "mailto:Foeglabslimited@gmail.com" },
  },
  {
    glyph: "●",
    title: "FUNDED",
    desc: "Spotlighting funded African founders and the operational systems powering their growth. Stories. Frameworks. Proof.",
    cta: { label: "Coming Soon", href: "#" },
  },
];

export function Community() {
  return (
    <section id="community" className="bg-ink py-28 md:py-40 border-t border-divider">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <p className="font-mono text-xs tracking-[0.2em] text-volt">ECOSYSTEM</p>
        <Reveal>
          <h2 className="mt-5 font-display font-extrabold text-4xl md:text-6xl lg:text-7xl tracking-tight leading-[1.02] max-w-4xl">
            We build the operators. Not just the systems.
          </h2>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-3 gap-5">
          {blocks.map((b, i) => (
            <Reveal key={b.title} delay={i * 100}>
              <div className="card-surface h-full p-8 bg-surface border border-divider rounded-md flex flex-col">
                <div className="flex items-center justify-between">
                  <span className="font-display text-3xl text-volt">{b.glyph}</span>
                  <span className="font-mono text-[10px] text-mute tracking-widest">0{i + 1}</span>
                </div>
                <h3 className="mt-10 font-display font-bold text-2xl">{b.title}</h3>
                <p className="mt-4 text-paper/70 text-[15px] leading-relaxed flex-1">{b.desc}</p>
                <a
                  href={b.cta.href}
                  target={b.cta.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="mt-8 font-medium text-volt"
                >
                  {b.cta.label}
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-24 font-display font-bold text-2xl md:text-4xl text-center max-w-4xl mx-auto leading-tight tracking-tight">
            FOEG Labs is building infrastructure for African business growth.
            <br />
            <span className="text-mute text-xl md:text-2xl font-sans font-normal">
              Partnership and investment inquiries:{" "}
              <a href="mailto:Foeglabslimited@gmail.com" className="text-volt">Foeglabslimited@gmail.com</a>
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
