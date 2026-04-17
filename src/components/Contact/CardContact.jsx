
import { FaPhoneSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdPlace } from "react-icons/md";

const infoContact = [
    {
        id: 1,
        title: "Teléfono",
        description: "6936-1581",
        icon: <FaPhoneSquare />
    },
    {
        id: 2,
        title: "Correo Electrónico",
        description: "escairos2025@gmail.com",    
        icon: <MdEmail />                                      
    },
    {
        id: 3,
        title: "Dirección",
        description: "La Chorrera, Calle Libertador, Plaza de la Carne, local #4",
        icon: <MdPlace />
    },

]
const CardContact = () => {
    return(
        <div className="w-full bg-[#1E40AF] px-6 py-8 rounded-lg shadow-md mt-6">
            <h3 className="text-white text-xl font-bold mb-8">Detalles de Contacto</h3>
            <div className="w-full flex flex-col gap-6">
                {
                    infoContact.map((item)=>(
                    <div key={item.id} className="flex">
                        {<div className="text-[#ffffff] text-3xl">{item.icon}</div>}
                       <div className="pl-4">
                         <h4 className="text-[#A8B8FF]">{item.title}</h4>
                        <p className="text-white">{item.description}</p>
                       </div>
                    </div>
                    ))
                }
            </div>
        </div>
    )
};

export default CardContact;