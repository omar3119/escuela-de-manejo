//DB
import { supabase } from "../../supabaseClient";
//REACT AND REACT ROUTER
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
//COMPONENTS
import Header from "../../components/Header";
import ClaseCard from "../../components/Portal/ClaseCard";
import CardDate from "../../components/Portal/CardDate";
//ICONS
import { FcCalendar } from "react-icons/fc";

function MisClases() {
  const weekDay = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];

  const { state } = useLocation();
  const clientId = state?.client?.id;

  const [dataClass, setDataClass] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function obtenerClases() {
      const { data, error } = await supabase
        .from("dataClass")
        .select("*")
        .eq("client_id", clientId)
        .order("date", { ascending: true });

      if (error) {
        console.log("Error cargando clases:", error);
      } else {
        setDataClass(data);
      }
      setLoading(false);
    }

    obtenerClases();
  }, [clientId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <p className="text-sm text-gray-400 text-center pt-10">
          Cargando clases...
        </p>
      </div>
    );
  }

  if (dataClass.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <p className="text-sm text-gray-400 text-center pt-10">
          No tienes clases registradas.
        </p>
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-gray-50 pb-10 flex flex-col items-center">
      <Header />
      <div className="w-full max-w-lg lg:max-w-5xl px-4 pt-8">
        <div className="flex items-center gap-3">
          <FcCalendar
            className="h-8 w-8 shrink-0 "
            aria-hidden
          />
          <h1 className="text-3xl font-bold text-gray-900">Dias y horas de clases</h1>
        </div>
        <p className="text-sm text-gray-500 pt-4 pb-6">
          October 21 – October 27, 2024
        </p>
        <div
          className={`grid w-full grid-cols-1 gap-6 ${
            dataClass.length >= 3
              ? "lg:grid-cols-3"
              : dataClass.length === 2
              ? "lg:grid-cols-2"
              : "lg:grid-cols-1"
          }`}
        >
          {dataClass.map((clase) => {
            const [year, mon, day] = clase.date.split("-");
            const formatTime = (time) => time.slice(0, 5);
            const fecha = new Date(year, mon - 1, day);
            const dayW = weekDay[fecha.getDay()];

            return (
              <div
                key={clase.id}
                className="flex w-full flex-col"
              >
                <CardDate day={day} dayNum={dayW} />
                <ClaseCard
                  description={clase.tipo}
                  start={formatTime(clase.start)}
                  end={formatTime(clase.end)}
                  num_class={clase.num_class}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MisClases;
