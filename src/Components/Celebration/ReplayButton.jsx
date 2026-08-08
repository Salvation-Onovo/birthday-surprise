import GlowButton from "../../Components/Passkey/Shared/GlowButton";
import { useBirthday } from "../../Components/context/BirthdayContext";

const ReplayButton = () => {
  const { setScreen } = useBirthday();

  return (
    <GlowButton
      className="mt-10"
      onClick={() => setScreen("loader")}
    >
      🔄 Replay
    </GlowButton>
  );
};

export default ReplayButton;