import { IoIosArrowForward } from "react-icons/io";
const Faq = ({ question, answer, isOpen, onClic }) => {
  return (
    <div className="bg-white rounded-xl border-gray-200 p-6 ">
      <button
        onClick={onClic}
        className="w-full flex justify-between items-center text-left font-medium text-gray-900 hover:text-gray-600 transition-colors"
      >
        <span className="text-primary font-bold text-base">{question}</span>
        <div>
          <IoIosArrowForward className={`text-xl text-prymary ${isOpen ? "transform rotate-90" : ""}`} />
        </div>
      </button>

      <div className="text-[#444653]">
        <p
          className={`overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-40 py-4" : "max-h-0"
          }`}
        >
          {answer}
        </p>
      </div>
    </div>
  );
};

export default Faq;
