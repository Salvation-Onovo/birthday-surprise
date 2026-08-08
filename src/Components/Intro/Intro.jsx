import IntroTitle from "./IntroTitle";
import FloatingPanda from "./FloatingPanda";
import Subtitle from "./Subtitle";
import StartButton from "./StartButton";
import PageTransition from "../Passkey/Shared/PageTransition";


const Intro = () => {
  return (
    <PageTransition>
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
