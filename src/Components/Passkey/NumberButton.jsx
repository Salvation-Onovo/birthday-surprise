import { motion } from "framer-motion";

const NumberButton = ({ number, onClick }) => {
  return (
    <motion.button
      whileTap={{ scale: .9 }}
      whileHover={{ scale: 1.05 }}
      onClick={onClick}
      className="
      h-14
      rounded-xl
      bg-[#241417]
      hover:bg-[#38181e]
      text-2xl
      transition
      "
    >
      {number}
    </motion.button>
  );
};

export default NumberButton;