## Swap site logo to new Sports Handicapper image

Replace the current logo with the newly uploaded one across the nav and footer.

### Steps

1. Copy `user-uploads://Sports-Handicappers-2.png` to `src/assets/logo.png` (overwrite), so all existing `import logo from "@/assets/logo.png"` references pick it up automatically.
2. No code changes needed in `SiteNav.tsx` or `SiteFooter.tsx` — they already import from that path with the current sizing you approved.
3. Verify in the preview that the new logo renders at the right size in the header and footer.

### Notes

- The new logo has a white/transparent background with a bright blue "SPORTS HANDICAPPER" badge — it should sit cleanly on the dark nav.
- If after the swap the glow/drop-shadow tint (currently purple) clashes with the blue logo, we can adjust it in a follow-up.
