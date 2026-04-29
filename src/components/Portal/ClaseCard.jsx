import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { MdOutlinePlace } from "react-icons/md";
const ClaseCard = ({start,end, description}) => {
  

  return (
    <div className="bg-white border-l-4 border-l-blue-500 rounded-lg px-4 py-5 mb-3 shadow-sm">
      <p className="text-sm font-semibold text-blue-600">{start} - {end}</p>
      <p className="font-bold text-gray-900 py-2">{description}</p>
      <p className="text-sm text-gray-500 ">📍 Lab 402</p>
    </div>
  );
};

export default ClaseCard;
