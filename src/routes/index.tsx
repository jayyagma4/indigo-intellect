import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, User, TrendingUp, Zap, BarChart3, Activity, LineChart } from "lucide-react";
import { PickCard } from "@/components/PickCard";
import { PricingCard } from "@/components/PricingCard";
import { StatCounter } from "@/components/StatCounter";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sportshandicapper — Simulation Model Up +Y Over 3 Years" },
      { name: "description", content: "Exclusive articles, daily picks, and membership access to a proven sports simulation handicapper model. Crush the books without the guesswork." },
      { property: "og:title", content: "Sportshandicapper — Simulation Handicapper Model" },
      { property: "og:description", content: "Crush the books without the guesswork. Free trial, no credit card required." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const ARTICLES = [
  {
    tag: "MLB",
    tag2: "MLB Sports Betting",
    title: "GAME PREVIEW: Texas Rangers vs. Colorado Rockies analysis, best bets",
    excerpt: "Two teams, one thin-air battlefield, and a bullpen situation that could blow the roof off Coors Field. Get the angles.",
    author: "Michael Rinner",
    date: "May 19, 2026",
    accent: "from-rose-500/30 to-orange-500/20",
  },
  {
    tag: "NBA",
    tag2: "NBA Sports Betting",
    title: "GAME PREVIEW: Cleveland Cavaliers vs. New York Knicks analysis, picks",
    excerpt: "Donovan Mitchell and Jalen Brunson collide in a high-stakes NBA playoff clash. Find a clear edge inside.",
    author: "Mike Davis",
    date: "May 19, 2026",
    accent: "from-indigo-500/30 to-violet-500/20",
  },
  {
    tag: "MLB",
    tag2: "MLB Sports Betting",
    title: "GAME PREVIEW: Toronto Blue Jays vs. New York Yankees analysis, bets",
    excerpt: "After a thrilling 7–6 Yankee win, the Bronx rematch is loaded with star power, bullpen drama, and value.",
    author: "Michael Rinner",
    date: "May 19, 2026",
    accent: "from-sky-500/30 to-cyan-500/20",
  },
];

const TOOLS = [
  { icon: LineChart, name: "Simulation Model", desc: "Monte-Carlo backed projections across every game on the slate." },
  { icon: Activity, name: "Live Odds", desc: "Real-time line comparison across major sportsbooks." },
  { icon: BarChart3, name: "Consensus Data", desc: "Track where the public — and the sharps — are betting." },
  { icon: TrendingUp, name: "Hot Trends", desc: "Streaks, splits, and situational angles updated daily." },
];

function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">
        <div className="orb h-40 w-40 top-24 left-[8%] opacity-60" style={{ background: "radial-gradient(circle, rgba(99,102,241,0.55), transparent 70%)", animation: "float-slow 8s ease-in-out infinite" }} />
        <div className="orb h-56 w-56 bottom-20 right-[6%] opacity-50" style={{ background: "radial-gradient(circle, rgba(139,92,246,0.5), transparent 70%)", animation: "float-slow 11s ease-in-out infinite" }} />
        <div className="orb h-24 w-24 top-1/2 left-[42%] opacity-40" style={{ background: "radial-gradient(circle, rgba(59,130,246,0.6), transparent 70%)", animation: "float-slow 9s ease-in-out infinite" }} />

        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-[600px] -z-10 opacity-40"
          style={{
            background:
              "conic-gradient(from 180deg at 50% 0%, transparent 0deg, rgba(99,102,241,0.35) 90deg, transparent 180deg, rgba(59,130,246,0.3) 270deg, transparent 360deg)",
            maskImage: "radial-gradient(ellipse at 50% 0%, #000 30%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse at 50% 0%, #000 30%, transparent 70%)",
          }}
        />

        <div className="container-x py-24 text-center max-w-5xl mx-auto">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/5 text-xs text-indigo-200 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
              Proven over 3 seasons · Verified ROI
            </div>

            <h1 className="mt-6 text-[clamp(2.5rem,6.5vw,5.5rem)] font-black leading-[0.98] tracking-[-0.03em] gradient-text glow-text">
              Simulation Handicapper Model<br />
              <span className="text-white">— Up +Y Over 3 Years</span>
            </h1>

            <div className="mt-8 inline-block px-5 py-3 rounded-xl border border-amber-400/25 bg-amber-400/5 backdrop-blur-sm">
              <p className="text-sm md:text-base font-semibold text-amber-200 tracking-tight">
                $100 bettor won <span className="text-amber-300">$15,000</span> &nbsp;·&nbsp; $500 bettor won <span className="text-amber-300">$75,000</span> &nbsp;·&nbsp; $1,000 bettor won <span className="text-amber-300">$150,000</span>
              </p>
            </div>

            <p className="mt-7 text-lg text-muted-foreground">
              Want to crush the books without the guesswork?
            </p>

            <div className="mt-9 flex justify-center flex-wrap gap-4">
              <Link to="/packages" className="btn-primary">
                Join Now <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="#articles" className="btn-secondary">See More</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* EXCLUSIVE ARTICLES */}
      <section id="articles" className="py-24">
        <div className="container-x">
          <Reveal>
            <div className="flex items-end justify-between flex-wrap gap-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Exclusive Articles and Analysis</h2>
                <p className="mt-2 text-muted-foreground">Expert insights to sharpen your edge.</p>
              </div>
              <div className="flex gap-2">
                <button className="h-9 w-9 rounded-full border border-white/10 grid place-items-center text-muted-foreground hover:text-white hover:border-white/30 transition" aria-label="Previous">‹</button>
                <button className="h-9 w-9 rounded-full border border-indigo-400/40 grid place-items-center text-indigo-300 hover:bg-indigo-500/10 transition" aria-label="Next">›</button>
              </div>
            </div>
          </Reveal>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ARTICLES.map((a, i) => (
              <Reveal key={a.title} delay={i * 100}>
                <article className="card-premium overflow-hidden h-full flex flex-col">
                  <div className={`relative h-44 bg-gradient-to-br ${a.accent} grid place-items-center overflow-hidden`}>
                    <div className="absolute inset-0 opacity-30" style={{
                      backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
                      backgroundSize: "24px 24px",
                    }} />
                    <span className="text-5xl font-black text-white/15 tracking-tight">{a.tag}</span>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex gap-2 flex-wrap">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300 bg-emerald-500/10 px-2 py-1 rounded-md">{a.tag}</span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300 bg-emerald-500/10 px-2 py-1 rounded-md">{a.tag2}</span>
                    </div>
                    <h3 className="mt-3 text-base font-bold leading-snug tracking-tight">{a.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{a.excerpt}</p>
                    <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5"><User className="h-3 w-3" />{a.author}</span>
                      <span className="flex items-center gap-1.5"><Calendar className="h-3 w-3" />{a.date}</span>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ACTIVE PICKS */}
      <section className="py-20">
        <div className="container-x">
          <Reveal>
            <div className="flex items-end justify-between flex-wrap gap-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Active Picks</h2>
                <p className="mt-2 text-muted-foreground">Current picks — log in to see full details.</p>
              </div>
              <Link to="/picks" className="btn-secondary !py-2 !px-5 text-sm">View All Picks</Link>
            </div>
          </Reveal>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <Reveal delay={0}><PickCard sport="MLB" matchup="Atlanta Braves vs Miami Marlins" pick="Braves -1.5" stars={5} confidence={78} time="May 19 · 6:40 PM ET" /></Reveal>
            <Reveal delay={80}><PickCard sport="MLB" matchup="Blue Jays vs Yankees" pick="Locked pick" stars={5} confidence={93} locked time="May 19 · 7:05 PM ET" /></Reveal>
            <Reveal delay={160}><PickCard sport="NBA" matchup="Cavaliers vs Knicks" pick="Knicks +4.5" stars={5} confidence={76} time="May 19 · 8:00 PM ET" /></Reveal>
            <Reveal delay={240}><PickCard sport="MLB" matchup="Texas Rangers vs Colorado Rockies" pick="Locked pick" stars={5} confidence={94} locked time="May 19 · 8:40 PM ET" /></Reveal>
          </div>
        </div>
      </section>

      {/* TRUST STATS */}
      <section className="border-y border-white/5 bg-white/[0.015]">
        <div className="container-x py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { v: <StatCounter end={1248} suffix="+" />, l: "Total Units Won" },
            { v: <StatCounter end={3} suffix=" yrs" />, l: "Verified Track Record" },
            { v: <StatCounter end={6} />, l: "Sports Covered" },
            { v: <StatCounter end={62.4} decimals={1} suffix="%" />, l: "Win Rate" },
          ].map((s, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black tracking-tight gradient-text">{s.v}</div>
                <div className="eyebrow mt-2">{s.l}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* MEMBERSHIP PACKAGES */}
      <section className="py-24">
        <div className="container-x">
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Membership Packages</h2>
              <p className="mt-2 text-muted-foreground">Start free. Upgrade anytime. Cancel anytime.</p>
            </div>
          </Reveal>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Reveal delay={0}>
              <PricingCard name="7 Days Access" price="FREE" period="trial" tagline="No credit card needed."
                features={["Full access for 7 days", "All sport picks", "Simulation model access", "Daily consensus data", "No credit card required"]}
                cta="Start Free Trial" />
            </Reveal>
            <Reveal delay={80}>
              <PricingCard name="1 Week Access" price="$24.99" period="week" tagline="Try a full week of action."
                features={["All sport picks", "Simulation model access", "Daily consensus data", "Betting trends"]} />
            </Reveal>
            <Reveal delay={160}>
              <PricingCard name="2 Weeks Access" price="$49.99" period="2 weeks" tagline="Save vs single week."
                features={["All sport picks", "Simulation model access", "Daily consensus data", "Betting trends", "Save $25 vs weekly"]} />
            </Reveal>
            <Reveal delay={240}>
              <PricingCard name="1 Month Access" price="$99.99" period="month" tagline="The most popular plan." highlight
                features={["All sport picks", "Simulation model access", "Daily consensus data", "Betting trends", "24/7 support"]}
                cta="Get Started" />
            </Reveal>
            <Reveal delay={320}>
              <PricingCard name="3 Months Access" price="$199.99" period="3 months" tagline="Cover a full season window."
                features={["All sport picks", "Simulation model access", "Daily consensus data", "Betting trends", "24/7 support"]} />
            </Reveal>
            <Reveal delay={400}>
              <PricingCard name="6 Months Access" price="$299.99" period="6 months" tagline="Best long-term value."
                features={["All sport picks", "Simulation model access", "Daily consensus data", "Betting trends", "24/7 support"]} />
            </Reveal>
          </div>

          <div className="mt-10 text-center">
            <Link to="/packages" className="text-sm text-indigo-300 hover:text-indigo-200 underline-offset-4 hover:underline">
              View all packages & pricing →
            </Link>
          </div>
        </div>
      </section>

      {/* DATA & TOOLS */}
      <section className="py-24">
        <div className="container-x">
          <Reveal>
            <div className="max-w-2xl">
              <p className="eyebrow">Data & tools</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight">Everything you need to beat the books.</h2>
            </div>
          </Reveal>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TOOLS.map((t, i) => (
              <Reveal key={t.name} delay={i * 90}>
                <div className="card-premium p-6 h-full relative">
                  <span className="absolute top-4 right-4 text-[10px] uppercase tracking-wider font-bold text-indigo-300 bg-indigo-500/15 px-2 py-0.5 rounded-full">Soon</span>
                  <div className="h-11 w-11 rounded-xl grid place-items-center" style={{ background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.25)" }}>
                    <t.icon className="h-5 w-5 text-indigo-300" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-4 font-bold tracking-tight">{t.name}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24">
        <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <div>
              <p className="eyebrow">About us</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight">Built by bettors. Powered by simulation.</h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                We built our simulation handicapper model to remove emotion from betting. Every pick is the output of millions of game iterations modeled against live market lines — so the only thing left to do is follow the edge.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Three years of verified results, transparent unit accounting, and a team of analysts who actually bet the plays we publish.
              </p>
              <div className="mt-8 flex gap-4">
                <Link to="/packages" className="btn-primary">Join Now <ArrowRight className="h-4 w-4" /></Link>
                <Link to="/picks" className="btn-secondary">See Today's Picks</Link>
              </div>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div className="card-premium p-8 relative overflow-hidden">
              <div className="absolute inset-0 -z-10 opacity-40" style={{ background: "radial-gradient(closest-side, rgba(99,102,241,0.35), transparent 70%)" }} />
              <div className="grid grid-cols-2 gap-6">
                {[
                  { v: "62.4%", l: "Win rate" },
                  { v: "+1,248u", l: "Total profit" },
                  { v: "3 yrs", l: "Verified" },
                  { v: "6", l: "Sports" },
                ].map((s) => (
                  <div key={s.l} className="rounded-xl border border-white/5 bg-white/[0.02] p-5">
                    <div className="text-2xl font-black gradient-text">{s.v}</div>
                    <div className="eyebrow mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-3 text-xs text-muted-foreground">
                <Zap className="h-3.5 w-3.5 text-indigo-300" />
                Information is for news and entertainment purposes only. Past performance is not a guarantee of future results.
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
