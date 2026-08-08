import { Heart } from "lucide-react";
import { motion } from "framer-motion";

const GalleryCard = ({ memory }) => {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      className="
        relative
        w-full
        max-w-full
        overflow-hidden
        rounded-[30px]
        border
        border-pink-500/30
        bg-white/5
        backdrop-blur-xl
        shadow-[0_0_45px_rgba(255,70,130,.3)]
      "
    >
      {/* Heart */}
      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="
          absolute
          top-4
          right-4
          z-20
          rounded-full
          bg-pink-500
          p-3
          shadow-lg
        "
      >
        <Heart
          size={18}
          fill="white"
          color="white"
        />
      </motion.div>

      {/* Image */}
      <img
        src={memory.image}
        alt={memory.caption}
        className="
          block
          w-full
          h-80
          sm:h-90
          md:h-105
          lg:h-112.5
          object-cover
        "
      />

      {/* Caption */}
      <div className="p-5 sm:p-6">
        <p className="text-center text-sm sm:text-lg text-pink-100">
          {memory.caption}
        </p>
      </div>
    </motion.div>
  );
};

export default GalleryCard;