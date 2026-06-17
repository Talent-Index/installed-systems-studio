import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";

const links: { to: string; hash?: string; label: string }[] = [
  { to: "/", hash: "offer", label: "What We Do" },
  { to: "/work", label: "Our Work" },
  { to: "/tribe", label: "Our Tribe" },
  { to: "/", hash: "learning", label: "Learning" },
  { to: "/", hash: "community", label: "Community" },
];

export const APPLY_URL = "https://tally.so/r/LZMbQl";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;
    const ids = links.filter((l) => l.hash).map((l) => l.hash!);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveHash(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [pathname]);

  const linkHref = (l: typeof links[number]) => (l.hash ? `/#${l.hash}` : l.to);
  const isActive = (l: typeof links[number]) => {
    if (l.hash) return pathname === "/" && activeHash === l.hash;
    return pathname === l.to;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-[12px] border-b border-white/[0.06] bg-[rgba(10,10,10,0.85)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <Link to="/" className="font-display font-extrabold tracking-tight text-paper text-lg md:text-xl">
          FOEG<span className="text-volt">.</span>LABS
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={linkHref(l)}
              className={`text-sm tracking-wide transition-colors relative ${
                isActive(l) ? "text-paper" : "text-mute hover:text-paper"
              }`}
            >
              {l.label}
              {isActive(l) && (
                <span className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-volt" />
              )}
            </a>
          ))}
          <a
            href={APPLY_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-volt rounded-full px-5 py-2 text-sm font-semibold"
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
              <a key={l.label} href={linkHref(l)} onClick={() => setOpen(false)} className="font-display text-4xl font-bold text-paper">
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
              Apply for System Diagnosis
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
