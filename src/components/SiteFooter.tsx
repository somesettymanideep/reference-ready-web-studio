import { Link } from "@tanstack/react-router";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import { BrandLockup } from "./SiteHeader";
import { CONTACT, SERVICES } from "@/data/site";

const QUICK_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Our Projects", to: "/projects" },
  { label: "Contact Us", to: "/contact" },
] as const;

const SOCIALS = [
  { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com" },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t-[7px] border-t-gold bg-white text-ink">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <BrandLockup size="lg" surface="light" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink/60">
            {CONTACT.tagline}
          </p>
          <div className="mt-6 flex gap-3">
            {SOCIALS.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-navy-900/20 text-navy-900/70 transition-colors hover:border-gold hover:bg-gold hover:text-navy-950"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-lg font-bold text-navy-950">Quick Links</h3>
          <span className="mt-2 block h-0.5 w-8 bg-gold" />
          <ul className="mt-5 space-y-3">
            {QUICK_LINKS.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-sm text-ink/60 transition-colors hover:text-gold-dark"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg font-bold text-navy-950">Our Services</h3>
          <span className="mt-2 block h-0.5 w-8 bg-gold" />
          <ul className="mt-5 space-y-3">
            {SERVICES.map((s) => (
              <li key={s.id}>
                <Link
                  to="/services"
                  className="text-sm text-ink/60 transition-colors hover:text-gold-dark"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg font-bold text-navy-950">Contact Us</h3>
          <span className="mt-2 block h-0.5 w-8 bg-gold" />
          <ul className="mt-5 space-y-4 text-sm text-ink/60">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" />
              <span>{CONTACT.address}</span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" />
              <a
                href={`mailto:${CONTACT.email}`}
                className="transition-colors hover:text-gold-dark"
              >
                {CONTACT.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" />
              <a
                href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                className="transition-colors hover:text-gold-dark"
              >
                {CONTACT.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-900/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-5 text-xs text-ink/50 sm:flex-row">
          <p>© 2026 Naidu &amp; Co Private Limited. All rights reserved.</p>
          <p>
            <a href="#" className="transition-colors hover:text-gold-dark">
              Privacy Policy
            </a>
            <span className="mx-2">|</span>
            <a href="#" className="transition-colors hover:text-gold-dark">
              Terms &amp; Conditions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
