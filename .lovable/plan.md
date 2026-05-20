## Increase logo sizes without expanding header/footer containers

### Header (SiteNav.tsx)
- Increase logo height from `h-20 md:h-24` to `h-24 md:h-28` (or similar step up).
- Increase the negative vertical margin on the logo link from `-my-6` to `-my-8` (or proportional) so the taller logo visually overflows the nav bar rather than pushing it taller.
- Keep nav padding (`py-2`) and all other styling unchanged — only the logo scales and the negative margin absorbs the extra height.

### Footer (SiteFooter.tsx)
- Increase logo height from `h-12` to `h-14` or `h-16`.
- No other changes needed.

This keeps the frosted-glass header bar the same height while the logo pops more.