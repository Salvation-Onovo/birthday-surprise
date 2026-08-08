import { X } from "lucide-react";
import Profile from "../../assets/images/profile.jpeg";

const PasskeyModal = ({ close }) => {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
      <div
        className="
        bg-[#1b1013]
        rounded-3xl
        p-5
        w-87.5
        relative
        "
      >
        <button onClick={close} className="absolute right-4 top-4">
          <X />
        </button>

        <img
          src={Profile}
          className="
          rounded-2xl
          h-96
          w-full
          object-cover
          "
        />

        <h2
          className="
          text-center
          mt-5
          tracking-[6px]
          text-white
          "
        >
          PASSKEY = 2006
        </h2>
      </div>
    </div>
  );
};

export default PasskeyModal;
