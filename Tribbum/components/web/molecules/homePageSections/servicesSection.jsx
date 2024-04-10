/* eslint-disable @next/next/no-img-element */
const ServicesSection = () => {
  return (
    <div
      id="services section"
      className="flex flex-col w-full h-auto md:pb-12 xl:pb-0 items-center font-system bg-secondary-200"
    >
      <div className="flex flex-col-reverse lg:flex-row w-full max-w-[1140px] lg:container lg:mx-auto xl:max-w-[1140px] h-auto mt-12 items-center lg:items-start">
        <div className="flex flex-col w-full lg:w-1/2 h-auto px-4 items-center">
          <div className="flex flex-col w-full h-auto mt-4 lg:mt-0justify-center items-center lg:items-start pl-8 xl:pl-0 xl:items-center">
            <img
              src="/assets/images/iphone_blanco_home3.png"
              alt="Iphone tribbum app home screens"
              className="flex w-[510px] lg:w-[542px] h-auto "
            />
          </div>
        </div>
        <div className="flex flex-col w-full max-w-[540px] md:max-w-[720px] lg:max-w-full lg:w-1/2 h-auto px-4 mt-8 xl:mt-0 lg:ml-4 xl:ml-0 items-center ">
          <div className="flex flex-row w-full max-w-[600px] h-auto justify-center lg:justify-start items-center">
            <h3 className="text-[22.652px] font-normal text-center lg:text-left text-secondary-500 leading-snug">
              Servicios
            </h3>
          </div>
          <div className="flex flex-row w-full max-w-[600px] h-auto mt-3 justify-center lg:justify-start items-center">
            <h2 className="flex md:hidden xl:flex text-[44px] font-bold text-center lg:text-left text-primary-500 leading-snug">
              Encuentra o publica tu
              <br /> hogar
            </h2>
            <h2 className="hidden md:flex lg:w-[450px] xl:w-full xl:hidden text-[44px] font-bold text-center lg:text-left text-primary-500 leading-snug">
              Encuentra o publica tu hogar
            </h2>
          </div>
          <div className="flex flex-row w-full max-w-[950px] h-auto mt-3 justify-center items-center">
            <p className="text-[22.652px] font-normal text-center lg:text-left text-primary-500 leading-snug">
              De este modo, no sólo reduciréis la carga económica que comportan
              los gastos de una vivienda, sino también crear sinergias acorde a
              vuestras necesidades y valores.
            </p>
          </div>
          <div className="flex flex-col w-full h-auto mt-[30px] items-center lg:items-start">
            <img
              src="/assets/images/ilustracion_home_2.png"
              alt="Iphone tribbum app ilustración"
              className="flex w-[312.98px] h-[300px] "
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServicesSection;
