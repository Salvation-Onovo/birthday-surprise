import { motion } from "framer-motion";

const Envelope = () => {
  return (
    <motion.div
      animate={{
        rotate: [0, -2, 2, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
      className="relative w-56 h-40 mx-auto"
    >
      {/* Body */}
      <div className="absolute inset-0 bg-pink-200 rounded-xl shadow-2xl" />

      {/* Flap */}
      <motion.div
        animate={{
          rotateX: [0, -30, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        style={{
          transformOrigin: "top",
        }}
        className="
        absolute
        top-0
        left-0
        right-0
        h-24
        bg-pink-300
        clip-path-triangle
        "
      />

      {/* Letter */}
      <motion.div
        animate={{
          y: [-5, -25, -5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="
        absolute
        left-5
        right-5
        bottom-3
        h-28
        rounded-lg
        bg-white
        "
      />
    </motion.div>
  );
};

export default Envelope;