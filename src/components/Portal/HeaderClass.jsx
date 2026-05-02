import Header from "../Header";
import { FaArrowRightToBracket } from "react-icons/fa6";
const HeaderClass = ({closeSesion}) => {
  return (
    <Header>
      <div onClick={closeSesion} className="flex items-center gap-2">
        <FaArrowRightToBracket />
        <span>Salir</span>
      </div>
    </Header>
  );
};

export default HeaderClass;
