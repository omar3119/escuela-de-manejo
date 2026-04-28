const CardDate = ({ isToday, dow, dayNum }) => {
  return (
    <div
      className={`flex justify-center items-center gap-5 rounded-xl px-4 py-3 mb-3 text-center transition-colors ${
        isToday
          ? "bg-sky-100/90 border border-sky-200/80"
          : "bg-slate-200/60 border border-transparent"
      }`}
    >
      <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
        {dow}
      </p>
      <p className="text-xl font-bold text-primary leading-tight mt-0.5">
        {dayNum}
      </p>
      {isToday && (
        <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mt-1">
          Hoy
        </p>
      )}
    </div>
  );
};

export default CardDate;
