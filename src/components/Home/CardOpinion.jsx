import { RiDoubleQuotesL } from "react-icons/ri";
//Home
import { FaUser } from "react-icons/fa6";

const CardOpinion = ({ name, testimonial, accent }) => {
  return (
    <div
      className="bg-[#1A2445] rounded-lg p-8 mt-5 border-l-2 relative flex flex-col justify-between max-w-82 mx-auto lg:max-w-95.5"
      style={{ borderLeftColor: accent }}
    >
      <span
        className="text-3xl leading-none block mb-4 absolute -top-3 -left-3"
        style={{ color: accent }}
      >
        <RiDoubleQuotesL />
      </span>

      <p className="text-[#E0E4FF] leading-relaxed mb-8">{testimonial}</p>

      <div className="flex items-center gap-3">
        <div className="w-12 h-12 flex justify-center items-center rounded-full bg-blue-500 overflow-hidden">
          <FaUser className="text-white" />
        </div>
        <div>
          <p className="text-white font-bold text-sm">{name}</p>
          <p className="text-blue-300 text-xs">{""}</p>
        </div>
      </div>
    </div>
  );
};

export default CardOpinion;
