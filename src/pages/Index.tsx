import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import cardMentalWellness from "@/assets/card-mental-wellness.jpg";
import cardMind from "@/assets/card-mind.jpg";
import cardBreast from "@/assets/card-breast.jpg";
import cardYoga from "@/assets/card-yoga.jpg";
import PathCard from "@/components/PathCard";
import TestimonialSlider from "@/components/TestimonialSlider";
import SectionReveal from "@/components/SectionReveal";

const pathCards = [
  {
    title: "Mental Wellness Service",
    image: cardMentalWellness,
    to: "/mental-wellness",
  },
  { title: "Mind & Soul", image: cardMind, to: "/mind-soul" },
  { title: "Specialized Breast Care", image: cardBreast, to: "/breast-care" },
  { title: "Yoga Sanctuary", image: cardYoga, to: "/yoga" },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src={heroBg}
          alt="Healing journey"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 overlay-dark" />
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-display text-6xl md:text-8xl font-light text-primary-foreground tracking-wide"
          >
            Heal. Discover. Transform.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-10"
          >
            <Link
              to="/book"
              className="inline-block px-10 py-4 border border-primary-foreground/30 text-primary-foreground font-body text-sm uppercase tracking-[0.2em] hover:bg-primary-foreground/10 transition-all duration-500"
            >
              Begin Your Journey
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-px h-16 bg-gradient-to-b from-transparent to-primary-foreground/40" />
        </motion.div>
      </section>

      {/* Choose Your Path */}
      <section className="py-24 md:py-32 bg-warm-cream">
        <div className="container mx-auto px-6">
          <SectionReveal className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
              Choose Your Path
            </h2>
            <div className="w-16 h-px bg-accent mx-auto mt-6" />
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pathCards.map((card, i) => (
              <PathCard key={card.title} {...card} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 bg-sand">
        <div className="container mx-auto">
          <SectionReveal className="text-center mb-4">
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
              Stories of Transformation
            </h2>
            <div className="w-16 h-px bg-accent mx-auto mt-6 mb-16" />
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <TestimonialSlider />
          </SectionReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-maroon text-center">
        <SectionReveal>
          <h2 className="font-display text-4xl md:text-5xl font-light text-primary-foreground mb-8">
            Your Transformation Awaits
          </h2>
          <Link
            to="/book"
            className="inline-block px-12 py-4 bg-accent text-accent-foreground font-body text-sm uppercase tracking-[0.2em] hover:bg-red-glow transition-colors duration-500"
          >
            Book Now
          </Link>
        </SectionReveal>
      </section>
    </div>
  );
};

export default Index;
