import { useState } from "react";

import PageTransition from "../../Components/Passkey/Shared/PageTransition";
import LetterCard from "./LetterCard";
import Typewriter from "./Typewriter";
import CelebrateButton from "./CelebrateButton";

const Letter = () => {
  const [finished, setFinished] = useState(false);

  return (
    <PageTransition>
      <section
        className="
          min-h-screen
          w-full
          flex
          items-center
          justify-center
          px-4
          py-8
          overflow-hidden
        "
      >
        <LetterCard>
          <h1
            className="
              text-4xl
              sm:text-5xl
              font-serif
              text-center
              text-pink-200
              mb-8
              drop-shadow-[0_0_15px_rgba(255,80,140,0.5)]
            "
          >
            💌 A Letter For You
          </h1>

          <Typewriter
            onFinish={() => {
              setFinished(true);
            }}
          />

          {finished && (
            <CelebrateButton />
          )}
        </LetterCard>
      </section>
    </PageTransition>
  );
};

export default Letter;