import cardMentalWellness from "@/assets/card-mental-wellness.jpg";
import mindBody from "@/assets/mind-body.jpg";
import cardBreathing from "@/assets/card-breathing.jpg";

import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionReveal from "@/components/SectionReveal";
import HeroCta from "@/components/HeroCta";
import {
  Activity,
  Heart,
  Brain,
  Sparkles,
  Compass,
  Leaf,
  ArrowRight,
} from "lucide-react";

// Updated services with a "focus" color for each icon
const wellnessServices = [
  {
    icon: Brain,
    title: "Cognitive Harmony",
    desc: "Reframing thought patterns to find mental clarity and peace.",
  },
  {
    icon: Sparkles,
    title: "Emotional Release",
    desc: "Safe spaces to process and heal from deep-seated traumas.",
  },
  {
    icon: Compass,
    title: "Guided Self-Discovery",
    desc: "Navigating your internal landscape to find your true purpose.",
  },
  {
    icon: Leaf,
    title: "Stress Resilience",
    desc: "Holistic techniques to ground the mind and soothe the nervous system.",
  },
];

const MentalWellnessService = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const yTranslate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div className="min-h-screen bg-[#FDFCFB]" ref={containerRef}>
      {/* 1. Impactful Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: yTranslate }} className="absolute inset-0 z-0">
          <img
            src={cardMentalWellness}
            alt=""
            className="w-full h-full object-cover scale-105 img-warm"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-maroon-deep/30 via-maroon-deep/15 to-maroon-deep/50" />
          <div className="absolute inset-0 hero-grain" aria-hidden />
        </motion.div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <SectionReveal direction="none">
            <span className="text-red-vibrant uppercase tracking-[0.5em] text-xs font-bold mb-4 block">
              The Mindful Path
            </span>
            <h1 className="font-display text-6xl md:text-9xl font-light text-white tracking-tighter leading-none">
              Mental <br /> <span className="italic font-serif">Wellness</span>
            </h1>
            <p className="mt-6 text-white/80 font-body max-w-md mx-auto text-sm">
              Where clinical precision meets inner calm.
            </p>
            <HeroCta className="text-white [&_a]:rounded-xl [&_a]:border-white [&_a]:text-white [&_a:hover]:bg-white [&_a:hover]:text-maroon-deep" />
          </SectionReveal>
        </div>
      </section>

      {/* 2. Floating Services Grid */}
      <section className="section-py relative z-20 -mt-24 bg-[#FDFCFB] overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-sand/20 -skew-x-12 translate-x-1/2" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {wellnessServices.map((t, i) => (
              <SectionReveal key={t.title} delay={i * 0.1}>
                <div className="group h-full bg-white/80 backdrop-blur-md border border-maroon-deep/5 p-10 hover:bg-maroon-deep hover:text-white hover:shadow-card transition-all duration-500 rounded-2xl">
                  <t.icon
                    className="mb-8 text-red-vibrant group-hover:text-white transition-colors"
                    size={32}
                    strokeWidth={1.5}
                  />
                  <h3 className="font-display text-2xl mb-4 tracking-tight">
                    {t.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed opacity-70 group-hover:opacity-100">
                    {t.desc}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Mind-Body Integration – maroon section with gradient */}
      <section
        className="section-py overflow-hidden text-white relative"
        style={{
          background: "linear-gradient(to bottom, hsl(var(--maroon-deep)) 0%, hsl(350 55% 12%) 50%, hsl(350 50% 8%) 100%)",
        }}
      >
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/[0.04] -skew-x-12 translate-x-1/2" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
            <div className="w-full lg:w-1/2 relative max-w-lg lg:max-w-none">
              <SectionReveal direction="right">
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-card aspect-[4/5] max-h-[420px] w-full ring-1 ring-white/10">
                  <img
                    src={mindBody}
                    alt="Integrating mind and body"
                    className="w-full h-full object-cover object-center img-warm"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-full h-full bg-white/5 rounded-2xl -z-10" />
              </SectionReveal>
            </div>

            <div className="w-full lg:w-1/2 lg:pt-0">
              <SectionReveal delay={0.2}>
                <h2 className="font-display text-4xl md:text-5xl font-light text-white">
                  Integrating <br />
                  <span className="italic font-serif text-red-vibrant">Mind & Body</span>
                </h2>
                <div className="w-12 h-0.5 bg-red-vibrant mt-4 mb-6" />
                <p className="text-base text-white/70 mb-10 leading-relaxed font-body">
                  True wellness isn't just the absence of stress—it's the
                  presence of harmony between your neural pathways and your
                  physical sensations.
                </p>

                <div className="grid grid-cols-2 gap-y-8 gap-x-4 mb-12">
                  {[
                    { icon: Brain, label: "Neural Retraining" },
                    { icon: Heart, label: "Emotional Flow" },
                    { icon: Leaf, label: "Stress Release" },
                    { icon: Sparkles, label: "Deep Awareness" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-4 group"
                    >
                      <div className="p-3 bg-white/10 group-hover:bg-red-vibrant transition-colors rounded-full">
                        <item.icon
                          size={18}
                          className="text-white"
                        />
                      </div>
                      <span className="text-xs uppercase tracking-widest font-bold text-white">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/book"
                  className="inline-flex items-center gap-4 px-10 py-4 rounded-xl bg-red-vibrant text-white text-xs uppercase tracking-widest hover:bg-white hover:text-maroon-deep transition-all shadow-[0_4px_20px_rgba(0,0,0,0.2)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-maroon-deep"
                >
                  Book a Consultation <ArrowRight size={16} />
                </Link>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Conscious Breathing – white section */}
      <section className="section-py bg-[#FDFCFB] overflow-hidden relative">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-sand/20 skew-x-12 -translate-x-1/2" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row-reverse items-start gap-12 lg:gap-16">
            <div className="w-full lg:w-1/2 relative max-w-lg lg:max-w-none">
              <SectionReveal direction="left">
                <div className="relative rounded-2xl overflow-hidden shadow-card aspect-[4/5] max-h-[420px] w-full">
                  <img
                    src={cardBreathing}
                    alt="Breathing"
                    className="w-full h-full object-cover object-center img-warm"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 ring-1 ring-maroon-deep/10 -m-4 rounded-2xl pointer-events-none" />
                </div>
              </SectionReveal>
            </div>

            <div className="w-full lg:w-1/2 text-left lg:pt-0">
              <SectionReveal delay={0.3}>
                <span className="text-red-vibrant font-bold text-xs uppercase tracking-[0.4em] mb-4 block">
                  Bio-Hacking Calm
                </span>
                <h2 className="font-display text-4xl md:text-5xl font-light text-maroon-deep">
                  Conscious <br />
                  <span className="italic font-serif">Breathing</span>
                </h2>
                <div className="w-12 h-0.5 bg-red-vibrant mt-4 mb-6" />
                <p className="text-base text-muted-foreground mb-10 leading-relaxed font-body">
                  Our techniques combine ancient pranayama with modern polyvagal
                  theory to reset your nervous system in minutes.
                </p>
                <Link
                  to="/breathing-techniques"
                  className="group inline-flex items-center gap-4 px-6 py-3 rounded-xl border border-maroon-deep/30 text-maroon-deep text-sm uppercase tracking-widest font-bold hover:bg-maroon-deep hover:text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-vibrant focus-visible:ring-offset-2"
                >
                  Explore the techniques
                  <span className="w-12 h-[1px] bg-maroon-deep group-hover:w-20 group-hover:bg-red-vibrant transition-all duration-500" />
                </Link>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MentalWellnessService;
