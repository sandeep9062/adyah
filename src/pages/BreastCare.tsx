import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionReveal from "@/components/SectionReveal";
import cardBreastHero from "@/assets/card-breast.jpg"; // Main sensitive hero image
import lymphaticDetail from "@/assets/cart-lymphatic.jpg"; // Use a soft clinical detail image
import { Flower, ShieldCheck, Waves, Heart } from "lucide-react";

const specializations = [
  {
    icon: Waves,
    title: "Lymphatic Drainage",
    desc: "Gentle manual techniques to reduce swelling and improve flow.",
  },
  {
    icon: ShieldCheck,
    title: "Post-Surgical Rehab",
    desc: "Restoring mobility and strength after mastectomy or surgery.",
  },
  {
    icon: Flower,
    title: "Scar Tissue Care",
    desc: "Advanced soft tissue therapy for comfort and healing.",
  },
  {
    icon: Heart,
    title: "Emotional Support",
    desc: "A compassionate, private environment for your recovery journey.",
  },
];

const BreastCare = () => {
  // Theme Colors applied via Inline Styles or Tailwind
  const colors = {
    cream: "rgb(255, 253, 241)",
    amber: "rgb(255, 206, 153)",
    orange: "rgb(255, 150, 68)",
    espresso: "rgb(86, 47, 0)",
  };

  return (
    <div
      style={{ backgroundColor: colors.cream }}
      className="min-h-screen pt-20"
    >
      {/* Hero Section - Minimalist & Soft */}
      <section className="relative h-[75vh] flex items-center overflow-hidden">
        <img
          src={cardBreastHero}
          alt="Compassionate specialized care"
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />
        {/* Subtle Espresso Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[rgb(86,47,0)]/40 to-transparent" />

        <div className="relative z-10 container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-2xl"
          >
            <span
              style={{ color: colors.orange }}
              className="uppercase tracking-[0.3em] text-sm font-bold mb-4 block"
            >
              Specialized Clinical Care
            </span>
            <h1
              style={{ color: colors.cream }}
              className="font-display text-5xl md:text-7xl font-light leading-tight"
            >
              Breast & Lymphatic <br /> Recovery
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Specializations Grid - Amber Accents */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center mb-16">
          <h2
            style={{ color: colors.espresso }}
            className="font-display text-4xl font-light mb-4"
          >
            Therapeutic Focus
          </h2>
          <div
            className="w-20 h-1 mx-auto"
            style={{ backgroundColor: colors.orange }}
          ></div>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {specializations.map((s, i) => (
              <SectionReveal key={s.title} delay={i * 0.1}>
                <div className="group text-center">
                  <div
                    style={{ backgroundColor: colors.amber }}
                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500"
                  >
                    <s.icon
                      style={{ color: colors.espresso }}
                      size={32}
                      strokeWidth={1.2}
                    />
                  </div>
                  <h3
                    style={{ color: colors.espresso }}
                    className="font-display text-xl mb-3"
                  >
                    {s.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed max-w-[200px] mx-auto">
                    {s.desc}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* The "Safe Space" Visual Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
        <div
          style={{ backgroundColor: colors.espresso }}
          className="flex flex-col justify-center p-12 md:p-24"
        >
          <SectionReveal>
            <h2
              style={{ color: colors.cream }}
              className="font-display text-4xl md:text-5xl font-light mb-8"
            >
              A Sanctuary for <br /> Restoring Balance
            </h2>
            <p
              style={{ color: colors.amber }}
              className="font-body leading-relaxed mb-10 opacity-90"
            >
              Our specialized therapy is designed to honor your body's healing
              process. We combine clinically proven manual lymphatic drainage
              with a deep understanding of post-surgical sensitivity.
            </p>
            <Link
              to="/book"
              style={{
                backgroundColor: colors.orange,
                color: colors.cream,
              }}
              className="inline-block px-10 py-4 rounded-full font-body text-xs uppercase tracking-[0.2em] hover:brightness-110 transition-all shadow-xl"
            >
              Consult an Expert
            </Link>
          </SectionReveal>
        </div>

        <div className="relative overflow-hidden">
          <img
            src={lymphaticDetail}
            alt="Anatomical healing focus"
            className="absolute inset-0 w-full h-full object-contain opacity-90"
          />
        </div>
      </section>

      {/* Trust & Privacy Section */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <SectionReveal>
            <Heart
              style={{ color: colors.orange }}
              className="mx-auto mb-6"
              size={48}
            />
            <h2
              style={{ color: colors.espresso }}
              className="font-display text-3xl md:text-4xl font-light mb-6"
            >
              Your Privacy, Our Priority
            </h2>
            <p className="text-gray-600 italic leading-loose">
              "We provide a completely private, one-on-one clinical setting
              where you can feel secure and heard. Every session is a step
              toward reclaiming your comfort and confidence."
            </p>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
};

export default BreastCare;
