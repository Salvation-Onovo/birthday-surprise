import { motion } from "framer-motion";

const FloatingPanda = () => {
  return (
    <motion.div
      animate={{
        y: [0, -12, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
      className="relative mt-10"
    >
      <div
        className="
        absolute
        inset-0
        rounded-full
        bg-pink-500
        blur-3xl
        opacity-30
        scale-125
        "
      />

      <img
        src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGU0c2RjcDZ4MzNwaTJzaDl2OXVkYWl6dmUzMTBndzhsMXNjNXdsMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Im6d35ebkCIiGzonjI/giphy.gif"
        className="
        relative
        w-36
        h-36
        rounded-full
        mx-auto
        "
      />
    </motion.div>
  );
};

export default FloatingPanda;