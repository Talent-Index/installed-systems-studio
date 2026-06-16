import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/foeg/Nav";
import { Hero } from "@/components/foeg/Hero";
import { Problem } from "@/components/foeg/Problem";
import { Offer } from "@/components/foeg/Offer";
import { Work } from "@/components/foeg/Work";
import { Process } from "@/components/foeg/Process";
import { Learning } from "@/components/foeg/Learning";
import { Community } from "@/components/foeg/Community";
import { Investor } from "@/components/foeg/Investor";
import { ApplyFooter } from "@/components/foeg/ApplyFooter";

const TITLE = "FOEG Labs — Systems Implementation for Serious African Operators";
const DESC =
  "FOEG Labs installs AI-powered operational systems for revenue-generating African businesses — in 30 days, fixed scope, milestone payments. Installed. Not consulted.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-ink text-paper min-h-screen">
      <Nav />
      <Hero />
      <Problem />
      <Offer />
      <Work />
      <Process />
      <Learning />
      <Community />
      <Investor />
      <ApplyFooter />
    </main>
  );
}
