import IntroTitle from "./IntroTitle";
import FloatingPanda from "./FloatingPanda";
import Subtitle from "./Subtitle";
import StartButton from "./StartButton";
import PageTransition from "../Passkey/Shared/PageTransition";
import MusicPlayer from "../Celebration/MusicPlayer";

const Intro = () => {
  return (
    <PageTransition>
      <MusicPlayer /> 
      <div
        className="
      min-h-screen
      flex
      justify-center
      items-center
      p-4
      "
      >
        <div className="text-center">
          <IntroTitle />

          <FloatingPanda />

          <Subtitle />

          <StartButton />
        </div>
      </div>
    </PageTransition>
  );
};

export default Intro;
