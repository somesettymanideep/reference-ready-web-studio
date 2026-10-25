import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageBanner } from "@/components/PageBanner";
import { SERVICES } from "@/data/site";
import blueprintImg from "@/assets/cta-blueprint.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services | Naidu & Co Private Limited" },
      {
        name: "description",
        content:
          "Construction, real estate, government works, home approved plans, waterproofing and home renovation — practical solutions and professional execution by Naidu & Co Private Limited.",
      },
      { property: "og:title", content: "Our Services | Naidu & Co Private Limited" },
      {
        property: "og:description",
        content: "Practical Solutions. Professional Execution. Lasting Value.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageBanner
          title="Our Services"
          subtitle="Practical Solutions. Professional Execution. Lasting Value."
          crumb="Services"
        />

        <section className="bg-background py-20">
          <div className="container-x flex flex-col gap-16">
            {SERVICES.map((s, i) => (
              <div
                key={s.id}
                id={s.id}
                className="grid items-center gap-10 lg:grid-cols-2"
              >
                <div
                  className={`overflow-hidden rounded-2xl shadow-lg ${
                    i % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <p className="kicker">Service {String(i + 1).padStart(2, "0")}</p>
                  <h2 className="mt-3 font-display text-2xl font-bold text-navy-950 md:text-3xl">
                    {s.title}
                  </h2>
                  <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground md:text-base">
                    {s.blurb}
                  </p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2.5 text-sm text-navy-900">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-gold-dark" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="btn-navy mt-8">
                    Contact Us <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
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
                Looking for the Right Construction Partner?
              </h2>
              <p className="mt-2 text-sm text-white/65 md:text-base">
                Discuss your requirements with our team today.
              </p>
            </div>
            <Link to="/contact" className="btn-gold shrink-0">
              Discuss Your Requirements
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
