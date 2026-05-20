# Sportshandicapper

A premium sports handicapping and picks platform built with modern web technologies. Features daily expert picks, simulation-backed analysis, and membership packages for serious bettors.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/react-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/typescript-5.8-3178C6?logo=typescript)
![Tailwind](https://img.shields.io/badge/tailwind-4.2-06B6D4?logo=tailwindcss)

## Overview

Sportshandicapper delivers data-driven sports betting picks and analysis across NFL, NBA, MLB, NHL, and college sports. The site features:

- **Daily Picks Board** — Live expert picks with confidence ratings and star levels
- **Simulation Model** — Monte-Carlo backed projections for every game
- **Membership Packages** — Free trial, weekly, monthly, and season-long options
- **Expert Analysis** — Game previews, betting angles, and situational trends
- **Live Odds Comparison** — Real-time line tracking across major sportsbooks

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [TanStack Start](https://tanstack.com/start) (React 19 + SSR) |
| Router | [TanStack Router](https://tanstack.com/router) (file-based, type-safe) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) with custom design tokens |
| UI Components | [Radix UI](https://radix-ui.com) primitives + shadcn/ui patterns |
| Icons | [Lucide React](https://lucide.dev) |
| Build Tool | [Vite 7](https://vitejs.dev) |
| Language | TypeScript 5.8 |

## Project Structure

```
src/
├── routes/                  # File-based routes (TanStack Router)
│   ├── __root.tsx          # Root layout with nav, footer, aurora bg
│   ├── index.tsx           # Home / landing page
│   ├── picks.tsx           # Daily picks board
│   └── packages.tsx        # Pricing & membership packages
├── components/
│   ├── AuroraBackground.tsx  # Animated aurora + particle background
│   ├── PickCard.tsx        # Pick display card component
│   ├── PricingCard.tsx     # Membership tier card
│   ├── Reveal.tsx          # Scroll-triggered animation wrapper
│   ├── SiteNav.tsx         # Navigation header
│   ├── SiteFooter.tsx      # Footer
│   ├── StatCounter.tsx     # Animated stat counters
│   └── ui/                 # shadcn/ui primitive components
├── hooks/                   # Custom React hooks
├── lib/                     # Utilities & helpers
├── styles.css              # Global styles + Tailwind theme tokens
├── router.tsx              # Router configuration
└── server.ts               # SSR error wrapper entry
```

## Routes

| Route | Description |
|-------|-------------|
| `/` | Home — Hero, articles preview, tools, testimonials, CTA |
| `/picks` | Today's picks board with sport filters |
| `/packages` | Membership packages & pricing tiers |

## Design System

The project uses a custom dark theme with a **blue-to-cyan-to-purple** gradient palette:

- **Primary**: `#1E90FF` (electric blue)
- **Accent Cyan**: `#22D3EE`
- **Accent Purple**: `#A855F7`
- **Background**: Deep navy/black with aurora orbs
- **Typography**: Inter (Google Fonts)

Tokens are defined in `src/styles.css` using CSS custom properties and Tailwind v4's native `@theme` syntax.

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) (recommended) or Node.js 20+

### Installation

```bash
# Install dependencies
bun install

# Start development server
bun run dev
```

The dev server will start at `http://localhost:3001` (or as configured by Lovable sandbox).

### Build

```bash
# Production build
bun run build

# Development build
bun run build:dev

# Preview production build locally
bun run preview
```

## Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| Dev | `bun run dev` | Start Vite dev server with HMR |
| Build | `bun run build` | Production build for deployment |
| Build (dev) | `bun run build:dev` | Development mode build |
| Preview | `bun run preview` | Preview production build locally |
| Lint | `bun run lint` | Run ESLint |
| Format | `bun run format` | Format code with Prettier |

## Key Dependencies

- **@tanstack/react-start** — Full-stack React framework with SSR/SSG
- **@tanstack/react-router** — Type-safe file-based routing
- **@tanstack/react-query** — Server state management
- **tailwindcss** ^4.2 — Utility-first CSS framework
- **lucide-react** — Icon library
- **recharts** — Data visualization (charts)
- **zod** — Schema validation
- **react-hook-form** + **@hookform/resolvers** — Form handling

## Deployment

This project is built with TanStack Start targeting edge/serverless runtimes (Cloudflare Workers compatible via `nodejs_compat`).

### Lovable
Deploy directly from the Lovable editor using the **Publish** button.

### Self-Hosting
After connecting to GitHub, the codebase can be cloned and deployed to any platform supporting Vite + Node.js:

```bash
git clone <your-github-repo>
cd sportshandicapper
bun install
bun run build
```

## GitHub Integration

To push this project to your own GitHub repository:

1. Click the **Plus (+) button** in the chat input (bottom left)
2. Select **GitHub**
3. Click **Connect project**
4. Authorize the Lovable GitHub App
5. Select your account/organization and create the repository

Once connected, changes made in Lovable will automatically sync to GitHub in real-time.

## License

MIT

---

Built with [Lovable](https://lovable.dev) and [TanStack Start](https://tanstack.com/start).
