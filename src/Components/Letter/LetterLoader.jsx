import { useEffect } from "react";

import { useBirthday } from "../../Components/context/BirthdayContext";

import PageTransition from "../../Components/Passkey/Shared/PageTransition";

import FloatingHeart from "./FloatingHeart";

import Envelope from "./Envelope";

import LoadingDots from "./LoadingDots";

const LetterLoader = () => {
  const { setScreen } = useBirthday();

  useEffect(() => {
    const timer = setTimeout(() => {
      setScreen("letter");
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <PageTransition>
      <div
        className="
min-h-screen
flex
justify-center
items-center
"
      >
        <div className="text-center">
          <FloatingHeart />

          <Envelope />

          <h1
            className="
mt-14
text-5xl
text-pink-200
font-serif
"
          >
            Preparing your message
          </h1>

          <p
            className="
mt-5
text-pink-300
"
          >
            Please wait
            <LoadingDots />
          </p>
        </div>
      </div>
    </PageTransition>
  );
};

export default LetterLoader;
