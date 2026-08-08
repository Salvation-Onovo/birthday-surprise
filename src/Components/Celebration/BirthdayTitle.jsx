import { motion } from "framer-motion";

const BirthdayTitle = () => {
  return (
    <motion.h1
      initial={{
        scale: 0,
      }}
      animate={{
        scale: 1,
      }}
      transition={{
        type: "spring",
        stiffness: 90,
      }}
      className="
      lg:text-6xl
      md:text-3xl
      text-4xl
      font-serif
      text-pink-200
      drop-shadow-[0_0_30px_#ff4d88]
      "
    >
      🎉 Happy Birthday 🎉
    </motion.h1>
  );
};

export default BirthdayTitle;