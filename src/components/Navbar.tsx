import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/mental-wellness", label: "Mental Wellness" },
  { to: "/mind-soul", label: "Mind & Soul" },
  { to: "/breast-care", label: "Breast Care" },
  { to: "/yoga", label: "Yoga Sanctuary" },
  { to: "/book", label: "Book Your Journey" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${isHome ? "bg-transparent" : "bg-maroon-deep/95 backdrop-blur-md"}`}
    >
      <div className="container mx-auto flex items-center justify-between py-5 px-6">
        <Link
          to="/"
          className="font-display text-2xl font-semibold tracking-wide text-primary-foreground"
        >
          Adyah Connecting Souls
          {/* The Integrated Wellness Hub */}
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-body text-sm tracking-wider uppercase transition-colors duration-300 ${
                location.pathname === link.to
                  ? "text-red-vibrant"
                  : "text-primary-foreground/80 hover:text-primary-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary-foreground"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-maroon-deep/98 backdrop-blur-lg overflow-hidden"
          >
            <div className="flex flex-col items-center gap-6 py-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`font-body text-lg tracking-wider uppercase transition-colors ${
                    location.pathname === link.to
                      ? "text-red-vibrant"
                      : "text-primary-foreground/80"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
