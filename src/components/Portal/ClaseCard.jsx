import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { MdOutlinePlace } from "react-icons/md";
const ClaseCard = ({ c, accent }) => {
  return (
    <li
      className={`bg-white rounded-xl border border-gray-100/80 shadow-sm pl-0 overflow-hidden border-l-[5px] ${accent.bar}`}
    >
      <div className="px-4 py-3">
        <p className={`text-sm font-semibold ${accent.time}`}>
          {c.start} – {c.end}
        </p>
        <p className="font-bold text-primary mt-0.5">{c.title}</p>
        <p className="flex items-center gap-1.5 text-sm text-gray-500 mt-1">
          {c.online ? (
            <>
              <HiOutlineVideoCamera
                className="w-4 h-4 shrink-0 text-gray-400"
                aria-hidden
              />
              <span>{c.place}</span>
            </>
          ) : (
            <>
              <MdOutlinePlace
                className="w-4 h-4 shrink-0 text-gray-400"
                aria-hidden
              />
              <span>{c.place}</span>
            </>
          )}
        </p>
      </div>
    </li>
  );
};

export default ClaseCard;
