import { useState } from "react";
import { LuSend } from "react-icons/lu";
const programs = [
  "Architectural Foundations",
  "Urban Design",
  "Interior Architecture",
  "Landscape Planning",
];

export default function MissionBriefing() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    program: programs[0],
    objectives: "",
  });
  
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  const handleSubmit = () => {
    const newErrors = {
      name: !form.name.trim(),
      email: !form.email.trim(),
    };
    if (newErrors.name || newErrors.email) return setErrors(newErrors);

    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
      <div className="bg-white rounded-xl shadow-md py-10 px-5 w-full">

        {/* Title */}
        <div className="flex items-center gap-3 mb-8">
          <span className="w-1 h-9 bg-orange-500 rounded-full block" />
          <h2 className="text-3xl font-bold text-slate-800 tracking-tight">
            Mission Briefing
          </h2>
        </div>

        {/* Name + Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          <Field label="Nombre" error={errors.name}>
            <input
              name="Nombre"
              value={form.name}
              onChange={handleChange}
              placeholder="e.g. Julian Vane"
              className={`w-full bg-gray-100 rounded-md px-4 py-3 text-slate-800 text-sm outline-none focus:ring-2 focus:ring-slate-800 focus:bg-white transition placeholder:text-gray-400 ${
                errors.name ? "ring-2 ring-orange-500" : ""
              }`}
            />
          </Field>
          <Field label="Email" error={errors.email}>
            <input
              name="Emai"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="julian@example.com"
              className={`w-full bg-gray-100 rounded-md px-4 py-3 text-slate-800 text-sm outline-none focus:ring-2 focus:ring-slate-800 focus:bg-white transition placeholder:text-gray-400 ${
                errors.email ? "ring-2 ring-orange-500" : ""
              }`}
            />
          </Field>
        </div>

        {/* Program */}
        <Field label="Program of Interest">
          <select
            name="program"
            value={form.program}
            onChange={handleChange}
            className="w-full bg-gray-100 rounded-md px-4 py-3 text-slate-800 text-sm outline-none focus:ring-2 focus:ring-slate-800 focus:bg-white transition appearance-none cursor-pointer"
          >
            {programs.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>
        </Field>

        {/* Objectives */}
        <Field label="Inquiry Objectives">
          <textarea
            name="objectives"
            value={form.objectives}
            onChange={handleChange}
            placeholder="Detail your academic requirements..."
            rows={5}
            className="w-full bg-gray-100 rounded-md px-4 py-3 text-slate-800 text-sm outline-none focus:ring-2 focus:ring-slate-800 focus:bg-white transition placeholder:text-gray-400 resize-y"
          />
        </Field>

        {/* Button */}
        <button
          onClick={handleSubmit}
          className="mt-2 cursor-pointer flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-orange-500 text-white text-sm font-bold tracking-widest uppercase rounded-md transition-colors duration-200"
        >
          Enviar
          <LuSend className="text-xl" />
         
        </button>

        {/* Toast */}
        {sent && (
          <div className="mt-4 px-4 py-3 bg-green-50 border border-green-400 text-green-700 text-sm font-medium rounded-md">
            ✓ Mensaje enviado correctamente.
          </div>
        )}
      </div>
  );
}

function Field({ label, children, error }) {
  return (
    <div className="flex flex-col gap-1.5 mb-5">
      <label className={`text-xs font-semibold tracking-widest uppercase ${error ? "text-orange-500" : "text-gray-400"}`}>
        {label}
      </label>
      {children}
    </div>
  );
}
