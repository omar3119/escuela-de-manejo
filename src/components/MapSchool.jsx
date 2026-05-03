


export default function MapaEscuela() {
  return (
    <div className="w-full h-80  rounded-xl shadow-md overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1971.0092387437548!2d-79.7837660612725!3d8.877871347871272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fac99778ceeb36d%3A0xfbb718720d9b4109!2sEscuela%20de%20Manejo%20Kairos!5e0!3m2!1ses!2spa!4v1777752578084!5m2!1ses!2spa"
        width="100%"
        height="100%"
        style={{ borderRadius: "8px"}}       // CAMBIADO: string → objeto
        allowFullScreen             // CAMBIADO: allowfullscreen → allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"  // CAMBIADO: referrerpolicy → referrerPolicy
      />
    </div>
  );
}

