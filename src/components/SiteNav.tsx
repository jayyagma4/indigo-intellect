import { Link, useRouterState } from "@tanstack/react-router";
import { Zap, ChevronDown } from "lucide-react";

export function SiteNav() {
  const { location } = useRouterState();
  const isActive = (to: string) => location.pathname === to;

  const navLink = (to: string, label: string) => (
    <Link
      to={to}
      className={`text-sm font-medium transition-colors ${
        isActive(to) ? "text-white" : "text-slate-400 hover:text-white"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50">
      <div className="backdrop-blur-2xl bg-white/[0.03] border border-white/10 rounded-2xl px-6 lg:px-8 py-3 flex items-center justify-between shadow-2xl shadow-black/40">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] rounded-xl grid place-items-center shadow-lg shadow-indigo-500/20">
              <Zap className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-lg font-bold tracking-tight text-white font-display">
              Sportshandicapper
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            <a href="/#articles" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
              Exclusive Articles
            </a>
            {navLink("/picks", "Picks")}
            {navLink("/packages", "Packages")}
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-slate-400 hover:text-white transition-colors">
                Data & Tools
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute right-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="w-64 rounded-2xl border border-white/10 bg-[#0A0A14]/95 backdrop-blur-xl p-2 shadow-2xl">
                  {[
                    ["Betting Tools", "Calculators & trackers"],
                    ["Live Odds", "Real-time odds comparison"],
                    ["Consensus", "Public betting splits"],
                    ["Trends", "Hot streaks & patterns"],
                  ].map(([n, d]) => (
                    <div key={n} className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 cursor-default">
                      <div>
                        <p className="text-sm font-semibold text-white">{n}</p>
                        <p className="text-[11px] text-slate-400">{d}</p>
                      </div>
                      <span className="text-[10px] uppercase tracking-wider font-bold text-indigo-300 bg-indigo-500/15 px-2 py-0.5 rounded-full">Soon</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <a href="/#about" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
              About Us
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-5">
          <a href="/#login" className="hidden md:inline text-sm font-medium text-slate-300 hover:text-white transition-colors">
            Log In
          </a>
          <Link
            to="/packages"
            className="bg-white text-[#07091A] px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-opacity-90 transition-all shadow-lg shadow-white/5 active:scale-95"
          >
            Join Now
          </Link>
        </div>
      </div>
    </header>
  );
}
