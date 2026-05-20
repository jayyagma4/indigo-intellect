import { Lock, Star } from "lucide-react";

interface Props {
  sport: string;
  matchup: string;
  pick: string;
  stars: number;
  confidence: number;
  locked?: boolean;
  time?: string;
}

export function PickCard({ sport, matchup, pick, stars, confidence, locked, time = "Tonight 8:15 PM ET" }: Props) {
  return (
    <div className="card-premium overflow-hidden">
      <div className="h-[3px] w-full" style={{ background: "var(--gradient-primary)" }} />
      <div className={`p-6 ${locked ? "relative" : ""}`}>
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center rounded-full bg-indigo-500/15 text-indigo-200 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider">
            {sport}
          </span>
          <span className="text-xs text-muted-foreground">{time}</span>
        </div>

        <h3 className="mt-4 text-lg font-semibold tracking-tight">{matchup}</h3>
        <p className={`mt-1 text-sm text-muted-foreground ${locked ? "blur-md select-none" : ""}`}>
          {pick}
        </p>

        <div className="mt-5 flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-3.5 w-3.5 ${i < stars ? "text-indigo-400" : "text-white/10"}`}
              fill={i < stars ? "currentColor" : "none"}
              style={i < stars ? { filter: "drop-shadow(0 0 6px rgba(99,102,241,0.6))" } : undefined}
            />
          ))}
          <span className="ml-2 text-[11px] uppercase tracking-wider text-muted-foreground font-bold">{stars}★ play</span>
        </div>

        <div className="mt-5">
          <div className="flex justify-between text-xs mb-1.5">
            <span className="text-muted-foreground">Confidence</span>
            <span className="text-white font-semibold">{confidence}%</span>
          </div>
          <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{ width: `${confidence}%`, background: "var(--gradient-primary)", boxShadow: "0 0 12px rgba(99,102,241,0.6)" }}
            />
          </div>
        </div>

        {locked && (
          <div className="absolute inset-0 grid place-items-center bg-[#0A0A14]/40 backdrop-blur-[3px] rounded-2xl">
            <div className="flex flex-col items-center gap-2 text-center px-6">
              <div className="h-10 w-10 rounded-full grid place-items-center" style={{ background: "var(--gradient-primary)" }}>
                <Lock className="h-4 w-4 text-white" />
              </div>
              <p className="text-sm font-semibold">Members Only</p>
              <p className="text-xs text-muted-foreground">Unlock full pick analysis</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
