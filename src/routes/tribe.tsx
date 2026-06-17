import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { Nav } from "@/components/foeg/Nav";
import { ApplyFooter } from "@/components/foeg/ApplyFooter";
import { Reveal } from "@/components/foeg/Reveal";

const APPLY_URL = "https://tally.so/r/LZMbQl";
const TITLE = "Our Tribe — FOEG Labs";
const DESC =
  "Meet the operators behind FOEG Labs. Systems architects, implementation specialists, and the Avalanche ecosystem of African founders.";

export const Route = createFileRoute("/tribe")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
  }),
  component: TribePage,
});

const team = [
  {
    name: "Lavender",
    title: "FOUNDER & SYSTEMS ARCHITECT",
    bio: "Building Africa's most focused AI systems implementation studio. Operator. Builder. Ecosystem architect.",
    social: "https://x.com/foeg_Labs",
  },
  {
    name: "Chebet Candy",
    title: "COMMUNITY & GROWTH LEAD",
    bio: "Owns community growth, content strategy, and qualified lead generation across FOEG Labs platforms.",
    social: "https://x.com/foeg_Labs",
  },
  {
    name: "Godwin",
    title: "IMPLEMENTATION PARTNER — CELL LEAD",
    bio: "Leads a five-person operator unit delivering FOEG Labs Sprint implementations. Partnership: active pilot, 90-day framework.",
    social: "https://x.com/foeg_Labs",
  },
];

const founders = [
  { name: "Founder Name", building: "Building: a cross-border merchant settlement layer." },
  { name: "Founder Name", building: "Building: AI-powered logistics dispatch for SMEs." },
  { name: "Founder Name", building: "Building: stablecoin-native payroll for African startups." },
];

function XIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2H21.5l-7.5 8.57L23 22h-6.844l-5.36-7.01L4.6 22H1.34l8.02-9.16L1 2h7.02l4.84 6.4L18.244 2Zm-2.4 18h1.9L7.26 4H5.26l10.584 16Z" />
    </svg>
  );
}

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
  return (
    <div className="h-24 w-24 rounded-full bg-[color:var(--divider)] ring-2 ring-transparent group-hover:ring-volt transition flex items-center justify-center">
      <span className="font-display font-extrabold text-2xl text-volt">{initials}</span>
    </div>
  );
}

function TribePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-ink text-paper min-h-screen page-fade">
      <Nav />

      <section className="pt-32 md:pt-44 pb-16 md:pb-24 border-b border-divider">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <p className="font-mono text-xs tracking-[0.2em] text-volt">OUR TRIBE</p>
          <Reveal>
            <h1 className="mt-6 font-display font-extrabold text-5xl md:text-8xl tracking-tight leading-[1] max-w-5xl">
              The operators behind the systems.
            </h1>
          </Reveal>
          <p className="mt-8 max-w-2xl text-paper/70 text-lg leading-relaxed">
            FOEG Labs is built by a small, focused team of systems architects,
            implementation specialists, and ecosystem builders.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight">Core Team</h2>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {team.map((p, i) => (
              <Reveal key={p.name} delay={i * 80}>
                <article className="card-surface group h-full bg-surface border border-divider rounded-lg p-8">
                  <Avatar name={p.name} />
                  <h3 className="mt-6 font-display font-bold text-2xl">{p.name}</h3>
                  <p className="mt-1 font-mono text-[11px] tracking-widest text-volt uppercase">{p.title}</p>
                  <p className="mt-4 text-paper/70 leading-relaxed text-sm">{p.bio}</p>
                  <a
                    href={p.social}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${p.name} on X`}
                    className="mt-6 inline-flex text-paper/70 hover:text-volt transition"
                  >
                    <XIcon />
                  </a>
                </article>
              </Reveal>
            ))}

            <Reveal delay={240}>
              <article className="group h-full bg-ink border border-dashed border-divider rounded-lg p-8 transition hover:border-volt">
                <div className="h-24 w-24 rounded-full border-2 border-dashed border-divider flex items-center justify-center">
                  <span className="font-display font-extrabold text-2xl text-mute">?</span>
                </div>
                <h3 className="mt-6 font-display font-bold text-2xl">You?</h3>
                <p className="mt-1 font-mono text-[11px] tracking-widest text-volt uppercase">
                  IMPLEMENTATION SPECIALIST / OPERATOR
                </p>
                <p className="mt-4 text-paper/70 leading-relaxed text-sm">
                  We're always looking for sharp operators who build, not consult.
                </p>
                <a
                  href="mailto:Foeglabslimited@gmail.com"
                  className="mt-6 inline-flex text-sm font-medium text-volt hover:opacity-80"
                >
                  See open roles →
                </a>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 border-t border-divider">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight max-w-3xl">
            Avalanche Founders — Building on the Ecosystem
          </h2>
          <p className="mt-5 max-w-2xl text-paper/70">
            These are the founders building real products within the FOEG Labs / Avalanche operator network.
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {founders.map((f, i) => (
              <Reveal key={i} delay={i * 80}>
                <article className="card-surface h-full bg-surface border border-divider rounded-lg p-6">
                  <h3 className="font-display font-bold text-xl">{f.name}</h3>
                  <p className="mt-2 text-sm text-paper/70">{f.building}</p>
                  <span className="mt-5 inline-flex font-mono text-[10px] tracking-widest text-volt border border-volt/50 px-2.5 py-1 rounded-full">
                    AVALANCHE MEMBER
                  </span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-volt text-ink">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-20 md:py-28 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <h2 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight leading-[1] max-w-3xl">
              Building something? Join the Avalanche ecosystem.
            </h2>
            <p className="mt-5 text-ink/80 text-lg max-w-2xl">
              Apply for a system diagnosis and get connected to the FOEG Labs implementation network,
              operator community, and partner ecosystem.
            </p>
          </div>
          <a
            href={APPLY_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 rounded-full bg-ink text-paper px-8 py-4 font-semibold hover:opacity-90 transition"
          >
            Apply Now →
          </a>
        </div>
      </section>

      <div className="bg-ink">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-10">
          <Link to="/" className="font-mono text-xs tracking-widest text-mute hover:text-volt">
            ← BACK TO HOME
          </Link>
        </div>
      </div>

      <ApplyFooter />
    </main>
  );
}
