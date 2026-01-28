import * as React from "react";
import { motion, type Transition } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  hover?: boolean;
  glow?: "yellow" | "purple" | "none";
  className?: string;
}

const GlassCard = ({ className, children, hover = true, glow = "none" }: GlassCardProps) => {
  const transition: Transition = { duration: 0.3, ease: "easeOut" };
  
  return (
    <motion.div
      whileHover={hover ? { scale: 1.02, y: -5 } : undefined}
      transition={transition}
      className={cn(
        "glass rounded-xl p-6 border-gradient",
        glow === "yellow" && "glow-yellow",
        glow === "purple" && "glow-purple",
        hover && "cursor-pointer",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export { GlassCard };
