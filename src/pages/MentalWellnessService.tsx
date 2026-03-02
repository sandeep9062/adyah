import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionReveal from "@/components/SectionReveal";
import cardMentalWellness from "@/assets/card-mental-wellness.jpg";
import mindBody from "@/assets/mind-body.jpg";
import cardBreathing from "@/assets/card-breathing.jpg";
import { Activity, Heart, Bone, Hand } from "lucide-react";
import { Brain, Sparkles, Compass, Leaf } from "lucide-react";

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
  return (
    <div className="min-h-screen pt-[70px]">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <img
          src={cardMentalWellness}
          alt="Mental wellness service"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 overlay-dark" />
        <div className="relative z-10 container mx-auto px-6 pb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-5xl md:text-7xl font-light text-primary-foreground"
          >
            Mental Wellness Service
          </motion.h1>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="py-24 bg-warm-cream">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {wellnessServices.map((t, i) => (
              <SectionReveal key={t.title} delay={i * 0.1}>
                <div className="text-center p-8">
                  <t.icon
                    className="mx-auto mb-6 text-accent"
                    size={40}
                    strokeWidth={1.2}
                  />
                  <h3 className="font-display text-2xl mb-3 text-foreground">
                    {t.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    {t.desc}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* mind body integration */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
        <div className="bg-maroon-deep flex items-center justify-center p-12">
          <SectionReveal>
            <img
              src={mindBody}
              alt="Anatomical illustration"
              className="max-h-[500px] w-auto object-contain"
            />
          </SectionReveal>
        </div>
        <div className="bg-sand flex items-center p-12 md:p-20">
          <SectionReveal delay={0.2}>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-6">
              Mind-Body Integration
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Our mental wellness approach recognizes the profound connection
              between mind and body. Through holistic techniques, we help you
              achieve emotional balance, mental clarity, and inner peace.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Brain className="text-accent" size={24} />
                <span className="font-body text-sm text-muted-foreground">
                  Neural retraining
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Heart className="text-accent" size={24} />
                <span className="font-body text-sm text-muted-foreground">
                  Emotional regulation
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Leaf className="text-accent" size={24} />
                <span className="font-body text-sm text-muted-foreground">
                  Stress resilience
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Sparkles className="text-accent" size={24} />
                <span className="font-body text-sm text-muted-foreground">
                  Mindful awareness
                </span>
              </div>
            </div>
            <Link
              to="/book"
              className="inline-block mt-8 px-8 py-3 bg-accent text-accent-foreground font-body text-sm uppercase tracking-[0.15em] hover:bg-red-glow transition-colors"
            >
              Begin Your Journey
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* Breathing Techniques */}
      <section className="grid grid-cols-1 mt-20 mb-20 md:grid-cols-2 min-h-[600px]">
        <div className="bg-maroon-deep flex items-center justify-center p-12">
          <SectionReveal>
            <img
              src={cardBreathing}
              alt="Breathing techniques"
              className="max-h-[500px] w-auto object-contain"
            />
          </SectionReveal>
        </div>
        <div className="bg-sand flex items-center p-12 md:p-20">
          <SectionReveal delay={0.2}>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-6">
              Conscious Breathing Techniques
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Learn powerful breathing practices to calm your nervous system,
              reduce anxiety, and enhance mental clarity. Our techniques combine
              ancient wisdom with modern science for optimal results.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Activity className="text-accent" size={24} />
                <span className="font-body text-sm text-muted-foreground">
                  Nervous system regulation
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Heart className="text-accent" size={24} />
                <span className="font-body text-sm text-muted-foreground">
                  Anxiety reduction
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Brain className="text-accent" size={24} />
                <span className="font-body text-sm text-muted-foreground">
                  Mental clarity
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Leaf className="text-accent" size={24} />
                <span className="font-body text-sm text-muted-foreground">
                  Stress management
                </span>
              </div>
            </div>
            <Link
              to="/breathing-techniques"
              className="inline-block mt-8 px-8 py-3 bg-accent text-accent-foreground font-body text-sm uppercase tracking-[0.15em] hover:bg-red-glow transition-colors"
            >
              Learn More
            </Link>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
};

export default MentalWellnessService;
