import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";

const ConnectCTA = () => {
  return (
    <section className="relative py-40 md:py-60 overflow-hidden bg-[#0F0506] text-white">
      {/* 1. Kinetic Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-vibrant/20 rounded-full blur-[120px]"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <SectionReveal direction="up">
          <h2 className="font-display text-7xl md:text-[10rem] font-light leading-[0.85] tracking-tighter mb-16">
            Ready to <br />
            <span className="italic font-serif text-white/90">Connect?</span>
          </h2>

          <Link to="/book" className="group relative inline-block">
            {/* The "Portal" Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-16 py-8 md:px-24 md:py-10 bg-white text-black rounded-full overflow-hidden transition-all duration-500 shadow-[0_0_50px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_80px_rgba(217,22,86,0.3)]"
            >
              {/* Button Hover Slide Effect */}
              <div className="absolute inset-0 bg-red-vibrant translate-y-full group-hover:translate-y-0 transition-transform duration-500" />

              <div className="relative z-10 flex items-center gap-4">
                <span className="font-body text-[11px] md:text-sm uppercase tracking-[0.4em] font-bold group-hover:text-white transition-colors duration-500">
                  Book Your Session
                </span>
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-2 group-hover:text-white transition-all duration-500"
                />
              </div>
            </motion.div>
          </Link>

          <div className="mt-16">
            <p className="text-white/30 text-[10px] uppercase tracking-[0.5em]">
              Silence • Strength • Stillness
            </p>
          </div>
        </SectionReveal>
      </div>

      {/* Subtle Bottom Border Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};

export default ConnectCTA;
