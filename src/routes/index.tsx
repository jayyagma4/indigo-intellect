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
      {/* HERO — Glass Studio asymmetric */}
      <section className="relative pt-16 pb-24 overflow-hidden">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left content */}
            <div className="lg:col-span-7 space-y-7">
              <Reveal>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-indigo-300 text-xs font-bold tracking-widest uppercase">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
                  </span>
                  Live Edge Detection Active
                </div>
              </Reveal>

              <Reveal delay={100}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.03em] leading-[1.05] text-white">
                  Betting{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] via-[#6366F1] to-[#8B5CF6]">
                    Intelligence
                  </span>{" "}
                  At Scale.
                </h1>
              </Reveal>

              <Reveal delay={200}>
                <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl">
                  Institutional-grade sports analytics, predictive modeling, and live pick feeds built for professional handicappers. Don't play the house — use their data against them.
                </p>
              </Reveal>

              <Reveal delay={300}>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    to="/packages"
                    className="px-7 py-3.5 bg-gradient-to-r from-[#3B82F6] to-[#6366F1] rounded-2xl font-bold text-base text-white shadow-xl shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all hover:-translate-y-0.5 inline-flex items-center gap-2"
                  >
                    Get Started Today <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/picks"
                    className="px-7 py-3.5 bg-white/5 border border-white/10 rounded-2xl font-bold text-base text-white hover:bg-white/10 transition-all"
                  >
                    Explore Models
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Right: ROI Simulator card */}
            <div className="lg:col-span-5">
              <Reveal delay={200}>
                <div className="backdrop-blur-3xl bg-white/[0.04] border border-white/10 rounded-[2.5rem] p-7 md:p-8 relative shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-violet-500/10 opacity-60 pointer-events-none" />
                  <div className="relative z-10">
                    <div className="flex justify-between items-center mb-7">
                      <h3 className="text-xl font-bold text-white tracking-tight">ROI Simulator</h3>
                      <span className="text-[10px] font-bold px-2 py-1 bg-white/5 border border-white/10 rounded text-slate-400 uppercase tracking-widest">
                        Pro Model v4.2
                      </span>
                    </div>

                    <div className="space-y-5">
                      <div>
                        <div className="flex justify-between text-sm mb-2.5">
                          <span className="text-slate-400 font-medium">Monthly Units Staked</span>
                          <span className="text-white font-bold">450 Units</span>
                        </div>
                        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-[#3B82F6] to-[#6366F1] w-[65%]" />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-2.5">
                          <span className="text-slate-400 font-medium">Projected Win Rate</span>
                          <span className="text-[#6366F1] font-bold">58.4%</span>
                        </div>
                        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] w-[78%]" />
                        </div>
                      </div>

                      <div className="pt-7 mt-2 border-t border-white/5 text-center">
                        <span className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em]">
                          Potential Monthly Profit
                        </span>
                        <div className="text-4xl md:text-5xl font-extrabold mt-2 text-white tracking-tight">
                          $12,480.00
                        </div>
                        <p className="text-indigo-300 text-xs font-bold mt-2 tracking-widest">
                          +24.2% ROI PER SLIP
                        </p>
                      </div>

                      <button className="w-full py-3.5 mt-2 bg-white/5 border border-white/10 rounded-2xl font-bold text-xs text-white hover:bg-white/10 transition-colors uppercase tracking-widest">
                        Apply Strategy
                      </button>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>


      {/* EXCLUSIVE ARTICLES — Spotlight layout */}
      <section id="articles" className="py-20">
        <div className="container-x">
          <Reveal>
            <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-400/30 text-indigo-300 text-[10px] font-bold tracking-[0.2em] uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  Editorial
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                  Exclusive Articles and Analysis
                </h2>
                <p className="text-slate-500 text-sm">Expert insights to sharpen your edge</p>
              </div>
              <Link
                to="/picks"
                className="px-5 py-2.5 rounded-full border border-indigo-400/40 text-indigo-200 text-sm font-bold hover:bg-indigo-500/10 transition-colors inline-flex items-center gap-2"
              >
                All Articles <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-12 gap-6 items-stretch">
            {/* FEATURED ARTICLE */}
            <div className="lg:col-span-7">
            <Reveal delay={0}>
              <article className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-md hover:border-indigo-400/40 transition-all h-full flex flex-col min-h-[460px]">
                <div className={`relative h-64 md:h-80 bg-gradient-to-br ${ARTICLES[0].accent} overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07091A] via-[#07091A]/40 to-transparent" />
                  <div
                    className="absolute inset-0 opacity-40"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 25% 30%, rgba(99,102,241,0.5), transparent 55%), radial-gradient(circle at 75% 70%, rgba(139,92,246,0.5), transparent 55%)",
                    }}
                  />
                  <div className="absolute top-5 left-5 flex items-center gap-2">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white bg-gradient-to-r from-[#3B82F6] to-[#6366F1] px-3 py-1.5 rounded-md shadow-lg shadow-indigo-500/30">
                      ★ Featured
                    </span>
                    <span className="text-[10px] uppercase tracking-wider font-bold text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 px-2.5 py-1 rounded-md backdrop-blur-md">
                      {ARTICLES[0].tag}
                    </span>
                  </div>
                </div>
                <div className="p-8 md:p-10 flex flex-col flex-1 -mt-8 relative z-10">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-indigo-300 mb-3">
                    {ARTICLES[0].tag2} · {ARTICLES[0].date}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight mb-4 group-hover:text-indigo-200 transition-colors tracking-tight">
                    {ARTICLES[0].title}
                  </h3>
                  <p className="text-base text-slate-400 leading-relaxed mb-6 line-clamp-3">
                    {ARTICLES[0].excerpt}
                  </p>
                  <div className="mt-auto flex items-center justify-between pt-5 border-t border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] grid place-items-center text-sm font-bold text-white">
                        {ARTICLES[0].author.charAt(0)}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white">{ARTICLES[0].author}</div>
                        <div className="text-[11px] text-slate-500">Senior Analyst</div>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-2 text-indigo-300 text-sm font-bold group-hover:gap-3 transition-all">
                      Read Story <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
            </div>

            {/* SECONDARY ARTICLES */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {ARTICLES.slice(1).map((a, i) => (
                <Reveal key={a.title} delay={(i + 1) * 120}>
                  <article className="group flex gap-5 rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-md hover:border-indigo-400/30 hover:bg-white/[0.05] transition-all p-4 h-full">
                    <div className={`relative w-32 md:w-40 shrink-0 rounded-xl bg-gradient-to-br ${a.accent} overflow-hidden`}>
                      <div
                        className="absolute inset-0 opacity-40"
                        style={{
                          backgroundImage:
                            "radial-gradient(circle at 50% 50%, rgba(99,102,241,0.5), transparent 70%)",
                        }}
                      />
                      <div className="absolute bottom-2 left-2">
                        <span className="text-[9px] uppercase tracking-wider font-bold text-white bg-black/40 backdrop-blur-md border border-white/10 px-2 py-0.5 rounded">
                          {a.tag}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col flex-1 min-w-0 py-1">
                      <span className="text-[10px] uppercase tracking-[0.18em] font-bold text-indigo-300 mb-2">
                        {a.tag2}
                      </span>
                      <h3 className="text-base font-bold text-white leading-snug mb-2 line-clamp-2 group-hover:text-indigo-200 transition-colors">
                        {a.title}
                      </h3>
                      <div className="mt-auto flex items-center gap-3 text-[11px] text-slate-500">
                        <span className="font-medium text-slate-400">{a.author}</span>
                        <span className="w-1 h-1 rounded-full bg-slate-600" />
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> {a.date}
                        </span>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ACTIVE PICKS */}
      <section className="py-20">
        <div className="container-x">
          <Reveal>
            <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
              <div className="space-y-2">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">Active Picks</h2>
                <p className="text-slate-500 text-sm">
                  Current picks — <Link to="/packages" className="text-indigo-300 hover:text-indigo-200 underline-offset-4 hover:underline">login to see full details</Link>
                </p>
              </div>
              <Link
                to="/picks"
                className="px-5 py-2.5 rounded-full border border-indigo-400/40 text-indigo-200 text-sm font-bold hover:bg-indigo-500/10 transition-colors"
              >
                View All Picks
              </Link>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { sport: "MLB", time: "May 19 @ 4:10 PM ET", a: "Atlanta Braves", b: "Miami Marlins", conf: 78, stars: 5, whale: false },
              { sport: "MLB", time: "May 19 @ 7:05 PM ET", a: "Blue Jays", b: "Yankees", conf: 93, stars: 0, whale: true },
              { sport: "NBA", time: "May 19 @ 8:00 PM ET", a: "Cavaliers", b: "Knicks", conf: 76, stars: 5, whale: false },
              { sport: "MLB", time: "May 19 @ 8:40 PM ET", a: "Texas Rangers", b: "Colorado Rockies", conf: 94, stars: 0, whale: true },
            ].map((p, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-6 hover:border-indigo-400/30 hover:bg-white/[0.05] transition-all">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#6366F1] grid place-items-center text-[11px] font-bold text-white">
                        {p.sport}
                      </div>
                      <span className="text-sm font-bold text-white">{p.sport}</span>
                    </div>
                    {p.whale ? (
                      <span className="text-indigo-300 text-xs font-bold tracking-wider">★10 WHALE</span>
                    ) : (
                      <span className="text-indigo-300 text-sm tracking-widest">{"★".repeat(p.stars)}</span>
                    )}
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-indigo-400/40 text-indigo-200 text-[11px] font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                      Started
                    </span>
                    <span className="text-xs text-slate-500">{p.time}</span>
                  </div>

                  <div className="flex items-center gap-2 mb-4 text-white">
                    <span className="text-base font-bold">{p.a}</span>
                    <span className="text-xs text-slate-500 uppercase">vs</span>
                    <span className="text-base font-bold">{p.b}</span>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] uppercase tracking-wider font-bold text-indigo-200 bg-indigo-500/15 border border-indigo-500/30 px-2 py-1 rounded-md">
                        Started Pick
                      </span>
                      <span className="text-sm font-bold text-white">{p.conf}% Confidence</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#3B82F6] via-[#6366F1] to-[#8B5CF6]"
                        style={{ width: `${p.conf}%` }}
                      />
                    </div>
                  </div>

                  <button className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-sm font-bold text-white hover:bg-white/10 transition-colors">
                    View Pick
                  </button>
                </div>
              </Reveal>
            ))}
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
