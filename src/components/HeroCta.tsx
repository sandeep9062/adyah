import { Link } from "react-router-dom";

interface HeroCtaProps {
  /** Optional class for context (e.g. light text on dark hero) */
  className?: string;
}

const HeroCta = ({ className = "" }: HeroCtaProps) => {
  return (
    <div className={`mt-8 flex flex-wrap items-center justify-center gap-4 ${className}`}>
      <Link
        to="/book"
        className="min-h-[44px] inline-flex items-center justify-center px-6 py-3 bg-red-vibrant text-white text-xs font-bold uppercase tracking-widest transition-colors hover:bg-red-vibrant/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-vibrant focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded"
      >
        Book a session
      </Link>
      <Link
        to="/"
        className="min-h-[44px] inline-flex items-center justify-center px-6 py-3 border border-current text-xs font-semibold uppercase tracking-widest transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current focus-visible:ring-offset-2 rounded"
      >
        Enquire
      </Link>
    </div>
  );
};

export default HeroCta;
