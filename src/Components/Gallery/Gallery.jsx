import PageTransition from "../../Components/Passkey/Shared/PageTransition";
import GalleryTitle from "./GalleryTitle";
import GallerySwiper from "./GallerySwiper";
import MessageButton from "./MessageButton";

const Gallery = () => {
  return (
    <PageTransition>
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6 py-20">
        <GalleryTitle />

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 rounded-full bg-pink-500/10 blur-[150px] pointer-events-none" />
        <GallerySwiper />

        <MessageButton />
      </section>
    </PageTransition>
  );
};

export default Gallery;
