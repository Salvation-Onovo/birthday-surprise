import { motion } from "framer-motion";

const GlowButton = ({
  children,
  onClick,
  className = "",
}) => {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
      animate={{
        boxShadow: [
          "0 0 15px #ff4d88",
          "0 0 35px #ff4d88",
          "0 0 15px #ff4d88",
        ],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
      onClick={onClick}
      className={`
        px-10
        py-4
        rounded-full
        bg-linear-to-r
        from-pink-600
        to-rose-700
        text-white
        font-semibold
        tracking-widest
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
};

export default GlowButton;