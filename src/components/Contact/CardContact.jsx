import { LuPhone } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

const infoContact = [
  {
    id: 1,
    title: "Teléfono",
    description: "6936-1581",
    icon: <LuPhone />,
  },
  {
    id: 2,
    title: "Correo Electrónico",
    description: "escairos2025@gmail.com",
    icon: <MdOutlineMailOutline />,
  },
  {
    id: 3,
    title: "Dirección",
    description: "La Chorrera, Calle Libertador, Plaza de la Carne, local #4",
    icon: <CiLocationOn />,
  },
];
const CardContact = () => {
  return (
    <div className="w-full bg-primary px-6 py-8 rounded-lg shadow-md">
      <h3 className="text-white text-xl font-bold mb-8">
        Detalles de Contacto
      </h3>
      <div className="w-full flex flex-col gap-6">
        {infoContact.map((item) => (
          <div key={item.id} className="flex">
            {
              <div className="text-bluee bg-[#1d4fd824] text-xl flex justify-center items-center p-2 rounded-sm">
                {item.icon}
              </div>
            }
            <div className="pl-4">
              <h4 className="text-grey text-sm">{item.title}</h4>
              <p className="text-white">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardContact;
