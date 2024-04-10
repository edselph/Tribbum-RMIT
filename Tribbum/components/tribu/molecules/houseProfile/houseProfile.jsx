"use client";
import FeatureChip from "../../elements/featureChip/featureChip";
import { useState } from "react";
/* datas from dummydatas before fetching */
import {
  AvailableRooms,
  houseFeatures,
  imgDatas,
  sharingProfilePref
} from "@/utils/dummyDatas";

import PeopleProfileSlideOver from "../peopleProfile/peopleProfileSlideover";

/* eslint-disable @next/next/no-img-element */
const HouseProfile = ({ toggleHouseSlideOver }) => {
  const [sliderImgUrl, setSliderImgUrl] = useState(imgDatas[0].imgUrl);
  const [isPeopleSlideOpen, setIsPeopleSlideOpen] = useState(false);

  function togglePeopleSlideOver() {
    setIsPeopleSlideOpen(!isPeopleSlideOpen);
    document
      .getElementById("people-slideover")
      .classList.toggle("translate-x-full");
    if (!isPeopleSlideOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }
  return (
    <div className="flex flex-col w-full h-screen mt-[72px] px-4 md:px-8 lg:px-8 items-center relative z-40 bg-white md:bg-white/80 md:rounded-3xl">
      <div
        id="people-slideover"
        className={`flex fixed inset-0 top-0 right-0 w-full h-screen duration-300 ease-out transition-all translate-x-full z-50`}>
        <div className="flex flex-col w-full h-auto items-center">
          <PeopleProfileSlideOver
            togglePeopleSlideOver={togglePeopleSlideOver}
          />
        </div>
      </div>
      <div className="flex flex-row w-full h-full justify-end">
        <div className="flex flex-col w-full max-w-[760px] h-auto mb-24 bg-tertiary-100 shadow-xl rounded-3xl border border-gray-200 ">
          <div className="flex flex-col w-auto max-w-[1140px] h-auto mt-4 items-end">
            <div className="flex flex-col w-auto h-auto px-4 mt-4 justify-end">
              <button
                className="flex w-[128px] h-[35px] py-2 px-4 justify-center items-center bg-tertiary-400 rounded-full active:scale-95 cursor-pointer"
                onClick={() => toggleHouseSlideOver()}>
                <span className="flex text-white text-[13px] font-medium uppercase">
                  Cerrar
                </span>
              </button>
            </div>
          </div>
          <div className="flex flex-col w-auto h-auto my-8 overflow-y-scroll">
            <div id="img slider" className="flex flex-col w-full h-auto ">
              <div className="flex w-full h-[200px] md:h-[300px] px-4 overflow-hidden relative">
                <div className="flex w-full h-full overflow-hidden bg-white rounded-xl">
                  <img
                    src={sliderImgUrl}
                    alt="Foto casa por compartir"
                    className="flex w-full min-w-[300px] h-auto object-cover"
                  />
                </div>
                <div className="flex flex-col absolute bottom-0 right-4 w-auto h-auto min-h-12 px-4 py-2 bg-tertiary-400 justify-center items-center rounded-br-xl">
                  <span className="flex text-lg text-white font-light">
                    400 €/mes
                  </span>
                  {/* {negociable && <p className="flex text-xs text-white font-light">Negociable</p>} */}
                  <span className="flex text-xs text-white font-light">
                    Negociable
                  </span>
                </div>
              </div>
              {/* Img tabs */}
              {imgDatas.length > 0 && (
                <div className="flex flex-col w-full h-auto pl-4  ">
                  <div className="flex flex-row w-full h-auto py-4 items-center overflow-scroll gap-4">
                    {imgDatas?.map((data) => {
                      return (
                        <div
                          key={data.id}
                          className="flex w-32 min-w-32 h-24 shrink-0 bg-gray-500/50 rounded-2xl active:scale-95 cursor-pointer overflow-hidden"
                          onClick={() => setSliderImgUrl(data.imgUrl)}>
                          <img
                            src={data.imgUrl}
                            alt="Imagen de casa por compartir"
                            className="flex w-auto h-auto object-cover"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-col w-full h-auto px-4 mt-8 ">
              {/* Title */}
              <div className="flex flex-row w-auto h-auto px-2 justify-between items-center">
                <span className="text-xl font-medium text-primary-500">
                  Habitación en piso compartido calle Girona
                </span>
              </div>
              {/* Address */}
              <div className="flex flex-row w-auto h-auto px-2 mt-2 justify-between items-center">
                <span className="text-lg font-normal text-primary-500">
                  en Barcelona
                </span>
              </div>
            </div>
            {/* Available rooms */}
            <div className="flex flex-row w-auto h-auto px-4 mt-2 justify-center items-center">
              <div className="flex flex-row flex-wrap w-full h-auto mt-4 justify-start items-center gap-4">
                {AvailableRooms?.map((data) => {
                  return (
                    <FeatureChip
                      text={data.text}
                      icon={data.icon}
                      chipWidth={data.chipWidth}
                      key={data.id}
                      id={data.id}
                      chipType={data.chipType}
                    />
                  );
                })}
              </div>
            </div>
            {/* Sharing Profile Pref*/}
            <div className="flex flex-col w-full h-auto px-4 mt-8 ">
              <div className="flex w-full h-auto ">
                <span className="text-sm font-light text-primary-500">
                  Preferencias de compañero
                </span>
              </div>
              <div className="flex flex-row flex-wrap w-full h-auto mt-4 gap-4">
                {sharingProfilePref?.map((data) => {
                  return (
                    <div
                      key={data.id}
                      id={data.id}
                      className="flex w-auto h-auto px-4 py-1 justify-center items-center bg-tertiary-400 rounded-full">
                      <span className="flex text-white text-base font-light">
                        {data.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* House features*/}
            <div className="flex flex-col w-full h-auto px-4 mt-8 ">
              <div className="flex w-full h-auto ">
                <span className="text-sm font-light text-primary-500">
                  Caracteríticas de la vivienda
                </span>
              </div>
              <div className="flex flex-row flex-wrap w-full h-auto mt-4 gap-4">
                {houseFeatures?.map((data) => {
                  return (
                    <FeatureChip
                      text={data.text}
                      icon={data.icon}
                      chipWidth={data.chipWidth}
                      key={data.id}
                      id={data.id}
                      chipType={data.chipType}
                    />
                  );
                })}
              </div>
            </div>
            {/* Add Comment*/}
            <div className="flex flex-col w-full h-auto px-4 mt-8 ">
              <div className="flex flex-col w-full h-auto ">
                <span className="text-sm font-light text-primary-500">
                  Máximo una semana
                </span>
                <span className="text-sm font-light text-primary-500">
                  Las semanas que mi hija está con su padre
                </span>
              </div>
            </div>
            {/* Owner profile widget*/}
            <div className="flex flex-col w-full h-auto px-4 mt-8 mb-12">
              <div className="flex flex-row w-full h-auto gap-4 items-center">
                <div className="flex w-16 h-16 rounded-full overflow-hidden">
                  <img
                    src="/assets/images/portrait_profile.png"
                    alt="Imagen del propietario"
                    className="flex w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col w-auto h-auto">
                  <span className="text-sm font-normal text-primary-500">
                    Noelia Pedretti
                  </span>
                  <span className="text-xs font-normal text-primary-500">
                    43 años - Barcelona
                  </span>
                  <div className="flex w-auto h-auto mt-2">
                    <div
                      className="flex w-auto h-auto px-4 py-1 bg-tertiary-400 rounded-full active:scale-95 cursor-pointer"
                      onClick={() => togglePeopleSlideOver()}>
                      <span className="text-xs font-normal text-white">
                        Ver perfil de Noelia
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HouseProfile;
