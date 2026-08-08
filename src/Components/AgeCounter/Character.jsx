import { motion } from "framer-motion";

const Character = () => {
  return (
    <motion.img
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
      src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzh3Y2plaDZta3l0bG4xZGt1ejRlMHg0bjgxNXNsd2sxM3JnNHg0ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/PgiNMz22RqkgKxZHw9/giphy.gif"
      className="w-32 h-32 rounded-full mx-auto"
    />
  );
};

export default Character;
