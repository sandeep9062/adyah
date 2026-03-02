import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionReveal from "@/components/SectionReveal";
import cardMind from "@/assets/card-mind.jpg";
import { Eye, Clock, Sparkles } from "lucide-react";

const MindSoul = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <img src={cardMind} alt="Spiritual healing" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero opacity-70" />
        <div className="relative z-10 container mx-auto px-6 pb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-5xl md:text-7xl font-light text-primary-foreground"
          >
            Mind & Soul
          </motion.h1>
        </div>
      </section>

      {/* Two Pillars */}
      <section className="py-24 bg-warm-cream">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {/* Face Reading */}
            <SectionReveal>
              <div className="text-center md:text-left">
                <Eye className="mb-6 text-accent mx-auto md:mx-0" size={48} strokeWidth={1} />
                <h2 className="font-display text-4xl font-light text-foreground mb-4">Face Reading</h2>
                <p className="font-body text-muted-foreground leading-relaxed mb-6">
                  Your face tells the story of your life — past experiences, present health, and future potential. Our expert practitioners decode these patterns to reveal deep personal insights.
                </p>
                <Link
                  to="/book"
                  className="inline-block px-8 py-3 bg-accent text-accent-foreground font-body text-sm uppercase tracking-[0.15em] hover:bg-red-glow transition-colors"
                >
                  Book Session
                </Link>
              </div>
            </SectionReveal>

            {/* Past Life Regression */}
            <SectionReveal delay={0.2}>
              <div className="text-center md:text-left">
                <Clock className="mb-6 text-accent mx-auto md:mx-0" size={48} strokeWidth={1} />
                <h2 className="font-display text-4xl font-light text-foreground mb-4">Past Life Regression</h2>
                <p className="font-body text-muted-foreground leading-relaxed mb-6">
                  Journey through layers of memory and time to uncover patterns that shape your present. A guided, safe exploration of your soul's deeper narrative.
                </p>
                <Link
                  to="/book"
                  className="inline-block px-8 py-3 bg-accent text-accent-foreground font-body text-sm uppercase tracking-[0.15em] hover:bg-red-glow transition-colors"
                >
                  Book Session
                </Link>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Visual Break */}
      <section className="h-[50vh] relative overflow-hidden">
        <img src={cardMind} alt="Ethereal portrait" className="absolute inset-0 w-full h-full object-cover scale-110" />
        <div className="absolute inset-0 bg-maroon-deep/60" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <SectionReveal>
            <div className="text-center px-6">
              <Sparkles className="mx-auto mb-6 text-red-vibrant" size={40} strokeWidth={1} />
              <p className="font-display text-3xl md:text-4xl italic text-primary-foreground font-light max-w-2xl">
                "The eyes are the windows to the soul"
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-maroon text-center">
        <SectionReveal>
          <h2 className="font-display text-4xl md:text-5xl font-light text-primary-foreground mb-8">
            Unlock Your Inner Wisdom
          </h2>
          <Link
            to="/book"
            className="inline-block px-12 py-4 bg-accent text-accent-foreground font-body text-sm uppercase tracking-[0.2em] hover:bg-red-glow transition-colors"
          >
            Begin Exploration
          </Link>
        </SectionReveal>
      </section>
    </div>
  );
};

export default MindSoul;
