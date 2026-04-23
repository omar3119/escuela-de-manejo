import FooterList from "./Home/FooterList";

const Footer = () => {
  return (
    <footer className="w-full bg-[#F1F5F9]  flex flex-col  lg:items-center">
      <div className="w-full px-6 py-4 lg:max-w-5xl">
        <h4 className="text-xl font-bold text-primary pt-10">
          The Kinetic Guardian{" "}
        </h4>
        <p className="text-[#64748B] mt-2 text-[14px]">
          Dominando el arte del impulso desde 2012. Nuestra misión es crear
          carreteras más seguras mediante una instrucción superior.
        </p>
        <div className="flex flex-col gap-6 mt-8 md:flex-row md:justify-between">
          <FooterList />
          <FooterList />
          <FooterList />
        </div>
      </div>
      <div className="w-full  border-t-2 border-t-[#E2E8F0] py-6 mt-8">
        <p className="text-[#64748B] text-[12px]  text-center  ">
          © 2023 The Kinetic Guardian. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
