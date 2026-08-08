import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const FloatingHeart = () => {
  return (
    <motion.div
      animate={{
        y: [0, -15, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
      className="mb-10"
    >
      <Heart
        size={70}
        fill="#ff4d88"
        color="#ff4d88"
      />
    </motion.div>
  );
};

export default FloatingHeart;