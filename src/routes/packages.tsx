import { createFileRoute } from "@tanstack/react-router";
import { PricingCard } from "@/components/PricingCard";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Packages & Pricing — Sportshandicapper" },
      { name: "description", content: "Pick the plan that fits your bankroll. Free trial, weekly, monthly, and full-season premium packages." },
      { property: "og:title", content: "Packages & Pricing — Sportshandicapper" },
      { property: "og:description", content: "Free trial. Weekly, monthly, and season-long expert picks." },
      { property: "og:url", content: "/packages" },
    ],
    links: [{ rel: "canonical", href: "/packages" }],
  }),
  component: PackagesPage,
});

function PackagesPage() {
  return (
    <section className="py-28">
      <div className="container-x">
        <Reveal>
          <div className="max-w-3xl">
            <p className="eyebrow">Packages</p>
            <h1 className="mt-3 text-5xl md:text-6xl font-black tracking-tight gradient-text">Pick your edge.</h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Every plan includes transparent unit tracking, full pick history, and verified results. No upsells, no hidden tiers.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Reveal delay={0}>
            <PricingCard name="Free Trial" price="$0" period="7 days" tagline="Try the service risk-free."
              features={["1 expert pick per day", "Email delivery", "Single sport access", "No credit card"]}
              cta="Start free" />
          </Reveal>
          <Reveal delay={100}>
            <PricingCard name="Weekly" price="$79" period="week" tagline="All sports, all picks, one week."
              features={["All daily picks", "All sports", "5★ premium plays", "Member dashboard"]} />
          </Reveal>
          <Reveal delay={200}>
            <PricingCard name="Monthly" price="$249" period="month" tagline="The most popular plan." highlight
              features={["Everything in Weekly", "Live in-game picks", "Priority pick alerts", "Direct analyst Q&A"]}
              cta="Get Monthly" />
          </Reveal>
          <Reveal delay={300}>
            <PricingCard name="Premium Season" price="$899" period="season" tagline="Full season, all access."
              features={["Everything in Monthly", "Futures & props", "1:1 strategy calls", "Best-price guarantee"]} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
