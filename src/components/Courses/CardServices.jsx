import { FaCircleCheck } from "react-icons/fa6";

const Card = ({
  title,
  description,
  price,
  datos,
  badgeColor,
  borderColorr,
  bgColorr,
  accent
}) => {
  return (
    <div
      className={`w-full flex flex-col justify-between bg-white rounded-xl shadow-lg p-6 relative`}
    >
      {/* Badge */}

      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold  mt-3">{title}</h2>
        <p className=" text-gray-500 mb-1 leading-snug py-3">{description}</p>

        {/* Price */}
        <div className="my-6">
          <span className="text-3xl font-extrabold text-gray-900">{price}</span>
          <span className="text-sm text-gray-400 font-medium ml-1">/total</span>
        </div>
      </div>

      {/* Features */}
      <ul className="mb-7">
        {datos.map((item, index) => (
          <li
            key={index}
            className="flex gap-2 items-center py-3 text-[16px] text-gray-700"
          >
            <FaCircleCheck className={`w-5 h-5`}
            style={{color: accent}}
            />
            {item}
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <button
        className={`w-full bg-primary text-white  hover:bg-blue-700 hover:text-white ${bgColorr}  transition-colors  font-semibold py-3 rounded-lg text-sm tracking-wide cursor-pointer`}
      >
        Inscribirse Ahora
      </button>
    </div>
  );
};

export default Card;
