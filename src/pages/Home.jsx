import Background from "../Components/Background/Background";
import Loader from "../Components/Loader/Loader";
import { useBirthday } from "../Components/context/BirthdayContext";
import Passkey from "../Components/Passkey/Passkey";
import Intro from "../Components/Intro/Intro";
import AgeCounter from "../Components/AgeCounter/AgeCounter";
import Gallery from "../Components/Gallery/Gallery";
import { AnimatePresence } from "framer-motion";
import LetterLoader from "../Components/Letter/LetterLoader";
import Letter from "../Components/Letter/Letter";
import Celebration from "../Components/Celebration/Celebration";
import MusicPlayer from "../Components/Celebration/MusicPlayer";

const Home = () => {
  const { screen } = useBirthday();
  return (
    <main className="relative overflow-hidden">
      <Background />
      <AnimatePresence mode="wait">
        {screen === "loader" && <Loader />}
        {screen === "passkey" && <Passkey />}
        <MusicPlayer />
        {screen === "intro" && <Intro />}
        {screen === "age" && <AgeCounter />}
        {screen === "gallery" && <Gallery />}
        {screen === "letterLoader" && <LetterLoader />}
        {screen === "letter" && <Letter />}
        {screen === "celebrate" && <Celebration />}
      </AnimatePresence>
    </main>
  );
};

export default Home;
