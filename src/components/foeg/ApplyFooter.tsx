import { Mail, MessageCircle } from "lucide-react";
import { Reveal } from "./Reveal";
import { APPLY_URL } from "./Nav";

function XIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2H21.5l-7.5 8.57L23 22h-6.844l-5.36-7.01L4.6 22H1.34l8.02-9.16L1 2h7.02l4.84 6.4L18.244 2Zm-2.4 18h1.9L7.26 4H5.26l10.584 16Z" />
    </svg>
  );
}

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
            className="btn-volt link-arrow rounded-full px-9 py-4 font-semibold text-lg"
          >
            Apply for System Diagnosis <span className="arrow">→</span>
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
              ["What We Do", "/#offer"],
              ["Our Work", "/work"],
              ["Our Tribe", "/tribe"],
              ["Learning", "/#learning"],
              ["Community", "/#community"],
              ["Apply", "/#apply"],
            ].map(([l, h]) => (
              <a key={h} href={h} className="text-sm text-paper/80 hover:text-volt transition">{l}</a>
            ))}
          </div>
          <div className="flex flex-col gap-4 md:items-end">
            <p className="font-mono text-[10px] tracking-widest text-mute">CONTACT</p>
            <div className="flex items-center gap-5">
              <a
                href="https://x.com/foeg_Labs"
                target="_blank"
                rel="noreferrer"
                aria-label="Follow on X"
                className="text-paper hover:text-volt transition"
              >
                <XIcon size={22} />
              </a>
              <a
                href="mailto:Foeglabslimited@gmail.com"
                aria-label="Email Us"
                className="text-paper hover:text-volt transition"
              >
                <Mail size={24} />
              </a>
              <a
                href="https://tally.so/r/LZMbQl"
                target="_blank"
                rel="noreferrer"
                aria-label="Join Avalanche Community on WhatsApp"
                className="text-paper hover:text-[#25D366] transition"
              >
                <MessageCircle size={24} />
              </a>
            </div>
            <a
              href="https://tally.so/r/LZMbQl"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-paper/80 hover:text-volt transition"
            >
              Join Avalanche Community →
            </a>
          </div>
        </div>
        <div className="border-t border-divider">
          <p className="mx-auto max-w-[1400px] px-6 md:px-10 py-6 font-mono text-[11px] tracking-widest text-mute">
            © 2026 FOEG LABS LIMITED · REGISTERED IN KENYA · ABC PLACE, 10TH FLOOR, ANTLER, NAIROBI · X.COM/FOEG_LABS
          </p>
        </div>
      </div>
    </section>
  );
}
