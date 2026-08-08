import { useEffect, useRef } from "react";

const MusicPlayer = () => {
  const audio = useRef(null);

  useEffect(() => {
    audio.current?.play().catch(() => {
      // Browser may block autoplay until user interaction.
    });
  }, []);

  return (
    <audio
      ref={audio}
      src="/audio/Birthday.mp3"
      loop
    />
  );
};

export default MusicPlayer;