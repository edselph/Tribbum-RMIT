"use client";
import { useEffect, useState } from "react";
import EditProfileForm from "../molecules/editProfile/editProfileForm";

/* eslint-disable @next/next/no-img-element */
const OnBoardingPage = () => {
  const [tabSlide, setTabSlide] = useState(1);
  /* const list = CitiesList();
  console.log("list", list); */
  return (
    <div className="flex flex-col w-full h-auto pt-12 md:pt-20 px-4 items-center relative z-10">
      <div className="flex flex-col w-full max-w-[1140px] h-auto px-4 md:px-8 lg:px-8 xl:px-0 items-center">
        <div className="flex w-full h-auto mt-8 justify-center ">
          {tabSlide === 1 ? (
            <h1 className="hidden md:flex text-2xl font-light text-primary-500 text-center ">
              Completa tu perfil para encontrar casas <br />o personas con quién
              compartir tu casa.
            </h1>
          ) : (
            <h1 className="hidden md:flex text-2xl font-light text-primary-500 text-center ">
              Queremos saber más de ti
            </h1>
          )}
          {tabSlide === 1 ? (
            <h1 className="flex md:hidden px-6 text-xl font-light text-primary-500 text-center ">
              Completa tu perfil para encontrar casas o personas con quién
              compartir tu casa.
            </h1>
          ) : (
            <h1 className="flex md:hidden px-6 text-xl font-light text-primary-500 text-center ">
              Queremos saber más de ti
            </h1>
          )}
        </div>
      </div>

      <div className="flex flex-col w-full max-w-[760px] h-auto mt-8 mb-12 py-8 px-4 bg-tertiary-100 shadow-xl rounded-3xl border border-gray-200 ">
        <EditProfileForm tabSlide={tabSlide} setTabSlide={setTabSlide} />
      </div>
    </div>
  );
};
export default OnBoardingPage;
