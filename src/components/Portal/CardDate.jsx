const CardDate = ({day, dayNum}) => {
  const date = new Date();
  const hoy = date.getDate();

  return (
    <div className={`${day == hoy ? "bg-[#DBE1FF] text-[#003FB1]" : "text-black bg-[#F0F3FF]"} text-center bg-[#0d0d0d28] border border-[#C3C5D7] rounded-xl py-2 mb-3`}>
      <p className="text-xs font-bold uppercase tracking-widest">
        {dayNum}
      </p>
      <p className="text-xl font-bold">{day}</p>
    </div>
  );
};

export default CardDate;
