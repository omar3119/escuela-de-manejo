import { RiMenu2Line } from "react-icons/ri";
import NavMenu from "./NavMenu";

const Navbar = ({ toggleMenu }) => {
  return (
    <nav className="ml-auto flex h-full w-auto items-center justify-end">
      <RiMenu2Line
        onClick={toggleMenu}
        className="text-2xl cursor-pointer lg:hidden"
      />
      <div className="hidden lg:block">
        <NavMenu />
      </div>
    </nav>
  );
};

export default Navbar;
