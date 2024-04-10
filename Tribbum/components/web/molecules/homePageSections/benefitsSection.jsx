/* eslint-disable @next/next/no-img-element */
const BenefitsSection = () => {
  return (
    <div
      id="benefits section"
      className="flex flex-col w-full h-auto mb-[170px] lg:mb-[40px] items-center font-system"
    >
      <div className="flex flex-row w-full max-w-[1140px] lg:container lg:mx-auto xl:max-w-[1140px]  h-auto items-center justify-center">
        <div className="flex flex-col w-full max-w-[540px] md:max-w-[720px] lg:max-w-full lg:w-1/2 h-auto px-4 mt-8 lg:ml-4 xl:ml-0 items-center ">
          <div className="flex flex-row w-full max-w-[600px] h-auto justify-center lg:justify-start items-center">
            <h3 className="text-[22.652px] font-normal text-center lg:text-left text-secondary-500 leading-snug">
              Beneficios
            </h3>
          </div>
          <div className="flex flex-row w-full max-w-[600px] h-auto mt-3 justify-center lg:justify-start items-center">
            <h2 className="flex md:hidden lg:flex text-[44px] font-bold text-center lg:text-left text-primary-500 leading-snug">
              Encuentra a tu nueva
              <br /> tribu
            </h2>
            <h2 className="hidden md:flex lg:hidden text-[44px] font-bold text-center  text-primary-500 leading-snug">
              Encuentra a tu nueva tribu
            </h2>
          </div>
          <div className="flex flex-row w-full max-w-[950px] h-auto mt-3 justify-center items-center">
            <p className="text-[22.652px] font-normal text-center lg:text-left text-primary-500 leading-snug">
              Tribbum es una red social comunitaria donde el usuario puede
              encontrar un nuevo hogar desde la comprensión, el respeto, la
              empatía, el apoyo, la conexión y la ayuda mutuas. El usuario
              tendrá la oportunidad no sólo de conocer personas en su misma
              situación sino también personas o familias con otras
              particularidades para que puedan emprender juntos un nuevo
              proyecto, en función de sus afinidades y sus valores.
            </p>
          </div>
        </div>
        <div className="hidden lg:flex flex-col w-1/2 h-auto px-4 items-center">
          <div className="flex flex-col w-full h-auto justify-center items-start pl-8 xl:pl-0 xl:items-center">
            <img
              src="/assets/images/iphone_home_4.png"
              alt="Iphone tribbum app home screens"
              className="flex w-[249px] h[500px] "
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default BenefitsSection;
