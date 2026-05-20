import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, TrendingUp, ShieldCheck, Zap, Trophy, Target, BarChart3 } from "lucide-react";
import { PickCard } from "@/components/PickCard";
import { PricingCard } from "@/components/PricingCard";
import { StatCounter } from "@/components/StatCounter";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sportshandicapper — Win More. Bet Smarter." },
      { name: "description", content: "Professional sports handicapping service. Expert picks across NFL, NBA, MLB, NHL, NCAAF, NCAAB. Start your free trial — no credit card required." },
      { property: "og:title", content: "Sportshandicapper — Win More. Bet Smarter." },
      { property: "og:description", content: "Premium sports picks built on data, not hype." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const SPORTS = [
  { name: "NFL", icon: Trophy, desc: "Line value, situational edges, weather modeling." },
  { name: "NBA", icon: Zap, desc: "Pace, rotation, and rest-adjusted totals." },
  { name: "MLB", icon: Target, desc: "Starter splits, bullpen fatigue, park factors." },
  { name: "NHL", icon: ShieldCheck, desc: "Goalie matchups, expected goals, special teams." },
  { name: "NCAAF", icon: BarChart3, desc: "Coaching tendencies, motivation spots, line moves." },
  { name: "NCAAB", icon: TrendingUp, desc: "Tempo, efficiency, sharp money tracking." },
];

function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(600px 400px at 50% 30%, rgba(99,102,241,0.25), transparent 60%), radial-gradient(800px 500px at 80% 70%, rgba(59,130,246,0.18), transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0 -z-10 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="container-x py-24 grid lg:grid-cols-[1.3fr_1fr] gap-16 items-center">
          <Reveal>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/5 text-xs text-indigo-200">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
                Live picks dropping tonight
              </div>

              <h1 className="mt-6 text-[clamp(3rem,7.5vw,6rem)] font-black leading-[0.95] tracking-[-0.03em] gradient-text glow-text">
                Win More.<br />Bet Smarter.
              </h1>

              <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
                The Bloomberg Terminal of sports betting. Expert handicapping, transparent results, premium analysis across every major league.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link to="/packages" className="btn-primary">
                  Start Free Trial <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/picks" className="btn-secondary">View Today's Picks</Link>
              </div>

              <p className="mt-6 text-xs text-muted-foreground">
                No credit card required · Cancel anytime
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="relative">
              <div className="absolute -inset-8 -z-10 rounded-3xl" style={{ background: "radial-gradient(closest-side, rgba(99,102,241,0.35), transparent 70%)" }} />
              <PickCard
                sport="NBA"
                matchup="Celtics @ Nuggets"
                pick="Nuggets -3.5 (Best 5★ play of the week)"
                stars={5}
                confidence={87}
                time="Tonight · 10:00 PM ET"
              />
              <div className="mt-4">
                <PickCard
                  sport="NFL"
                  matchup="Chiefs vs Bills"
                  pick="Under 47.5"
                  stars={4}
                  confidence={72}
                  time="Sun · 4:25 PM ET"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-white/5 bg-white/[0.015]">
        <div className="container-x py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { v: <StatCounter end={1248} suffix="+" />, l: "Total Units Won" },
            { v: <StatCounter end={18} suffix=" yrs" />, l: "Track Record" },
            { v: <StatCounter end={6} />, l: "Sports Covered" },
            { v: <><StatCounter end={62.4} decimals={1} suffix="%" /></>, l: "Verified Win Rate" },
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

      {/* HOW IT WORKS */}
      <section id="how" className="py-28">
        <div className="container-x">
          <Reveal>
            <div className="max-w-2xl">
              <p className="eyebrow">How it works</p>
              <h2 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight">Three steps to sharper bets.</h2>
            </div>
          </Reveal>

          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {[
              { n: "01", t: "Pick your package", d: "Choose a plan that fits your volume — from a free trial to all-access premium." },
              { n: "02", t: "Receive expert picks", d: "Get verified picks delivered to your inbox and dashboard before lines move." },
              { n: "03", t: "Follow and profit", d: "Track every play with transparent unit accounting. No guessing, no hype." },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 120}>
                <div className="card-premium p-8 h-full">
                  <div className="h-[3px] w-12 mb-6" style={{ background: "var(--gradient-primary)" }} />
                  <div className="text-5xl font-black gradient-text tracking-tight">{s.n}</div>
                  <h3 className="mt-4 text-xl font-bold">{s.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-28">
        <div className="container-x">
          <Reveal>
            <div className="max-w-2xl">
              <p className="eyebrow">Packages</p>
              <h2 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight">Built for every bettor.</h2>
              <p className="mt-4 text-muted-foreground">From a no-risk trial to full access across every league. Cancel anytime.</p>
            </div>
          </Reveal>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* FEATURED PICKS */}
      <section className="py-28">
        <div className="container-x">
          <Reveal>
            <div className="flex items-end justify-between flex-wrap gap-6 max-w-3xl">
              <div>
                <p className="eyebrow">Featured picks</p>
                <h2 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight">Tonight's board.</h2>
              </div>
            </div>
          </Reveal>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Reveal delay={0}><PickCard sport="NBA" matchup="Lakers @ Warriors" pick="Warriors -2.5" stars={4} confidence={78} /></Reveal>
            <Reveal delay={80}><PickCard sport="NFL" matchup="Eagles vs Cowboys" pick="Over 49.5" stars={3} confidence={68} time="Sun 8:20 PM ET" /></Reveal>
            <Reveal delay={160}><PickCard sport="NHL" matchup="Rangers @ Bruins" pick="Rangers ML +120" stars={4} confidence={74} /></Reveal>
            <Reveal delay={240}><PickCard sport="MLB" matchup="Dodgers @ Yankees" pick="Locked pick" stars={5} confidence={89} locked /></Reveal>
            <Reveal delay={320}><PickCard sport="NCAAF" matchup="Alabama vs Georgia" pick="Locked pick" stars={5} confidence={84} locked time="Sat 7:30 PM ET" /></Reveal>
            <Reveal delay={400}><PickCard sport="NCAAB" matchup="Duke @ UNC" pick="Locked pick" stars={4} confidence={76} locked /></Reveal>
          </div>
        </div>
      </section>

      {/* SPORTS COVERAGE */}
      <section className="py-28">
        <div className="container-x">
          <Reveal>
            <div className="max-w-2xl">
              <p className="eyebrow">Sports coverage</p>
              <h2 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight">Every major league. Every angle.</h2>
            </div>
          </Reveal>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SPORTS.map((s, i) => (
              <Reveal key={s.name} delay={i * 70}>
                <div className="card-premium p-6 flex gap-4 items-start h-full">
                  <div className="h-11 w-11 shrink-0 rounded-xl grid place-items-center" style={{ background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.25)" }}>
                    <s.icon className="h-5 w-5 text-indigo-300" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="font-bold tracking-tight">{s.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-28">
        <div className="container-x">
          <Reveal>
            <div className="max-w-2xl">
              <p className="eyebrow">Members say</p>
              <h2 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight">Verified results, real bettors.</h2>
            </div>
          </Reveal>

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              { n: "Marcus", t: "Monthly", q: "Up 42 units in my first three months. The transparency is unreal — every pick is logged and graded." },
              { n: "Sarah", t: "Premium Season", q: "I've used three handicappers before this. Nobody else shows the actual math behind their plays." },
              { n: "Devon", t: "Weekly", q: "The 5-star plays have paid for the package twice over. Worth every dollar." },
            ].map((t, i) => (
              <Reveal key={t.n} delay={i * 100}>
                <div className="card-premium p-7 h-full">
                  <div className="text-indigo-300 text-2xl leading-none">"</div>
                  <p className="mt-2 text-slate-200 leading-relaxed">{t.q}</p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full grid place-items-center text-sm font-bold text-white" style={{ background: "var(--gradient-primary)" }}>
                      {t.n[0]}
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{t.n}</p>
                      <p className="text-xs text-muted-foreground">{t.t} member</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-28">
        <div className="container-x">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl px-8 md:px-16 py-20 text-center border border-indigo-500/20" style={{
              background: "linear-gradient(180deg, rgba(13,18,36,0.9), rgba(10,12,28,0.9))",
            }}>
              <div className="absolute inset-0 -z-10" style={{
                background: "radial-gradient(600px 300px at 50% 0%, rgba(99,102,241,0.35), transparent 70%)",
              }} />
              <p className="eyebrow">Ready to bet smarter?</p>
              <h2 className="mt-4 text-4xl md:text-6xl font-black tracking-[-0.02em] gradient-text glow-text">
                Join thousands turning data into wins.
              </h2>
              <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
                Get your first week of expert picks free. No credit card. No catch.
              </p>
              <div className="mt-9 flex justify-center gap-4 flex-wrap">
                <Link to="/packages" className="btn-primary">Start Free Trial <ArrowRight className="h-4 w-4" /></Link>
                <Link to="/picks" className="btn-secondary">See Today's Picks</Link>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">Free trial available — no credit card required.</p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
