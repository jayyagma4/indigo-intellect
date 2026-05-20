import { Link } from "@tanstack/react-router";
import { Activity } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 mt-32">
      <div className="container-x py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg grid place-items-center" style={{ background: "var(--gradient-primary)" }}>
                <Activity className="h-4 w-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-semibold text-white">
                Sports<span className="text-indigo-300">handicapper</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
              Expert sports analysis and verified picks across the major leagues. Built for serious bettors who demand data over hype.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-4">Product</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/packages" className="hover:text-white">Packages</Link></li>
              <li><Link to="/picks" className="hover:text-white">Today's Picks</Link></li>
              <li><a href="/#how" className="hover:text-white">How it works</a></li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4">Legal</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a className="hover:text-white" href="#">Terms</a></li>
              <li><a className="hover:text-white" href="#">Privacy</a></li>
              <li><a className="hover:text-white" href="#">Responsible play</a></li>
            </ul>
          </div>
        </div>

        <div className="divider-glow my-10" />

        <div className="flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Sportshandicapper.com. All rights reserved.</p>
          <p className="max-w-xl md:text-right">
            For entertainment purposes only. Must be 21+ to participate. If you or someone you know has a gambling problem, call 1-800-GAMBLER.
          </p>
        </div>
      </div>
    </footer>
  );
}
