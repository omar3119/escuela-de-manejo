import NavMenu from "./NavMenu";
const Menu = ({ isOpen, isClose }) => {
  return (
    <div
      className={`h-screen absolute inset-0 z-100 transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 visible" : "opacity-0 hidden"}`}
    >
      <div
        onClick={isClose}
        className={` h-screen absolute z-100 top-0 inset-0 bg-black/60 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 hidden"
        }`}
      ></div>
      <aside
        className={`w-[80%]  absolute top-0 right-0 h-screen z-100 transform transition-transform duration-400 ease-in-out ${
          isOpen ? "translate-x-0 " : "translate-x-full hidden"
        }`}
      >
        <NavMenu isClose={isClose} />
      </aside>
    </div>
  );
};

export default Menu;
