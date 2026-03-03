import React from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionReveal from "@/components/SectionReveal";
import { Sun, Wind, Flame, ChevronDown, ArrowRight } from "lucide-react";

// Assets
import cardYoga from "@/assets/card-yoga.jpg";
import yogaMeditation from "@/assets/yoga-meditation.jpg";

const yogaTypes = [
  {
    icon: Sun,
    title: "Hatha Yoga",
    desc: "Build strength, flexibility, and inner balance through mindful postures and breathwork.",
    bg: "bg-orange-50/30",
  },
  {
    icon: Wind,
    title: "Sahaja Yoga",
    desc: "Awaken your inner energy through meditation and self-realization for lasting inner peace.",
    bg: "bg-blue-50/30",
  },
  {
    icon: Flame,
    title: "Breath & Flow",
    desc: "Dynamic sequences connecting breath to movement for vitality and presence.",
    bg: "bg-red-50/30",
  },
];

const YogaSanctuary = () => {
  const { scrollY } = useScroll();
  const yRange = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <div className="min-h-screen bg-[#FCFAF7] selection:bg-accent/20">
      {/* Immersive Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: yRange }} className="absolute inset-0">
          <img
            src={cardYoga}
            alt="Yoga Practice"
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a0a]/80 via-transparent to-transparent" />
        </motion.div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-white/70 uppercase tracking-[0.5em] text-[10px] mb-4 block">
              Sacred Space for Practice
            </span>
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-extralight text-white mb-8">
              The Yoga <span className="italic">Sanctuary</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
          >
            <span className="text-[9px] uppercase tracking-widest">
              Begin Journey
            </span>
            <ChevronDown size={18} className="animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* Philosophy / Intro */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <SectionReveal>
              <h2 className="font-display text-4xl md:text-5xl text-gray-900 mb-8 font-light leading-tight">
                Movement as a <br />
                <span className="italic font-serif">Living Meditation.</span>
              </h2>
              <div className="w-12 h-[1px] bg-accent mx-auto mb-8" />
              <p className="font-body text-gray-500 text-lg leading-relaxed">
                Whether you seek the heat of a dynamic flow or the cooling
                silence of Sahaja meditation, our sanctuary provides the space
                to reconnect with your most authentic self.
              </p>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Elevated Yoga Types Grid */}
      <section className="pb-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {yogaTypes.map((type, i) => (
              <SectionReveal key={type.title} delay={i * 0.1}>
                <div
                  className={`group relative p-12 rounded-3xl border border-black/5 transition-all duration-700 hover:shadow-2xl hover:-translate-y-3 ${type.bg}`}
                >
                  <type.icon
                    className="mb-8 text-accent transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12"
                    size={40}
                    strokeWidth={1.2}
                  />
                  <h3 className="font-display text-3xl mb-4 text-gray-900 font-light italic">
                    {type.title}
                  </h3>
                  <p className="font-body text-sm text-gray-600 leading-relaxed mb-8">
                    {type.desc}
                  </p>
                  {/* <Link
                    to="/classes"
                    className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-accent group-hover:gap-4 transition-all"
                  >
                    Explore Path <ArrowRight size={14} />
                  </Link> */}
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Overlapping Meditation Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="w-full lg:w-1/2 relative">
              <SectionReveal>
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl translate-x-4 lg:translate-x-8">
                  <img
                    src={yogaMeditation}
                    alt="Collective Meditation"
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                {/* Abstract Background Element */}
                <div className="absolute top-10 -left-10 w-full h-full bg-maroon-deep rounded-2xl -z-10" />
              </SectionReveal>
            </div>

            <div className="w-full lg:w-1/2">
              <SectionReveal delay={0.2}>
                <span className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 block">
                  The Meditation Circle
                </span>
                <h2 className="font-display text-5xl md:text-6xl font-light text-gray-900 mb-8 leading-[1.1]">
                  Find Your <br />
                  <span className="italic">Inner Stillness</span>
                </h2>
                <p className="font-body text-gray-600 leading-relaxed mb-10 text-lg">
                  Practice is more than just movement; it is a homecoming. Join
                  our community sessions where the collective silence creates a
                  resonance far deeper than practicing alone.
                </p>
                <Link
                  to="/book"
                  className="group relative inline-flex items-center gap-4 px-10 py-4 bg-maroon-deep text-white rounded-full overflow-hidden transition-all hover:pr-12"
                >
                  <span className="relative z-10 text-xs uppercase tracking-widest">
                    Join a Session
                  </span>
                  <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </Link>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Minimalist CTA */}
      <section className="py-32 bg-[#FCFAF7] text-center border-t border-black/5">
        <div className="container mx-auto px-6">
          <SectionReveal>
            <h2 className="font-display text-5xl md:text-7xl font-light text-gray-900 mb-12">
              Step Onto <span className="italic font-serif">the Mat</span>
            </h2>
            <Link
              to="/book"
              className="inline-block px-16 py-6 bg-transparent border border-black/20 text-gray-900 font-body text-xs uppercase tracking-[0.3em] hover:bg-accent hover:text-white transition-all duration-500 rounded-full"
            >
              Reserve Your Place
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* Simple Footer Subtext */}
      <footer className="py-12 bg-white text-center">
        <p className="text-[10px] uppercase tracking-[0.5em] text-gray-400">
          Silence • Breath • Movement
        </p>
      </footer>
    </div>
  );
};

export default YogaSanctuary;
