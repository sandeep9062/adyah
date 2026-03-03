import cardMentalWellness from "@/assets/card-mental-wellness.jpg";
import mindBody from "@/assets/mind-body.jpg";
import cardBreathing from "@/assets/card-breathing.jpg";

import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionReveal from "@/components/SectionReveal";
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
            alt="Mental wellness"
            className="w-full h-full object-cover brightness-75 scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep/80 via-transparent to-transparent" />
        </motion.div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <SectionReveal direction="none">
            <span className="text-red-vibrant uppercase tracking-[0.5em] text-xs font-bold mb-4 block">
              The Mindful Path
            </span>
            <h1 className="font-display text-6xl md:text-9xl font-light text-white tracking-tighter leading-none">
              Mental <br /> <span className="italic font-serif">Wellness</span>
            </h1>
          </SectionReveal>
        </div>
      </section>

      {/* 2. Floating Services Grid */}
      <section className="relative z-20 -mt-24 pb-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {wellnessServices.map((t, i) => (
              <SectionReveal key={t.title} delay={i * 0.1}>
                <div className="group h-full bg-white/80 backdrop-blur-md border border-maroon-deep/5 p-10 hover:bg-maroon-deep hover:text-white transition-all duration-500 rounded-sm">
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

      {/* 3. Mind-Body Integration (Asymmetric Layout) */}
      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="w-full lg:w-1/2 relative">
              <SectionReveal direction="right">
                <div className="relative z-10 rounded-sm overflow-hidden shadow-2xl">
                  <img
                    src={mindBody}
                    alt="Mind Body"
                    className="w-full h-auto"
                  />
                </div>
                {/* Decorative background box */}
                <div className="absolute -bottom-10 -left-10 w-full h-full bg-sand -z-10" />
              </SectionReveal>
            </div>

            <div className="w-full lg:w-1/2">
              <SectionReveal delay={0.2}>
                <h2 className="font-display text-5xl font-light text-maroon-deep mb-8">
                  Integrating <br />
                  <span className="italic font-serif">Mind & Body</span>
                </h2>
                <p className="text-lg text-maroon-deep/70 mb-10 leading-relaxed font-body">
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
                      <div className="p-3 bg-sand group-hover:bg-red-vibrant transition-colors rounded-full">
                        <item.icon
                          size={18}
                          className="text-maroon-deep group-hover:text-white"
                        />
                      </div>
                      <span className="text-xs uppercase tracking-widest font-bold">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/book"
                  className="inline-flex items-center gap-4 px-10 py-4 bg-maroon-deep text-white text-xs uppercase tracking-widest hover:bg-red-vibrant transition-all"
                >
                  Book a Consultation <ArrowRight size={16} />
                </Link>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Conscious Breathing (The Dark Section) */}
      <section className="py-32 bg-maroon-deep text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-20">
            <div className="w-full lg:w-1/2">
              <SectionReveal direction="left">
                <div className="relative">
                  <img
                    src={cardBreathing}
                    alt="Breathing"
                    className="rounded-sm opacity-90 shadow-2xl"
                  />
                  <div className="absolute inset-0 ring-1 ring-white/20 -m-4 rounded-sm pointer-events-none" />
                </div>
              </SectionReveal>
            </div>

            <div className="w-full lg:w-1/2 text-left">
              <SectionReveal delay={0.3}>
                <span className="text-red-vibrant font-bold text-xs uppercase tracking-[0.4em] mb-4 block underline underline-offset-8">
                  Bio-Hacking Calm
                </span>
                <h2 className="font-display text-5xl font-light mb-8">
                  Conscious <br />
                  <span className="italic font-serif">Breathing</span>
                </h2>
                <p className="text-white/60 text-lg mb-10 leading-relaxed">
                  Our techniques combine ancient pranayama with modern polyvagal
                  theory to reset your nervous system in minutes.
                </p>
                <Link
                  to="/breathing-techniques"
                  className="group flex items-center gap-4 text-sm uppercase tracking-widest font-bold"
                >
                  Explore the techniques
                  <span className="w-12 h-[1px] bg-white group-hover:w-20 group-hover:bg-red-vibrant transition-all duration-500" />
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
