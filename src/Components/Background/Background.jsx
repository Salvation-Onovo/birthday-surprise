import GradientLayer from "./GradientLayer";
import GlowOrb from "./GlowOrb";
import FloatingParticles from "./FloatingParticles";
import NoiseOverlay from "./NoiseOverlay";

const Background = () => {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">
      <GradientLayer />
      <GlowOrb />
      <FloatingParticles />
      <NoiseOverlay />
    </div>
  );
};

export default Background;
