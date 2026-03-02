import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-maroon-deep text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-display text-3xl font-semibold mb-4">
              The Integrated
              <br />
              Wellness Hub
            </h3>
            <p className="font-body text-primary-foreground/60 text-sm leading-relaxed max-w-xs">
              Bridging clinical rehabilitation and spiritual healing for
              complete transformation.
            </p>
          </div>

          <div>
            <h4 className="font-body text-sm uppercase tracking-widest mb-6 text-red-vibrant">
              Navigate
            </h4>
            <div className="flex flex-col gap-3">
              <Link
                to="/mental-wellness"
                className="font-body text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
              >
                Mental Wellness
              </Link>
              <Link
                to="/mind-soul"
                className="font-body text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
              >
                Mind & Soul
              </Link>
              <Link
                to="/breast-care"
                className="font-body text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
              >
                Breast Care
              </Link>
              <Link
                to="/yoga"
                className="font-body text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
              >
                Yoga Sanctuary
              </Link>
              <Link
                to="/book"
                className="font-body text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
              >
                Book Your Journey
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-body text-sm uppercase tracking-widest mb-6 text-red-vibrant">
              Contact
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
              >
                <Phone size={16} className="text-red-vibrant" /> +1 (234)
                567-890
              </a>
              <a
                href="mailto:hello@wellnesshub.com"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
              >
                <Mail size={16} className="text-red-vibrant" />{" "}
                hello@wellnesshub.com
              </a>
              <span className="flex items-center gap-3 text-primary-foreground/70 text-sm">
                <MapPin size={16} className="text-red-vibrant" /> 123 Healing
                Way, Wellness City
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="font-body text-xs text-primary-foreground/40">
            © 2026 The Integrated Wellness Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
