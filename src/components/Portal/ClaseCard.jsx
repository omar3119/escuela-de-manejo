const ClaseCard = ({ start, end, description, num_class,day, today }) => {
  const borderStyles = [
    "border-l-blue-600 text-blue-800",
    "border-l-emerald-600 text-emerald-800",
    "border-l-violet-600 text-violet-800",
    "border-l-amber-600 text-amber-800",
    "border-l-rose-600 text-rose-800",
  ];
  const styleIndex = Number(num_class)
    ? (Number(num_class) - 1) % borderStyles.length
    : 0;
  const cardStyle = borderStyles[styleIndex];

  const isToday = day == today;

  return (
    <div
      className={`relative bg-white border-l-4 rounded-sm px-4 py-5 mb-3 lg:mb-0 shadow-sm  ${isToday ? "border-2 border-primary text-primary" : `text-black bg-[#F0F3FF] ${cardStyle}` }  `}
    >
      {isToday && (
        <span className="absolute right-2 top-2 rounded-full bg-green-500 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
          Hoy
        </span>
      )}
      <p className="text-sm font-semibold">
        {start} - {end}
      </p>
      <p className="font-bold text-gray-900 py-2">{description}</p>
      <p className="text-sm text-gray-500 ">Clase #{num_class}</p>
    </div>
  );
};

export default ClaseCard;
