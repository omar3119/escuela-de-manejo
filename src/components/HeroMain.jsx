
const HeroMain = ({
  title,
  title2,
  description,
  colorTitle,
  colorTitle2,
  colorText,
  children,
  textAlign = "text-center",
}) => {
  return (
    <div className="max-w-150 w-full relative z-60 mx-auto">
      <div className={`w-full ${textAlign}`}>
        <h1
          className={`text-5xl font-bold leading-14 ${colorTitle}  lg:text-7xl lg:leading-20`}
        >
          {title}
          <span className={colorTitle2}>{title2}</span>
        </h1>
        <p className={` leading-8  text-lg mt-6 ${colorText}`}>{description}</p>
      </div>


    </div>
  );
};

export default HeroMain;
//text-[#DBEAFE]
