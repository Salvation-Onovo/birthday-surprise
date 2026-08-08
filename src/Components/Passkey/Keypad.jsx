import NumberButton from "./NumberButton";
import { FaDeleteLeft } from "react-icons/fa6";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Keypad = ({ addNumber, removeNumber }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {numbers.map((number) => (
        <NumberButton
          key={number}
          number={number}
          onClick={() => addNumber(number)}
        />
      ))}

      <button
        onClick={removeNumber}
        className="h-14 rounded-xl bg-[#241417]"
      >
        <FaDeleteLeft className="mx-auto text-xl" />
      </button>

      <NumberButton number={0} onClick={() => addNumber(0)} />

      <div />
    </div>
  );
};

export default Keypad;
