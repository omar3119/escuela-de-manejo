import { useState, useRef } from "react";
import { LuSend } from "react-icons/lu";
import emailjs from "@emailjs/browser";

import Field from "../Formulary/Field";

const programs = [
  "A,C,D",
  "E",
  "Interior Architecture",
  "Landscape Planning",
];

export default function MissionBriefing() {
  const formRef = useRef();
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);


  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    program: programs[0],
    message: "",
  });




  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };


  //HANDLE SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      from_name: !formData.from_name.trim(),
      from_email: !formData.from_email.trim(),
    };

    if (newErrors.from_name || newErrors.from_email)
      return setErrors(newErrors);

    emailjs
      .sendForm(
       import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setSent(true);
        formRef.current.reset();
        setFormData({ from_name: "", from_email: "", program: programs[0], message: "" });
        setTimeout(() => setSent(false), 3000);
      })
      .catch((error) => {
        console.log("FAILED...", error.text);
      });
  };


const inputStyle = "w-full bg-gray-100 rounded-md px-4 py-3 text-slate-800 text-sm outline-none focus:ring-2 focus:ring-slate-800 focus:bg-white transition placeholder:text-gray-400"
  return (
    <div className="bg-white rounded-xl shadow-md py-10 px-5 w-full">
      {/* Title */}
      <div className="flex items-center gap-3 mb-8">
        <span className="w-1 h-9 bg-orange-500 rounded-full block" />
        <h2 className="text-3xl font-bold text-slate-800 tracking-tight">
          Mission Briefing
        </h2>
      </div>

      <form ref={formRef} onSubmit={handleSubmit}>
        {/* Name + Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          <Field label="Nombre" error={errors.from_name}>
            <input
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              placeholder="e.g. Julian Vane"
              className={`${inputStyle} ${
                errors.from_name ? "ring-2 ring-orange-500" : ""
              }`}
            />
          </Field>
          <Field label="Email" error={errors.from_email}>
            <input
              name="from_email"
              type="email"
              value={formData.from_email}
              onChange={handleChange}
              placeholder="julian@example.com"
              className={` ${inputStyle} ${
                errors.from_email ? "ring-2 ring-orange-500" : ""
              }`}
            />
          </Field>
        </div>

        {/* Program */}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          <Field label="Telefono">
            <input name="from_phone" type="tel"className={`${inputStyle}`} />

          </Field>
        <Field label="Licencia a obtener">
          <select
            name="from_license"
            value={formData.program}
            onChange={handleChange}
            className="w-full bg-gray-100 rounded-md px-4 py-3 text-slate-800 text-sm outline-none focus:ring-2 focus:ring-slate-800 focus:bg-white transition appearance-none cursor-pointer"
          >
            {programs.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>
        </Field>
        </div>
        

        {/* Objectives */}
        <Field label="Inquiry Objectives">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Detail your academic requirements..."
            rows={5}
            className="w-full bg-gray-100 rounded-md px-4 py-3 text-slate-800 text-sm outline-none focus:ring-2 focus:ring-slate-800 focus:bg-white transition placeholder:text-gray-400 resize-y"
          />
        </Field>

        {/* Button */}
        <button
          type="submit"
          className="mt-2 cursor-pointer flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-orange-500 text-white text-sm font-bold tracking-widest uppercase rounded-md transition-colors duration-200"
        >
          Enviar
          <LuSend className="text-xl" />
        </button>
      </form>

      {/* Toast */}
      {sent && (
        <div className="mt-4 px-4 py-3 bg-green-50 border border-green-400 text-green-700 text-sm font-medium rounded-md">
          ✓ Mensaje enviado correctamente.
        </div>
      )}
    </div>
  );
}

