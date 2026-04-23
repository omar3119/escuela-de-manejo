import ImageAbout from "../../assets/images/sobrenosotros.webp";

import HeroLayout from "../../Layout/HeroLayout";

import HeroMain from "../HeroMain";
const HeroAbout = () => {
  return (
    <HeroLayout>
      <div className="inline-block bg-[#DDE1FF] text-secondary font-semibold px-3 py-1 rounded-full mb-4">
        <span>Nuestra Misión</span>
      </div>

      <div className="w-full lg:flex lg:gap-20">
        <HeroMain
          title="Formando conductores seguros y confiados por 10 años"
          description="No solo te enseñamos a aprobar un examen; cultivamos los instintos de
          un guardián cinético. Nuestra década de excelencia se basa en la
          precisión, la paciencia y la filosofía de una conciencia vial total."
          colorTitle="text-primary"
          colorTitle2="text-secondary"
          colorText="text-[#444653]"
          textAlign="text-left"
        />

        <figure className="w-full mt-10 relative flex justify-center md:w-8/10 lg:w-300 ">
          <div className=" w-full h-full absolute -rotate-3 bg-primary rounded-4xl" />
          <img
            className="w-full  h-full rounded-4xl rotate-3 object-cover "
            src={ImageAbout}
            alt="Sobre nosotros"
          />
        </figure>
      </div>
    </HeroLayout>
  );
};

export default HeroAbout;
