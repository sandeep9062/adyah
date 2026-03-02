import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionReveal from "@/components/SectionReveal";
import cardMentalWellness from "@/assets/card-mental-wellness.jpg";
import physioSpine from "@/assets/physio-spine.jpg";
import cardBreast from "@/assets/card-breast.jpg";
import { Activity, Heart, Bone, Hand } from "lucide-react";

const treatments = [
  {
    icon: Bone,
    title: "Spinal Rehabilitation",
    desc: "Expert care for back & neck conditions",
  },
  {
    icon: Activity,
    title: "Sports Recovery",
    desc: "Return to peak performance",
  },
  { icon: Hand, title: "Manual Therapy", desc: "Hands-on healing techniques" },
  {
    icon: Heart,
    title: "Breast & Lymphatic Care",
    desc: "Compassionate specialized support",
  },
];

const MentalWellnessService = () => {
  return (
    <div className="min-h-screen pt-20">
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
            {treatments.map((t, i) => (
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

      {/* Spine Visual */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
        <div className="bg-maroon-deep flex items-center justify-center p-12">
          <SectionReveal>
            <img
              src={physioSpine}
              alt="Anatomical illustration"
              className="max-h-[500px] w-auto object-contain"
            />
          </SectionReveal>
        </div>
        <div className="bg-sand flex items-center p-12 md:p-20">
          <SectionReveal delay={0.2}>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-6">
              Precision Meets Empathy
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Our clinical approach combines advanced rehabilitation techniques
              with genuine human care. Every treatment plan is tailored to your
              unique anatomy and goals.
            </p>
            <Link
              to="/book"
              className="inline-block px-8 py-3 bg-accent text-accent-foreground font-body text-sm uppercase tracking-[0.15em] hover:bg-red-glow transition-colors"
            >
              Book Assessment
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* Breast Care */}
      <section className="py-24 bg-warm-cream">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <SectionReveal>
              <img
                src={cardBreast}
                alt="Compassionate breast care"
                className="rounded-lg shadow-maroon w-full aspect-square object-cover"
              />
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <h2 className="font-display text-4xl font-light text-foreground mb-6">
                Specialized Breast Care
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-8">
                A safe, clinical, and compassionate space for post-surgical
                rehabilitation, lymphatic drainage, and recovery support. Your
                comfort and dignity are our priority.
              </p>
              <Link
                to="/breast-care"
                className="inline-block px-8 py-3 border border-accent text-accent font-body text-sm uppercase tracking-[0.15em] hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                Learn More
              </Link>
            </SectionReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MentalWellnessService;
