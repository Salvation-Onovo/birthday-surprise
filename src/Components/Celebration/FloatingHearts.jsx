import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const hearts = Array.from({ length: 20 });

const FloatingHearts = () => {
  return (
    <>
      {hearts.map((_, index) => (
        <motion.div
          key={index}
          initial={{
            y: "100vh",
            opacity: 0,
            x: Math.random() * window.innerWidth,
          }}
          animate={{
            y: "-20vh",
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
          className="fixed text-pink-400"
        >
          <Heart fill="currentColor" size={20} />
        </motion.div>
      ))}
    </>
  );
};

export default FloatingHearts;