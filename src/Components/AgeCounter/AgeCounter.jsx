import PageTransition from "../Passkey/Shared/PageTransition";
import BirthdayTitle from "./BirthdayTitle";
import Character from "./Character";
import CounterGrid from "./CounterGrid";
import NextButton from "./NextButton";
import { calculateAge } from "./calculateAge";

const AgeCounter = () => {
  // Change this to the birthday you want to celebrate
  const birthday = "2006-08-09";

  const age = calculateAge(birthday);

  return (
    <PageTransition>
      <div className="min-h-screen flex justify-center items-center p-4">
        <div className="text-center">
          <Character />

          <BirthdayTitle />

          <p
            className="
          mt-6
          text-pink-300
          italic
          "
          >
            You have completed
          </p>

          <CounterGrid age={age} />

          <NextButton />
        </div>
      </div>
    </PageTransition>
  );
};

export default AgeCounter;
