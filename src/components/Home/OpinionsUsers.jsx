import CardOpinion from "./CardOpinion";

import feedback from "../../data/feedback.json";
const OpinionsUsers = () => {
  return (
    <div className="w-full bg-primary lg:flex lg:justify-center">
      <div className="px-6 py-18 lg:py-24 lg:max-w-5xl">
        <div className="">
          <div className="w-full flex justify-center">
            <div className="pb-8 max-w-md mx-auto text-center lg:max-w-3xl">
              <h2 className="text-white text-2xl font-bold lg:text-4xl pb-6">
                Opiniones de nuestros usuarios
              </h2>
              <p className="text-[#A4AAC8]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                incidunt repellat velit porro excepturi unde, officia odit
                soluta iste qui voluptas. Rerum veritatis quae necessitatibus
                odit laboriosam provident libero quasi.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5 lg:flex lg:flex-row">
            {feedback.map((feedback) => (
              <CardOpinion
                key={feedback.id}
                name={feedback.name}
                testimonial={feedback.opinion}
                accent={feedback.accent}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpinionsUsers;
