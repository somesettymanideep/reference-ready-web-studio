import { useState } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  HardHat,
  Building2,
  Landmark,
  DraftingCompass,
  Droplets,
  Wrench,
  Award,
  Users,
  ShieldCheck,
  BadgeCheck,
  Clock,
  type LucideIcon,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { EnquiryForm } from "@/components/EnquiryForm";
import {
  IMAGES,
  SERVICES,
  PROJECTS,
  PROJECT_CATEGORIES,
  STATS,
} from "@/data/site";
import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/svc-commercial.jpg";
import blueprintImg from "@/assets/cta-blueprint.jpg";
import strip1 from "@/assets/svc-construction.jpg";
import strip2 from "@/assets/svc-government.jpg";
import strip3 from "@/assets/svc-renovation.jpg";

const SERVICE_ICONS: Record<string, LucideIcon> = {
  construction: HardHat,
  "real-estate": Building2,
  "government-works": Landmark,
  "home-approved-plans": DraftingCompass,
  waterproofing: Droplets,
  "home-renovation": Wrench,
};

const STAT_ICONS: Record<string, LucideIcon> = {
  building: Building2,
  award: Award,
  users: Users,
  hardhat: HardHat,
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Naidu & Co Private Limited — Construction, Real Estate & Infrastructure",
      },
      {
        name: "description",
        content:
          "Quality construction, lasting value. Residential, commercial and government infrastructure projects, approved home plans, waterproofing and renovation by Naidu & Co Private Limited.",
      },
      {
        property: "og:title",
        content: "Naidu & Co Private Limited — Construction, Real Estate & Infrastructure",
      },
      {
        property: "og:description",
        content:
          "Building dreams into lasting value — construction, real estate and government works delivered with trust.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  const [filter, setFilter] = useState<string>("All Projects");
  const visible =
    filter === "All Projects"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative flex min-h-[620px] items-center overflow-hidden">
          <img
            src={heroImg}
            alt="Modern residence built by Naidu & Co at dusk"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/75 to-navy-900/25" />
          <div className="container-x relative py-20">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
              Building Dreams
            </p>
            <h1 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-tight text-white md:text-6xl">
              Construction
              <br />
              Real Estate
              <br />
              Government Works
            </h1>
            <p className="mt-5 max-w-md text-base text-white/70 md:text-lg">
              Quality Construction. Lasting Value.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/services" className="btn-gold">
                Explore Our Services
              </Link>
              <Link to="/projects" className="btn-outline-light">
                View Our Projects
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/70">
              <span className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-gold" /> Licensed &amp; Insured
              </span>
              <span className="flex items-center gap-2">
                <Award className="h-4 w-4 text-gold" /> 15+ Years Experience
              </span>
              <span className="flex items-center gap-2">
                <BadgeCheck className="h-4 w-4 text-gold" /> Govt. Approved Contractor
              </span>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-background py-20">
          <div className="container-x">
            <p className="kicker">What We Do</p>
            <h2 className="mt-3 max-w-xl font-display text-3xl font-bold text-navy-950 md:text-4xl">
              Complete Solutions for Your Construction Needs
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((s) => {
                const Icon = SERVICE_ICONS[s.id] ?? HardHat;
                return (
                  <Link
                    key={s.id}
                    to="/services"
                    className="group rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-gold/50 hover:shadow-xl hover:shadow-navy-950/10"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-gold-dark">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 font-display text-lg font-bold text-navy-950">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {s.blurb}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-dark transition-colors group-hover:text-navy-900">
                      Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                );
              })}
            </div>
            <div className="mt-10 text-center">
              <Link to="/services" className="btn-navy">
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* About strip */}
        <section className="bg-cream py-20">
          <div className="container-x grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="kicker">About Naidu &amp; Co</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-navy-950 md:text-4xl">
                Built on Trust.
                <br />
                Driven by Excellence.
              </h2>
              <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground md:text-base">
                Naidu &amp; Co Private Limited is a construction and
                infrastructure company focused on delivering dependable
                results, maintaining quality standards, and building
                long-term client relationships.
              </p>
              <Link to="/about" className="btn-outline mt-8">
                Discover Our Company
              </Link>
            </div>
            <div className="photo-frame max-w-lg justify-self-center lg:justify-self-end">
              <img
                src={aboutImg}
                alt="Commercial project by Naidu & Co"
                loading="lazy"
                className="w-full rounded-xl object-cover shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Projects preview */}
        <section className="bg-background py-20">
          <div className="container-x">
            <p className="kicker">Our Portfolio</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-950 md:text-4xl">
              Projects That Reflect Our Commitment
            </h2>
            <div className="mt-8 flex flex-wrap gap-2">
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
                  to="/projects"
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
                    <h3 className="font-display text-lg font-bold text-navy-950">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{p.location}</p>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-dark">
                      View Project <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link to="/projects" className="btn-gold">
                Explore All Projects
              </Link>
            </div>
          </div>
        </section>

        {/* Stats band */}
        <section className="relative overflow-hidden bg-navy-900 py-16">
          <img
            src={blueprintImg}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover opacity-15"
          />
          <div className="container-x relative">
            <h2 className="text-center font-display text-3xl font-bold text-white">
              Our Impact in Numbers
            </h2>
            <span className="mx-auto mt-3 block h-0.5 w-16 bg-gold" />
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {STATS.map((s) => {
                const Icon = STAT_ICONS[s.icon] ?? Award;
                return (
                  <div key={s.label} className="flex flex-col items-center text-center">
                    <Icon className="h-8 w-8 text-gold" />
                    <span className="mt-4 font-display text-4xl font-bold text-white md:text-5xl">
                      {s.value}
                    </span>
                    <span className="mt-2 text-sm text-white/60">{s.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why choose us */}
        <section id="construction-point-view" className="bg-cream py-20">
          <div className="container-x">
            <p className="kicker">Why Choose Us</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-950 md:text-4xl">
              Your Vision, Our Commitment
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: BadgeCheck,
                  title: "Quality-focused Execution",
                  desc: "We never compromise on build quality or materials.",
                },
                {
                  icon: Clock,
                  title: "Reliable Project Coordination",
                  desc: "On-time delivery with clear milestones from start to finish.",
                },
                {
                  icon: Users,
                  title: "Transparent Communication",
                  desc: "Clear updates, honest pricing and no hidden surprises.",
                },
                {
                  icon: ShieldCheck,
                  title: "Client Satisfaction",
                  desc: "Our success is measured by your trust in us.",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-gold/50 hover:shadow-lg"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-gold-dark">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-navy-950">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {[
                { src: strip1, alt: "Construction site with tower crane" },
                { src: strip2, alt: "Highway infrastructure project" },
                { src: strip3, alt: "Renovated home interior" },
              ].map(({ src, alt }) => (
                <div key={alt} className="overflow-hidden rounded-xl">
                  <img
                    src={src}
                    alt={alt}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust band */}
        <section className="bg-navy-900 py-14">
          <div className="container-x">
            <h2 className="text-center font-display text-2xl font-bold text-white md:text-3xl">
              Trust Built Through Every Project
            </h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: HardHat, title: "Expert Team", desc: "Skilled professionals on every site." },
                { icon: Award, title: "Quality Assurance", desc: "Rigorous checks at every stage." },
                { icon: Clock, title: "On-Time Delivery", desc: "Schedules we stand behind." },
                { icon: ShieldCheck, title: "Safety First", desc: "Certified site safety standards." },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex flex-col items-center text-center">
                  <Icon className="h-7 w-7 text-gold" />
                  <h3 className="mt-3 font-display text-base font-bold text-white">{title}</h3>
                  <p className="mt-1 text-sm text-white/60">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA + consultation form */}
        <section className="relative overflow-hidden bg-navy-950 py-20">
          <img
            src={blueprintImg}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover opacity-10"
          />
          <div className="container-x relative grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="kicker">Need Expert Guidance?</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-4xl">
                Book a Free Consultation
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/65 md:text-base">
                Discuss your construction, renovation or infrastructure
                requirements with our team — no obligation, just clear advice
                on scope, budget and timelines.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-white/70">
                {[
                  "Response within 24 hours",
                  "Transparent cost estimates",
                  "Site visit available on request",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2.5">
                    <BadgeCheck className="h-4 w-4 shrink-0 text-gold" /> {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-card p-6 shadow-2xl shadow-navy-950/50 md:p-8">
              <h3 className="font-display text-xl font-bold text-navy-950">
                Request a Callback
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Fill in your details and we'll reach out.
              </p>
              <div className="mt-6">
                <EnquiryForm compact />
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
