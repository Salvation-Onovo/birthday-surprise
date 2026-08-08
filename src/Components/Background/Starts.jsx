import { motion } from "framer-motion";

const Stars = () => {
  return (
    <>
      {[...Array(80)].map((_, i) => (
        <motion.span
          key={i}
          animate={{
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            repeat: Infinity,
            duration: 2 + Math.random() * 4,
          }}
          className="absolute rounded-full bg-white"
          style={{
            width: 2,
            height: 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </>
  );
};

export default Stars;