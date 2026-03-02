import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionReveal from "@/components/SectionReveal";
import cardYoga from "@/assets/card-yoga.jpg";
import yogaMeditation from "@/assets/yoga-meditation.jpg";
import { Sun, Wind, Flame } from "lucide-react";

const YogaSanctuary = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative h-[80vh] flex items-end overflow-hidden">
        <img src={cardYoga} alt="Yoga silhouette" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 overlay-maroon opacity-60" />
        <div className="relative z-10 container mx-auto px-6 pb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-5xl md:text-7xl font-light text-primary-foreground"
          >
            The Yoga Sanctuary
          </motion.h1>
        </div>
      </section>

      {/* Yoga Types */}
      <section className="py-24 bg-warm-cream">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <SectionReveal>
              <div className="text-center">
                <Sun className="mx-auto mb-6 text-accent" size={44} strokeWidth={1} />
                <h3 className="font-display text-3xl mb-4 text-foreground">Hatha Yoga</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  Build strength, flexibility, and inner balance through mindful postures and breathwork.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.15}>
              <div className="text-center">
                <Wind className="mx-auto mb-6 text-accent" size={44} strokeWidth={1} />
                <h3 className="font-display text-3xl mb-4 text-foreground">Sahaja Yoga</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  Awaken your inner energy through meditation and self-realization for lasting inner peace.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.3}>
              <div className="text-center">
                <Flame className="mx-auto mb-6 text-accent" size={44} strokeWidth={1} />
                <h3 className="font-display text-3xl mb-4 text-foreground">Breath & Flow</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  Dynamic sequences connecting breath to movement for vitality and presence.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Meditation Circle */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
        <div className="relative overflow-hidden">
          <img src={yogaMeditation} alt="Meditation circle" className="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div className="bg-maroon-deep flex items-center p-12 md:p-20">
          <SectionReveal>
            <h2 className="font-display text-4xl md:text-5xl font-light text-primary-foreground mb-6">
              Find Your Circle
            </h2>
            <p className="font-body text-primary-foreground/70 leading-relaxed mb-8">
              Join our community meditation sessions. In the collective energy of practice, discover a profound stillness that transforms your daily life.
            </p>
            <Link
              to="/book"
              className="inline-block px-8 py-3 bg-accent text-accent-foreground font-body text-sm uppercase tracking-[0.15em] hover:bg-red-glow transition-colors"
            >
              Join a Session
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-sand text-center">
        <SectionReveal>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-8">
            Step Onto the Mat
          </h2>
          <Link
            to="/book"
            className="inline-block px-12 py-4 bg-accent text-accent-foreground font-body text-sm uppercase tracking-[0.2em] hover:bg-red-glow transition-colors"
          >
            Book a Class
          </Link>
        </SectionReveal>
      </section>
    </div>
  );
};

export default YogaSanctuary;
