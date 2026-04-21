
import { Link } from "react-router-dom";

const CardCta = () => {
  return (
    <div className="w-full py-10 flex justify-center">
      <div className="bg-primary text-white max-w-md w-full rounded-lg px-8 py-12 text-center shadow-lg">
        
        <h2 className="text-3xl font-bold mb-4">
          ¿Listo para tomar el volante?
        </h2>

        <p className="text-blue-200 mb-8">
          Únete a nuestra comunidad de conductores seguros y confiados.
        </p>

        <Link to="/planes" className="w-full px-8 bg-blue-700 hover:bg-blue-600 transition text-white font-semibold py-3 rounded-xl">
          Ver Precios
        </Link>

      </div>
    </div>
  );
};

export default CardCta;