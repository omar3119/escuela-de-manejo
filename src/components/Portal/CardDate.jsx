const CardDate = ({day, dayNum}) => {
  const date = new Date();
  const hoy = date.getDate();

  return (
    <div className={`${day == hoy ? "bg-primary text-white" : "text-black bg-[#F0F3FF]"}  flex  items-center justify-center text-center bg-[#0d0d0d28] border border-[#dee0ec] rounded-sm py-2 mb-3 gap-2`}>
      <p className="text-sm font-semibold uppercase tracking-widest">
        {dayNum}
      </p>
      <p className="text-sm font-bold">{day}</p>
    </div>
  );
};

export default CardDate;
