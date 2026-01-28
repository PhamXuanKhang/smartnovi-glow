import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  color: "yellow" | "purple";
}

const generateParticles = (count: number): Particle[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 10 + 8,
    delay: Math.random() * 5,
    color: Math.random() > 0.5 ? "yellow" : "purple",
  }));
};

interface ParticleBackgroundProps {
  particleCount?: number;
  className?: string;
}

const ParticleBackground = ({ particleCount = 20, className = "" }: ParticleBackgroundProps) => {
  const particles = generateParticles(particleCount);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute rounded-full ${
            particle.color === "yellow" 
              ? "bg-primary/60" 
              : "bg-secondary/60"
          }`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            boxShadow: particle.color === "yellow"
              ? "0 0 10px hsl(43 96% 56% / 0.6), 0 0 20px hsl(43 96% 56% / 0.4)"
              : "0 0 10px hsl(270 91% 65% / 0.6), 0 0 20px hsl(270 91% 65% / 0.4)",
          }}
          animate={{
            y: [0, -100, -50, -150, 0],
            x: [0, 30, -20, 40, 0],
            opacity: [0.4, 1, 0.7, 1, 0.4],
            scale: [1, 1.2, 0.9, 1.1, 1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export { ParticleBackground };
