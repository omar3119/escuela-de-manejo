
const Benefits = ({ title, description, icon }) => {
  return (
    <div className="w-full p-6  bg-[#f1f1f1] rounded-lg md:flex md:justify-center lg:max-w-95.5">
      <div className="md:max-w-130 ">
        <div className="inline-block bg-[#1e40af18] p-2 rounded-lg">{icon}</div>

        <div>
          <h3 className="font-bold text-lg py-2">{title}</h3>
          <p className="text-[#444653] text-sm leading-6">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
