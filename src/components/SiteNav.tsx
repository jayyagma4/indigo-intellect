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
          {navLink("/", "Home")}
          {navLink("/packages", "Packages")}
          {navLink("/picks", "Today's Picks")}
          <a href="/#how" className="text-sm text-muted-foreground hover:text-white">How it works</a>
        </nav>

        <Link to="/packages" className="btn-primary !py-2 !px-5 text-sm">
          Start Free Trial
        </Link>
      </div>
    </header>
  );
}
