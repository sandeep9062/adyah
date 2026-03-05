import { motion, useInView } from "framer-motion";
import { ReactNode, useRef, useState, useEffect } from "react";

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  width?: "fit-content" | "100%";
}

const SectionReveal = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  width = "100%",
}: SectionRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = () => setPrefersReducedMotion(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  const noMotion = prefersReducedMotion;

  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
    none: { y: 0, x: 0 },
  };

  const transition = noMotion
    ? { duration: 0, delay: 0 }
    : {
        duration: 1.2,
        delay,
        ease: [0.22, 1, 0.36, 1] as const,
        scale: { type: "spring" as const, damping: 25, stiffness: 100 },
      };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        position: "relative",
        width,
        overflow: direction === "none" ? "visible" : "hidden",
      }}
    >
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            ...directions[direction],
            scale: 0.98,
          },
          visible: {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
          },
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={transition}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default SectionReveal;
