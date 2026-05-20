import { createFileRoute } from "@tanstack/react-router";
import { PickCard } from "@/components/PickCard";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/picks")({
  head: () => ({
    meta: [
      { title: "Today's Picks — Sportshandicapper" },
      { name: "description", content: "Live board of today's expert sports picks with confidence ratings and star levels across every major league." },
      { property: "og:title", content: "Today's Picks — Sportshandicapper" },
      { property: "og:description", content: "Tonight's expert picks across NFL, NBA, MLB, NHL, NCAAF, NCAAB." },
      { property: "og:url", content: "/picks" },
    ],
    links: [{ rel: "canonical", href: "/picks" }],
  }),
  component: PicksPage,
});

const PICKS = [
  { sport: "NBA", matchup: "Lakers @ Warriors", pick: "Warriors -2.5", stars: 4, confidence: 78 },
  { sport: "NBA", matchup: "Celtics @ Nuggets", pick: "Nuggets -3.5", stars: 5, confidence: 87 },
  { sport: "NFL", matchup: "Eagles vs Cowboys", pick: "Over 49.5", stars: 3, confidence: 68, time: "Sun 8:20 PM ET" },
  { sport: "NFL", matchup: "Chiefs vs Bills", pick: "Under 47.5", stars: 4, confidence: 72, time: "Sun 4:25 PM ET" },
  { sport: "NHL", matchup: "Rangers @ Bruins", pick: "Rangers ML +120", stars: 4, confidence: 74 },
  { sport: "MLB", matchup: "Dodgers @ Yankees", pick: "Locked pick", stars: 5, confidence: 89, locked: true },
  { sport: "NCAAF", matchup: "Alabama vs Georgia", pick: "Locked pick", stars: 5, confidence: 84, locked: true, time: "Sat 7:30 PM ET" },
  { sport: "NCAAB", matchup: "Duke @ UNC", pick: "Locked pick", stars: 4, confidence: 76, locked: true },
  { sport: "NBA", matchup: "Heat @ Sixers", pick: "Locked pick", stars: 3, confidence: 65, locked: true },
];

function PicksPage() {
  return (
    <section className="py-28">
      <div className="container-x">
        <Reveal>
          <div className="max-w-3xl">
            <p className="eyebrow">Today's board</p>
            <h1 className="mt-3 text-5xl md:text-6xl font-black tracking-tight gradient-text">Live picks.</h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Every pick is timestamped before lines move and graded after the final whistle. Sign in to unlock locked plays.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PICKS.map((p, i) => (
            <Reveal key={i} delay={i * 60}>
              <PickCard {...p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
