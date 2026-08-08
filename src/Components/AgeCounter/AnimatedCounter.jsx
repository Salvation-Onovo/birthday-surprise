import { useEffect, useState } from "react";

const AnimatedCounter = ({
  end,
  duration = 2000,
  className = "",
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    if (end === 0) {
      setCount(0);
      return;
    }

    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <span className={className}>
      {count}
    </span>
  );
};

export default AnimatedCounter;