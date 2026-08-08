import GlowButton from "../../Components/Passkey/Shared/GlowButton";
import { useBirthday } from "../../Components/context/BirthdayContext";

const CelebrateButton = () => {
  const { setScreen } = useBirthday();

  return (
    <div className="mt-10 text-center">
      <GlowButton
        onClick={() => setScreen("celebrate")}
      >
        🌸 Celebrate 🌸
      </GlowButton>
    </div>
  );
};

export default CelebrateButton;