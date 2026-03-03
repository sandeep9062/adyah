import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/mental-wellness", label: "Mental Wellness" },
  { to: "/mind-soul", label: "Mind & Soul" },
  { to: "/breathing-techniques", label: "Breathing" },
  { to: "/yoga", label: "Yoga Sanctuary" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for a more dynamic UI
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 ${
        scrolled
          ? "bg-maroon-deep/80 backdrop-blur-xl border-b border-white/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="group flex flex-col">
          <span className="font-display text-2xl font-bold tracking-tighter text-white">
            ADYAH
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-red-vibrant font-medium -mt-1 group-hover:text-white transition-colors">
            Connecting Souls
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className="relative font-body text-xs font-semibold tracking-[0.15em] uppercase text-white/90 hover:text-white transition-colors"
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-2 left-0 right-0 h-[2px] bg-red-vibrant"
                  />
                )}
              </Link>
            );
          })}

          {/* CTA Button */}
          <Link
            to="/book"
            className="px-6 py-2 bg-red-vibrant hover:bg-white hover:text-maroon-deep text-white text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-sm"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed inset-0 h-screen w-full bg-maroon-deep flex flex-col items-center justify-center z-[-1]"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className="text-2xl font-display text-white hover:text-red-vibrant transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                to="/book"
                onClick={() => setOpen(false)}
                className="mt-4 px-10 py-4 border border-white text-white uppercase tracking-[0.2em] hover:bg-white hover:text-maroon-deep transition-all"
              >
                Book Your Journey
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
