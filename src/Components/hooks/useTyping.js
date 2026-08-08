import { useEffect, useState } from "react";

const useTyping = (text = "", speed = 35) => {
  const [displayText, setDisplayText] = useState("");
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    setDisplayText("");
    setFinished(false);

    if (!text) {
      setFinished(true);
      return;
    }

    let index = 0;

    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayText((previous) => {
          return previous + text.charAt(index);
        });

        index++;
      } else {
        clearInterval(timer);
        setFinished(true);
      }
    }, speed);

    return () => {
      clearInterval(timer);
    };
  }, [text, speed]);

  return {
    displayText,
    finished,
  };
};

export default useTyping;