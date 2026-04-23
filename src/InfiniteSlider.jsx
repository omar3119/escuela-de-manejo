import CardOpinion from "./components/Home/CardOpinion";
import feedback from "./data/feedback.json";

const doubled = [...feedback, ...feedback];

function InfiniteSlider() {
  return (
    <div className="relative overflow-hidden">

      {/* Difuminado izquierda */}
      <div className="absolute left-0 top-0 h-full w-28 z-10 pointer-events-none
                      bg-linear-to-r from-primary via-[#0a122b94 to-transparent" />

      {/* Difuminado derecha ✅ */}
      <div className="absolute right-0 top-0 h-full w-28 z-10 pointer-events-none
                      bg-linear-to-l from-primary via-[#0a122b94] to-transparent" />

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