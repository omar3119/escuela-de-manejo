
//REACT---------->
import { useState } from "react";


//COMPONENTS---------->
import HeroMain from "../components/HeroMain";
import CardContact from "../components/Contact/CardContact";
import Faq from "../components/Contact/Faq";
import Formulary from "../components/Contact/formulary";
import MapaSchool from "../components/MapSchool";

//IMAGES
import ImageAbout from "../assets/images/localimg.png";

//LAYOUT---------->
import HeroLayout from "../Layout/HeroLayout";
//DATA--------->
import faqs from "../data/faqs";

const Contact = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const leftColumnFaqs = faqs.faqs.filter((_, index) => index % 2 === 0);
  const rightColumnFaqs = faqs.faqs.filter((_, index) => index % 2 !== 0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="w-full ">
      <div className="w-full relative bg-primary">
        <div className="w-full md:flex md:justify-center ">
          <div className="absolute top-0 w-full h-full bg-linear-to-r bg-[#000000b6]   z-10"></div>
          <img
            src={ImageAbout}
            alt=""
            className="absolute w-full h-full top-0 object-cover"
          />
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
              colorTitle="text-white text-shadow-lg text-shadow-primary"
              colorText="text-[#DBEAFE] text-shadow-lg text-shadow-primary"
            />
          </HeroLayout>
        </div>
      </div>
      <div className=" px-6 py-20  flex justify-center">
        <div className=" w-full flex flex-col gap-10  max-w-lg lg:max-w-5xl  lg:flex-row lg:justify-between lg:gap-6">
          <div className="w-full max-w-2xl">
            <Formulary />
          </div>

          <div className="w-full flex flex-col gap-5 ">
            <div className="w-full">
              <CardContact />
            </div>
            <div className="border-2 border-grey rounded-lg">
            <MapaSchool/>

            </div>
          </div>
        </div>
      </div>

      <section className=" w-full px-6 bg-[#F2F4F6]  lg:flex lg:justify-center">
        <div className="w-full lg:max-w-5xl pb-10">
          <h2 className="text-4xl font-bold text-primary mb-14 pt-24 text-center">
            Preguntas Frecuentes
          </h2>

          <div className="flex flex-col gap-3 md:flex-row md:items-start md:gap-3">
            <div className="flex w-full flex-col gap-3">
              {leftColumnFaqs.map((item) => {
                const faqIndex = faqs.faqs.findIndex((faq) => faq.id === item.id);
                return (
                  <Faq
                    key={item.id}
                    question={item.question}
                    answer={item.answer}
                    isOpen={openIndex === faqIndex}
                    onClic={() => toggle(faqIndex)}
                  />
                );
              })}
            </div>
            <div className="flex w-full flex-col gap-3">
              {rightColumnFaqs.map((item) => {
                const faqIndex = faqs.faqs.findIndex((faq) => faq.id === item.id);
                return (
                  <Faq
                    key={item.id}
                    question={item.question}
                    answer={item.answer}
                    isOpen={openIndex === faqIndex}
                    onClic={() => toggle(faqIndex)}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
