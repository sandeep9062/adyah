import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Julian R.",
    text: "I came for the mechanics of breath and stayed for the silence. The rhythmic techniques didn't just expand my lung capacity; they expanded my capacity for peace.",
    service: "Breathing Techniques",
  },
  {
    name: "Sienna V.",
    text: "Adyah's Yoga Sanctuary is far from a standard studio. Every posture felt like a deliberate conversation between my nervous system and my soul.",
    service: "Hatha & Sahaja Yoga",
  },
  {
    name: "Marcus T.",
    text: "I was skeptical about Face Reading, but the precision was startling. It was like looking at a map of my own history that I had forgotten how to read.",
    service: "Face Reading",
  },
  {
    name: "Isabella H.",
    text: "Past Life Regression was the key that finally unlocked my chronic anxiety. Exploring the subconscious felt like a long-overdue homecoming.",
    service: "Past Life Regression",
  },
  {
    name: "Dr. Liam N.",
    text: "The psychological approach here is refreshingly deep. It doesn’t just manage symptoms; it integrates the shadow with the light through clinical rigor.",
    service: "Psychology",
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
  const nextWithPause = () => handleUserNav(next);
  const prevWithPause = () => handleUserNav(prev);
  useEffect(() => () => { if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current); }, []);

  // Pause auto-advance when tab is hidden or user recently interacted
  const [isPaused, setIsPaused] = useState(false);
  useEffect(() => {
    const handleVisibility = () => setIsPaused(document.hidden);
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [current, isPaused]);

  const pauseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const handleUserNav = (fn: () => void) => {
    setIsPaused(true);
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    fn();
    pauseTimeoutRef.current = setTimeout(() => setIsPaused(false), 10000);
  };

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
                handleUserNav(() => {
                  setDirection(i > current ? 1 : -1);
                  setCurrent(i);
                });
              }}
              className="group relative min-h-[44px] min-w-[44px] flex items-center justify-center py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-vibrant focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded"
              aria-label={`Go to testimonial ${i + 1}`}
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
            type="button"
            onClick={prevWithPause}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center p-4 rounded-full border border-white/10 text-white/60 hover:text-white hover:border-white/40 transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-vibrant focus-visible:ring-offset-2 focus-visible:ring-offset-maroon-deep"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} strokeWidth={1.5} />
          </button>
          <button
            type="button"
            onClick={nextWithPause}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center p-4 rounded-full border border-white/10 text-white/60 hover:text-white hover:border-white/40 transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-vibrant focus-visible:ring-offset-2 focus-visible:ring-offset-maroon-deep"
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
