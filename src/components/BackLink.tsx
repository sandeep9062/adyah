import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface BackLinkProps {
  className?: string;
}

const BackLink = ({ className }: BackLinkProps) => {
  return (
    <Link
      to="/"
      className={cn(
        "inline-flex min-h-[44px] items-center text-sm uppercase tracking-[0.2em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-vibrant focus-visible:ring-offset-2 rounded",
        "text-maroon-deep/70 hover:text-red-vibrant",
        className
      )}
    >
      ← Back to Home
    </Link>
  );
};

export default BackLink;
