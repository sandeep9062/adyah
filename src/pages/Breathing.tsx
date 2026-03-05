import React from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionReveal from "@/components/SectionReveal";
import HeroCta from "@/components/HeroCta";
import { Wind, Infinity, Shield, Zap } from "lucide-react";
import BreathPacer from "@/components/BreathPacer";
import breathingHero from "@/assets/card-breathing.jpg";

// Breathing/conscious expansion – from Unsplash (free to use). Replace with your own asset if preferred.
const CONSCIOUS_EXPANSION_IMAGE =
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=720&q=80";

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
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <div className="min-h-screen bg-[#FDFCFB] selection:bg-red-vibrant/30">
      {/* Hero Section - same theme as homepage */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
          <img
            src={breathingHero}
            alt="Breathing practice"
            className="w-full h-full object-cover scale-105 img-warm"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-maroon-deep/30 via-maroon-deep/15 to-maroon-deep/50" />
          <div className="absolute inset-0 hero-grain" aria-hidden />
        </motion.div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-vibrant uppercase tracking-[0.4em] text-xs font-bold mb-4 block"
          >
            Practice Mindfulness
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-6xl md:text-8xl lg:text-9xl font-light text-white tracking-tight leading-tight mb-4"
          >
            The Art <br /> of <span className="italic font-serif">Breath</span>
          </motion.h1>
          <p className="text-white/80 font-body max-w-md mx-auto text-sm mb-6">
            Master your internal landscape through breath.
          </p>
          <HeroCta className="text-white [&_a]:rounded-xl [&_a]:border-white [&_a]:text-white [&_a:hover]:bg-white [&_a:hover]:text-maroon-deep" />
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-12 flex flex-col items-center gap-4"
          >
            <span className="text-[10px] uppercase tracking-widest text-white/50">
              Explore
            </span>
            <div className="w-px h-12 bg-gradient-to-b from-white/70 via-white/40 to-transparent shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
          </motion.div>
        </div>
      </section>

      {/* Grid of Techniques - theme-aligned cards */}
      <section className="section-py bg-[#FDFCFB] relative z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-sand/20 -skew-x-12 translate-x-1/2" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-light text-maroon-deep">
              Master your internal <br /> landscape.
            </h2>
            <div className="w-12 h-0.5 bg-red-vibrant mt-4 mb-6" />
            <p className="text-muted-foreground font-body leading-relaxed text-base">
              Explore our curated pillars of respiratory mastery, designed to
              shift your state from stress to stillness in minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {breathingTechniques.map((t, i) => (
              <SectionReveal key={t.title} delay={i * 0.1}>
                <div className="group h-full bg-white/80 backdrop-blur-md border border-maroon-deep/5 p-10 rounded-2xl transition-all duration-500 hover:bg-maroon-deep hover:text-white hover:shadow-card">
                  <t.icon
                    className="mb-6 text-red-vibrant group-hover:text-white transition-colors"
                    size={32}
                    strokeWidth={1.5}
                  />
                  <h3 className="font-display text-2xl mb-4 text-maroon-deep font-light tracking-tight group-hover:text-white">
                    {t.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed group-hover:text-white/90">
                    {t.desc}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Visual Section - Conscious Expansion (aligned like Mental Wellness) */}
      <section className="section-py bg-[#FDFCFB] overflow-hidden relative">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-sand/20 skew-x-12 -translate-x-1/2" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
            <div className="w-full lg:w-1/2 relative max-w-lg lg:max-w-none">
              <SectionReveal direction="right">
                <div className="relative w-full">
                  <div className="relative z-10 rounded-2xl overflow-hidden shadow-card aspect-[4/5] max-h-[420px] w-full ring-1 ring-maroon-deep/10">
                    <img
                      src={CONSCIOUS_EXPANSION_IMAGE}
                      alt="Person practicing conscious breathing and mindful expansion"
                      className="w-full h-full object-cover object-center img-warm"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep/30 via-transparent to-transparent pointer-events-none" />
                  </div>
                  <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-red-vibrant text-white p-5 sm:p-6 rounded-full shadow-card z-20">
                    <p className="text-[10px] uppercase tracking-tighter leading-none">
                      The Science
                    </p>
                    <p className="text-lg sm:text-xl font-display font-light">CO₂ / O₂</p>
                  </div>
                  <div className="absolute -bottom-6 -left-6 w-full h-full bg-sand rounded-2xl -z-10" />
                </div>
              </SectionReveal>
            </div>

            <div className="w-full lg:w-1/2 lg:pt-0">
              <SectionReveal delay={0.2}>
                <h2 className="font-display text-4xl sm:text-5xl font-light text-maroon-deep mb-6 leading-tight">
                  Conscious <br />
                  <span className="italic font-serif">Expansion</span>
                </h2>
                <p className="font-body text-muted-foreground leading-relaxed mb-10 text-base">
                  Breathing is the only autonomic function we can consciously
                  control. By shifting from shallow chest breathing to deep
                  diaphragmatic patterns, we lower cortisol and restore
                  equilibrium.
                </p>

                <div className="space-y-8">
                  {[
                    {
                      step: "01",
                      text: "Inhale: Expand the lower ribs three-dimensionally.",
                    },
                    {
                      step: "02",
                      text: "Pause: A moment of absolute stillness and presence.",
                    },
                    {
                      step: "03",
                      text: "Exhale: Release tension slowly through the lips.",
                    },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ x: 10 }}
                      className="flex items-start gap-6 group"
                    >
                      <span className="font-display text-xl text-red-vibrant/60 group-hover:text-red-vibrant transition-colors">
                        {item.step}
                      </span>
                      <p className="text-sm text-muted-foreground font-medium pt-1 tracking-wide">
                        {item.text}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>
      <BreathPacer />
      {/* CTA Section - matches homepage theme */}
      <section className="section-py bg-[#FDFCFB] border-t border-maroon-deep/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-sand/20 skew-x-12 -translate-x-1/2" />
        <div className="container mx-auto px-6 relative z-10">
          <SectionReveal>
            <div className="max-w-4xl mx-auto bg-maroon-deep rounded-[3rem] p-16 text-center overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-vibrant/10 rounded-full -mr-20 -mt-20 blur-3xl" />

              <h2 className="relative z-10 font-display text-4xl md:text-5xl font-light text-white mb-10">
                Ready to find your flow?
              </h2>
              <Link
                to="/book"
                className="relative z-10 inline-block px-12 py-5 rounded-xl bg-white text-maroon-deep font-body text-xs uppercase tracking-[0.2em] hover:bg-red-vibrant hover:text-white transition-all duration-500 shadow-[0_4px_24px_rgba(0,0,0,0.15)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-vibrant focus-visible:ring-offset-2 focus-visible:ring-offset-maroon-deep"
              >
                Join a Breathing Workshop
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
};

export default BreathingPage;
