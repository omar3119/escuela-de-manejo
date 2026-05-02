//DB
import { supabase } from "../../supabaseClient";
//REACT AND REACT ROUTER
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

//COMPONENTS
import HeaderClass from "../../components/Portal/HeaderClass";
import ClaseCard from "../../components/Portal/ClaseCard";
import CardDate from "../../components/Portal/CardDate";
import ProfileCard from "../../components/Portal/ProfileCard";
import BtnDownloadPdf from "../../components/Portal/BtnDownloadPdf";

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
  const navigate = useNavigate();

  // CAMBIADO: clientId ahora lee de client (que incluye sessionStorage), antes solo leía state
  const client =
    state?.client ||
    JSON.parse(sessionStorage.getItem("portalClient") || "null");
  const clientId = client?.id;
  const clientEmail = client?.email || "No email available";

  const [clientName, setClientName] = useState("Estudiante");
  const [clientPhone, setClientPhone] = useState("No disponible");
  const [dataClass, setDataClass] = useState([]);
  // CAMBIADO: false en vez de true para no mostrar spinner antes de verificar sesión
  const [loading, setLoading] = useState(false);

  // AGREGADO: protección de ruta dentro de useEffect (React exige que navigate vaya aquí)
  useEffect(() => {
    if (!client || !clientId) {
      sessionStorage.removeItem("portalClient");
      navigate("/portal", { replace: true });
    }
  }, []);

  useEffect(() => {
    async function obtenerNombre() {
      const { data } = await supabase
        .from("clients")
        .select("name_complete, phone")
        .eq("id", clientId)
        .single();

      if (data) {
        setClientName(data.name_complete);
        setClientPhone(data.phone);
      }
    }
    // AGREGADO: guard para no llamar a supabase con clientId undefined
    if (clientId) obtenerNombre();
  }, [clientId]);

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
    // AGREGADO: guard para no llamar a supabase con clientId undefined
    if (clientId) obtenerClases();
  }, [clientId]);

  const initials = clientName
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <HeaderClass />
        <p className="text-sm text-gray-400 text-center pt-10">
          Cargando clases...
        </p>
      </div>
    );
  }

  function closeSesion() {
    sessionStorage.removeItem("portalClient");
    navigate("/");
  }
  return (
    <div className="min-h-screen bg-gray-50 pb-10 flex flex-col items-center">
      <HeaderClass closeSesion={closeSesion} />
      <div className="w-full max-w-lg lg:max-w-5xl px-4 pt-8">
        <ProfileCard
          clientName={clientName}
          clientEmail={clientEmail}
          clientPhone={clientPhone}
          initials={initials}
        />
        <section className="w-full flex justify-center">
          <div className="w-full mb-15 rounded-xl border border-slate-100 bg-white p-6 shadow-sm max-w-3xl">
          <h3 className="pt-1 text-xl font-bold text-primary lg:text-3xl">
            Material de estudio
          </h3>
          <BtnDownloadPdf />
          </div>
        </section>{" "}
        <div className="flex items-center gap-3 lg:justify-center">
          <h3 className="text-xl lg:text-3xl font-bold text-gray-900">
            Dias y horas de clases
          </h3>
        </div>
        <p className="text-sm text-gray-500 pt-4 pb-6 lg:text-center">
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
            const todayDate = new Date();
            const [year, mon, day] = clase.date.split("-");
            const formatTime = (time) => time.slice(0, 5);
            const fecha = new Date(year, mon - 1, day);
            const dayW = weekDay[fecha.getDay()];
            const todayDay = todayDate.getDate();

            return (
              <div key={clase.id} className="flex w-full flex-col">
                <CardDate day={day} today={todayDay} dayNum={dayW} />
                <ClaseCard
                  description={clase.tipo}
                  start={formatTime(clase.start)}
                  end={formatTime(clase.end)}
                  num_class={clase.num_class}
                  day={day}
                  today={todayDay}
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
