import { Reveal } from "./Reveal";

const APPLY_URL = "https://tally.so/r/FOEG-APPLY";

export function ApplyFooter() {
  return (
    <section id="apply" className="bg-ink border-t border-divider">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-28 md:py-40">
        <Reveal>
          <h2 className="font-display font-extrabold text-4xl md:text-7xl tracking-tight leading-[1] max-w-5xl">
            Three slots. <span className="text-volt">One offer.</span>
            <br />
            Serious operators only.
          </h2>
        </Reveal>
        <p className="mt-8 max-w-2xl text-paper/70 text-lg leading-relaxed">
          We reject approximately 70% of applicants. Not to be exclusive — to protect the quality of every Sprint we deliver.
          If you're generating KSh 400K+ per month and your operations are a mess, apply.
        </p>

        <div className="mt-12 flex flex-wrap items-center gap-6">
          <a
            href={APPLY_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-volt text-ink px-9 py-4 font-semibold text-lg hover:opacity-90 transition"
          >
            Apply for a Systems Sprint →
          </a>
          <span className="font-mono text-xs tracking-widest text-mute">
            NEXT COHORT: JULY 2026 · 1 SLOT REMAINING
          </span>
        </div>
      </div>

      <div className="border-t border-divider">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-14 grid md:grid-cols-3 gap-10">
          <div>
            <p className="font-display font-extrabold text-xl text-paper">FOEG<span className="text-volt">.</span>LABS</p>
            <p className="mt-4 text-sm text-mute leading-relaxed">
              Frontier of Ecosystem Growth
              <br />
              Nairobi, Kenya
              <br />
              ABC Place, 10th Floor, Antler
            </p>
          </div>
          <div className="flex flex-col gap-2 md:items-center">
            <p className="font-mono text-[10px] tracking-widest text-mute mb-2">SITEMAP</p>
            {[
              ["What We Do", "#offer"],
              ["Our Work", "#work"],
              ["Learning", "#learning"],
              ["Community", "#community"],
              ["Apply", "#apply"],
            ].map(([l, h]) => (
              <a key={h} href={h} className="text-sm text-paper/80 hover:text-volt transition">{l}</a>
            ))}
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <p className="font-mono text-[10px] tracking-widest text-mute">CONTACT</p>
            <a href="https://x.com/foeg_Labs" target="_blank" rel="noreferrer" className="text-sm text-paper/80 hover:text-volt">X — @foeg_Labs</a>
            <a href="mailto:Foeglabslimited@gmail.com" className="text-sm text-paper/80 hover:text-volt">Foeglabslimited@gmail.com</a>
            <a href="https://chat.whatsapp.com/" target="_blank" rel="noreferrer" className="text-sm text-paper/80 hover:text-volt">WhatsApp Community</a>
          </div>
        </div>
        <div className="border-t border-divider">
          <p className="mx-auto max-w-[1400px] px-6 md:px-10 py-6 font-mono text-[11px] tracking-widest text-mute">
            © 2026 FOEG LABS LIMITED · REGISTERED IN KENYA · BUILT WITH INTENT.
          </p>
        </div>
      </div>
    </section>
  );
}
