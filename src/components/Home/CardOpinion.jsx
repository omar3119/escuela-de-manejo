import { RiDoubleQuotesL } from "react-icons/ri";
//Home


const CardOpinion = ({name, testimonial, borderTestimonial}) => {
  return (
    <div className={`bg-[#1A2445] rounded-lg p-8 mt-5 border-l-2 ${borderTestimonial}  relative flex flex-col max-w-md mx-auto lg:max-w-95.5`}>
      <span className="text-[#b5650398]  text-5xl leading-none block mb-4 absolute -top-5 -left-4">
        <RiDoubleQuotesL />
      </span>

      <p className="text-[#E0E4FF] leading-relaxed mb-8">
        {testimonial}
      </p>

      <div className="flex items-center gap-3">
      <div className="w-12 h-12 rounded-full bg-blue-500 overflow-hidden">
          <img src="img.jpg" alt="img" className="w-full h-full object-cover" />
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
