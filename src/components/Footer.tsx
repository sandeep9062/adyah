import { Link, useLocation } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";

// Replace with your social profile URLs when ready
const SOCIAL_LINKS = [
  { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { Icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
] as const;

const FOOTER_NAV = [
  { name: "Mental Wellness", path: "/mental-wellness" },
  { name: "Mind & Soul", path: "/mind-soul" },
  { name: "Breathing Flow", path: "/breathing-techniques" },
  { name: "Yoga Sanctuary", path: "/yoga" },
  { name: "Our Team", path: "/team" },
  { name: "Our Lineage", path: "/lineage" },
  { name: "Journal of Stillness", path: "/journal" },
  { name: "Book Journey", path: "/book" },
] as const;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  return (
    <footer className="relative bg-footer text-white overflow-hidden border-t border-white/5">
      {/* Gradient overlay – subtle sunlight from top, like hero */}
      <div
        className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/[0.06] via-transparent to-maroon-deep/40"
        aria-hidden
      />
      {/* Background Brand Mark - smaller so footer feels right-sized */}
      <div className="absolute -bottom-4 -right-4 pointer-events-none select-none">
        <h2 className="text-[8rem] md:text-[12rem] font-display font-bold text-white/[0.04] leading-none tracking-tighter">
          ADYAH
        </h2>
      </div>

      <div className="container mx-auto px-6 pt-12 pb-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <Link to="/" className="inline-block mb-4">
              <h3 className="font-display text-2xl font-light tracking-tighter md:text-3xl">
                ADYAH<span className="text-red-vibrant">.</span>
              </h3>
            </Link>

            <p className="font-body text-white/50 text-sm leading-relaxed max-w-sm mb-6">
              A sanctuary where clinical precision meets spiritual depth. We
              bridge the gap between physical rehabilitation and the unseen
              journey of the soul.
            </p>

            {/* Social Links - update SOCIAL_LINKS hrefs with your profiles */}
            <div className="flex gap-6">
              {SOCIAL_LINKS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="min-w-[44px] min-h-[44px] w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-red-vibrant hover:border-red-vibrant transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-vibrant focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-3">
            <h4 className="font-body text-[10px] uppercase tracking-[0.3em] mb-4 text-red-vibrant font-bold">
              The Path
            </h4>
            <nav className="flex flex-col gap-0.5" aria-label="Footer navigation">
              {FOOTER_NAV.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`group flex min-h-[40px] items-center justify-between font-body text-sm py-0.5 border-b border-transparent transition-all duration-300 hover:text-white hover:border-white/10 group-hover:translate-x-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-vibrant focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm ${
                      isActive ? "text-red-vibrant font-medium" : "text-white/60"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.name}
                    <ArrowUpRight
                      size={14}
                      className={`transition-opacity text-red-vibrant ${
                        isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-4">
            <h4 className="font-body text-[10px] uppercase tracking-[0.3em] mb-4 text-red-vibrant font-bold">
              Connect
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <div className="mt-0.5 p-1.5 rounded-md bg-white/5 text-red-vibrant group-hover:bg-red-vibrant group-hover:text-white transition-colors shrink-0">
                  <MapPin size={14} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/30 mb-0.5">
                    Our Space
                  </p>
                  <p className="text-sm text-white/70 leading-snug">
                    123 Healing Way, Wellness City <br />
                    Studio 402, Soul District
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="mt-0.5 p-1.5 rounded-md bg-white/5 text-red-vibrant group-hover:bg-red-vibrant group-hover:text-white transition-colors shrink-0">
                  <Mail size={14} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/30 mb-0.5">
                    Enquiries
                  </p>
                  <a
                    href="mailto:hello@adyah.com"
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    hello@adyah.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="mt-0.5 p-1.5 rounded-md bg-white/5 text-red-vibrant group-hover:bg-red-vibrant group-hover:text-white transition-colors shrink-0">
                  <Phone size={14} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/30 mb-0.5">
                    Voice
                  </p>
                  <a
                    href="tel:+1234567890"
                    className="text-sm text-white/70 hover:text-white transition-colors font-medium"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Bottom Bar – stands out with curved edges and padding */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-4 rounded-2xl bg-white/[0.08] border border-white/15 px-6 py-5 shadow-[0_4px_24px_rgba(0,0,0,0.15)]">
          <p className="font-body text-xs uppercase tracking-[0.2em] text-white/70 order-2 md:order-1 px-3 py-2">
            © {currentYear} ADYAH CONNECTING SOULS.
          </p>

          <div className="flex gap-4 order-1 md:order-2">
            <Link
              to="/privacy"
              className="min-h-[44px] inline-flex items-center px-4 py-2.5 rounded-xl text-xs uppercase tracking-[0.2em] text-white/70 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-vibrant focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="min-h-[44px] inline-flex items-center px-4 py-2.5 rounded-xl text-xs uppercase tracking-[0.2em] text-white/70 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-vibrant focus-visible:ring-offset-2 rounded-xl"
            >
              Terms of Service
            </Link>
          </div>

          <div className="order-3 hidden md:block px-3 py-2">
            <p className="text-xs uppercase tracking-[0.4em] text-white/50">
              Silence Is Sacred
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
