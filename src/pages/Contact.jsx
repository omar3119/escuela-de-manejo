import { useState } from "react";

import HeroMain from "../components/HeroMain";
import CardContact from "../components/Contact/CardContact";
import Faq from "../components/Contact/Faq";
import Formulary from "../components/Contact/formulary";

import HeroLayout from "../Layout/HeroLayout";
//Data
import faqs from "../data/faqs";

const Contact = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="w-full ">
      <div className="w-full bg-primary">
        <div className="w-full md:flex md:justify-center ">
          <HeroLayout>
            <HeroMain
              className=""
              //FAGS
              title="Toma el control de tu camino"
              description="¿Tienes preguntas sobre nuestros
  cursos premium o la preparación
  para la licencia? Nuestros
  instructores expertos están listos
  para guiarte hacia la maestría
  automotriz."
              colorTitle="text-white"
              colorText="text-[#DBEAFE]"
            />
          </HeroLayout>
        </div>
      </div>
      <div className=" px-6 py-20  flex justify-center">
        <div className=" w-full flex flex-col gap-10  max-w-lg lg:max-w-5xl  lg:flex-row lg:justify-between lg:gap-6">
          <div className="w-full max-w-2xl">
            <Formulary />
          </div>

          <div className="w-full">
            <CardContact />
          </div>
        </div>
      </div>

      <section className=" w-full px-6 bg-[#F2F4F6]  lg:flex lg:justify-center">
        <div className="w-full lg:max-w-5xl">
          <h2 className="text-4xl font-bold text-primary mb-6 pt-24 text-center">
            Preguntas Frecuentes
          </h2>

          <div className="flex flex-col gap-3">
            {faqs.faqs.map((item, index) => (
              <Faq
                key={item.id}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onClic={() => toggle(index)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
