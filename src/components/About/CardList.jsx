import cardAudi from "../../assets/images/audi.webp";
import cardVolkswagen from "../../assets/images/Volkswagen.webp";
import cardToyota from "../../assets/images/toyota.webp";
const cardsData = [
  {
    img: cardAudi,
    title: "Audi Excellence",
    description: "Description for Card 1",
  },
  {
    img: cardVolkswagen,
    title: "Urban Pulse",
    description: "Volkswagen Polo (Manual)",
  },
  {
    img: cardToyota,
    title: "Eco Shield",
    description: "Toyota Corolla (Automatic)",
  },
];

const CardList = () => {
  return (
    <>
      {cardsData.map((card, index) => (
        <div key={index} className="w-full max-w-130 overflow-hidden rounded-xl">
          <figure className="w-full">
            <img
              className="block w-full rounded-t-xl object-cover"
              src={card.img}
              alt={card.title}
            />
          </figure>
          <div className="bg-[#4446531e] px-4 py-4 rounded-b-xl">
            <h3 className="text-lg font-bold text-primary">{card.title}</h3>
            <p className="text-[#444653]">{card.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardList;
