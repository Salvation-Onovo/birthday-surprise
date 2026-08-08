import { Swiper, SwiperSlide } from "swiper/react";

import {
  EffectCoverflow,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

import memories from "../../data/memories";
import GalleryCard from "./GalleryCard";

const GallerySwiper = () => {
  return (
    <div className="gallery-container">
      <Swiper
        modules={[
          EffectCoverflow,
          Mousewheel,
          Keyboard,
          Autoplay,
        ]}
        effect="coverflow"
        centeredSlides={true}
        grabCursor={true}
        loop={true}
        keyboard={{
          enabled: true,
        }}
        mousewheel={{
          forceToAxis: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        speed={900}

        slidesPerView={1.35}

        spaceBetween={20}

        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 180,
          modifier: 1.5,
          scale: 0.82,
          slideShadows: false,
        }}

        breakpoints={{
          0: {
            slidesPerView: 1.25,
            spaceBetween: 15,

            coverflowEffect: {
              rotate: 0,
              stretch: 0,
              depth: 140,
              modifier: 1.5,
              scale: 0.82,
              slideShadows: false,
            },
          },

          480: {
            slidesPerView: 1.35,
            spaceBetween: 18,

            coverflowEffect: {
              rotate: 0,
              stretch: 0,
              depth: 160,
              modifier: 1.5,
              scale: 0.84,
              slideShadows: false,
            },
          },

          640: {
            slidesPerView: 1.6,
            spaceBetween: 25,

            coverflowEffect: {
              rotate: 0,
              stretch: 0,
              depth: 180,
              modifier: 1.6,
              scale: 0.86,
              slideShadows: false,
            },
          },

          768: {
            slidesPerView: 2,
            spaceBetween: 30,

            coverflowEffect: {
              rotate: 0,
              stretch: 0,
              depth: 220,
              modifier: 1.8,
              scale: 0.86,
              slideShadows: false,
            },
          },

          1024: {
            slidesPerView: 2.5,
            spaceBetween: 40,

            coverflowEffect: {
              rotate: 0,
              stretch: 0,
              depth: 260,
              modifier: 2,
              scale: 0.88,
              slideShadows: false,
            },
          },
        }}

        className="gallerySwiper"
      >
        {memories.map((memory) => (
          <SwiperSlide
            key={memory.id}
            className="gallerySlide"
          >
            <GalleryCard memory={memory} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GallerySwiper;