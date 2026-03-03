import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Amara K.",
    text: "A place where my body and spirit finally found alignment. The physiotherapy healed my back, and the yoga transformed my mind.",
    service: "Physiotherapy & Yoga",
  },
  {
    name: "David L.",
    text: "The face reading session was eye-opening. I discovered patterns I'd been blind to for years. Truly life-changing work.",
    service: "Face Reading",
  },
  {
    name: "Sarah M.",
    text: "After my surgery, the breast care rehabilitation gave me back my confidence and my strength. Compassionate, expert care.",
    service: "Breast Care Rehabilitation",
  },
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
      filter: "blur(4px)",
    }),
    center: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
    },
    exit: (direction) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0,
      filter: "blur(4px)",
    }),
  };

  const next = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance every 5 seconds for a calm pace
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <div className="relative w-full max-w-5xl mx-auto py-12">
      {/* Background Decorative Quote Mark */}
      <div className="absolute -top-10 left-0 font-display text-[200px] text-white/5 select-none pointer-events-none">
        &ldquo;
      </div>

      <div className="relative overflow-hidden min-h-[400px] md:min-h-[300px] flex items-center">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-8">
              <blockquote className="relative">
                <p className="font-display text-3xl md:text-4xl lg:text-5xl font-light leading-[1.4] text-white/90 italic">
                  {testimonials[current].text}
                </p>
              </blockquote>

              <div className="flex items-center gap-6">
                <div className="h-[1px] w-12 bg-red-vibrant hidden md:block" />
                <div>
                  <hcite className="block font-body text-sm font-bold uppercase tracking-[0.3em] text-white">
                    {testimonials[current].name}
                  </hcite>
                  <span className="block font-body text-xs text-white/40 uppercase tracking-widest mt-1">
                    {testimonials[current].service}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-16 gap-8">
        {/* Progress Indicators (The "Luxury Line") */}
        <div className="flex gap-3 order-2 md:order-1">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              className="group relative py-4"
            >
              <div
                className={`h-[2px] transition-all duration-700 ease-out ${
                  i === current
                    ? "w-12 bg-red-vibrant"
                    : "w-6 bg-white/20 group-hover:bg-white/40"
                }`}
              />
            </button>
          ))}
        </div>

        {/* Arrow Buttons */}
        <div className="flex items-center gap-4 order-1 md:order-2">
          <button
            onClick={prev}
            className="p-4 rounded-full border border-white/10 text-white/60 hover:text-white hover:border-white/40 transition-all active:scale-95"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} strokeWidth={1.5} />
          </button>
          <button
            onClick={next}
            className="p-4 rounded-full border border-white/10 text-white/60 hover:text-white hover:border-white/40 transition-all active:scale-95"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
