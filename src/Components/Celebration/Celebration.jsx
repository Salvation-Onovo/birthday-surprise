import PageTransition from "../../Components/Passkey/Shared/PageTransition";

import BirthdayTitle from "./BirthdayTitle";
import FloatingHearts from "./FloatingHearts";
import FallingFlowers from "./FallingFlowers";
import ConfettiBurst from "./ConfettiBurst";
import ReplayButton from "./ReplayButton";
// import MusicPlayer from "./MusicPlayer";

const Celebration = () => {
  return (
    <PageTransition>
      <section
        className="
        relative
        min-h-screen
        overflow-hidden
        flex
        justify-center
        items-center
        "
      >
        {/* <MusicPlayer /> */}

        <ConfettiBurst />

        <FloatingHearts />

        <FallingFlowers />

        <div className="text-center z-20">

          <BirthdayTitle />

          <p
            className="
            mt-6
            text-pink-200
            text-xl
            "
          >
            Wishing you happiness, love and countless beautiful memories.
          </p>

          <ReplayButton />

        </div>
      </section>
    </PageTransition>
  );
};

export default Celebration;