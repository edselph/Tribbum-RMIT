import CloudsHero from "@/components/web/elements/cloudsHero/cloudsHero";
import AppleStoreBtn from "@/components/web/elements/storeButton/appleStoreBtn";
import GoogleStoreBtn from "@/components/web/elements/storeButton/googleStoreBtn";
import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
const HeroScene = () => {
  return (
    <div
      id="hero scene"
      className="flex flex-col w-full h-auto items-center font-system relative "
    >
      <div className="flex flex-col-reverse lg:flex-row w-full max-w-[1140px] h-auto px-4 md:mt-[120px] justify-between items-center z-40">
        <div className="flex flex-col w-auto h-auto lg:pl-4 xl:pl-0 justify-center items-center lg:items-start">
          <h1 className="hidden md:flex w-auto h-auto text-[44px] text-primary-500 font-bold text-center lg:text-left leading-snug">
            Encuentra a tu nueva
            <br />
            tribu
          </h1>
          <h1 className="flex md:hidden w-auto h-auto my-4 text-[44px] text-primary-500 font-bold text-center leading-snug">
            Encuentra a tu nueva tribu
          </h1>
          <div className="flex flex-col w-full max-w-[555px]">
            <p className="text-primary-500 font-normal text-[26px] leading-relaxed text-center lg:text-left">
              Encuentra un nuevo hogar, una forma de vida o una nueva etapa que
              permitirá compartir tu día a día con quien tú quieras.
            </p>
          </div>
          <div className="flex flex-row flex-wrap w-full h-auto gap-2 px-12 md:px-0 mt-8 justify-center items-center">
            <AppleStoreBtn />
            <GoogleStoreBtn />
          </div>
        </div>
        <div className="flex flex-col w-auto h-auto justify-center">
          <img
            src="/assets/images/iphone_home_2.png"
            alt="Iphone tribbum app home screens"
            className="flex w-[389px] h-auto"
          />
        </div>
      </div>
      <CloudsHero />
    </div>
  );
};
export default HeroScene;
