import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, BarChart3, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";

export function SiteNav() {
  const { location } = useRouterState();
  const isActive = (to: string) => location.pathname === to;

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50">
      <nav className="flex items-center justify-between px-6 py-2 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl shadow-2xl shadow-indigo-500/10">
        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0 -my-10">
          <img
            src={logo}
            alt="Sportshandicapper"
            className="h-28 md:h-32 w-auto object-contain drop-shadow-[0_4px_28px_rgba(168,85,247,0.45)]"
          />
        </Link>

        {/* Pill-grouped nav */}
        <div className="hidden lg:flex items-center bg-white/5 rounded-full px-2 py-1 border border-white/5">
          <div className="flex items-center gap-1 font-body">
            <a
              href="/#articles"
              className="relative px-4 py-2 text-sm font-medium text-white/90 hover:text-white rounded-full hover:bg-white/5 transition-colors"
            >
              Exclusive Articles
              <span className="absolute -top-1 -right-1 px-1.5 py-0.5 text-[8px] font-bold bg-indigo-500 text-white rounded uppercase tracking-tighter shadow-sm">
                New
              </span>
            </a>

            <Link
              to="/picks"
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors flex items-center gap-2 ${
                isActive("/picks") ? "text-white bg-white/5" : "text-white/70 hover:text-white hover:bg-white/5"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Picks
            </Link>

            <Link
              to="/packages"
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                isActive("/packages") ? "text-white bg-white/5" : "text-white/70 hover:text-white hover:bg-white/5"
              }`}
            >
              Packages
            </Link>

            <div className="h-4 w-px bg-white/10 mx-1" />

            <div className="relative group">
              <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-indigo-300 hover:text-indigo-200 rounded-full hover:bg-indigo-500/10 transition-colors">
                <BarChart3 className="w-4 h-4" />
                Data & Tools
                <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute right-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="w-64 rounded-2xl border border-white/10 bg-[#0A0A14]/95 backdrop-blur-xl p-2 shadow-2xl">
                  {[
                    ["Betting Tools", "Calculators & trackers"],
                    ["Live Odds", "Real-time odds comparison"],
                    ["Consensus", "Public betting splits"],
                    ["Trends", "Hot streaks & patterns"],
                  ].map(([n, d]) => (
                    <div
                      key={n}
                      className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 cursor-default"
                    >
                      <div>
                        <p className="text-sm font-semibold text-white">{n}</p>
                        <p className="text-[11px] text-slate-400">{d}</p>
                      </div>
                      <span className="text-[10px] uppercase tracking-wider font-bold text-indigo-300 bg-indigo-500/15 px-2 py-0.5 rounded-full">
                        Soon
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <a
              href="/#about"
              className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white rounded-full hover:bg-white/5 transition-colors"
            >
              About Us
            </a>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-5 font-body">
          <a
            href="/#login"
            className="hidden md:inline text-sm font-medium text-white/80 hover:text-white transition-colors"
          >
            Log In
          </a>
          <Link
            to="/packages"
            className="group inline-flex items-center px-5 py-2.5 text-sm font-bold text-[#07091A] bg-white rounded-xl hover:bg-white/90 transition-all active:scale-95 shadow-lg shadow-white/5"
          >
            Join Now
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </nav>
    </header>
  );
}
