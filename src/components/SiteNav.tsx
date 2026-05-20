import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Activity } from "lucide-react";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLink = (to: string, label: string) => {
    const active = location.pathname === to;
    return (
      <Link
        to={to}
        className={`text-sm transition-colors ${
          active ? "text-white" : "text-muted-foreground hover:text-white"
        }`}
      >
        {label}
      </Link>
    );
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-[#060818]/80 border-b border-white/5"
          : "backdrop-blur-md bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="relative h-8 w-8 rounded-lg bg-[var(--gradient-primary,linear-gradient(135deg,#6366F1,#3B82F6))] grid place-items-center shadow-[0_0_20px_rgba(99,102,241,0.45)]">
            <Activity className="h-4 w-4 text-white" strokeWidth={2.5} />
          </div>
          <span className="font-semibold tracking-tight text-white">
            Sports<span className="text-indigo-300">handicapper</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <a href="/#articles" className="text-sm text-muted-foreground hover:text-white">Exclusive Articles</a>
          {navLink("/picks", "Picks")}
          {navLink("/packages", "Packages")}
          <div className="relative group">
            <button className="text-sm text-muted-foreground hover:text-white inline-flex items-center gap-1">
              Data & Tools
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 4l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
            </button>
            <div className="absolute right-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <div className="w-64 rounded-xl border border-white/10 bg-[#0A0A14]/95 backdrop-blur-xl p-2 shadow-2xl">
                {[
                  ["Betting Tools", "Calculators & trackers"],
                  ["Live Odds", "Real-time odds comparison"],
                  ["Consensus", "Public betting splits"],
                  ["Trends", "Hot streaks & patterns"],
                ].map(([n, d]) => (
                  <div key={n} className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 cursor-default">
                    <div>
                      <p className="text-sm font-semibold text-white">{n}</p>
                      <p className="text-[11px] text-muted-foreground">{d}</p>
                    </div>
                    <span className="text-[10px] uppercase tracking-wider font-bold text-indigo-300 bg-indigo-500/15 px-2 py-0.5 rounded-full">Soon</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <a href="/#about" className="text-sm text-muted-foreground hover:text-white">About Us</a>
        </nav>

        <div className="flex items-center gap-4">
          <a href="/#login" className="hidden md:inline text-sm text-muted-foreground hover:text-white">Log In</a>
          <Link to="/packages" className="btn-primary !py-2 !px-5 text-sm">
            Join Now
          </Link>
        </div>
      </div>
    </header>
  );
}
