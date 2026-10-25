import { Link } from "@tanstack/react-router";
import blueprint from "@/assets/cta-blueprint.jpg";

type Props = {
  title: string;
  subtitle: string;
  crumb: string;
};

export function PageBanner({ title, subtitle, crumb }: Props) {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      <img
        src={blueprint}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-900/70 to-navy-800/50" />
      <div className="container-x relative py-16 md:py-20">
        <h1 className="font-display text-3xl font-bold text-white md:text-5xl">
          {title}
        </h1>
        <p className="mt-3 max-w-xl text-sm text-gold-light md:text-base">
          {subtitle}
        </p>
        <nav className="mt-5 flex items-center gap-2 text-xs text-white/60" aria-label="Breadcrumb">
          <Link to="/" className="transition-colors hover:text-gold">
            Home
          </Link>
          <span>/</span>
          <span className="font-medium text-white/85">{crumb}</span>
        </nav>
      </div>
      <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-gold via-gold/40 to-transparent" />
    </section>
  );
}
