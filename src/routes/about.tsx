import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BadgeCheck,
  Scale,
  Award,
  Clock,
  HeartHandshake,
  Quote,
  Phone,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageBanner } from "@/components/PageBanner";
import { TESTIMONIALS } from "@/data/site";
import aboutImg from "@/assets/svc-construction.jpg";
import founderImg from "@/assets/founder.jpg";
import blueprintImg from "@/assets/cta-blueprint.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Naidu & Co Private Limited" },
      {
        name: "description",
        content:
          "Learn about Naidu & Co Private Limited — our story, vision, mission and core values. Building trust through quality and commitment in construction and infrastructure.",
      },
      { property: "og:title", content: "About Naidu & Co Private Limited" },
      {
        property: "og:description",
        content: "Building trust through quality and commitment.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const FEATURES = [
  "Quality Construction",
  "Timely Execution",
  "Transparent Approach",
  "Long-Term Relationships",
];

const VALUES = [
  { icon: Scale, title: "Integrity", desc: "Honest dealings in every agreement." },
  { icon: Award, title: "Quality", desc: "Standards we never compromise on." },
  { icon: Clock, title: "Reliability", desc: "Committed delivery, every time." },
  { icon: HeartHandshake, title: "Client Commitment", desc: "Your goals drive our work." },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageBanner
          title="About Naidu & Co"
          subtitle="Building Trust Through Quality and Commitment."
          crumb="About Us"
        />

        {/* Who we are */}
        <section className="bg-background py-20">
          <div className="container-x grid items-center gap-12 lg:grid-cols-2">
            <div className="photo-frame order-2 max-w-lg lg:order-1">
              <img
                src={aboutImg}
                alt="Naidu & Co construction project in progress"
                loading="lazy"
                className="w-full rounded-xl object-cover shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="kicker">About Us</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-navy-950 md:text-4xl">
                We Build More Than Structures
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
                Naidu &amp; Co Private Limited is a construction and
                infrastructure company focused on delivering dependable
                results, maintaining quality standards, and building
                long-term relationships. From residential homes to commercial
                developments and public infrastructure, we bring the same
                discipline and care to every project we take on.
              </p>
              <ul className="mt-7 grid gap-4 sm:grid-cols-2">
                {FEATURES.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent text-gold-dark">
                      <BadgeCheck className="h-5 w-5" />
                    </span>
                    <span className="text-sm font-semibold text-navy-900">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Founder */}
        <section className="bg-cream py-20">
          <div className="container-x">
            <p className="kicker">Meet Our Founder</p>
            <div className="mt-8 grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl border-4 border-gold/70 shadow-xl">
                <img
                  src={founderImg}
                  alt="Founder & Director of Naidu & Co Private Limited"
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold text-navy-950 md:text-3xl">
                  Founder &amp; Director
                </h2>
                <blockquote className="mt-5 border-l-2 border-gold pl-5 text-sm italic leading-relaxed text-muted-foreground md:text-base">
                  "With a clear vision and strong leadership, our founder has
                  been guiding the company since its inception — with a focus
                  on quality and long-term value in the infrastructure sector."
                </blockquote>
                <ul className="mt-7 grid gap-3 sm:grid-cols-3">
                  {["Client Focused", "Quality Driven", "Results Oriented"].map((t) => (
                    <li
                      key={t}
                      className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2.5 text-sm font-semibold text-navy-900"
                    >
                      <BadgeCheck className="h-4 w-4 shrink-0 text-gold-dark" /> {t}
                    </li>
                  ))}
                </ul>
                <p className="mt-8 font-display text-2xl font-bold text-navy-900">
                  Naidu &amp; Co
                </p>
                <span className="mt-1 block h-0.5 w-28 bg-gold" />
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="bg-background py-20">
          <div className="container-x">
            <h2 className="font-display text-3xl font-bold text-navy-950 md:text-4xl">
              Our Vision &amp; Mission
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="relative overflow-hidden rounded-2xl bg-navy-900 p-8 md:p-10">
                <img
                  src={blueprintImg}
                  alt=""
                  aria-hidden
                  className="absolute inset-0 h-full w-full object-cover opacity-10"
                />
                <div className="relative">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gold/20 text-gold">
                    <Award className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold text-gold">
                    Our Vision
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/75 md:text-base">
                    To be a trusted name in construction and infrastructure,
                    creating sustainable value for clients and building a
                    better future.
                  </p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-2xl bg-navy-900 p-8 md:p-10">
                <img
                  src={blueprintImg}
                  alt=""
                  aria-hidden
                  className="absolute inset-0 h-full w-full object-cover opacity-10"
                />
                <div className="relative">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gold/20 text-gold">
                    <Clock className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold text-gold">
                    Our Mission
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/75 md:text-base">
                    To deliver high-quality construction solutions through
                    professional service, technical excellence and dependable
                    client satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core values */}
        <section className="bg-cream py-20">
          <div className="container-x">
            <p className="kicker">Our Core Values</p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {VALUES.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="rounded-xl border border-border bg-card p-6 text-center transition-all hover:-translate-y-1 hover:border-gold/50 hover:shadow-lg"
                >
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent text-gold-dark">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-navy-950">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-background py-20">
          <div className="container-x">
            <p className="kicker">Client Testimonials</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-950 md:text-4xl">
              What Our Clients Say
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {TESTIMONIALS.map((t) => (
                <figure
                  key={t.name}
                  className="flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-gold/50 hover:shadow-lg"
                >
                  <Quote className="h-7 w-7 text-gold" />
                  <blockquote className="mt-4 flex-1 text-sm italic leading-relaxed text-muted-foreground">
                    "{t.quote}"
                  </blockquote>
                  <figcaption className="mt-5 border-t border-border pt-4">
                    <p className="font-display text-base font-bold text-navy-950">
                      — {t.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </figcaption>
                </figure>
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
            className="absolute inset-0 h-full w-full object-cover opacity-10"
          />
          <div className="container-x relative flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <div>
              <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
                Have a Project in Mind?
              </h2>
              <p className="mt-2 text-sm text-white/65 md:text-base">
                Let's discuss your requirements and explore the right solution for your project.
              </p>
            </div>
            <Link to="/contact" className="btn-gold shrink-0">
              <Phone className="h-4 w-4" /> Contact Our Team
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
