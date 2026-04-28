import { useEffect, useRef, useState } from "react";

const HeroMain = ({
  title,
  title2,
  description,
  colorTitle,
  colorTitle2,
  colorText,
  textAlign = "text-center",
}) => {
  const titleRef = useRef(null);
  const [isTitleVisible, setIsTitleVisible] = useState(false);

  useEffect(() => {
    const element = titleRef.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTitleVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.3,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="max-w-180 w-full relative z-60 mx-auto">
      <div className={`w-full ${textAlign}`}>
        <h1
          ref={titleRef}
          className={`text-5xl font-bold leading-14 ${colorTitle} lg:text-7xl lg:leading-20 transition-all duration-700 ease-out ${
            isTitleVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          {title}
          <span className={colorTitle2}>{title2}</span>
        </h1>
        <p
          className={`leading-8 text-lg mt-6 ${colorText} transition-all duration-700 delay-150 ease-out ${
            isTitleVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default HeroMain;
//text-[#DBEAFE]
