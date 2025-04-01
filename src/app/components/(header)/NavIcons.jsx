import { CiSearch } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";

const NavIcons = () => {
  return (
    <div className="nav-icons flex gap-2.5">
      <CiSearch size={25} />
      <p>|</p>
      <FiShoppingBag size={25} />
    </div>
  );
};

export default NavIcons;
