import { useEffect } from "react";
import letter from "../../data/letter";
import useTyping from "../../Components/hooks/useTyping";
import Cursor from "./Cursor";

const Typewriter = ({ onFinish }) => {
  const { displayText, finished } = useTyping(letter, 35);

  useEffect(() => {
    if (finished) {
      onFinish?.();
    }
  }, [finished, onFinish]);

  return (
    <div
      className="
        whitespace-pre-line
        leading-8
        text-lg
        text-pink-100
        text-left
      "
    >
      {displayText}

      {!finished && <Cursor />}
    </div>
  );
};

export default Typewriter;