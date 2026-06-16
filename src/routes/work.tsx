import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { Nav } from "@/components/foeg/Nav";
import { ApplyFooter } from "@/components/foeg/ApplyFooter";
import { Reveal } from "@/components/foeg/Reveal";

const APPLY_URL = "https://tally.so/r/LZMbQl";
const TITLE = "Our Work — FOEG Labs";
const DESC =
  "Portfolio of systems and products built by FOEG Labs and the operators we partner with. AvaRamp, AutopayKE, Plug n' Play, Project Mocha, RickyBags.";

export const Route = createFileRoute("/work")({
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
  component: WorkPage,
});

type Status = "LIVE" | "INTERNAL" | "SPRINT DELIVERED";

const solutions: {
  tag: string;
  name: string;
  tagline: string;
  description: string;
  meta?: string;
  status: Status;
  href?: string;
  ctaLabel?: string;
  staticNote?: string;
  footerNote?: string;
}[] = [
  {
    tag: "FINTECH · PAYMENTS · LIVE",
    name: "AvaRamp",
    tagline: "Crypto to fiat, instantly.",
    description:
      "Accept USDC on Avalanche. Settle as KES, NGN, GHS, TZS, or UGX via M-Pesa in under 3 minutes. Built for African merchants who want to accept global payments without touching crypto.",
    meta: "Kenya · Nigeria · Ghana · Tanzania · Uganda",
    status: "LIVE",
    href: "https://avarampsure.vercel.app/",
    ctaLabel: "View AvaRamp →",
  },
  {
    tag: "FINTECH · MOBILE MONEY · LIVE",
    name: "AutopayKE",
    tagline: "Phone-first money for Africa.",
    description:
      "Send money to any phone number across Africa. Settles on M-Pesa, MoMo, Wave or bank — in seconds. No bank account. No seed phrase. Just a phone number and an amount.",
    status: "LIVE",
    href: "https://autopayke.com",
    ctaLabel: "View AutopayKE →",
  },
  {
    tag: "GAMING · COMMUNITY · LIVE",
    name: "Plug n' Play",
    tagline: "Multiplayer gaming for the ecosystem.",
    description:
      "A browser-based multiplayer game experience built for the FOEG Labs / Avalanche community. Operator-built, community-run.",
    status: "LIVE",
    href: "https://plugplayarena.vercel.app/",
    ctaLabel: "Play →",
  },
  {
    tag: "INTERNAL · SYSTEMS",
    name: "Project Mocha",
    tagline: "Internal operations infrastructure.",
    description:
      "A proprietary internal system powering FOEG Labs' client delivery, workflow automation, and reporting infrastructure. Not public — but the backbone of every Sprint we run.",
    status: "INTERNAL",
    staticNote: "Powering FOEG Labs Delivery",
  },
  {
    tag: "MANUFACTURING · CASE STUDY · SPRINT 1",
    name: "RickyBags — Systems Sprint",
    tagline: "Sustainable manufacturing, operational clarity.",
    description:
      "A KSh 550,000 Systems Implementation Sprint for a Nairobi-based sustainable bag manufacturer. Installed: inventory workflow automation, WhatsApp order management system, and operational reporting dashboard.",
    status: "SPRINT DELIVERED",
    staticNote: "Case study documentation in progress",
    footerNote: "Client identity confirmed for public display.",
  },
];

function StatusBadge({ status }: { status: Status }) {
  const styles: Record<Status, string> = {
    LIVE: "bg-volt text-ink",
    INTERNAL: "bg-[color:var(--divider)] text-mute",
    "SPRINT DELIVERED": "bg-paper text-ink",
  };
  return (
    <span className={`font-mono text-[10px] tracking-widest px-2.5 py-1 rounded-full ${styles[status]}`}>
      {status}
    </span>
  );
}

function WorkPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-ink text-paper min-h-screen">
      <Nav />

      <section className="pt-32 md:pt-44 pb-16 md:pb-24 border-b border-divider">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <p className="font-mono text-xs tracking-[0.2em] text-volt">OUR WORK</p>
          <Reveal>
            <h1 className="mt-6 font-display font-extrabold text-5xl md:text-8xl tracking-tight leading-[1] max-w-5xl">
              Systems we've installed. Products we've shipped.
            </h1>
          </Reveal>
          <p className="mt-8 max-w-2xl text-paper/70 text-lg leading-relaxed">
            Proof over promises. These are real solutions built by FOEG Labs and the operators we partner with.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid md:grid-cols-2 gap-6">
          {solutions.map((s, i) => (
            <Reveal key={s.name} delay={i * 80}>
              <article className="group h-full bg-surface border border-divider rounded-lg p-8 md:p-10 transition hover:border-l-[3px] hover:border-l-volt hover:bg-[#181818]">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-[10px] tracking-widest text-mute">{s.tag}</span>
                  <StatusBadge status={s.status} />
                </div>

                <div className="mt-8 h-20 w-20 rounded-md bg-ink border border-divider flex items-center justify-center">
                  <span className="font-display font-extrabold text-3xl text-volt">
                    {s.name.charAt(0)}
                  </span>
                </div>

                <h2 className="mt-6 font-display font-extrabold text-3xl md:text-4xl tracking-tight">
                  {s.name}
                </h2>
                <p className="mt-2 font-mono text-sm text-volt">{s.tagline}</p>

                <p className="mt-5 text-paper/75 leading-relaxed">{s.description}</p>

                {s.meta && (
                  <p className="mt-4 font-mono text-[11px] tracking-widest text-mute uppercase">
                    {s.meta}
                  </p>
                )}

                <div className="mt-8 pt-6 border-t border-divider">
                  {s.href ? (
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex rounded-full bg-volt text-ink px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition"
                    >
                      {s.ctaLabel}
                    </a>
                  ) : (
                    <p className="font-mono text-xs tracking-widest text-mute uppercase">
                      {s.staticNote}
                    </p>
                  )}

                  {s.footerNote && (
                    <p className="mt-5 font-mono text-[10px] tracking-widest text-mute">
                      {s.footerNote}
                    </p>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-volt text-ink">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-20 md:py-28 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <h2 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight leading-[1] max-w-3xl">
              Your business could be next.
            </h2>
            <p className="mt-5 text-ink/80 text-lg max-w-xl">
              We take 3 clients per month. Applications for July are open.
            </p>
          </div>
          <a
            href={APPLY_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 rounded-full bg-ink text-paper px-8 py-4 font-semibold hover:opacity-90 transition"
          >
            Apply for System Diagnosis →
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
