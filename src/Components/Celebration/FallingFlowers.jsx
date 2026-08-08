import { motion } from "framer-motion";

const flowers = Array.from({ length: 30 });

const FallingFlowers = () => {
  return (
    <>
      {flowers.map((_, index) => (
        <motion.div
          key={index}
          initial={{
            y: -100,
            x: Math.random() * window.innerWidth,
            rotate: 0,
          }}
          animate={{
            y: "120vh",
            rotate: 360,
          }}
          transition={{
            duration: 8 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 4,
          }}
          className="fixed text-3xl"
        >
          🌸
        </motion.div>
      ))}
    </>
  );
};

export default FallingFlowers;