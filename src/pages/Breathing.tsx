import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionReveal from "@/components/SectionReveal";
import { Wind, Infinity, Shield, Zap } from "lucide-react";
import breathingHero from "@/assets/card-breathing.jpg";
import diaphragmImage from "@/assets/breathing.jpg";
const breathingTechniques = [
  {
    icon: Wind,
    title: "Diaphragmatic Flow",
    desc: "Optimizing oxygen intake and core stability through deep abdominal expansion.",
  },
  {
    icon: Infinity,
    title: "Coherent Rhythms",
    desc: "Balancing the nervous system by aligning breath cycles with heart rate variability.",
  },
  {
    icon: Zap,
    title: "Pranic Awakening",
    desc: "Higher-energy techniques to clear mental fog and revitalize the subtle body.",
  },
  {
    icon: Shield,
    title: "Vagus Nerve Calm",
    desc: "Controlled exhalations designed to trigger the body's natural relaxation response.",
  },
];

const BreathingPage = () => {
  return (
    <div className="min-h-screen text-black pt-[70px] bg-warm-cream">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <img
          src={breathingHero}
          alt="Meditation and breathing"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 overlay-dark" />
        <div className="relative z-10 container mx-auto px-6 pb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-5xl md:text-7xl font-light text-primary-foreground"
          >
            The Art of Breath
          </motion.h1>
        </div>
      </section>

      {/* Grid of Techniques */}
      <section className="py-24 bg-warm-cream">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {breathingTechniques.map((t, i) => (
              <SectionReveal key={t.title} delay={i * 0.1}>
                <div className="text-center p-8">
                  {React.createElement(t.icon, {
                    className: "mx-auto mb-6 text-accent",
                    size: 40,
                    strokeWidth: 1.2,
                  })}
                  <h3 className="font-display text-2xl mb-3 text-foreground">
                    {t.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    {t.desc}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Visual Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
        <div className="bg-maroon-deep flex items-center justify-center p-12">
          <SectionReveal>
            <img
              src={diaphragmImage}
              alt="Diaphragm movement during breathing"
              className="max-h-[500px] w-auto object-contain"
            />
          </SectionReveal>
        </div>
        <div className="bg-sand flex items-center p-12 md:p-20">
          <SectionReveal delay={0.2}>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-6">
              Conscious Expansion
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Breathing is the only autonomic function we can consciously
              control. By shifting from shallow chest breathing to deep
              diaphragmatic patterns, we communicate directly with the brain to
              lower cortisol and restore emotional equilibrium.
            </p>
            <div className="space-y-4 text-foreground">
              <div className="flex items-center gap-4 border-b border-foreground/10 pb-4">
                <span className="text-accent font-display text-2xl">01</span>
                <p className="text-sm">
                  Inhale: Expand the lower ribs three-dimensionally.
                </p>
              </div>
              <div className="flex items-center gap-4 border-b border-foreground/10 pb-4">
                <span className="text-accent font-display text-2xl">02</span>
                <p className="text-sm">
                  Pause: A moment of absolute stillness and presence.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-accent font-display text-2xl">03</span>
                <p className="text-sm">
                  Exhale: Release tension slowly through the lips.
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-warm-cream">
        <div className="container mx-auto px-6 text-center">
          <SectionReveal>
            <h2 className="font-display text-4xl font-light text-foreground mb-6">
              Ready to find your flow?
            </h2>
            <Link
              to="/book"
              className="inline-block px-8 py-3 bg-accent text-accent-foreground font-body text-sm uppercase tracking-[0.15em] hover:bg-red-glow transition-colors"
            >
              Join a Breathing Workshop
            </Link>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
};

export default BreathingPage;
