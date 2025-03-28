import Arrows from "./(hero)/(hero-text)/Arrows";
import HeroButton from "./(hero)/(hero-text)/HeroButton";
import HeroHeader from "./(hero)/(hero-text)/HeroHeader";

const HeroText = () => {
  return (
    <div className="HeroText">
      <HeroHeader />
      <HeroButton />
      <Arrows />
    </div>
  );
};

export default HeroText;
