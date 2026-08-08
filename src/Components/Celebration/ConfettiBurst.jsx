import { useEffect } from "react";
import confetti from "canvas-confetti";

const ConfettiBurst = () => {
  useEffect(() => {
    const duration = 6000;
    const end = Date.now() + duration;

    const timer = setInterval(() => {
      if (Date.now() > end) {
        clearInterval(timer);
        return;
      }

      confetti({
        particleCount: 6,
        startVelocity: 30,
        spread: 360,
        origin: {
          x: Math.random(),
          y: Math.random() - 0.2,
        },
      });
    }, 200);

    return () => clearInterval(timer);
  }, []);

  return null;
};

export default ConfettiBurst;