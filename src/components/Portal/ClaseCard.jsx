const ClaseCard = ({ start, end, description, num_class, day, today }) => {
  const isToday = day == today;

  return (
    <div
      className={`relative bg-white border-l-4 rounded-sm px-4 py-5 mb-3 lg:mb-0 shadow-sm ${
        isToday
          ? "border-2 border-primary text-primary"
          : "bg-[#F0F3FF] border-l-blue-600"
      }`}
    >
      {isToday && (
        <span className="absolute right-2 top-2 rounded-full bg-green-500 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
          Hoy
        </span>
      )}
      <p className="text-sm font-semibold text-blue-800">
        {start} - {end}
      </p>
      <p className="font-bold text-gray-900 py-2">{description}</p>
      <p className="text-sm text-gray-500">Clase #{num_class}</p>
    </div>
  );
};

export default ClaseCard;