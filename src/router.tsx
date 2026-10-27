import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

// GitHub Pages hosts the site under /reference-ready-web-studio/; honor the
// Vite base path so navigation links stay correct there (it is "/" locally).
// Under a base path the router also uses trailing slashes, matching both the
// prerender pass (which cannot follow redirects) and GitHub Pages' directory
// style URLs (/about/ serving about/index.html).
const isBasePathDeploy = !!import.meta.env.BASE_URL && import.meta.env.BASE_URL !== "/";
const basepath = isBasePathDeploy ? import.meta.env.BASE_URL.replace(/\/+$/, "") : "/";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    basepath,
  });

  return router;
};
