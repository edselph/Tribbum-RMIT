import AppleStoreBtn from "@/components/web/elements/storeButton/appleStoreBtn";
import GoogleStoreBtn from "@/components/web/elements/storeButton/googleStoreBtn";

/* eslint-disable @next/next/no-img-element */
const SocialSection = () => {
  return (
    <div
      id="social section"
      className="flex flex-col w-full h-auto lg:h-[700px] lg:overflow-hidden pb-12 lg:pb-0 items-center lg:items-start font-system bg-secondary-100 relative"
    >
      <div className="absolute top-0 left-0 w-full h-auto z-10">
        <img
          src="/assets/images/cloud_big2.png"
          alt="tribbum big cloud image"
          className="flex w-[542px] h-[auto "
        />
      </div>
      <div className="flex flex-col-reverse lg:flex-row w-full max-w-[1140px] lg:container lg:mx-auto xl:max-w-[1140px] h-auto items-center lg:items-start z-30">
        <div className="flex flex-col w-full lg:w-1/2 h-auto px-4 items-center">
          <div className="flex flex-col w-full h-auto mt-8 justify-center items-center lg:items-start pl-8 lg:pl-0 ">
            <img
              src="/assets/images/iphone_home_6.png"
              alt="Iphone tribbum app home screens"
              className="flex w-[306px] h-auto "
            />
          </div>
        </div>
        <div className="flex flex-col w-full max-w-[540px] md:max-w-[720px] lg:max-w-full lg:w-1/2 h-auto px-4 mt-8 lg:ml-4 xl:ml-0 items-center ">
          <div className="flex flex-row w-full max-w-[600px] h-auto justify-center lg:justify-start items-center">
            <h3 className="text-[22.652px] font-normal text-center lg:text-left text-secondary-500 leading-snug">
              Red Social
            </h3>
          </div>
          <div className="flex flex-row w-full max-w-[600px] h-auto mt-3 justify-center lg:justify-start items-center">
            <h2 className="flex md:hidden xl:flex text-[44px] md:text-[46px] font-bold text-center lg:text-left text-primary-500 leading-snug">
              Chatea y descubre a tu
              <br /> compañero de vida ideal
            </h2>
            <h2 className="hidden md:flex lg:w-[450px] xl:w-full xl:hidden text-[44px] md:text-[46px] font-bold text-center lg:text-left text-primary-500 leading-snug">
              Chatea y descubre a tu compañero de vida ideal
            </h2>
          </div>
          <div className="flex flex-row w-full max-w-[950px] h-auto mt-3 justify-center items-center">
            <p className="text-[22.652px] font-normal text-center lg:text-left text-primary-500 leading-snug">
              Chatea, conócelos y descubre si son las personas que realmente
              estás buscando para compartir tu vida y la de tu familia.
            </p>
          </div>
          <div className="flex flex-row flex-wrap w-full h-auto gap-2 px-12 md:px-0 mt-8 justify-center items-center">
            <AppleStoreBtn />
            <GoogleStoreBtn />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SocialSection;
