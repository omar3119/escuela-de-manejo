import ImageAbout from "../../assets/images/imgHeroAbout.png";

import HeroLayout from "../../Layout/HeroLayout";

import HeroMain from "../HeroMain";
const HeroAbout = () => {
  return (
    <div className="w-full relative  text-white md:flex md:items-center md:justify-center">
      <div className="absolute top-0 w-full h-full bg-[#000000a8] bg-linear-to-r from-primary via-[#0a122bbd] to-[#04132900] z-10"></div>
      <img
        src={ImageAbout}
        alt=""
        className="absolute w-full h-full top-0 object-cover"
      />

      <HeroLayout>
        <div className="w-full flex flex-col items-center">
          <div className="text-center mb-4 inline-block  rounded-full bg-[#DDE1FF] px-3 py-1 font-semibold text-[#b22e2e] z-10">
            <span>Nuestra Misión</span>
          </div>
          <HeroMain
            title="Formando conductores seguros y confiados por 10 años"
            description="No solo te enseñamos a aprobar un examen; cultivamos los instintos de
          un guardián cinético. Nuestra década de excelencia se basa en la
          precisión, la paciencia y la filosofía de una conciencia vial total."
            textAlign="text-center"
          />
        </div>
      </HeroLayout>
    </div>
  );
};

export default HeroAbout;
