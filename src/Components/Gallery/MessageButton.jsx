import GlowButton from "../../Components/Passkey/Shared/GlowButton";
import { useBirthday } from "../../Components/context/BirthdayContext";

const MessageButton = () => {
  const { setScreen } = useBirthday();

  return (
    <div className="mt-16 text-center">
      <GlowButton
        onClick={() => setScreen("letterLoader")}
      >
        MESSAGE 💌
      </GlowButton>
    </div>
  );
};

export default MessageButton;