import logo from "../assets/images/logo.png";

const Header = ({ children }) => {
  return (
    <header className="w-full bg-white border-b-2 border-[#e8ecf0] flex justify-center">
      <div className="relative z-50 flex w-full items-center justify-between bg-white px-6 py-3 lg:max-w-5xl">
        <div className="flex items-center gap-2">
        <img src={logo} alt="logo" className="w-8 h-8 object-cover lg:w-12 lg:h-12" />
        <h2 className="text-primary font-bold lg:text-2xl text-xl">esKairos</h2>
        </div>
        {children}
      </div>
    </header>
  );
};

export default Header;
