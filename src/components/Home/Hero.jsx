//Home
import imgHero from "../../assets/images/img1.webp";
import mainHero from "../../assets/images/IMGHERO2.png";
import HeroMain from "../HeroMain";

import { Link } from "react-router";
const Hero = () => {
  return (
    <section className="w-full relative  text-white  py-26 md:flex md:items-center md:justify-center ">
      <div className="absolute top-0 w-full h-full bg-[#000000a8] bg-gradient-to-r from-[#0A122B] via-[#0a122bbd] to-[#04132900] z-10"></div>
      <img
        src={mainHero}
        alt=""
        className="absolute w-full h-full top-0 object-cover"
      />

      <div className="w-full md:max-w-130 lg:max-w-5xl">
        <div className="w-full">
          <div className="w-full px-6 flex flex-col">
            <HeroMain
              title="Aprende a conducir con  "
              title2="confianza"
              description="Nos dedicamos a formar conductores responsables y seguros. Sabemos que aprender a manejar es un paso importante en la vida de cualquier persona, y estamos aquí para guiarte en cada etapa del proceso. "
              colorTitle="text-[#FFFFFF]"
              colorTitle2="text-[#60A5FA]"
              colorText="text-[#DBEAFE]"
            />
            <div className="w-full  z-10  mt-6">
              <Link
                to="/planes"
                className="inline-block px-10 py-3 font-semibold bg-secondary rounded-lg "
              >
                Planes
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
