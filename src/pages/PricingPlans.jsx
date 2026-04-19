import { useContext } from "react";
import { counterContext } from "../context/counterContext";

//Datos
import datosPlanes from "../data/datosPlanes";

import Card from "../components/Courses/CardServices";
import HeroMain from "../components/HeroMain";
import imgHeroPlans from "./../assets/images/img-hero-plans.png";

import HeroLayot from "../Layout/HeroLayout";
function PricingPlans() {
  console.log(datosPlanes);
  const { counter } = useContext(counterContext);
  return (
    <div className="w-full md:flex md:flex-col md:items-center">
      <div className="w-full md:flex md:justify-center relative ">
        <div className="w-full h-full bg-[#000000a8] absolute z-50 bg-gradient-to-r from-[#01051a] via-[#041329ad] to-[#04132900]"></div>
        <img
          src={imgHeroPlans}
          alt=""
          className="absolute w-full h-full top-0 object-cover"
        />


        <HeroLayot>
            <div className="mb-4 relative z-50">
              <span className="text-secondary text-xl font-semibold ">
                Enciende tu confiaza
              </span>
            </div>

            <HeroMain
              title="Domina la vía. Empodera tu futuro."
              description=" Elige entre nuestros planes de estudio premium diseñados para
            transformar aprendices en conductores expertos a través del
            aprendizaje cinético y seguridad de nivel guardián."
              colorTitle="text-[#FFFFFF]"
              colorText="text-[#DBEAFE]"
            />
        </HeroLayot>


      </div>

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

          <div className="w-full flex flex-col gap-6 lg:w-full lg:flex-row">
            {datosPlanes.map((plan) => (
              <Card
                key={plan.id}
                title={plan.title}
                description={plan.description}
                price={plan.price}
                datos={plan.features}
                badgeColor={plan.color}
                borderColorr={
                  plan.id === 2
                    ? "border-primary lg:scale-105"
                    : "border-transparent"
                }
                bgColorr={
                  plan.id === 2 ? "bg-primary text-white" : "bg-[#E2E2E4]"
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingPlans;
