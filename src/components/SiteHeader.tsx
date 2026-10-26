import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import logoMark from "@/assets/logo-mark.png";

const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
] as const;

export function BrandLockup({ size = "sm" }: { size?: "sm" | "lg" }) {
  return (
    <Link to="/" className="flex shrink-0 items-center gap-3">
      <img
        src={logoMark}
        alt="Naidu & Co Private Limited"
        className={size === "sm" ? "h-11 w-auto" : "h-16 w-auto"}
      />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display font-bold tracking-wide text-white ${
            size === "sm" ? "text-lg" : "text-2xl"
          }`}
        >
          NAIDU <span className="text-gold">&amp;</span> CO
        </span>
        <span
          className={`mt-1 font-sans font-semibold uppercase tracking-[0.35em] text-gold ${
            size === "sm" ? "text-[0.55rem]" : "text-[0.7rem]"
          }`}
        >
          Private Limited
        </span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-900/95 shadow-lg shadow-navy-950/30 backdrop-blur">
      <div className="container-x flex h-[4.5rem] items-center justify-between gap-4">
        <BrandLockup />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-white/75 transition-colors hover:text-gold"
              activeOptions={{ exact: item.to === "/" }}
            >
              {({ isActive }) => (
                <span
                  className={
                    isActive
                      ? "relative text-gold after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-gold"
                      : ""
                  }
                >
                  {item.label}
                </span>
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/contact" className="btn-gold hidden sm:inline-flex">
            Get a Quote
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/20 text-white lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-navy-900 lg:hidden">
          <nav className="container-x flex flex-col py-4" aria-label="Mobile">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="border-b border-white/5 py-3 text-sm font-medium text-white/80 transition-colors hover:text-gold"
                activeOptions={{ exact: item.to === "/" }}
              >
                {({ isActive }) => (
                  <span className={isActive ? "text-gold" : ""}>{item.label}</span>
                )}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="btn-gold mt-4 w-full"
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
