import CardOpinion from "./components/Home/CardOpinion";
import feedback from "./data/feedback.json";

const doubled = [...feedback, ...feedback];

function InfiniteSlider() {
  return (
    <div className="w-full relative overflow-hidden">

      {/* Difuminado izquierda */}
      <div className="absolute left-0 top-0 h-full w-28 z-10 pointer-events-none
                      bg-linear-to-r md:from-primary md:via-[#0a122b33] to-transparent" />

      {/* Difuminado derecha ✅ */}
      <div className="absolute right-0 top-0 h-full w-28 z-10 pointer-events-none
                      bg-linear-to-l md:from-primary md:via-[#0a122b33] to-transparent" />

      {/* Track animado ✅ */}
      <div
        className="flex gap-4 w-max py-4"
        style={{ animation: "slide 25s linear infinite" }}
        onMouseEnter={e => e.currentTarget.style.animationPlayState = "paused"}
        onMouseLeave={e => e.currentTarget.style.animationPlayState = "running"}
  
      >
        {doubled.map((item,i) => (
          <CardOpinion
          key={`slide-${i}`}
            name={item.name}
            testimonial={item.opinion}
            accent={item.accent}
          />
        ))}
      </div>

    </div>
  );
}

export default InfiniteSlider;