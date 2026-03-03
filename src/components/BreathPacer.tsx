import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wind, Play, Square, Settings2, RefreshCw } from "lucide-react";

const techniques = {
  calm: { name: "Calm", inhale: 4, hold: 2, exhale: 6, color: "bg-blue-400" },
  box: {
    name: "Box",
    inhale: 4,
    hold: 4,
    exhale: 4,
    holdOut: 4,
    color: "bg-red-vibrant",
  },
  power: { name: "Power", inhale: 1, exhale: 1, color: "bg-orange-400" },
};

const BreathPacer = () => {
  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState("calm");
  const [phase, setPhase] = useState("Get Ready"); // Inhale, Hold, Exhale
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer;
    if (isActive) {
      const current = techniques[mode];

      timer = setInterval(() => {
        setCount((prev) => {
          // Logic for switching phases
          if (phase === "Inhale" && prev >= current.inhale) {
            setPhase(current.hold ? "Hold" : "Exhale");
            return 1;
          }
          if (phase === "Hold" && prev >= current.hold) {
            setPhase("Exhale");
            return 1;
          }
          if (phase === "Exhale" && prev >= current.exhale) {
            if (current.holdOut) {
              setPhase("Pause");
              return 1;
            }
            setPhase("Inhale");
            return 1;
          }
          if (phase === "Pause" && prev >= current.holdOut) {
            setPhase("Inhale");
            return 1;
          }
          if (phase === "Get Ready") {
            setPhase("Inhale");
            return 1;
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      setPhase("Get Ready");
      setCount(0);
    }
    return () => clearInterval(timer);
  }, [isActive, phase, mode]);

  return (
    <div className="min-h-screen bg-[#0F0506] text-white flex flex-col items-center justify-center p-6">
      {/* Header Info */}
      <div className="absolute top-24 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-red-vibrant text-[10px] uppercase tracking-[0.4em] mb-2 block"
        >
          Active Meditation
        </motion.span>
        <h1 className="font-display text-4xl font-light italic">
          The Rhythm of Life
        </h1>
      </div>

      {/* The Pacer Visual */}
      <div className="relative flex items-center justify-center w-full max-w-md aspect-square">
        {/* Outer Glows */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: phase === "Inhale" || phase === "Hold" ? 1.5 : 0.8,
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration:
                  phase === "Inhale"
                    ? techniques[mode].inhale
                    : techniques[mode].exhale,
                ease: "easeInOut",
              }}
              className={`absolute inset-0 rounded-full blur-[80px] ${techniques[mode].color} opacity-20`}
            />
          )}
        </AnimatePresence>

        {/* Main Geometric Shape */}
        <motion.div
          animate={{
            scale: phase === "Inhale" || phase === "Hold" ? 1.2 : 0.7,
            rotate: isActive ? 180 : 0,
            borderRadius: phase === "Hold" ? "40%" : "50%",
          }}
          transition={{
            duration:
              phase === "Inhale"
                ? techniques[mode].inhale
                : techniques[mode].exhale,
            ease: "easeInOut",
          }}
          className={`w-64 h-64 border border-white/20 backdrop-blur-3xl flex flex-col items-center justify-center relative z-10 overflow-hidden`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
          <span className="text-4xl font-display font-light mb-2 relative z-10">
            {count}
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/50 relative z-10">
            {phase}
          </span>
        </motion.div>
      </div>

      {/* Controls */}
      <div className="mt-16 flex flex-col items-center gap-12 w-full max-w-sm">
        <div className="flex gap-4">
          {Object.keys(techniques).map((t) => (
            <button
              key={t}
              onClick={() => {
                setMode(t);
                setIsActive(false);
              }}
              className={`px-6 py-2 rounded-full text-[10px] uppercase tracking-widest border transition-all ${
                mode === t
                  ? "bg-white text-black border-white"
                  : "border-white/10 text-white/40 hover:border-white/30"
              }`}
            >
              {techniques[t].name}
            </button>
          ))}
        </div>

        <button
          onClick={() => setIsActive(!isActive)}
          className="w-20 h-20 rounded-full bg-red-vibrant flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-[0_0_30px_rgba(217,22,86,0.3)]"
        >
          {isActive ? (
            <Square size={24} />
          ) : (
            <Play size={24} className="ml-1" />
          )}
        </button>

        <p className="text-white/30 text-[10px] max-w-[200px] text-center leading-relaxed italic">
          {mode === "box"
            ? "Equal parts inhale, hold, exhale, hold for total nervous system reset."
            : "Extended exhalations to trigger the vagus nerve and lower cortisol."}
        </p>
      </div>
    </div>
  );
};

export default BreathPacer;
