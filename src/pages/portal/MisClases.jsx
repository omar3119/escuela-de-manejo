import Header from "../../components/Header";
import ClaseCard from "../../components/Portal/ClaseCard";
import CardDate from "../../components/Portal/CardDate";
import { supabase } from "../../supabaseClient";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

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
    <div className="min-h-screen bg-gray-50 pb-10">
      <Header />
      <div className="max-w-lg mx-auto px-4 pt-8">
        <h1 className="text-2xl font-bold text-gray-900">Weekly Schedule</h1>
        <p className="text-sm text-gray-500 mt-1">
          October 21 – October 27, 2024
        </p>
        <div className="flex items-center justify-between border border-gray-200 rounded-xl px-4 py-3 mt-4 mb-6">
          <button className="text-gray-600 font-bold cursor-pointer">‹</button>
          <span className="text-sm font-semibold">This Week</span>
          <button className="text-gray-600 font-bold cursor-pointer">›</button>
        </div>
        {dataClass.map((clase) => {
          const [year, mon, day] = clase.date.split("-");
          const formatTime = (time) => time.slice(0, 5);
          const fecha = new Date(year, mon - 1, day);
          const dayW = weekDay[fecha.getDay()];

          return (
            <div key={clase.id}>
              <CardDate day={day} dayNum={dayW} />
              <ClaseCard
                description={clase.tipo}
                start={formatTime(clase.start)}
                end={formatTime(clase.end)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MisClases;
