import { createFileRoute } from "@tanstack/react-router";
import {
  MapPin,
  Mail,
  Phone,
  Navigation,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageBanner } from "@/components/PageBanner";
import { EnquiryForm } from "@/components/EnquiryForm";
import { CONTACT } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Naidu & Co Private Limited" },
      {
        name: "description",
        content:
          "Get in touch with Naidu & Co Private Limited — discuss your construction, real estate or renovation project. Kattidikeda, Vizianagaram, Andhra Pradesh.",
      },
      { property: "og:title", content: "Contact Us | Naidu & Co Private Limited" },
      {
        property: "og:description",
        content: "Let's talk about your project — connect with our team today.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const SOCIALS = [
  { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com" },
] as const;

function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageBanner
          title="Let's Talk About Your Project"
          subtitle="Connect with our team to discuss your construction needs or project requirements."
          crumb="Contact"
        />

        <section className="bg-background py-20">
          <div className="container-x grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Get in touch card */}
            <div className="rounded-2xl bg-navy-900 p-8 text-white md:p-10">
              <h2 className="font-display text-2xl font-bold text-gold">
                Get In Touch
              </h2>
              <span className="mt-2 block h-0.5 w-10 bg-gold" />
              <ul className="mt-8 space-y-6">
                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gold/15 text-gold">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">{CONTACT.company}</p>
                    <p className="mt-1 text-sm leading-relaxed text-white/60">
                      {CONTACT.address}
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gold/15 text-gold">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">Email</p>
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="mt-1 block text-sm text-white/60 transition-colors hover:text-gold"
                    >
                      {CONTACT.email}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gold/15 text-gold">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">Phone</p>
                    <a
                      href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                      className="mt-1 block text-sm text-white/60 transition-colors hover:text-gold"
                    >
                      {CONTACT.phone}
                    </a>
                  </div>
                </li>
              </ul>
              <a
                href={CONTACT.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-gold mt-9"
              >
                <Navigation className="h-4 w-4" /> Get Directions
              </a>
              <div className="mt-9 border-t border-white/10 pt-7">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                  Follow Us
                </p>
                <div className="mt-4 flex gap-3">
                  {SOCIALS.map(({ icon: Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-gold hover:bg-gold hover:text-navy-950"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div id="enquiry" className="rounded-2xl border border-border bg-card p-8 shadow-sm md:p-10">
              <h2 className="font-display text-2xl font-bold text-navy-950">
                Send a Message
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Fill in your details and our team will respond within 24 hours.
              </p>
              <div className="mt-8">
                <EnquiryForm />
              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="bg-cream pb-20">
          <div className="container-x">
            <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
              <iframe
                title="Naidu & Co Private Limited — office location map"
                src={CONTACT.mapsEmbed}
                loading="lazy"
                className="h-80 w-full"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </div>
  );
}
