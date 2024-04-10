import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
const CloudsHero = () => {
  return (
    <>
      <div className="absolute -top-[20px] left-20 w-auto h-auto z-30">
        <div className="hidden lg:flex w-auto h-auto justify-center items-start">
          <Link href="/">
            <img
              src="/assets/images/tribbum-log.png"
              alt="logo tribbum"
              className="flex w-auto h-[77px] active:scale-95 "
            />
          </Link>
        </div>
      </div>
      <div className="absolute bottom-[290px] lg:bottom-10 -left-10 w-auto h-auto justify-center z-10">
        <div className="flex w-auto h-auto justify-center items-start">
          <img
            src="/assets/images/cloud1.png"
            alt="tribbum small cloud image"
            className="flex w-auto h-[84px] "
          />
        </div>
      </div>
      <div className="absolute -top-[72px] right-0 w-auto h-auto z-20">
        <div className="hidden md:flex w-auto h-auto justify-center items-start">
          <img
            src="/assets/images/cloud_big.png"
            alt="tribbum big cloud image"
            className="flex w-auto h-[739px] "
          />
        </div>
      </div>
      <div className="absolute top-0 w-auto h-auto justify-center z-20">
        <div className="flex w-auto h-auto justify-center items-start">
          <img
            src="/assets/images/cloud1.png"
            alt="tribbum small cloud image"
            className="flex w-auto h-[84px] "
          />
        </div>
      </div>
      <div className="absolute bottom-[120px] right-0 w-auto h-auto justify-center z-30">
        <div className="flex w-auto h-auto justify-center items-start">
          <img
            src="/assets/images/cloud2.png"
            alt="tribbum small tranparent cloud image"
            className="flex w-auto h-[102px] "
          />
        </div>
      </div>
    </>
  );
};
export default CloudsHero;
