
import { FaWhatsapp } from "react-icons/fa";

const BtnWhatsapp = ()=>{
    return(
        <div className="fixed bottom-5 right-3 lg:bottom-10 lg:right-10 bg-green-600 p-2 rounded-2xl z-50" >
        <FaWhatsapp className=" text-white text-5xl lg:text-6xl cursor-pointer" title="WhatsApp"/>

        </div>
    )
};

export default BtnWhatsapp; 