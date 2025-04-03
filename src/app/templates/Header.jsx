import Logo from "../components/(header)/Logo";
import NavIcons from "../components/(header)/NavIcons";
import Navigation from "../components/(header)/Navigation";

const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <Logo />
      <Navigation />
      <NavIcons />
    </header>
  );
};

export default Header;
