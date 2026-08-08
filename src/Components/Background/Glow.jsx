import { motion } from "framer-motion";

const circles = [
  {
    size: 450,
    left: "-10%",
    top: "-10%",
    color: "bg-pink-600/20",
  },
  {
    size: 350,
    right: "-5%",
    bottom: "-5%",
    color: "bg-red-500/20",
  },
];

const Glow = () => {
  return (
    <>
      {circles.map((circle, index) => (
        <motion.div
          key={index}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            repeat: Infinity,
            duration: 6,
          }}
          className={`absolute rounded-full blur-[120px] ${circle.color}`}
          style={{
            width: circle.size,
            height: circle.size,
            left: circle.left,
            right: circle.right,
            top: circle.top,
            bottom: circle.bottom,
          }}
        />
      ))}
    </>
  );
};

export default Glow;