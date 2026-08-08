import AnimatedCounter from "./AnimatedCounter";

const CounterCard = ({ value, label }) => {
  return (
    <div className="text-center">

      <AnimatedCounter
        end={value}
        duration={2500}
        className="
          text-7xl
          font-bold
          text-pink-200
          drop-shadow-[0_0_20px_#ff4d88]
        "
      />

      <p
        className="
          mt-3
          uppercase
          tracking-[4px]
          text-pink-300
        "
      >
        {label}
      </p>

    </div>
  );
};

export default CounterCard;