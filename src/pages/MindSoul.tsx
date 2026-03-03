import { Link } from "react-router-dom";

import cardMind from "@/assets/card-mind.jpg";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionReveal from "@/components/SectionReveal";
import { Eye, Clock, Sparkles, Wand2, Moon } from "lucide-react";

const MindSoul = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
  const auraOpacity = useTransform(scrollYProgress, [0, 0.3], [0.4, 0.8]);

  return (
    <div
      className="min-h-screen bg-[#0F0506] text-white overflow-hidden"
      ref={scrollRef}
    >
      {/* 1. Ethereal Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ scale: heroScale }} className="absolute inset-0">
          <img
            src={cardMind}
            alt="Spiritual healing"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0F0506]/60 to-[#0F0506]" />
        </motion.div>

        {/* Moving Aura Effect */}
        <motion.div
          style={{ opacity: auraOpacity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-vibrant/20 blur-[120px] rounded-full mix-blend-screen animate-pulse"
        />

        <div className="relative z-10 text-center px-6">
          <SectionReveal direction="none">
            <span className="flex items-center justify-center gap-3 text-red-vibrant uppercase tracking-[0.5em] text-xs font-bold mb-6">
              <Moon size={14} /> The Unseen Journey
            </span>
            <h1 className="font-display text-7xl md:text-9xl font-light tracking-tighter">
              Mind <span className="italic font-serif text-white/80">&</span>{" "}
              Soul
            </h1>
          </SectionReveal>
        </div>
      </section>

      {/* 2. The Two Pillars (Glassmorphic Cards) */}
      <section className="relative py-32 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">
            {/* Face Reading Card */}
            <SectionReveal direction="right">
              <div className="group relative h-full p-12 lg:p-16 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl hover:bg-white/[0.06] transition-all duration-700">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition-opacity">
                  <Eye size={120} strokeWidth={0.5} />
                </div>

                <Eye
                  className="mb-8 text-red-vibrant"
                  size={48}
                  strokeWidth={1}
                />
                <h2 className="font-display text-5xl font-light mb-6 tracking-tight">
                  Face{" "}
                  <span className="italic font-serif text-red-vibrant">
                    Reading
                  </span>
                </h2>
                <p className="font-body text-lg text-white/60 leading-relaxed mb-10 max-w-md">
                  Discover the map of your destiny written in your features.
                  Every line and contour is a ledger of your soul's experiences
                  and future potential.
                </p>

                <Link
                  to="/book"
                  className="inline-flex items-center gap-4 px-10 py-4 bg-white text-maroon-deep text-xs font-bold uppercase tracking-widest hover:bg-red-vibrant hover:text-white transition-all rounded-full"
                >
                  Decode Your Features <Wand2 size={16} />
                </Link>
              </div>
            </SectionReveal>

            {/* Past Life Regression Card */}
            <SectionReveal direction="left" delay={0.2}>
              <div className="group relative h-full p-12 lg:p-16 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl hover:bg-white/[0.06] transition-all duration-700">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition-opacity">
                  <Clock size={120} strokeWidth={0.5} />
                </div>

                <Clock
                  className="mb-8 text-red-vibrant"
                  size={48}
                  strokeWidth={1}
                />
                <h2 className="font-display text-5xl font-light mb-6 tracking-tight">
                  Past Life{" "}
                  <span className="italic font-serif text-red-vibrant">
                    Regression
                  </span>
                </h2>
                <p className="font-body text-lg text-white/60 leading-relaxed mb-10 max-w-md">
                  Traverse the corridors of time to unlock ancestral memories.
                  Resolve karmic patterns and find clarity in your current
                  life's purpose.
                </p>

                <Link
                  to="/book"
                  className="inline-flex items-center gap-4 px-10 py-4 border border-white/20 text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-maroon-deep transition-all rounded-full"
                >
                  Explore the Past <Wand2 size={16} />
                </Link>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* 3. Immersive Quote Break */}
      <section className="py-40 relative">
        <div className="container mx-auto px-6 text-center relative z-10">
          <SectionReveal>
            <h2 className="font-display text-4xl md:text-6xl italic font-light leading-snug max-w-4xl mx-auto text-white/90">
              "The soul usually knows what to do to heal itself. The challenge
              is to <span className="text-red-vibrant">silence the mind</span>."
            </h2>
            <div className="mt-12 w-24 h-[1px] bg-gradient-to-r from-transparent via-red-vibrant to-transparent mx-auto" />
          </SectionReveal>
        </div>

        {/* Subtle background texture or diagram integration */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none"></div>
      </section>

      {/* 4. Final Transition CTA */}
      <section className="py-32 bg-gradient-to-b from-[#0F0506] to-maroon-deep">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto rounded-3xl p-12 md:p-20 text-center border border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent">
            <SectionReveal>
              <h2 className="font-display text-5xl md:text-7xl font-light mb-10">
                Begin Your <br />{" "}
                <span className="italic font-serif">Awakening</span>
              </h2>
              <Link
                to="/book"
                className="inline-block px-16 py-6 bg-red-vibrant text-white font-body text-sm uppercase tracking-[0.3em] hover:scale-105 hover:shadow-[0_0_30px_rgba(217,22,86,0.4)] transition-all duration-500 rounded-sm"
              >
                Book Your Discovery
              </Link>
            </SectionReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MindSoul;
