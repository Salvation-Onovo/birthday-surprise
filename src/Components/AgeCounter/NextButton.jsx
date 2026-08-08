import { motion } from "framer-motion";
import { useBirthday } from "../../Components/context/BirthdayContext";

const NextButton = () => {

  const { setScreen } = useBirthday();

  return (
    <motion.button
      whileHover={{
        scale: 1.08,
      }}
      whileTap={{
        scale: .95,
      }}
      animate={{
        boxShadow: [
          "0 0 15px #ff4d88",
          "0 0 40px #ff4d88",
          "0 0 15px #ff4d88",
        ],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
      onClick={() => setScreen("gallery")}
      className="
      mt-20
      px-16
      py-5
      rounded-full
      bg-gradient-to-r
      from-rose-700
      to-pink-600
      text-xl
      tracking-[6px]
      "
    >
      NEXT ✨
    </motion.button>
  );
};

export default NextButton;