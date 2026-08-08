const Display = ({ value }) => {
  return (
    <div
      className="
      bg-black/60
      rounded-xl
      h-16
      flex
      justify-center
      items-center
      tracking-[20px]
      text-4xl
      text-white
      mb-8
      "
    >
      {value.padEnd(4, "•")}
    </div>
  );
};

export default Display;