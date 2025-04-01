import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { LiaLongArrowAltLeftSolid } from "react-icons/lia";

const Arrows = () => {
  return (
    <div className="arrows flex items-center justify-start gap-2.5">
      <LiaLongArrowAltLeftSolid className="text-white" />
      <p className="text-white">1</p>
      <LiaLongArrowAltRightSolid className="text-white" />
    </div>
  );
};

export default Arrows;
