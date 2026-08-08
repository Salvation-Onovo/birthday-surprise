import { motion } from "framer-motion";

const orbs = [
  {
    size: 420,
    top: "-120px",
    left: "-120px",
    color: "#ff2f6d",
    duration: 8,
  },
  {
    size: 340,
    bottom: "-90px",
    right: "-90px",
    color: "#ff8d8d",
    duration: 10,
  },
];

const GlowOrb = () => {
  return (
    <>
      {orbs.map((orb, index) => (
        <motion.div
          key={index}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{
            repeat: Infinity,
            duration: orb.duration,
            ease: "easeInOut",
          }}
          className="absolute rounded-full blur-[120px]"
          style={{
            width: orb.size,
            height: orb.size,
            background: orb.color,
            top: orb.top,
            left: orb.left,
            bottom: orb.bottom,
            right: orb.right,
          }}
        />
      ))}
    </>
  );
};

export default GlowOrb;