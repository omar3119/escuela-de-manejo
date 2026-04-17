import Hero from "../components/Home/Hero";
import Benefits from "../components/Home/Benefits";
import OpinionsUsers from "../components/Home/OpinionsUsers";
import { FaCalendarAlt, FaShieldAlt, FaCarSide } from "react-icons/fa";


import beneficios from "../data/beneficios.json";
function Home() {
  const iconos = {
  FaCalendarAlt: <FaCalendarAlt className="text-2xl text-primary" />,
  FaShieldAlt: <FaShieldAlt className="text-2xl text-secondary" />,
  FaCarSide: <FaCarSide className="text-2xl text-primary" />,
}
  return (
    <div className="w-full ">
      <Hero />
      <div className="w-full px-6 mt-10 lg:flex ">
        <div className=" w-full">
          <div className="md:max-w-130 md:mx-auto lg:py-24 lg:lg:max-w-5xl">
            <div className="max-w-150">
              <h2 className="text-3xl font-extrabold text-primary pb-5 lg:text-4xl lg:leading-15">
                Formamos Conductores y Construimos Confianza
              </h2>
              <p className="text-lg text-[#444653]">
                Hemos rediseñado la experiencia de la escuela de manejo como un
                viaje premium de adquisición de habilidades.
              </p>
            </div>
            <div className="flex flex-col  gap-2 py-10 md:justify-center md:items-center lg:flex-row  ">
              {beneficios.map((beneficio) => (
                <Benefits
                key={beneficio.id}
                icon={iconos[beneficio.icon]}
                  title={beneficio.title}
                  description={beneficio.description}
                />
              ))}

            
            </div>
          </div>
        </div>
      </div>
      <div className="w-full ">
        <OpinionsUsers />
      </div>
    </div>
  );
}

export default Home;
