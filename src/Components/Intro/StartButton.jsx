import { motion } from "framer-motion";
import { useBirthday } from "../../Components/context/BirthdayContext";

const StartButton = () => {

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

      onClick={() => setScreen("age")}

      className="
      mt-12
      px-14
      py-4
      rounded-full
      bg-gradient-to-r
      from-pink-600
      to-rose-700
      text-white
      tracking-[4px]
      text-xl
      font-semibold
      "
    >

      START ✨

    </motion.button>

  );
};

export default StartButton;