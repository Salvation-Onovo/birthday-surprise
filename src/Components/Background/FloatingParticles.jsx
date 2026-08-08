import { motion } from "framer-motion";

const particles = Array.from({ length: 40 });

const FloatingParticles = () => {
  return (
    <>
      {particles.map((_, index) => (
        <motion.span
          key={index}
          className="absolute rounded-full bg-white"
          style={{
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            repeat: Infinity,
            duration: 3 + Math.random() * 5,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </>
  );
};

export default FloatingParticles;