
import { useContext } from "react";
import { counterContext } from "../context/counterContext";


import { RiMenu2Line } from "react-icons/ri";
import NavMenu from "./NavMenu";

const Navbar = ({ toggleMenu }) => {

  const{counter} = useContext(counterContext);
  return (
    <nav className="w-full relative bg-white px-6 py-3 z-50 lg:max-w-5xl">
      <div className="w-full h-full flex justify-between items-center ">
        <h2 className="text-primary font-bold text-xl">esKairos</h2>
        <RiMenu2Line
          onClick={toggleMenu}
          className="text-3xl cursor-pointer lg:hidden"
        />
        <div className="hidden lg:block">
          <NavMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
