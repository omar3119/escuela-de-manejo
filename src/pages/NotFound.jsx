import { Link } from "react-router";

import HeroMain from "../components/HeroMain";
import { BiError } from "react-icons/bi";

import { IoMdHome } from "react-icons/io";
const NotFound = () => {
  return (
    <div className="px-6 py-14">
      <div className="inline-flex bg-[#DDE1FF] text-primary font-semibold px-3 py-1 rounded-full mb-4 items-center gap-2">
        <BiError className="text-lg" />

        <span>ERROR 404</span>
      </div>
      <HeroMain
        title="Parece que te has "
        title2="salido de la ruta"
        description="No te preocupes, incluso los mejores
conductores a veces toman un giro
equivocado. Permítenos ayudarte a
retomar el camino."
        colorTitle="text-primary"
        colorTitle2="text-secondary"
        colorText="text-gray-600"
      />
      <div>
        <button className="w-full bg-secondary  py-4 mt-6 rounded-xl  text-lg font-semibold">
          <Link
            to="/"
            className="w-full text-[#5C2400] text-lg flex items-center justify-center gap-2 cursor-pointer"
          >
            <IoMdHome className="text-[#5C2400] text-xl" />
            Volver a la página principal
          </Link>
        </button>
        <button className="w-full bg-primary  py-4 mt-6 rounded-xl flex items-center justify-center gap-2 text-lg font-semibold text-white cursor-pointer">
          <Link to="/planes" className=" w-full text-[#ffffff] text-lg">
            Planes
          </Link>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
