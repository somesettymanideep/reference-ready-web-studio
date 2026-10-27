<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

# Architecture decisions

- GitHub Pages export: build with `GH_PAGES=1 vite build` (script `build:pages`).
  It prerenders all five routes to static HTML in `.output/public` on CI (`dist/client` in the Lovable sandbox; the workflow copies whichever exists into `site/`) under base path
  `/reference-ready-web-studio/` (override with `GH_BASE`). Why: GitHub Pages
  cannot run the SSR/server runtime, and project pages are hosted under a
  sub-path. The router reads `import.meta.env.BASE_URL` for `basepath` and sets
  `trailingSlash: "always"` in that mode — the prerender pass pins
  `maxRedirects: 0`, so every listed URL must render without a redirect, and
  GitHub Pages serves directory-style URLs (`/about/` → `about/index.html`).
  Deployed by `.github/workflows/deploy-gh-pages.yml` (Pages source must be
  "GitHub Actions" in repo settings).
- Images live as real files in `src/assets/` imported directly (logo-header.png,
  hero-slide-*.jpg). Do not reintroduce `.asset.json` CDN pointers — they use
  absolute-at-Lovable paths that break on other hosts.
