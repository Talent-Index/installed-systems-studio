import { useEffect, useState } from "react";

const links = [
  { href: "#offer", label: "What We Do" },
  { href: "#work", label: "Our Work" },
  { href: "#learning", label: "Learning" },
  { href: "#community", label: "Community" },
];

const APPLY_URL = "https://tally.so/r/FOEG-APPLY";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive("#" + e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink/90 backdrop-blur-md border-b border-divider" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <a href="#top" className="font-display font-extrabold tracking-tight text-paper text-lg md:text-xl">
          FOEG<span className="text-volt">.</span>LABS
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm tracking-wide transition-colors ${
                active === l.href ? "text-paper" : "text-mute hover:text-paper"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href={APPLY_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-volt text-ink px-5 py-2 text-sm font-semibold hover:opacity-90 transition"
          >
            Apply
          </a>
        </nav>

        <button
          aria-label="Open menu"
          className="md:hidden p-2 text-paper"
          onClick={() => setOpen(true)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 bg-ink z-50 flex flex-col">
          <div className="flex items-center justify-between px-6 h-16 border-b border-divider">
            <span className="font-display font-extrabold text-paper">FOEG<span className="text-volt">.</span>LABS</span>
            <button aria-label="Close" className="p-2 text-paper" onClick={() => setOpen(false)}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l12 12M18 6l-12 12" />
              </svg>
            </button>
          </div>
          <nav className="flex-1 flex flex-col items-start justify-center gap-6 px-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="font-display text-4xl font-bold text-paper">
                {l.label}
              </a>
            ))}
            <a
              href={APPLY_URL}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-full bg-volt text-ink px-6 py-3 font-semibold"
            >
              Apply for a Sprint
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
