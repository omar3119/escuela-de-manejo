const Header = ({ children }) => {
  return (
    <header className="w-full bg-white border-b-2 border-[#e8ecf0] flex justify-center">
      <div className="relative z-50 flex w-full items-center justify-between bg-white px-6 py-3 lg:max-w-5xl">
        <h2 className="text-primary font-bold text-xl">esKairos</h2>
        {children}
      </div>
    </header>
  );
};

export default Header;
