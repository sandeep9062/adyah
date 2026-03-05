import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionReveal from "@/components/SectionReveal";
import HeroCta from "@/components/HeroCta";
import {
  Star,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Heart,
  Leaf,
} from "lucide-react";

const practitioners = [
  {
    name: "Dr. Aris Thorne",
    title: "Clinical Lead & Somatic Guide",
    specialty: "Neuromuscular Rehabilitation",
    energy: "Grounding",
    color: "from-blue-500/20",
    bio: "With 15 years in clinical physiotherapy, Aris bridges the gap between mechanical recovery and the body's energetic flow.",
    skills: ["Fascial Release", "Vagus Tuning", "Dry Needling"],
  },
  {
    name: "Elena Volkov",
    title: "Breathwork & Soul Architect",
    specialty: "Past Life Regression",
    energy: "Transcendental",
    color: "from-red-vibrant/20",
    bio: "Elena facilitates deep subconscious journeys, helping seekers resolve ancestral patterns and reclaim their primary silence.",
    skills: ["Holotropic Breath", "Face Reading", "Akashic Insight"],
  },
  {
    name: "Kaelen Mori",
    title: "Yoga Sanctuary Lead",
    specialty: "Hatha & Sahaja Yoga",
    energy: "Fluid",
    color: "from-orange-500/20",
    bio: "Kaelen’s practice focuses on the 'effortless effort,' guiding students to find stillness within movement and strength in surrender.",
    skills: ["Asana Flow", "Pranic Healing", "Yoga Nidra"],
  },
];

const AuraProfiles = () => {
  return (
    <div className="min-h-screen bg-[#080202] text-white selection:bg-red-vibrant/30">
      {/* 1. Ethereal Header */}
      <section className="relative pt-40 pb-20 overflow-hidden text-center">
        <div className="container mx-auto px-6 relative z-10">
          <SectionReveal direction="none">
            <span className="text-red-vibrant font-bold text-[10px] uppercase tracking-[0.5em] mb-4 block">
              The Keepers of the Space
            </span>
            <h1 className="font-display text-6xl md:text-9xl font-light tracking-tighter mb-4">
              Our{" "}
              <span className="italic font-serif text-white/80">Guides</span>
            </h1>
            <p className="text-white/40 font-body max-w-2xl mx-auto leading-relaxed text-lg mb-8">
              Adyah practitioners are dual-trained in clinical rigor and
              metaphysical wisdom. They don't just treat; they walk the path
              with you.
            </p>
            <HeroCta className="text-white [&_a]:border-white [&_a]:text-white [&_a:hover]:bg-white [&_a:hover]:text-maroon-deep" />
          </SectionReveal>
        </div>

        {/* Ambient background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-red-vibrant/5 to-transparent pointer-events-none" />
      </section>

      {/* 2. Practitioner Cards */}
      <section className="pb-40">
        <div className="container mx-auto px-6 space-y-32">
          {practitioners.map((guide, index) => (
            <SectionReveal
              key={guide.name}
              direction={index % 2 === 0 ? "right" : "left"}
            >
              <div className="relative group lg:flex items-center gap-20">
                {/* Image Side */}
                <div className="relative w-full lg:w-1/2 mb-12 lg:mb-0">
                  <div
                    className={`absolute inset-0 bg-gradient-to-tr ${guide.color} to-transparent blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000`}
                  />
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/5 bg-white/5">
                    {/* Placeholder for portrait */}
                    <div className="w-full h-full bg-neutral-900 group-hover:scale-105 transition-transform duration-[2s] ease-out" />
                    <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black/80 to-transparent w-full">
                      <p className="text-[10px] uppercase tracking-widest text-red-vibrant font-bold">
                        {guide.energy} Energy
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2">
                  <div className="flex items-center gap-3 mb-6">
                    <Star
                      className="text-red-vibrant"
                      size={16}
                      fill="currentColor"
                    />
                    <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                      Highly Certified
                    </span>
                  </div>

                  <h2 className="font-display text-5xl md:text-7xl font-light text-white mb-4 leading-none">
                    {guide.name}
                  </h2>
                  <p className="text-xl font-serif italic text-white/60 mb-8">
                    {guide.title}
                  </p>

                  <p className="text-white/40 leading-relaxed mb-10 max-w-lg">
                    {guide.bio}
                  </p>

                  {/* Skills Bento */}
                  <div className="flex flex-wrap gap-3 mb-12">
                    {guide.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-5 py-2 rounded-full border border-white/10 text-[10px] uppercase tracking-widest bg-white/5 hover:border-red-vibrant transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <Link
                    to="/book"
                    className="group/btn inline-flex items-center gap-6 text-[10px] uppercase tracking-[0.4em] font-bold"
                  >
                    <span className="px-10 py-5 bg-white text-black rounded-full group-hover/btn:bg-red-vibrant group-hover/btn:text-white transition-all">
                      Consult with {guide.name.split(" ")[0]}
                    </span>
                    <ArrowUpRight className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* 3. The Credentials Bar */}
      <section className="py-24 border-y border-white/5 bg-white/[0.01]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center opacity-30 grayscale transition-all hover:grayscale-0 hover:opacity-100">
            <div className="flex flex-col items-center gap-4">
              <ShieldCheck size={32} strokeWidth={1} />
              <span className="text-[9px] uppercase tracking-widest">
                Board Certified
              </span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Heart size={32} strokeWidth={1} />
              <span className="text-[9px] uppercase tracking-widest">
                Somatic Excellence
              </span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Zap size={32} strokeWidth={1} />
              <span className="text-[9px] uppercase tracking-widest">
                Neural Integration
              </span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Leaf size={32} strokeWidth={1} />
              <span className="text-[9px] uppercase tracking-widest">
                Holistic Pedagogy
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Final CTA */}
      <section className="py-40 text-center relative overflow-hidden">
        <SectionReveal>
          <h2 className="font-display text-5xl md:text-7xl font-light text-white mb-12 leading-tight">
            Not sure who is <br />{" "}
            <span className="italic font-serif">the right guide?</span>
          </h2>
          <Link
            to="/book"
            className="px-16 py-6 bg-red-vibrant text-white text-[11px] uppercase tracking-[0.4em] font-bold rounded-sm hover:scale-105 transition-all shadow-[0_20px_50px_rgba(217,22,86,0.3)]"
          >
            Let us choose for you
          </Link>
        </SectionReveal>
      </section>
    </div>
  );
};

export default AuraProfiles;
