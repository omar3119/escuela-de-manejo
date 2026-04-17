import { FaCalendarAlt } from "react-icons/fa";

const Benefits = ({title, description, icon}) => {
  return (
    <div className="w-full p-8  bg-[#F2F4F6] rounded-lg md:flex md:justify-center lg:max-w-95.5">
      <div className="md:max-w-130 ">
        <div className="inline-block bg-[#1e40af18] p-4 rounded-2xl">
          {
            icon
          }
        </div>

        <div>
          <h3 className="font-bold text-xl py-4">{title}</h3>
          <p className="text-[#444653]">
           {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
