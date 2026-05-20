# Sportshandicapper.com — Premium Build Plan

A Bloomberg-Terminal-for-sports-betting marketing site: deep navy/indigo palette, Inter typography, generous spacing, subtle indigo glows. Built on the existing TanStack Start + Tailwind v4 stack.

## Design system (src/styles.css)

Replace the default tokens with the spec's palette using oklch equivalents:

- `--background`: deep navy (#060818) with body gradient to #0A0A14
- `--foreground`: white
- `--muted-foreground`: slate (#94A3B8)
- `--card`: #0D1224
- `--border`: rgba(148,163,184,0.1)
- `--primary`: electric indigo (#6366F1)
- `--accent-blue`: #3B82F6
- `--accent-violet`: #8B5CF6
- Custom tokens: `--gradient-primary` (135deg indigo→blue), `--glow-indigo`, `--shadow-card-hover`

Force dark by default (apply `.dark` to `<html>` in `__root.tsx`). Add Inter via Google Fonts link in root `head()`. Define typography scale utilities and a `.glow-text` / `.card-premium` set of helpers. Add fade-in-up keyframe.

## Route architecture

Single landing page is correct for this brief (one long marketing scroll), but split shareable surfaces into their own routes for SSR/SEO:

```
src/routes/
  __root.tsx        -> dark shell, Inter font, nav + footer wrapper
  index.tsx         -> landing (all 9 sections)
  packages.tsx      -> /packages (pricing detail)
  picks.tsx         -> /picks (today's picks preview)
```

Each route gets its own `head()` with unique title/description/og tags. Nav links between them with TanStack `<Link>`.

## Component breakdown

Reusable pieces under `src/components/`:

- `SiteNav.tsx` — frosted-glass top bar (backdrop-blur-md, opacity ramps on scroll via `useEffect` scrollY listener), logo left, links center, "Start Free Trial" CTA right
- `SiteFooter.tsx` — minimal: logo, links, entertainment-only disclaimer, copyright
- `GradientButton.tsx` — primary CTA variant with indigo→blue gradient + hover glow
- `SectionHeading.tsx` — eyebrow label + massive heading pattern
- `StatCounter.tsx` — count-up on viewport enter via IntersectionObserver
- `PickCard.tsx` — sport badge, matchup, star level, confidence bar; supports `locked` prop with blur overlay
- `PricingCard.tsx` — highlights "most popular" with indigo glow border
- `TestimonialCard.tsx`
- `SportIcon.tsx` — lucide icons in indigo
- `GlowDivider.tsx` — transparent→indigo→transparent gradient line

Landing page sections (`src/routes/index.tsx`) compose them in order:

1. **Hero** — min-h-screen, radial indigo glow background, 96px headline ("Win More. Bet Smarter."), subtext, primary "Start Free Trial" + secondary "View Today's Picks", floating live PickCard preview top-right
2. **Trust Bar** — 4 stats (units won, years, sports covered, win rate) with `StatCounter`
3. **How It Works** — 3 numbered cards with indigo top accent line
4. **Packages & Pricing** — 4 tiers, middle one highlighted
5. **Featured Picks Preview** — grid of 6 PickCards, 3 locked with blur
6. **Sports Coverage** — 6-icon grid (NFL/NBA/MLB/NHL/NCAAF/NCAAB)
7. **Testimonials** — 3 cards
8. **Final CTA** — full-width dark band, big headline, glowing button, "Free trial — no credit card" line
9. **Footer**

## Interactions

- Section fade-up: small `useInView` hook + `animate-fade-in` class
- Card hover lift: `transition-transform hover:-translate-y-1` + glow shadow on hover
- Nav scroll opacity: scrollY > 20 → bg-background/80
- Count-up: rAF-based tween over 1.5s
- Button pulse: tailwind `animate-pulse` only on glow ring layer

## Technical details

- Tailwind v4 theme tokens added in `src/styles.css` `@theme inline` block
- All colors via semantic tokens; never hardcoded hex in components
- Inter loaded via `<link>` in root `head()`; `font-family` set on body
- Body gradient via `body { background: linear-gradient(180deg, #060818, #0A0A14); }`
- IntersectionObserver helpers in `src/hooks/use-in-view.ts`
- No stock images; all visuals are CSS gradients, glows, and lucide-react icons (already available)
- Per-route `head()` meta for SEO

## Out of scope (for this pass)

- Real auth, payments, or backend (Lovable Cloud not enabled)
- Actual pick data / CMS — content is static placeholder copy
- Member-area routes behind the blur overlay

After approval I'll implement in one pass, then verify in the preview.