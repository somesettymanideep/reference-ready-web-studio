// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// GitHub Pages export mode. GH_PAGES=1 produces a fully static, prerendered
// build hosted under a sub-path (GH_BASE, defaulting to this repo's path).
const ghPages = !!process.env.GH_PAGES;
const ghBase = process.env.GH_BASE ?? "/reference-ready-web-studio";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // Prerender every route to static HTML so the site runs on GitHub Pages,
    // which cannot execute the SSR/server runtime.
    ...(ghPages
      ? {
          pages: ["/", "/about", "/services", "/projects", "/contact"].map((path) => ({ path })),
          prerender: { enabled: true, autoStaticPathsDiscovery: false },
        }
      : {}),
  },
  ...(ghPages ? { vite: { base: `${ghBase}/` } } : {}),
});
