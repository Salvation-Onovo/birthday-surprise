import { motion } from "framer-motion";

const GalleryFloat = ({ children }) => {
  return (
    <motion.div
      animate={{
        y: [0, -12, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
      }}
    >
      {children}
    </motion.div>
  );
};

export default GalleryFloat;