import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageBanner } from "@/components/PageBanner";
import { PROJECTS, PROJECT_CATEGORIES } from "@/data/site";
import blueprintImg from "@/assets/cta-blueprint.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Our Projects | Naidu & Co Private Limited" },
      {
        name: "description",
        content:
          "A portfolio of residential, commercial, infrastructure and renovation projects delivered by Naidu & Co Private Limited — work, quality and commitment.",
      },
      { property: "og:title", content: "Our Projects | Naidu & Co Private Limited" },
      {
        property: "og:description",
        content: "A portfolio of work, quality and commitment.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const [filter, setFilter] = useState<string>("All Projects");
  const visible =
    filter === "All Projects"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageBanner
          title="Our Projects"
          subtitle="A Portfolio of Work, Quality and Commitment."
          crumb="Projects"
        />

        <section className="bg-background py-20">
          <div className="container-x">
            <div className="flex flex-wrap gap-2">
              {PROJECT_CATEGORIES.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setFilter(c)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                    filter === c
                      ? "bg-navy-900 text-white"
                      : "border border-border bg-card text-muted-foreground hover:border-navy-900/40 hover:text-navy-900"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {visible.map((p) => (
                <Link
                  key={p.title}
                  to="/contact"
                  className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-950/10"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={p.image}
                      alt={`${p.title} — ${p.location}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-gold-dark">
                      {p.category}
                    </span>
                    <h3 className="mt-1 font-display text-lg font-bold text-navy-950">
                      {p.title}
                    </h3>
                    <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5" /> {p.location}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-dark">
                      View Project{" "}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-navy-950 py-16">
          <img
            src={blueprintImg}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover opacity-15"
          />
          <div className="container-x relative flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <div>
              <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
                Let's Bring Your Next Project to Life
              </h2>
              <p className="mt-2 text-sm text-white/65 md:text-base">
                Connect with us — let's discuss and create it together.
              </p>
            </div>
            <Link to="/contact" className="btn-gold shrink-0">
              Contact Our Team
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
