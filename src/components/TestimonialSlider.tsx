import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

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
    service: "Breast Care",
  },
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="relative max-w-3xl mx-auto text-center px-6">
      <Quote className="mx-auto mb-8 text-accent/30" size={48} />

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-display text-2xl md:text-3xl italic leading-relaxed text-foreground/90 mb-8">
            "{testimonials[current].text}"
          </p>
          <p className="font-body text-sm uppercase tracking-widest text-accent font-medium">
            {testimonials[current].name}
          </p>
          <p className="font-body text-xs text-muted-foreground mt-1">
            {testimonials[current].service}
          </p>
        </motion.div>
      </AnimatePresence>

      <div className="flex items-center justify-center gap-6 mt-10">
        <button onClick={prev} className="p-2 rounded-full border border-border hover:border-accent transition-colors">
          <ChevronLeft size={20} className="text-foreground/60" />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                i === current ? "bg-accent" : "bg-border"
              }`}
            />
          ))}
        </div>
        <button onClick={next} className="p-2 rounded-full border border-border hover:border-accent transition-colors">
          <ChevronRight size={20} className="text-foreground/60" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
