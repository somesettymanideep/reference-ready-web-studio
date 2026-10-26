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

- The brand mark is the user's official logo lockup, served from the CDN pointer `src/assets/logo-full.png.asset.json`; `BrandLockup` in `src/components/SiteHeader.tsx` renders it alone (no typed wordmark) with a `surface` prop choosing the light or dark treatment. Keep new brand usages going through `BrandLockup` so the logo stays consistent across pages.

