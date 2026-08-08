import CounterCard from "./CounterCard";

const CounterGrid = ({ age }) => {
  return (
    <div className="mt-16 grid grid-cols-3 gap-16">
      <CounterCard value={age.years} label="Years" />
      <CounterCard value={age.months} label="Months" />
      <CounterCard value={age.days} label="Days" />
    </div>
  );
};

export default CounterGrid;