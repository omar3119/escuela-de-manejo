import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

function ProfileCard({ clientName, clientEmail, clientPhone, initials }) {
  return (
    <div className="h-full w-full rounded-xl border border-slate-200 bg-linear-to-br from-white to-slate-50 px-6 py-6 lg:px-8 lg:py-6">
      <div className="flex items-center gap-4 ">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xl font-bold text-blue-700 lg:h-20 lg:w-20 lg:text-2xl">
          {initials || "ST"}
        </div>
        <div className="min-w-0 ">
          <p className="truncate text-2xl font-bold text-slate-800">{clientName}</p>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Perfil del Alumno
          </p>
        </div>
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:mx-auto lg:flex lg:max-w-lg ">
        <div className="flex items-center gap-2 rounded-lg bg-blue-50 px-3 py-2 text-sm text-slate-700 lg:justify-center">
          <MdOutlineEmail className="h-4 w-4 text-blue-500" aria-hidden />
          <span className="truncate lg:text-center">{clientEmail}</span>
        </div>
        <div className="flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-2 text-sm text-slate-700 lg:justify-center">
          <FiPhone className="h-4 w-4 text-emerald-500" aria-hidden />
          <span className="truncate lg:text-center">{clientPhone}</span>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
