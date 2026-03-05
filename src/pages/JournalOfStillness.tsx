import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "@/components/SectionReveal";
import HeroCta from "@/components/HeroCta";
import { ArrowRight, Clock, BookOpen, Sparkles, Brain } from "lucide-react";

const categories = ["All", "Science", "Rituals", "Soul", "Nutrition"];

const posts = [
  {
    id: 1,
    category: "Science",
    title: "The Vagus Nerve: Your Internal Reset Button",
    excerpt:
      "How clinical breathing techniques physically rewire your stress response in under 60 seconds.",
    readTime: "6 min read",
    image: "bg-neutral-800",
    size: "large", // For Bento Grid
  },
  {
    id: 2,
    category: "Rituals",
    title: "5 Minutes of Sahaja",
    excerpt: "A simple morning flow to align your spine and spirit.",
    readTime: "2 min ritual",
    image: "bg-neutral-700",
    size: "small",
  },
  {
    id: 3,
    category: "Soul",
    title: "The Architecture of Silence",
    excerpt:
      "Why the modern world fears stillness, and how to reclaim it through meditation.",
    readTime: "8 min read",
    image: "bg-neutral-900",
    size: "small",
  },
  {
    id: 4,
    category: "Nutrition",
    title: "Anti-Inflammatory Alchemies",
    excerpt:
      "Three seasonal recipes designed to support neuromuscular recovery.",
    readTime: "5 min read",
    image: "bg-neutral-600",
    size: "medium",
  },
];

const JournalOfStillness = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredPosts =
    activeTab === "All"
      ? posts
      : posts.filter((post) => post.category === activeTab);

  return (
    <div className="min-h-screen bg-[#FDFCF9] selection:bg-accent/10">
      {/* 1. Minimalist Editorial Header */}
      <section className="pt-40 pb-20 border-b border-black/5">
        <div className="container mx-auto px-6 text-center">
          <SectionReveal direction="up">
            <span className="text-red-vibrant font-bold text-[10px] uppercase tracking-[0.5em] mb-6 block">
              Resource Center
            </span>
            <h1 className="font-display text-7xl md:text-9xl font-light text-maroon-deep tracking-tighter mb-4">
              Journal of <span className="italic font-serif">Stillness</span>
            </h1>
            <p className="text-maroon-deep/60 font-body max-w-md mx-auto mb-8">
              Wisdom and practices for the path.
            </p>
            <HeroCta className="mb-12" />

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-8 py-3 rounded-full text-[10px] uppercase tracking-widest transition-all duration-500 border ${
                    activeTab === cat
                      ? "bg-gray-900 text-white border-gray-900 shadow-xl"
                      : "bg-transparent text-gray-400 border-gray-200 hover:border-accent hover:text-accent"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 2. The Bento Journal Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredPosts.map((post) => (
                <motion.div
                  key={post.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className={cn(
                    "group relative bg-white border border-black/5 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-700 cursor-pointer",
                    post.size === "large"
                      ? "md:col-span-8 h-[500px]"
                      : post.size === "medium"
                        ? "md:col-span-7 h-[400px]"
                        : "md:col-span-4 h-[400px]",
                  )}
                >
                  {/* Image Background Placeholder */}
                  <div
                    className={`absolute inset-0 ${post.image} opacity-10 group-hover:opacity-20 transition-opacity duration-700`}
                  />

                  <div className="relative h-full p-10 flex flex-col justify-between z-10">
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <span className="px-3 py-1 bg-accent/5 text-accent text-[9px] font-bold uppercase tracking-widest rounded-full">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-1 text-gray-300 text-[9px] uppercase tracking-widest">
                          <Clock size={10} />
                          {post.readTime}
                        </div>
                      </div>
                      <h3
                        className={cn(
                          "font-display leading-tight text-gray-900 group-hover:text-accent transition-colors",
                          post.size === "large"
                            ? "text-4xl md:text-5xl"
                            : "text-3xl",
                        )}
                      >
                        {post.title}
                      </h3>
                    </div>

                    <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <p className="text-gray-500 text-sm mb-6 max-w-md">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-gray-900 font-bold text-[10px] uppercase tracking-[0.2em]">
                        Read Entry <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* 3. Newsletter / Intent Sign-up */}
      <section className="py-32 bg-[#0F0506] text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <Sparkles className="text-red-vibrant mx-auto mb-8" size={32} />
            <h2 className="font-display text-4xl md:text-6xl font-light text-white mb-8">
              Stay in the <span className="italic font-serif">Flow</span>
            </h2>
            <p className="text-white/40 mb-12 leading-relaxed">
              Receive a monthly curation of clinical insights and spiritual
              practices directly in your inbox. No noise, just stillness.
            </p>
            <form className="relative max-w-md mx-auto">
              <input
                type="email"
                placeholder="YOUR EMAIL"
                className="w-full bg-transparent border-b border-white/20 py-4 font-body text-sm focus:border-red-vibrant outline-none transition-colors placeholder:text-white/10"
              />
              <button className="absolute right-0 bottom-4 text-red-vibrant hover:text-white transition-colors">
                <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper function for tailwind classes
const cn = (...classes) => classes.filter(Boolean).join(" ");

export default JournalOfStillness;
