import { Link } from "react-router-dom";
import cardMind from "@/assets/card-mind.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionReveal from "@/components/SectionReveal";
import HeroCta from "@/components/HeroCta";
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
      className="min-h-screen bg-[#FDFCFB] text-maroon-deep overflow-hidden selection:bg-red-vibrant/30"
      ref={scrollRef}
    >
      {/* 1. Hero – same theme as homepage / Mental Wellness */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ scale: heroScale }} className="absolute inset-0">
          <img
            src={cardMind}
            alt="Spiritual healing"
            className="w-full h-full object-cover scale-105 img-warm"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-maroon-deep/30 via-maroon-deep/15 to-maroon-deep/50" />
          <div className="absolute inset-0 hero-grain" aria-hidden />
        </motion.div>

        <motion.div
          style={{ opacity: auraOpacity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-vibrant/20 blur-[120px] rounded-full mix-blend-screen animate-pulse pointer-events-none"
          aria-hidden
        />

        <div className="relative z-10 text-center px-6">
          <SectionReveal direction="none">
            <span className="flex items-center justify-center gap-3 text-red-vibrant uppercase tracking-[0.4em] text-xs font-bold mb-6">
              <Moon size={14} /> The Unseen Journey
            </span>
            <h1 className="font-display text-7xl md:text-9xl font-light tracking-tight text-white">
              Mind <span className="italic font-serif text-white/90">&</span>{" "}
              Soul
            </h1>
            <p className="mt-6 text-white/80 font-body max-w-md mx-auto text-sm">
              The unseen journey of inner exploration.
            </p>
            <HeroCta className="text-white [&_a]:rounded-xl [&_a]:border-white [&_a]:text-white [&_a:hover]:bg-white [&_a:hover]:text-maroon-deep" />
          </SectionReveal>
        </div>
      </section>

      {/* 2. The Two Pillars – theme-aligned cards */}
      <section className="section-py relative px-6 bg-[#FDFCFB] overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-sand/20 -skew-x-12 translate-x-1/2" />
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">
            {/* Face Reading Card */}
            <SectionReveal direction="right">
              <div className="group relative h-full p-12 lg:p-16 rounded-2xl bg-white/80 backdrop-blur-md border border-maroon-deep/5 hover:bg-maroon-deep hover:text-white hover:shadow-card transition-all duration-500">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition-opacity text-maroon-deep group-hover:text-white">
                  <Eye size={120} strokeWidth={0.5} />
                </div>

                <Eye
                  className="mb-8 text-red-vibrant group-hover:text-white transition-colors"
                  size={48}
                  strokeWidth={1}
                />
                <h2 className="font-display text-5xl font-light text-maroon-deep group-hover:text-white mb-6 tracking-tight">
                  Face{" "}
                  <span className="italic font-serif text-red-vibrant group-hover:text-white">
                    Reading
                  </span>
                </h2>
                <p className="font-body text-base text-muted-foreground group-hover:text-white/90 leading-relaxed mb-10 max-w-md">
                  Discover the map of your destiny written in your features.
                  Every line and contour is a ledger of your soul's experiences
                  and future potential.
                </p>

                <Link
                  to="/book"
                  className="inline-flex items-center gap-4 px-10 py-4 rounded-xl bg-maroon-deep text-white text-xs font-bold uppercase tracking-widest hover:bg-red-vibrant hover:text-white transition-all shadow-[0_4px_20px_rgba(0,0,0,0.15)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-vibrant focus-visible:ring-offset-2"
                >
                  Decode Your Features <Wand2 size={16} />
                </Link>
              </div>
            </SectionReveal>

            {/* Past Life Regression Card */}
            <SectionReveal direction="left" delay={0.2}>
              <div className="group relative h-full p-12 lg:p-16 rounded-2xl bg-white/80 backdrop-blur-md border border-maroon-deep/5 hover:bg-maroon-deep hover:text-white hover:shadow-card transition-all duration-500">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition-opacity text-maroon-deep group-hover:text-white">
                  <Clock size={120} strokeWidth={0.5} />
                </div>

                <Clock
                  className="mb-8 text-red-vibrant group-hover:text-white transition-colors"
                  size={48}
                  strokeWidth={1}
                />
                <h2 className="font-display text-5xl font-light text-maroon-deep group-hover:text-white mb-6 tracking-tight">
                  Past Life{" "}
                  <span className="italic font-serif text-red-vibrant group-hover:text-white">
                    Regression
                  </span>
                </h2>
                <p className="font-body text-base text-muted-foreground group-hover:text-white/90 leading-relaxed mb-10 max-w-md">
                  Traverse the corridors of time to unlock ancestral memories.
                  Resolve karmic patterns and find clarity in your current
                  life's purpose.
                </p>

                <Link
                  to="/book"
                  className="inline-flex items-center gap-4 px-10 py-4 rounded-xl border border-maroon-deep/30 text-maroon-deep text-xs font-bold uppercase tracking-widest hover:bg-maroon-deep hover:text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-vibrant focus-visible:ring-offset-2"
                >
                  Explore the Past <Wand2 size={16} />
                </Link>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* 3. Quote Break – maroon section with gradient */}
      <section
        className="section-py relative overflow-hidden"
        style={{
          background: "linear-gradient(to bottom, hsl(var(--maroon-deep)) 0%, hsl(350 55% 12%) 50%, hsl(350 50% 8%) 100%)",
        }}
      >
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/[0.04] -skew-x-12 translate-x-1/2" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <SectionReveal>
            <h2 className="font-display text-4xl md:text-6xl italic font-light leading-snug max-w-4xl mx-auto text-white">
              "The soul usually knows what to do to heal itself. The challenge
              is to <span className="text-red-vibrant">silence the mind</span>."
            </h2>
            <div className="mt-12 w-24 h-[1px] bg-red-vibrant mx-auto" />
          </SectionReveal>
        </div>
      </section>

      {/* 4. Final CTA – white section */}
      <section className="section-py bg-[#FDFCFB] overflow-hidden relative">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-sand/20 skew-x-12 -translate-x-1/2" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto rounded-2xl p-12 md:p-20 text-center border border-maroon-deep/10 bg-white/80 shadow-card">
            <SectionReveal>
              <h2 className="font-display text-5xl md:text-7xl font-light text-maroon-deep mb-10">
                Begin Your <br />{" "}
                <span className="italic font-serif text-red-vibrant">Awakening</span>
              </h2>
              <Link
                to="/book"
                className="inline-block px-16 py-6 rounded-xl bg-maroon-deep text-white font-body text-sm uppercase tracking-[0.3em] hover:bg-red-vibrant hover:text-white transition-all duration-500 shadow-[0_4px_24px_rgba(0,0,0,0.15)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-vibrant focus-visible:ring-offset-2"
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
