import { motion } from "framer-motion";

const BirthdayTitle = () => {
  return (
    <motion.h1
      initial={{
        opacity: 0,
        y: -30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className="
      lg:text-6xl
      md:text-5xl
      text-5xl
      font-serif
      text-pink-200
      text-center
      drop-shadow-[0_0_30px_#ff5f95]
      mt-8
      "
    >
      Happy Birthday My Girl 🎀
    </motion.h1>
  );
};

export default BirthdayTitle;