import { Check } from "lucide-react";
import { Link } from "@tanstack/react-router";

interface Props {
  name: string;
  price: string;
  period: string;
  tagline: string;
  features: string[];
  highlight?: boolean;
  cta?: string;
}

export function PricingCard({ name, price, period, tagline, features, highlight, cta = "Get Started" }: Props) {
  return (
    <div
      className={`card-premium p-8 flex flex-col ${highlight ? "relative" : ""}`}
      style={
        highlight
          ? {
              borderColor: "rgba(14,165,233,0.5)",
              boxShadow: "0 0 0 1px rgba(14,165,233,0.4), 0 20px 60px -20px rgba(14,165,233,0.5)",
            }
          : undefined
      }
    >
      {highlight && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-white" style={{ background: "var(--gradient-primary)" }}>
            Most Popular
          </span>
        </div>
      )}

      <p className="eyebrow">{name}</p>
      <div className="mt-3 flex items-baseline gap-1">
        <span className="text-5xl font-black tracking-tight">{price}</span>
        <span className="text-muted-foreground text-sm">/ {period}</span>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{tagline}</p>

      <div className="divider-glow my-6" />

      <ul className="space-y-3 flex-1">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm">
            <div className="mt-0.5 h-4 w-4 rounded-full grid place-items-center shrink-0" style={{ background: "var(--gradient-primary)" }}>
              <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} />
            </div>
            <span className="text-slate-200">{f}</span>
          </li>
        ))}
      </ul>

      <Link to="/packages" className={`mt-8 ${highlight ? "btn-primary" : "btn-secondary"}`}>
        {cta}
      </Link>
    </div>
  );
}
