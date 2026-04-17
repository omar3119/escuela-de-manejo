import HeroAbout from "../components/About/HeroAbout";
import CardList from "../components/About/CardList";
import CardConductor from "../components/About/CardConductor";
import CardCta from "../components/About/CardCta";
const About = () => {
  return (
    <div className="w-full md:flex md:justify-center bg-[#F7F9FB]">
      <div className="w-full">
        <div className=" px-6 lg:flex lg:justify-center">
          <div className="lg:max-w-5xl">
            <HeroAbout />
          </div>
        </div>

        <div className="w-full bg-[#F2F4F6]  lg:flex lg:justify-center">
          <div className="w-full px-6 py-24 lg:max-w-5xl ">
            <div className="">
              <div className="pb-16">
                <h2 className="text-4xl font-bold text-primary pb-6 ">
                  Nuestra Flota
                </h2>
                <p className="text-[#444653] text-lg">
                  La seguridad no es solo una lección; es la maquinaria que
                  utilizamos. Nuestra flota de entrenamiento cuenta con
                  vehículos modernos de alta gama equipados con controles duales
                  avanzados y la última tecnología de seguridad.
                </p>
              </div>
            </div>
            <div className="w-full grid gap-6 lg:grid-cols-3">
              <CardList />
            </div>
          </div>
        </div>

        <div className="px-6">
          <div className="pt-20  pb-6  lg:pt-24  lg:flex lg:justify-center">
            <div className="w-full lg:max-w-5xl">
              <div>
                <h2 className="text-4xl font-bold text-primary">
                  Nuestros Conductores
                </h2>
                <p className="text-[#444653] text-lg">
                  Nuestros instructores son profesionales altamente capacitados
                  y con amplia experiencia en la enseñanza de la conducción
                  segura.
                </p>
              </div>

              <section className="flex flex-col gap-8 py-10 lg:flex-row">
                <CardConductor />
                <CardConductor />
                <CardConductor />
              </section>
            </div>
          </div>

          <CardCta />
        </div>
      </div>
    </div>
  );
};

export default About;
