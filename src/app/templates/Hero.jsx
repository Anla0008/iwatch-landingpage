import HeroText from "../components/HeroText";
import HeroImg from "../components/(hero)/HeroImg";

const Hero = () => {
  return (
    <div className="Hero grid grid-cols-1 gap-5 md:grid-cols-2 mt-8">
      <HeroText />
      <HeroImg />
    </div>
  );
};

export default Hero;
