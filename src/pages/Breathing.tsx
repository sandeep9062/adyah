import React from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionReveal from "@/components/SectionReveal";
import { Wind, Infinity, Shield, Zap, ChevronDown } from "lucide-react";
import BreathPacer from "@/components/BreathPacer";
// Assets (Assuming these paths remain the same)
import breathingHero from "@/assets/card-breathing.jpg";
import diaphragmImage from "@/assets/breathing.jpg";

const breathingTechniques = [
  {
    icon: Wind,
    title: "Diaphragmatic Flow",
    desc: "Optimizing oxygen intake and core stability through deep abdominal expansion.",
    color: "bg-blue-50/50",
  },
  {
    icon: Infinity,
    title: "Coherent Rhythms",
    desc: "Balancing the nervous system by aligning breath cycles with heart rate variability.",
    color: "bg-purple-50/50",
  },
  {
    icon: Zap,
    title: "Pranic Awakening",
    desc: "Higher-energy techniques to clear mental fog and revitalize the subtle body.",
    color: "bg-orange-50/50",
  },
  {
    icon: Shield,
    title: "Vagus Nerve Calm",
    desc: "Controlled exhalations designed to trigger the body's natural relaxation response.",
    color: "bg-green-50/50",
  },
];

const BreathingPage = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <div className="min-h-screen bg-[#FDFCF9] selection:bg-accent/20">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
          <img
            src={breathingHero}
            alt="Meditation"
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        </motion.div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-white/80 uppercase tracking-[0.4em] text-xs mb-4 block"
          >
            Practice Mindfulness
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-6xl md:text-8xl lg:text-9xl font-extralight text-white mb-8"
          >
            The Art <br /> of <span className="italic">Breath</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white flex flex-col items-center gap-2"
          >
            <span className="text-[10px] uppercase tracking-widest opacity-60">
              Scroll to Explore
            </span>
            <ChevronDown className="animate-bounce opacity-60" size={20} />
          </motion.div>
        </div>
      </section>

      {/* Grid of Techniques */}
      <section className="py-32 relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-20">
            <h2 className="font-display text-4xl md:text-5xl text-gray-900 mb-6 font-light">
              Master your internal <br /> landscape.
            </h2>
            <p className="text-gray-500 font-body leading-relaxed">
              Explore our curated pillars of respiratory mastery, designed to
              shift your state from stress to stillness in minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {breathingTechniques.map((t, i) => (
              <SectionReveal key={t.title} delay={i * 0.1}>
                <div
                  className={`group relative p-10 h-full border border-black/5 rounded-2xl transition-all duration-500 hover:shadow-2xl hover:shadow-accent/5 hover:-translate-y-2 ${t.color}`}
                >
                  <div className="mb-8 relative">
                    <div className="absolute -inset-2 bg-white rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    {React.createElement(t.icon, {
                      className:
                        "relative z-10 text-accent transition-transform duration-500 group-hover:scale-110",
                      size: 32,
                      strokeWidth: 1.5,
                    })}
                  </div>
                  <h3 className="font-display text-2xl mb-4 text-gray-900 font-light">
                    {t.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed text-gray-600">
                    {t.desc}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Visual Section - Editorial Style */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 relative">
              <SectionReveal>
                <div className="relative rounded-3xl overflow-hidden bg-[#F3F0EC] p-12 aspect-square md:aspect-video flex items-center justify-center">
                  <img
                    src={diaphragmImage}
                    alt="Diaphragm movement"
                    className="max-h-full w-auto object-contain mix-blend-multiply opacity-80"
                  />
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 bg-accent text-white p-8 rounded-full hidden md:block">
                  <p className="text-xs uppercase tracking-tighter leading-none">
                    The Science
                  </p>
                  <p className="text-2xl font-display font-light">CO₂ / O₂</p>
                </div>
              </SectionReveal>
            </div>

            <div className="lg:col-span-5">
              <SectionReveal delay={0.2}>
                <h2 className="font-display text-5xl font-light text-gray-900 mb-8 leading-tight">
                  Conscious <br />
                  <span className="italic font-serif">Expansion</span>
                </h2>
                <p className="font-body text-gray-600 leading-relaxed mb-10 text-lg">
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
                      <span className="font-display text-xl text-accent/40 group-hover:text-accent transition-colors">
                        {item.step}
                      </span>
                      <p className="text-sm text-gray-700 font-medium pt-1 tracking-wide">
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
      {/* CTA Section */}
      <section className="py-32 bg-[#FDFCF9]">
        <div className="container mx-auto px-6">
          <SectionReveal>
            <div className="max-w-4xl mx-auto bg-accent rounded-[3rem] p-16 text-center overflow-hidden relative">
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -mr-20 -mt-20 blur-3xl" />

              <h2 className="relative z-10 font-display text-4xl md:text-5xl font-light text-white mb-10">
                Ready to find your flow?
              </h2>
              <Link
                to="/book"
                className="relative z-10 inline-block px-12 py-5 bg-white text-white font-body text-xs uppercase tracking-[0.2em] rounded-full hover:bg-white hover:text-gray-900 transition-all duration-500 shadow-xl"
              >
                Join a Breathing Workshop
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Simple Footer/Copyright for polish */}
      <footer className="py-12 border-t border-black/5 text-center">
        <p className="text-[10px] uppercase tracking-widest text-gray-400">
          © 2024 Art of Breath — Rituals for Living
        </p>
      </footer>
    </div>
  );
};

export default BreathingPage;
