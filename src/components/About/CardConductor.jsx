
import condutor1 from "../../assets/images/conductor1.webp";

const CardConductor = ()=>{
    return(
        <div className="">
            <figure>
                <img className="rounded-xl" src={condutor1} alt="Marcus" />
            </figure>
            <div className="pt-4">
                <h3 className="text-primary text-xl font-bold">Marcus</h3>
                <span className="text-secondary  font-semibold">Instructor</span>
                <p className="text-[14px] text-[#444653]">Conductor experimentado y comprometido con la seguridad vial.</p>
            </div>
        </div>
    )
};

export default CardConductor;