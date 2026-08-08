import { motion } from "framer-motion";

const Subtitle = () => {
  return (
    <motion.p
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        delay: .8,
      }}
      className="
      text-center
      text-pink-100/80
      italic
      text-xl
      mt-10
      "
    >
      I made something special for you...
    </motion.p>
  );
};

export default Subtitle;