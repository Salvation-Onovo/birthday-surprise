import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useBirthday } from "../../Components/context/BirthdayContext";

const Loader = () => {
  const { setScreen } = useBirthday();

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);

          setTimeout(() => {
            setScreen("passkey");
          }, 500);

          return 100;
        }

        return prev + 1;
      });
    }, 30);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center">
        <img
          src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHFzanRmd29wcjR2cHhoOHV6cDBxMDcyemx6OHBveDVrYjdqMzV2ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WTKxB4Y1RYxwyWZp5e/giphy.gif"
          className="w-28 h-28 mx-auto rounded-full"
        />

        <h2
          className="
          text-3xl
          mt-8
          text-pink-200
          tracking-widest
          font-serif
          "
        >
          Loading something special...
        </h2>

        <div
          className="
          mt-8
          w-80
          h-2
          bg-zinc-900
          rounded-full
          overflow-hidden
          "
        >
          <motion.div
            animate={{
              width: `${progress}%`,
            }}
            className="h-full bg-pink-500"
          />
        </div>

        <p className="mt-3 text-pink-400">JUST FOR YOU</p>
      </div>
    </motion.div>
  );
};

export default Loader;
