import PageTransition from "./Shared/PageTransition";
import Profile from "../../assets/images/profile.jpeg";

const Avatar = ({ openModal }) => {
  return (
    <PageTransition>
      <button
        onClick={openModal}
        className="w-20 h-20 items-center justify-center flex rounded-full overflow-hidden
                   border-4 border-pink-500 mx-auto hover:scale-110 transition"
      >
        <img src={Profile} className="w-full h-full object-cover" />
      </button>
    </PageTransition>
  );
};

export default Avatar;
