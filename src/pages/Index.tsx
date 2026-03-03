import { Link } from "react-router-dom";

import heroBg from "@/assets/hero-bg.jpg";
import cardMentalWellness from "@/assets/card-mental-wellness.jpg";
import cardMind from "@/assets/card-mind.jpg";
import cardBreathing from "@/assets/card-breath.jpg";
import cardYoga from "@/assets/card-yoga.jpg";
import PathCard from "@/components/PathCard";
import TestimonialSlider from "@/components/TestimonialSlider";
import SectionReveal from "@/components/SectionReveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const pathCards = [
  {
    title: "Mental Wellness Service",
    image: cardMentalWellness,
    to: "/mental-wellness",
  },
  { title: "Mind & Soul", image: cardMind, to: "/mind-soul" },
  {
    title: "Breathing Techniques",
    image: cardBreathing,
    to: "/breathing-techniques",
  },
  { title: "Yoga Sanctuary", image: cardYoga, to: "/yoga" },
];

const Index = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Parallax effect for the background image
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div className="min-h-screen selection:bg-red-vibrant/30">
      {/* 1. Immersive Hero Section */}
      <section
        ref={heroRef}
        className="relative h-[100vh] flex items-center justify-center overflow-hidden"
      >
        <motion.div style={{ y, scale }} className="absolute inset-0">
          <img
            src={heroBg}
            alt="Healing journey"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-maroon-deep/40 via-maroon-deep/20 to-maroon-deep/60" />
        </motion.div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="block text-red-vibrant uppercase tracking-[0.4em] text-xs font-bold mb-6"
          >
            Welcome to Adyah
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl md:text-8xl lg:text-9xl font-light text-white leading-tight"
          >
            Heal. <span className="italic font-serif">Discover.</span> <br />{" "}
            Transform.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-12 flex flex-col items-center"
          >
            <Link
              to="/book"
              className="group relative px-12 py-5 overflow-hidden border border-white/30 text-white text-xs uppercase tracking-[0.3em] transition-all"
            >
              <span className="relative z-10">Begin Your Journey</span>
              <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <span className="absolute inset-0 z-0 flex items-center justify-center text-maroon-deep opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold">
                Begin Your Journey
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Dynamic Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 flex flex-col items-center gap-4"
        >
          <span className="text-[10px] uppercase tracking-widest text-white/50">
            Explore
          </span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/60 to-transparent" />
        </motion.div>
      </section>

      {/* 2. Enhanced "Path" Grid */}
      <section className="py-32 bg-[#FDFCFB] text-maroon-deep relative overflow-hidden">
        {/* Abstract background element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-sand/20 -skew-x-12 translate-x-1/2" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
            <SectionReveal className="text-left">
              <span className="text-red-vibrant font-bold tracking-widest text-xs uppercase">
                Your Sanctuary
              </span>
              <h2 className="font-display text-5xl md:text-6xl font-light mt-4">
                Choose Your <br /> <span className="italic">Healing Path</span>
              </h2>
            </SectionReveal>
            <SectionReveal delay={0.2} className="hidden md:block">
              <p className="max-w-xs text-sm text-maroon-deep/60 leading-relaxed italic">
                Every soul is unique. Select the modality that resonates with
                your current energy.
              </p>
            </SectionReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {pathCards.map((card, i) => (
              <motion.div
                key={card.title}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <PathCard {...card} index={i} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Refined Testimonials with "Editorial" look */}
      <section className="py-32 bg-maroon-deep text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-4">
              <SectionReveal>
                <h2 className="font-display text-4xl md:text-5xl font-light mb-6">
                  Real <br /> Transformation
                </h2>
                <div className="w-12 h-[2px] bg-red-vibrant mb-8" />
                <p className="text-white/60 leading-relaxed font-light">
                  Hear from those who have walked the path of self-discovery
                  with Adyah.
                </p>
              </SectionReveal>
            </div>
            <div className="lg:col-span-8">
              <SectionReveal delay={0.3}>
                <TestimonialSlider />
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Minimalist Final CTA */}
      <section className="relative py-40 overflow-hidden bg-[#FDFCFB]">
        <div className="container mx-auto px-6 text-center">
          <SectionReveal>
            <h2 className="font-display text-6xl md:text-8xl font-light mb-12 text-maroon-deep tracking-tighter">
              Ready to connect?
            </h2>
            <Link to="/book" className="inline-block group">
              <span className="text-xl font-body tracking-[0.2em] uppercase border-b border-maroon-deep pb-2 group-hover:text-red-vibrant group-hover:border-red-vibrant transition-all duration-300">
                Book Your Session
              </span>
            </Link>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
};
export default Index;
