import CloudsHero from "@/components/web/elements/cloudsHero/cloudsHero";

/* eslint-disable @next/next/no-img-element */
const ValuesPage = () => {
  return (
    <>
      <div
        id="hero scene"
        className="flex flex-col w-full h-auto items-center font-system relative "
      >
        <CloudsHero />
        <div className="flex flex-col-reverse lg:flex-row w-full max-w-[1140px] h-auto px-4 md:mt-[80px] pb-16 md:pb-0 justify-between items-center z-40">
          <div className="flex flex-col w-auto lg:w-[515px] xl:w-autoh-auto lg:pl-4 xl:pl-0 mt-8 lg:mt-20 justify-center items-center lg:items-start">
            <h1 className="hidden md:flex w-auto h-auto text-[44px] text-primary-500 font-bold text-center lg:text-left leading-snug">
              Valores, misión
              <br />
              empresa
            </h1>
            <h1 className="flex md:hidden w-auto h-auto my-4 text-[44px] text-primary-500 font-bold text-center leading-snug">
              Valores, misión empresa
            </h1>
            <div className="flex flex-col w-full max-w-[555px] mt-5">
              <p className="text-primary-500 font-normal text-[26px] leading-relaxed text-center lg:text-left">
                Una comunidad con principios básicos como la armonía, el amor,
                el respeto y la ayuda mutua que permita no sólo la convivencia
                sino crear sinergias acorde con las necesidades y valores de
                cada nueva tribu.
              </p>
            </div>
          </div>
          <div className="flex flex-col w-auto h-auto justify-center">
            <img
              src="/assets/images/valores.png"
              alt="Iphone tribbum app values screen"
              className="flex w-auto h-auto"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full h-auto items-center font-system z-50 relative">
        <div className="flex flex-col w-full max-w-[540px] md:w-full max-w-[1140px] md:container md:mx-auto xl:max-w-[1140px] h-auto px-4 pb-16 lg:mt-36 items-center">
          <div className="flex w-full h-auto">
            <iframe
              className="w-full aspect-video"
              src="https://firebasestorage.googleapis.com/v0/b/tribbum-ffe98.appspot.com/o/TRIBBUM.mp4?alt=media&token=1b47ff0f-4668-4f2d-b443-18781535e7f7"
            ></iframe>
          </div>
          <div className="flex flex-col w-full h-auto mt-24 gap-6 ">
            <p className="text-primary-500 font-normal text-[22.652px] leading-relaxed text-left">
              Unimos a personas y familias con diferentes necesidades y valores
              para que puedas formar tu propia tribu, con principios como el
              respeto y la comprensión creando así un “sistema de apoyo”.
            </p>
            <p className="text-primary-500 font-normal text-[22.652px] leading-relaxed text-left">
              Se trata de promover una red comunitaria y solidaria donde el
              usuario pueda encontrar un nuevo hogar desde la comprensión, el
              respeto, la empatía, el apoyo, la conexión y la ayuda mutuas. El
              usuario tendrá la oportunidad no sólo de conocer personas en su
              misma situación sino también personas o familias con otras
              particularidades para que puedan emprender juntos un nuevo
              proyecto, en función de sus afinidades y sus valores.
            </p>
            <p className="text-primary-500 font-normal text-[22.652px] leading-relaxed text-left">
              De este modo, no sólo se reduce la carga económica que comportan
              los gastos de una vivienda, sino también crear sinergias que
              permitan resituar el reparto de tareas incentivando nuevas formas
              de consumo y de ahorro, especialmente en el caso de familias con
              menores.
            </p>
            <p className="text-primary-500 font-normal text-[22.652px] leading-relaxed text-left">
              Es una necesidad realizar cambios importantes en nuestra sociedad,
              en el modelo de convivencia que implique una mayor solidaridad así
              como el fortalecimiento y adaptación de las políticas de bienestar
              y de cohesión social.
            </p>
            <p className="text-primary-500 font-normal text-[22.652px] leading-relaxed text-left">
              Ejemplos para hogares con menores: coordinar los horarios
              laborables para hacer frente a los cuidados del total de menores
              que residen en el hogar, aprovechar las habilidades de cada uno de
              los progenitores o tutores ayudando en servicios de repaso o
              refuerzo, de entrenamiento deportivo, actividades lúdicas o
              artísticas, etc. Existen tantas posibilidades como necesidades o
              inquietudes haya en la tribu.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default ValuesPage;
