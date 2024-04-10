/* eslint-disable @next/next/no-img-element */
const cards = [
  {
    id: 1,
    iconUrl: "/assets/icons/vector_child.png",
    title: "Familia monoparental o separados",
    description:
      "Familias donde uno de los progenitores o tutor legal se hace cargo de los hijos de forma permanente o mediante custodia compartida.",
  },
  {
    id: 2,
    iconUrl: "/assets/icons/vector_older.png",
    title: "Aprende de la experiencia (personas mayores)",
    description:
      "Para que nuestros mayores dejen de estar o sentirse solos, creando un vínculo donde los más jóvenes se beneficien de su sabiduría mejorando la empatía, la tolerancia y el respeto entre otros.",
  },
  {
    id: 3,
    iconUrl: "/assets/icons/vector_family2.png",
    title: "Familia tradicional u homoparental",
    description:
      "Enfocado a los diversos tipos de familias compuesto por padre/s, madre/s y/o tutores legales con hijo/s.",
  },
  {
    id: 4,
    iconUrl: "/assets/icons/vector_pareja.png",
    title: "Familias sin hijos u otros",
    description:
      "Enfocado a parejas sin hijos o solteros que deseen conocer y compartir perfiles por los que Tribbum se caracteriza.",
  },
];

const ShareSection = () => {
  return (
    <div
      id="share section"
      className="flex flex-col w-full h-auto items-center font-system bg-secondary-100"
    >
      <div className="flex flex-col w-full max-w-[1140px] h-auto px-4 items-center mt-[100px]">
        <div className="flex flex-row w-full max-w-[600px] h-auto justify-center items-center">
          <h2 className="text-[44px] font-bold text-center text-primary-500 leading-snug">
            Comparte casa con gente en tu misma situación
          </h2>
        </div>
        <div className="flex flex-row w-full max-w-[950px] h-auto mt-3 justify-center items-center">
          <p className="text-[26px] font-normal text-center text-primary-500 leading-relaxed">
            Unimos a personas y familias con diferentes necesidades y valores
            para que puedas formar tu propia tribu, con principios claves como
            el respeto y la comprensión creando así un “sistema de apoyo”.
          </p>
        </div>
      </div>

      <div className="flex flex-col w-full h-auto pt-[100px] pb-[80px] pl-8">
        <div className="flex flex-row w-full h-auto px-4 pb-8 xl:justify-center items-center overflow-y-scroll gap-4">
          {cards?.map((card) => {
            return (
              <div
                key={card.id}
                className=" flex flex-col w-[296px] shrink-0 h-[397px] bg-white border-2 border-gray-100 rounded-[50px] shadow-md shadow-[1px_1px_1px_1px_rgba(0,0,0,0.1)] p-4 items-center"
              >
                <div className="flex w-[100px] h-[100px] mt-[20px] justify-center items-center">
                  <img
                    src={card.iconUrl}
                    alt={`icon ${card.title}`}
                    className="flex w-full h-full "
                  />
                </div>
                <div className="flex flex-wrap w-full h-auto mt-4 justify-center">
                  <p className="text-xl font-bold text-center text-primary-500 leading-5">
                    {card.title}
                  </p>
                </div>
                <div className="flex flex-wrap w-full h-auto mt-4 justify-center">
                  <p className="text-base font-normal text-center text-primary-500 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default ShareSection;
