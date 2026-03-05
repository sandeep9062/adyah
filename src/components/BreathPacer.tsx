import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Square } from "lucide-react";

const techniques = {
  calm: { name: "Calm", inhale: 4, hold: 2, exhale: 6, color: "bg-red-vibrant" },
  box: {
    name: "Box",
    inhale: 4,
    hold: 4,
    exhale: 4,
    holdOut: 4,
    color: "bg-red-vibrant",
  },
  power: { name: "Power", inhale: 1, exhale: 1, color: "bg-red-vibrant" },
};

const getPhaseDuration = (mode: keyof typeof techniques, phase: string): number => {
  const t = techniques[mode] as { inhale: number; hold?: number; exhale: number; holdOut?: number };
  if (phase === "Inhale") return t.inhale;
  if (phase === "Hold") return t.hold ?? 1;
  if (phase === "Exhale") return t.exhale;
  if (phase === "Pause") return t.holdOut ?? 1;
  return 1;
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
    <div className="bg-maroon-deep text-white flex flex-col items-center py-12 md:py-16 px-6 overflow-hidden">
      {/* Header Info */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-red-vibrant text-[10px] uppercase tracking-[0.4em] mb-2 block font-bold"
        >
          Active Meditation
        </motion.span>
        <h2 className="font-display text-2xl md:text-3xl font-light italic">
          The Rhythm of Life
        </h2>
      </motion.div>

      {/* The Pacer Visual */}
      <div className="relative flex items-center justify-center w-full max-w-[280px] aspect-square">
        {/* Outer Glows */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: phase === "Inhale" || phase === "Hold" ? 1.5 : 0.8,
                opacity: [0.15, 0.35, 0.15],
              }}
              transition={{
                duration:
                  phase === "Inhale"
                    ? techniques[mode].inhale
                    : techniques[mode].exhale,
                ease: "easeInOut",
              }}
              className={`absolute inset-0 rounded-full blur-[80px] ${techniques[mode].color} opacity-25`}
            />
          )}
        </AnimatePresence>

        {/* Idle breath pulse when not active */}
        {!isActive && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            aria-hidden
          >
            <motion.div
              className="w-44 h-44 sm:w-52 sm:h-52 rounded-full border border-red-vibrant/25"
              animate={{ scale: [1, 1.06, 1], opacity: [0.4, 0.6, 0.4] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        )}

        {/* Main Geometric Shape */}
        <motion.div
          animate={{
            scale: isActive
              ? phase === "Inhale" || phase === "Hold"
                ? 1.15
                : 0.75
              : 1,
            rotate: isActive ? 180 : 0,
            borderRadius: phase === "Hold" ? "40%" : "50%",
          }}
          transition={{
            duration: isActive
              ? phase === "Inhale"
                ? techniques[mode].inhale
                : techniques[mode].exhale
              : 0.8,
            ease: "easeInOut",
          }}
          className="w-44 h-44 sm:w-52 sm:h-52 border border-white/25 backdrop-blur-3xl flex flex-col items-center justify-center relative z-10 overflow-hidden bg-white/5"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-red-vibrant/10 to-transparent" />
          <AnimatePresence mode="wait">
            <motion.span
              key={count}
              initial={{ scale: 1.2, opacity: 0.8 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="text-3xl sm:text-4xl font-display font-light mb-1 relative z-10 tabular-nums"
            >
              {count}
            </motion.span>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.span
              key={phase}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.25 }}
              className="text-[9px] uppercase tracking-[0.2em] text-white/60 relative z-10"
            >
              {phase}
            </motion.span>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Controls */}
      <motion.div
        className="mt-8 flex flex-col items-center gap-6 w-full max-w-sm"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.15 }}
      >
        <div className="flex gap-3">
          {(Object.keys(techniques) as (keyof typeof techniques)[]).map((t, i) => (
            <motion.button
              key={t}
              onClick={() => {
                setMode(t);
                setIsActive(false);
              }}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.05 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className={`px-6 py-2.5 rounded-full text-[10px] uppercase tracking-widest border transition-colors min-h-[44px] flex items-center ${
                mode === t
                  ? "bg-red-vibrant text-white border-red-vibrant shadow-[0_0_20px_rgba(220,38,38,0.3)]"
                  : "border-white/25 text-white/70 hover:border-red-vibrant/50 hover:text-white"
              }`}
            >
              {techniques[t].name}
            </motion.button>
          ))}
        </div>

        <motion.button
          onClick={() => setIsActive(!isActive)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          animate={isActive ? { boxShadow: ["0 8px 32px rgba(0,0,0,0.3)", "0 0 28px rgba(220,38,38,0.4)", "0 8px 32px rgba(0,0,0,0.3)"] } : {}}
          transition={{ duration: 2, repeat: isActive ? Infinity : 0 }}
          className="w-16 h-16 rounded-full bg-red-vibrant flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-vibrant focus-visible:ring-offset-2 focus-visible:ring-offset-maroon-deep"
        >
          {isActive ? (
            <Square size={24} />
          ) : (
            <Play size={24} className="ml-1" />
          )}
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-white/50 text-[10px] max-w-[200px] text-center leading-relaxed italic font-body"
        >
          {mode === "box"
            ? "Equal parts inhale, hold, exhale, hold for total nervous system reset."
            : "Extended exhalations to trigger the vagus nerve and lower cortisol."}
        </motion.p>
      </motion.div>
    </div>
  );
};

export default BreathPacer;
