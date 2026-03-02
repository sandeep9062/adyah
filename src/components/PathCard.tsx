import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface PathCardProps {
  title: string;
  image: string;
  to: string;
  index: number;
}

const PathCard = ({ title, image, to, index }: PathCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
    >
      <Link to={to} className="group block relative overflow-hidden rounded-lg aspect-[4/5] shadow-maroon">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 overlay-maroon transition-opacity duration-500 group-hover:opacity-90" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <h3 className="font-display text-3xl font-semibold text-primary-foreground tracking-wide">
            {title}
          </h3>
          <div className="mt-3 flex items-center gap-2 text-red-vibrant font-body text-sm uppercase tracking-widest opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
            Explore →
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default PathCard;
