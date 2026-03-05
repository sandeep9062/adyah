import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionReveal from "@/components/SectionReveal";
import HeroCta from "@/components/HeroCta";
import {
  Microscope,
  Activity,
  Brain,
  Heart,
  Milestone,
  Fingerprint,
} from "lucide-react";

const LineagePage = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-accent/10">
      {/* 1. Authority Hero */}
      <section className="pt-32 pb-20 bg-warm-cream">
        <div className="container mx-auto px-6">
          <SectionReveal direction="up">
            <div className="max-w-4xl">
              <span className="text-red-vibrant font-bold text-[10px] uppercase tracking-[0.4em] mb-6 block">
                Evidence-Based Transformation
              </span>
              <h1 className="font-display text-6xl md:text-8xl font-light text-maroon-deep leading-[0.9] mb-4">
                The Science of <br />
                <span className="italic font-serif">Deep Healing</span>
              </h1>
              <p className="text-xl text-maroon-deep/70 font-body leading-relaxed max-w-2xl mb-8">
                Adyah was founded on the belief that spiritual practices are
                simply biological technologies we have yet to fully measure. We
                bridge the gap between the clinical ward and the meditation
                hall.
              </p>
              <HeroCta />
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 2. The Clinical Pillars */}
      <section className="section-py">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <SectionReveal delay={0.1}>
              <div className="space-y-6">
                <Microscope
                  className="text-accent"
                  size={32}
                  strokeWidth={1.5}
                />
                <h3 className="font-display text-3xl font-light">
                  Physiological Basis
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  Every movement in our Yoga Sanctuary is screened through the
                  lens of biomechanics and fascial release theory. We treat the
                  body as a tensegrity structure, not just a collection of
                  parts.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <div className="space-y-6">
                <Activity className="text-accent" size={32} strokeWidth={1.5} />
                <h3 className="font-display text-3xl font-light">
                  Neurological Reset
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  Our breathing techniques are designed to modulate the
                  Autonomic Nervous System (ANS). By increasing Heart Rate
                  Variability (HRV), we move the patient from a "Freeze" state
                  to "Social Engagement."
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.3}>
              <div className="space-y-6">
                <Brain className="text-accent" size={32} strokeWidth={1.5} />
                <h3 className="font-display text-3xl font-light">
                  Cognitive Clarity
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  Past Life Regression and Face Reading act as psychotherapeutic
                  metaphors that unlock deep-seated subconscious patterns,
                  allowing for a total cognitive restructuring.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* 3. The "Biological Bridge" (Visual Section) */}
      <section className="bg-gray-900 text-white py-32 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          {/* Background design element representing a DNA or Spiral */}
          <svg
            viewBox="0 0 200 800"
            className="w-full h-full stroke-white fill-none"
          >
            <path
              d="M100 0 C 150 200, 50 400, 100 600 C 150 800, 50 1000, 100 1200"
              strokeWidth="0.5"
            />
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <SectionReveal>
              <div className="relative">
                <div className="aspect-[4/5] bg-gray-800 rounded-3xl overflow-hidden border border-white/10 p-12 flex flex-col justify-center">
                  {/* Placeholder for an Anatomical/Chakra Diagram */}
                  <div className="space-y-12">
                    <div className="flex items-center gap-8">
                      <Heart className="text-red-vibrant shrink-0" size={40} />
                      <div>
                        <h4 className="text-xs uppercase tracking-widest text-red-vibrant font-bold mb-1">
                          Cardiac Coherence
                        </h4>
                        <p className="text-sm text-white/50">
                          Balancing the heart's rhythm through rhythmic breath.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-8">
                      <Fingerprint
                        className="text-red-vibrant shrink-0"
                        size={40}
                      />
                      <div>
                        <h4 className="text-xs uppercase tracking-widest text-red-vibrant font-bold mb-1">
                          Cellular Memory
                        </h4>
                        <p className="text-sm text-white/50">
                          Releasing ancestral trauma stored in muscular fascia.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-8">
                      <Milestone
                        className="text-red-vibrant shrink-0"
                        size={40}
                      />
                      <div>
                        <h4 className="text-xs uppercase tracking-widest text-red-vibrant font-bold mb-1">
                          Neural Plasticity
                        </h4>
                        <p className="text-sm text-white/50">
                          Rewiring the brain's response to chronic stress.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <h2 className="font-display text-5xl font-light text-white mb-8 leading-tight">
                Beyond the <br />
                <span className="italic font-serif">Symptom</span>
              </h2>
              <p className="text-white/60 font-body text-lg leading-relaxed mb-10">
                Modern medicine often stops at the cessation of pain. Adyah
                begins there. We use clinical physiotherapy as the foundation,
                but the goal is the awakening of the "Self" (Sahaja).
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-1 bg-red-vibrant" />
                  <div>
                    <p className="font-bold text-sm mb-1">
                      Stage 01: Stabilization
                    </p>
                    <p className="text-xs text-white/40">
                      Reducing acute physical distress and systemic
                      inflammation.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-1 bg-white/20" />
                  <div>
                    <p className="font-bold text-sm mb-1">
                      Stage 02: Integration
                    </p>
                    <p className="text-xs text-white/40">
                      Connecting breath to movement to restore flow.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-1 bg-white/20" />
                  <div>
                    <p className="font-bold text-sm mb-1">
                      Stage 03: Transcendence
                    </p>
                    <p className="text-xs text-white/40">
                      Achieving silence and self-realization.
                    </p>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* 4. The Advisory Board */}
      <section className="py-32 bg-[#FDFCF9]">
        <div className="container mx-auto px-6 text-center mb-20">
          <SectionReveal>
            <h2 className="font-display text-5xl font-light text-gray-900 mb-4">
              Our Lineage
            </h2>
            <p className="text-gray-500">
              Guided by leaders in both rehabilitation and mysticism.
            </p>
          </SectionReveal>
        </div>

        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[1, 2].map((i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="group bg-white p-10 rounded-[2rem] border border-black/5 hover:shadow-2xl hover:-translate-y-2 transition-all duration-700">
                  <div className="w-24 h-24 bg-gray-100 rounded-full mb-8 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                    {/* Image of Practitioner */}
                    <div className="w-full h-full bg-gray-200" />
                  </div>
                  <h4 className="font-display text-2xl font-light mb-2">
                    Dr. Aris Thorne
                  </h4>
                  <p className="text-accent text-xs uppercase tracking-widest font-bold mb-6">
                    Director of Clinical Research
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed italic">
                    "The human body is not a machine to be fixed, but a symphony
                    to be tuned. Our lineage is rooted in the quiet science of
                    listening."
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center border-t border-black/5">
        <SectionReveal>
          <p className="font-body text-gray-400 text-sm mb-8">
            Want to learn more about our methodology?
          </p>
          <button className="px-12 py-5 bg-gray-900 text-white rounded-full text-[10px] uppercase tracking-[0.3em] hover:bg-accent transition-colors">
            Download Whitepaper
          </button>
        </SectionReveal>
      </section>
    </div>
  );
};

export default LineagePage;
