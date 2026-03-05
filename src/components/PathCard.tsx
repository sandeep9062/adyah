import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";

interface PathCardProps {
  title: string;
  subtitle?: string;
  image: string;
  to: string;
  index: number;
}

const PathCard = ({ title, subtitle, image, to, index }: PathCardProps) => {
  const [isTouched, setIsTouched] = useState(false);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.4, once: false });

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px)");
    const update = () => setIsMobileOrTablet(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const showEffect = isTouched || (inView && isMobileOrTablet);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 1.02 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
    >
      <Link
        to={to}
        className={`group block relative overflow-hidden rounded-lg aspect-[4/5] shadow-card ring-1 ring-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-vibrant focus-visible:ring-offset-2 focus-visible:ring-offset-background ${showEffect ? "effect-active" : ""}`}
        onTouchStart={() => setIsTouched(true)}
        onTouchEnd={() => setIsTouched(false)}
        onTouchCancel={() => setIsTouched(false)}
        onMouseLeave={() => setIsTouched(false)}
      >
        <img
          src={image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-[.effect-active]:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 overlay-maroon transition-opacity duration-500 group-hover:opacity-90 group-[.effect-active]:opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 group-[.effect-active]:opacity-100 transition-opacity duration-500 pointer-events-none" aria-hidden />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <span className="text-[10px] uppercase tracking-[0.25em] text-primary-foreground/70 font-body font-semibold">
            Path
          </span>
          <h3 className="font-display text-3xl font-semibold text-primary-foreground tracking-wide mt-1">
            {title}
          </h3>
          {subtitle && (
            <p className="font-body text-sm text-primary-foreground/80 mt-1">
              {subtitle}
            </p>
          )}
          <div className="mt-3 flex items-center gap-2 text-red-vibrant font-body text-sm uppercase tracking-widest opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0.5 group-[.effect-active]:opacity-100 group-[.effect-active]:translate-y-0 group-[.effect-active]:translate-x-0.5">
            Explore →
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default PathCard;
