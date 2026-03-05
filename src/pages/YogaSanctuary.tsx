import React from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionReveal from "@/components/SectionReveal";
import HeroCta from "@/components/HeroCta";
import { Sun, Wind, Flame } from "lucide-react";

// Assets
import cardYoga from "@/assets/card-yoga.jpg";
import yogaMeditation from "@/assets/yoga-meditation.jpg";

const yogaTypes = [
  {
    icon: Sun,
    title: "Hatha Yoga",
    desc: "Build strength, flexibility, and inner balance through mindful postures and breathwork.",
  },
  {
    icon: Wind,
    title: "Sahaja Yoga",
    desc: "Awaken your inner energy through meditation and self-realization for lasting inner peace.",
  },
  {
    icon: Flame,
    title: "Breath & Flow",
    desc: "Dynamic sequences connecting breath to movement for vitality and presence.",
  },
];

const YogaSanctuary = () => {
  const { scrollY } = useScroll();
  const yRange = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <div className="min-h-screen bg-[#FDFCFB] selection:bg-red-vibrant/30">
      {/* Immersive Hero - same theme as homepage */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: yRange }} className="absolute inset-0">
          <img
            src={cardYoga}
            alt="Yoga sanctuary"
            className="w-full h-full object-cover scale-105 img-warm"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-maroon-deep/30 via-maroon-deep/15 to-maroon-deep/50" />
          <div className="absolute inset-0 hero-grain" aria-hidden />
        </motion.div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-red-vibrant uppercase tracking-[0.4em] text-xs font-bold mb-4 block">
              Sacred Space for Practice
            </span>
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-light text-white tracking-tight leading-tight mb-4">
              The Yoga <span className="italic font-serif">Sanctuary</span>
            </h1>
            <p className="text-white/80 font-body max-w-md mx-auto text-sm mb-6">
              Movement as living meditation.
            </p>
            <HeroCta className="text-white [&_a]:rounded-xl [&_a]:border-white [&_a]:text-white [&_a:hover]:bg-white [&_a:hover]:text-maroon-deep" />
          </motion.div>

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

      {/* Philosophy / Intro */}
      <section className="section-py bg-[#FDFCFB] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-sand/20 -skew-x-12 translate-x-1/2" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <SectionReveal>
              <h2 className="font-display text-4xl md:text-5xl font-light text-maroon-deep text-center">
                Movement as a <br />
                <span className="italic font-serif">Living Meditation.</span>
              </h2>
              <div className="w-12 h-0.5 bg-red-vibrant mt-4 mb-6 mx-auto" />
              <p className="font-body text-muted-foreground text-base leading-relaxed">
                Whether you seek the heat of a dynamic flow or the cooling
                silence of Sahaja meditation, our sanctuary provides the space
                to reconnect with your most authentic self.
              </p>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Yoga Types Grid - theme-aligned cards */}
      <section className="section-py bg-[#FDFCFB] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-sand/20 -skew-x-12 translate-x-1/2" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {yogaTypes.map((type, i) => (
              <SectionReveal key={type.title} delay={i * 0.1}>
                <div className="group h-full bg-white/80 backdrop-blur-md border border-maroon-deep/5 p-10 rounded-2xl transition-all duration-500 hover:bg-maroon-deep hover:text-white hover:shadow-card">
                  <type.icon
                    className="mb-6 text-red-vibrant group-hover:text-white transition-colors"
                    size={32}
                    strokeWidth={1.5}
                  />
                  <h3 className="font-display text-2xl mb-4 text-maroon-deep font-light tracking-tight group-hover:text-white">
                    {type.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed group-hover:text-white/90">
                    {type.desc}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Overlapping Meditation Section */}
      <section className="section-py bg-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-sand/20 skew-x-12 -translate-x-1/2" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="w-full lg:w-1/2 relative">
              <SectionReveal>
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-card translate-x-4 lg:translate-x-8">
                  <img
                    src={yogaMeditation}
                    alt="Collective Meditation"
                    className="w-full h-[500px] object-cover img-warm"
                    loading="lazy"
                  />
                </div>
                <div className="absolute top-10 -left-10 w-full h-full bg-maroon-deep rounded-2xl -z-10" />
              </SectionReveal>
            </div>

            <div className="w-full lg:w-1/2">
              <SectionReveal delay={0.2}>
                <span className="text-red-vibrant font-bold text-xs uppercase tracking-[0.3em] mb-4 block">
                  The Meditation Circle
                </span>
                <h2 className="font-display text-5xl md:text-6xl font-light text-maroon-deep mb-8 leading-[1.1]">
                  Find Your <br />
                  <span className="italic font-serif">Inner Stillness</span>
                </h2>
                <p className="font-body text-muted-foreground leading-relaxed mb-10 text-base">
                  Practice is more than just movement; it is a homecoming. Join
                  our community sessions where the collective silence creates a
                  resonance far deeper than practicing alone.
                </p>
                <Link
                  to="/book"
                  className="group relative inline-flex items-center gap-4 px-10 py-4 rounded-xl bg-maroon-deep text-white overflow-hidden transition-all hover:pr-12 shadow-[0_4px_20px_rgba(0,0,0,0.15)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-vibrant focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  <span className="relative z-10 text-xs uppercase tracking-widest">
                    Join a Session
                  </span>
                  <div className="absolute inset-0 bg-red-vibrant translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </Link>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - matches homepage theme */}
      <section className="section-py bg-[#FDFCFB] text-center border-t border-maroon-deep/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-sand/20 skew-x-12 -translate-x-1/2" />
        <div className="container mx-auto px-6 relative z-10">
          <SectionReveal>
            <h2 className="font-display text-5xl md:text-7xl font-light text-maroon-deep mb-12">
              Step Onto <span className="italic font-serif">the Mat</span>
            </h2>
            <Link
              to="/book"
              className="inline-block px-16 py-6 rounded-xl bg-transparent border border-maroon-deep/30 text-maroon-deep font-body text-xs uppercase tracking-[0.3em] hover:bg-maroon-deep hover:text-white transition-all duration-500 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-vibrant focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Reserve Your Place
            </Link>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
};

export default YogaSanctuary;
