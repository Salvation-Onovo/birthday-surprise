const Card = ({ children }) => {
  return (
    <div
      className="
      w-95
      rounded-4xl
      border
      border-[#4c2027]
      bg-[#140a0d]/80
      backdrop-blur-xl
      shadow-[0_0_40px_rgba(255,0,80,.15)]
      p-8
      "
    >
      {children}
    </div>
  );
};

export default Card;