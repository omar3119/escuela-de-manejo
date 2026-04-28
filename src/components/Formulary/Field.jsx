const Field = ({ label, children, error }) => {
  return (
    <div className="flex flex-col gap-1.5 mb-5">
      <label
        className={`text-xs font-semibold tracking-widest uppercase ${
          error ? "text-orange-500" : "text-gray-400"
        }`}
      >
        {label}
      </label>
      {children}
    </div>
  );
};

export default Field;
