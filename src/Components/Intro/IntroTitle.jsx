import { motion } from "framer-motion";

const IntroTitle = () => {
  return (
    <motion.h1
      initial={{
        opacity: 0,
        y: -40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
      }}
      className="
      lg:text-6xl
      md:text-5xl
      text-3xl
      flex-wrap
      font-serif
      text-center
      text-pink-200
      drop-shadow-[0_0_20px_rgba(255,120,160,.6)]
      "
    >
      It's Your Special Day 🌸
    </motion.h1>
  );
};

export default IntroTitle;