import { useState } from "react";
//COMPONENTS------->
import Card from "../components/Courses/CardServices";
import HeroMain from "../components/HeroMain";
//IMAGES------->
import imgHeroPlans from "../assets/images/img-hero-plans.png";
//LAYOUT------->
import HeroLayot from "../Layout/HeroLayout";
//DATA------->
import datosPlanes from "../data/datosPlanes";
//ICONS
import { FaCar } from "react-icons/fa";
import { FaMotorcycle } from "react-icons/fa6";


const [planesAuto, planesMoto] = datosPlanes;


function PricingPlans() {
  const plans = [
    {
      id: 1,
      management: "Auto",
      icon: <FaCar />,
    },
    {
      id: 2,
      management: "Moto",
      icon: <FaMotorcycle />,
    },
  ];


  const [selected, setSelected] = useState("Auto");

  

  return (
    <div className="w-full md:flex md:flex-col md:items-center">
      {/* //HERO----- */}
      <div className="w-full md:flex md:justify-center relative ">
        <div className="w-full h-full bg-[#000000a8] absolute z-50 bg-linear-to-r from-[#01051a] via-[#041329ad] to-[#04132900]"></div>
        <img
          src={imgHeroPlans}
          alt=""
          className="absolute w-full h-full top-0 object-cover"
        />
        <HeroLayot>
          <div className="mb-4 relative z-50 text-center">
            <span className="text-secondary text-xl font-semibold ">
              Enciende tu confiaza
            </span>
          </div>

          <HeroMain
            title="Servicios de manejo para cada tipo de conductor"
            description="Ofrecemos clases para auto, moto, ampliación de licencia y refuerzo de manejo. Elige el servicio que necesitas y comienza a conducir con seguridad y confianza.."
            colorTitle="text-[#FFFFFF]"
            colorText="text-[#DBEAFE]"
          />
        </HeroLayot>
      </div>

      {/* PLANES O PRECING */}
      <div className="px-6 mt-12  lg:flex lg:justify-center">
        <div className="w-full md:max-w-130 lg:max-w-5xl lg:mt-0 lg:py-24">
          <div className="text-center py-8">
            <h2 className="font-bold text-3xl text-primary lg:text-5xl ">
              Planes de Manejo
            </h2>
            <p className="text-lg  py-6">
              Elige el plan que mejor se adapte a tus necesidades.
            </p>
          </div>

          <div className="">
            <div className="w-full flex justify-center pb-10">
              <div className="bg-shadow-black shadow-2xl inline-flex px-4 py-2 justify-center gap-2  rounded-lg">
                {plans.map((item, i) => (
                  <div key={item.id} className="">
                    <button
                      onClick={() => setSelected(item.management)}
                      className={`flex items-center gap-2 py-2 text-black rounded-lg px-4 cursor-pointer ${
                        selected === item.management
                          ? "bg-secondary text-white"
                          : ""
                      }`}
                      key={i}
                    >
                      {item.icon}

                      {item.management}
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full flex flex-col gap-6 lg:w-full lg:flex-row">
            {(selected === "Auto" ? planesAuto : planesMoto).map((plan) => (
              <Card
                key={plan.id}
                title={plan.title}
                description={plan.description}
                price={plan.price}
                datos={plan.features}
                accent={plan.color}
              />
            ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingPlans;
