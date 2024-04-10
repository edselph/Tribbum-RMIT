/* eslint-disable @next/next/no-img-element */
const CommunitySection = () => {
  return (
    <div
      id="community section"
      className="flex flex-col w-full h-auto pb-12 lg:pb-0 items-center font-system"
    >
      <div className="flex flex-col lg:flex-row w-full max-w-[1140px] lg:container lg:mx-auto xl:max-w-[1140px] h-auto items-center lg:items-start">
        <div className="flex flex-col w-full max-w-[540px] md:max-w-[720px] lg:max-w-full lg:w-1/2 h-auto px-4  lg:ml-4 xl:ml-0 items-center ">
          <div className="flex flex-row w-full max-w-[600px] h-auto justify-center lg:justify-start items-center">
            <h3 className="text-[22.652px] font-normal text-center lg:text-left text-secondary-500 leading-snug">
              Comunidad
            </h3>
          </div>
          <div className="flex flex-row w-full max-w-[600px] h-auto mt-3 justify-center lg:justify-start items-center">
            <h2 className="flex text-[46px] font-bold text-center md:text-left text-primary-500 leading-snug">
              Encuentra gente como tú
            </h2>
          </div>
          <div className="flex flex-row w-full max-w-[950px] h-auto mt-3 justify-center items-center">
            <p className="text-[22.652px] font-normal text-center lg:text-left text-primary-500 leading-snug">
              Accede a perfiles de personas que están en tu misma situación,
              conócelos y descubre si es la persona o núcleo familiar con la que
              querrás iniciar este nuevo proyecto.
            </p>
          </div>
          <div className="flex flex-col w-full h-auto mt-[30px] items-center lg:items-start">
            <img
              src="/assets/images/ilustracion_home_1.png"
              alt="Iphone tribbum app ilustración"
              className="flex w-[500px] h-auto "
            />
          </div>
        </div>
        <div className="flex flex-col w-1/2 h-auto px-4 items-center relative">
          <div className="hidden lg:flex flex-col w-full h-auto justify-center items-start pl-8 xl:pl-0 xl:items-center absolute -top-[30px] -right-[150px] z-20">
            <img
              src="/assets/images/iphone_home_4.png"
              alt="Iphone tribbum app home screens"
              className="flex w-[249px] h[500px] "
            />
          </div>
          <div className="hidden lg:flex flex-col w-full h-auto justify-center items-start pl-8 xl:pl-0 xl:items-center absolute top-[40px] right-0 z-40">
            <img
              src="/assets/images/iphone_home_7.png"
              alt="Iphone tribbum app home screens"
              className="flex w-[249px] h[500px] "
            />
          </div>
          {
            <div className="flex lg:hidden flex-col w-full h-auto items-center mt-12 ">
              <img
                src="/assets/images/iphone_home_7.png"
                alt="Iphone tribbum app home screens"
                className="flex w-[249px] h[500px] "
              />
            </div>
          }
        </div>
      </div>
    </div>
  );
};
export default CommunitySection;
