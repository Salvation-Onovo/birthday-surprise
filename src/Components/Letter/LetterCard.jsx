import { motion } from "framer-motion";

const LetterCard = ({ children }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
        scale: 0.95,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      className="
        w-full
        max-w-3xl
        rounded-[30px]
        bg-[#140a0d]/90
        backdrop-blur-xl
        border
        border-pink-500/30
        p-6
        sm:p-8
        md:p-10
        shadow-[0_0_40px_rgba(255,60,120,0.3)]
      "
    >
      {children}
    </motion.div>
  );
};

export default LetterCard;