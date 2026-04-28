import { useMemo, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import CardDate from "../../components/Portal/CardDate";
import ClaseCard from "../../components/Portal/ClaseCard";
const DAY_LABELS = ["DOM", "LUN", "MAR", "MIÉ", "JUE", "VIE", "SÁB"];

/** Monday 00:00 of the week containing `date` */
function startOfWeekMonday(date) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  const day = d.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  d.setDate(d.getDate() + diff);
  return d;
}

function addDays(date, n) {
  const x = new Date(date);
  x.setDate(x.getDate() + n);
  return x;
}

function isSameDay(a, b) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

const ACCENT_STYLES = {
  blue: {
    bar: "border-l-blue-500",
    time: "text-blue-600",
  },
  green: {
    bar: "border-l-emerald-500",
    time: "text-emerald-600",
  },
  slate: {
    bar: "border-l-slate-400",
    time: "text-slate-600",
  },
};

/** Demo classes indexed by offset from week start (0 = Monday). Replace with Supabase data later. */
const MOCK_BY_DAY = {
  0: [
    {
      id: "1",
      start: "09:00",
      end: "10:30",
      title: "Clase practica",
      place: "Pista Norte",
      online: false,
      accent: "blue",
    },
  ],
  1: [
    {
      id: "2",
      start: "11:00",
      end: "12:30",
      title: "Clase practica",
      place: "Sala B",
      online: false,
      accent: "green",
    },
    {
      id: "3",
      start: "14:00",
      end: "15:00",
      title: "Clase practica",
      place: "Online (Zoom)",
      online: true,
      accent: "slate",
    },
  ],
  3: [
    {
      id: "4",
      start: "09:00",
      end: "10:30",
      title: "Clase teorica",
      place: "Salón A1",
      online: false,
      accent: "blue",
    },
  ],
};

export default function MisClases() {
  const navigate = useNavigate();
  const location = useLocation();
  const client = location.state?.client;

  const [weekOffset, setWeekOffset] = useState(0);

  const today = useMemo(() => {
    const t = new Date();
    t.setHours(0, 0, 0, 0);
    return t;
  }, []);

  const weekStart = useMemo(() => {
    const base = startOfWeekMonday(new Date());
    base.setDate(base.getDate() + weekOffset * 7);
    return base;
  }, [weekOffset]);

  const weekEnd = useMemo(() => addDays(weekStart, 6), [weekStart]);

  const rangeLabel = useMemo(() => {
    const opts = { day: "numeric", month: "long", year: "numeric" };
    const a = weekStart.toLocaleDateString("es", opts);
    const b = weekEnd.toLocaleDateString("es", opts);
    return `${a} – ${b}`;
  }, [weekStart, weekEnd]);

  const days = useMemo(() => {
    return Array.from({ length: 7 }, (_, i) => addDays(weekStart, i));
  }, [weekStart]);
  useEffect(() => {
    if (!client) {
      navigate("/portal");
    }
  }, []);
  return (
    <div className="min-h-screen bg-slate-100/90 font-display pb-10">
      <div className="max-w-lg mx-auto px-4 pt-8">
        <div className="flex items-start justify-between gap-3 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-primary tracking-tight">
              Fecha de las clases
            </h1>
            <p className="text-sm text-gray-500 mt-1">{rangeLabel}</p>
            {client?.name && (
              <p className="text-sm text-gray-600 mt-2 font-medium">
                Hola, {client.name}
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={() => navigate("/portal")}
            className="text-sm font-semibold text-blue-600 hover:text-blue-700 shrink-0"
          >
            Salir
          </button>
        </div>

        {/* Week navigator */}

        <div className="space-y-6">
          {days.map((dayDate, index) => {
            const classes = MOCK_BY_DAY[index] ?? [];
            const isToday = isSameDay(dayDate, today);
            const dow = DAY_LABELS[dayDate.getDay()];
            const dayNum = dayDate.getDate();

            return (
              <section key={dayDate.toISOString()}>
                <CardDate isToday={isToday} dayNum={dayNum} dow={dow} />

                {classes.length === 0 ? (
                  <p className="text-sm text-gray-400 text-center py-2">
                    Sin clases este día
                  </p>
                ) : (
                  <ul className="space-y-3">
                    {classes.map((c) => {
                      const accent =
                        ACCENT_STYLES[c.accent] ?? ACCENT_STYLES.blue;
                      return (

                        
                       <ClaseCard key={c.id} c={c} accent={accent}/>
                      );
                    })}
                  </ul>
                )}
              </section>
            );
          })}
        </div>

        <p className="text-xs text-gray-400 text-center mt-10 px-4">
          Horario de referencia. Los cambios los confirma la escuela.
        </p>
      </div>
    </div>
  );
}
