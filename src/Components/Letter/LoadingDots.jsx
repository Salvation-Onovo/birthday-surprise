import { motion } from "framer-motion";

const Dot = ({ delay }) => (
  <motion.span
    animate={{
      opacity: [0.2, 1, 0.2],
      y: [0, -5, 0],
    }}
    transition={{
      duration: 1,
      repeat: Infinity,
      delay,
    }}
    className="w-2 h-2 rounded-full bg-pink-300 inline-block mx-1"
  />
);

const LoadingDots = () => {
  return (
    <>
      <Dot delay={0} />
      <Dot delay={0.2} />
      <Dot delay={0.4} />
    </>
  );
};

export default LoadingDots;