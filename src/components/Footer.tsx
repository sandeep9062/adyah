import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0F0506] text-white overflow-hidden border-t border-white/5">
      {/* 1. Large Background Brand Mark */}
      <div className="absolute -bottom-10 -right-10 pointer-events-none select-none">
        <h2 className="text-[15rem] md:text-[25rem] font-display font-bold text-white/[0.02] leading-none tracking-tighter">
          ADYAH
        </h2>
      </div>

      <div className="container mx-auto px-6 pt-24 pb-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            {/* FIXED: Using standard Link for both opening and closing */}
            <Link to="/" className="inline-block mb-8">
              <h3 className="font-display text-4xl font-light tracking-tighter">
                ADYAH<span className="text-red-vibrant">.</span>
              </h3>
            </Link>

            <p className="font-body text-white/50 text-base leading-relaxed max-w-sm mb-10">
              A sanctuary where clinical precision meets spiritual depth. We
              bridge the gap between physical rehabilitation and the unseen
              journey of the soul.
            </p>

            {/* Social Links */}
            <div className="flex gap-6">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-red-vibrant hover:border-red-vibrant transition-all duration-500"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-3">
            <h4 className="font-body text-[10px] uppercase tracking-[0.3em] mb-10 text-red-vibrant font-bold">
              The Path
            </h4>
            <nav className="flex flex-col gap-4">
              {[
                { name: "Mental Wellness", path: "/mental-wellness" },
                { name: "Mind & Soul", path: "/mind-soul" },
                { name: "Breathing Flow", path: "/breathing-techniques" },
                { name: "Yoga Sanctuary", path: "/yoga" },
                { name: "Our Team", path: "/team" },
                { name: "Our Lineage", path: "/lineage" },
                { name: "Journal of Stillness", path: "/journal" },
                { name: "Book Journey", path: "/book" },
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="group flex items-center justify-between font-body text-white/60 hover:text-white transition-colors text-sm py-1 border-b border-transparent hover:border-white/10"
                >
                  {link.name}
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-opacity text-red-vibrant"
                  />
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-4">
            <h4 className="font-body text-[10px] uppercase tracking-[0.3em] mb-10 text-red-vibrant font-bold">
              Connect
            </h4>
            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="mt-1 p-2 rounded-lg bg-white/5 text-red-vibrant group-hover:bg-red-vibrant group-hover:text-white transition-colors">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/30 mb-1">
                    Our Space
                  </p>
                  <p className="text-sm text-white/70 leading-relaxed">
                    123 Healing Way, Wellness City <br />
                    Studio 402, Soul District
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="mt-1 p-2 rounded-lg bg-white/5 text-red-vibrant group-hover:bg-red-vibrant group-hover:text-white transition-colors">
                  <Mail size={16} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/30 mb-1">
                    Inquiries
                  </p>
                  <a
                    href="mailto:hello@adyah.com"
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    hello@adyah.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="mt-1 p-2 rounded-lg bg-white/5 text-red-vibrant group-hover:bg-red-vibrant group-hover:text-white transition-colors">
                  <Phone size={16} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/30 mb-1">
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

        {/* 2. Refined Bottom Bar */}
        <div className="border-t border-white/5 mt-24 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-body text-[10px] uppercase tracking-[0.2em] text-white/30 order-2 md:order-1">
            © {currentYear} ADYAH INTEGRATED WELLNESS.
          </p>

          <div className="flex gap-8 order-1 md:order-2">
            <Link
              to="/privacy"
              className="text-[10px] uppercase tracking-[0.2em] text-white/30 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-[10px] uppercase tracking-[0.2em] text-white/30 hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>

          <div className="order-3 hidden md:block">
            <p className="text-[10px] uppercase tracking-[0.4em] text-white/10">
              Silence Is Sacred
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
