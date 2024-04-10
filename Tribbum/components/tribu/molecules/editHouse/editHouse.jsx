/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useState } from "react";
import DragAndDropHouse from "../../elements/dragAndDropHouse/dragAndDropHouse";
import {
  sharingPeople,
  sharingGender,
  houseFeatures,
} from "@/utils/filterDatas.jsx";
import FilterChip from "../../elements/filterChip/filterChip";
import NoIconCHip from "../../elements/noIconChip/noIconChip";
import DoubleBedroom from "@/public/assets/icons/double_bedroom.svg";
import SingleBedroom from "@/public/assets/icons/single_bedroom.svg";
import Counter from "../../elements/counter/counter";
import ToggleInput from "../../elements/toggleInput/toggleInput";
import LocationInput from "../../elements/locationInput/locationInput";

const EditHouse = ({ tabSlide, setTabSlide }) => {
  const [endEditing, setEndEditing] = useState(false);
  const [availableDoubleRoomNumber, setAvailableDoubleRoomNumber] = useState(0);
  const [availableIndividualRoomNumber, setAvailableIndividualRoomNumber] =
    useState(0);
  const [furnishedRoom, setFurnishedRoom] = useState(false);
  const [negotiablePrice, setNegotiablePrice] = useState(false);

  function scrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }
  const sharingAgeGroup = [
    {
      id: "1",
      groupAge: "Sin preferencia de edad",
      chipWidth: "large",
    },
    {
      id: "2",
      groupAge: "Hasta 35 años",
      chipWidth: "large",
    },
    {
      id: "3",
      groupAge: "Entre 35 y 49 años",
      chipWidth: "large",
    },
    {
      id: "4",
      groupAge: "Más de 50 años",
      chipWidth: "large",
    },
  ];
  return (
    <div className="flex flex-col w-full h-auto ">
      {endEditing && (
        <div className="flex flex-col absolute top-0 left-0 w-full h-full px-4 bg-white/80 mt-20 items-center z-50">
          <div className="flex flex-col w-full md:w-1/2 h-[400px] px-4 bg-red-500 rounded-xl justify-center items-center">
            <p className="flex text-primary-500 text-lg font-normal text-center">
              Tu datos se han guardado exitosamente
            </p>
            <div className="flex flex-col md:flex-row w-full max-w-[500px] h-auto mt-12 justify-end justify-between">
              <button
                className="flex w-auto h-auto py-2 px-10 justify-center items-center bg-gray-300 hover:bg-secondary-500 rounded-full cursor-pointer active:scale-95 group"
                onClick={() => setEndEditing(false)}
              >
                <span className="flex text-primary-500 font-normal text-lg group-hover:text-white text-center">
                  Seguir editando
                </span>
              </button>
              <Link
                href="/tribu"
                className="flex w-auto h-auto mt-8 md:mt-0 py-2 px-4 justify-center items-center bg-tertiary-500 hover:bg-secondary-500 rounded-full cursor-pointer active:scale-95"
              >
                <span className="flex text-white font-normal text-lg">
                  Ir a la home
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}
      <div className="flex w-full h-auto pb-6 justify-center items-center">
        <div className="flex flex-row w-auto h-auto justify-center items-center gap-2">
          {[...Array(4)].map((item, index) => {
            return (
              <div
                className={`flex w-3 h-3 ${
                  tabSlide >= index + 1 ? "bg-tertiary-500" : "bg-primary-200"
                } rounded-full`}
                key={index}
              ></div>
            );
          })}
        </div>
      </div>

      {/* SLIDE 1 */}
      {tabSlide === 1 && (
        <div className="flex flex-col w-full max-w-[760px] h-auto items-center">
          <div className="flex flex-col w-full h-auto items-center">
            <span className="flex text-lg text-primary-500 font-medium">
              Fotos de tu casa
            </span>
            <span className="flex text-md text-primary-200 font-normal text-center">
              para que otros usuarios puedan conocerte
            </span>
            <div className="flex flex-row w-full max-w-[500px] h-auto mt-4">
              <DragAndDropHouse />
            </div>
          </div>

          <div className="flex flex-row w-full max-w-[500px] h-auto mt-12 justify-end">
            <div
              className="flex w-auto h-auto py-2 px-4 bg-tertiary-500 hover:bg-secondary-500 rounded-full cursor-pointer active:scale-95"
              onClick={() => {
                setTabSlide(2), scrollToTop();
              }}
            >
              <span className="flex text-white font-normal text-lg">
                Siguiente
              </span>
            </div>
          </div>
        </div>
      )}
      {/* SLIDE 2 */}
      {tabSlide === 2 && (
        <div className="flex flex-col w-full h-auto ">
          <form className="flex flex-col w-full h-auto items-center">
            <div className="flex flex-col w-full h-auto items-center">
              <span className="flex text-lg text-primary-500 font-medium text-center">
                ¿Con quién quieres compartir?
              </span>
            </div>
            <div className="flex flex-col w-full max-w-[500px] h-auto mt-8 items-start">
              <span className="flex text-base text-primary-500 font-medium text-left">
                Preferencias de compañero
              </span>
            </div>
            <div className="flex flex-row flex-wrap w-full h-auto mt-4 justify-center items-center gap-4">
              {sharingGender?.map((data) => {
                return (
                  <FilterChip
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

            <div className="flex flex-col w-full max-w-[500px] h-auto mt-8 items-start">
              <span className="flex text-base text-primary-500 font-medium text-left">
                Preferencia de la situación del compañero
              </span>
            </div>
            <div className="flex flex-row flex-wrap w-full max-w-[500px] h-auto mt-4 px-4 md:px-8 justify-center items-center gap-4">
              {sharingPeople?.map((data) => {
                return (
                  <FilterChip
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
            <div className="flex flex-col w-full max-w-[500px] h-auto mt-8 items-start">
              <span className="flex text-base text-primary-500 font-medium text-left">
                Grupo de edad preferido
              </span>
            </div>
            <div className="flex flex-row flex-wrap w-full max-w-[500px] h-auto mt-4 px-4 md:px-8 justify-center items-center gap-4">
              {sharingAgeGroup?.map((data) => {
                return (
                  <NoIconCHip
                    text={data.groupAge}
                    icon={data.icon}
                    chipWidth={data.chipWidth}
                    key={data.id}
                    id={data.id}
                  />
                );
              })}
            </div>

            <div className="flex flex-row w-full max-w-[500px] h-auto mt-12 justify-end justify-between">
              <div
                className="flex w-auto h-auto py-2 px-10 bg-gray-300 hover:bg-secondary-500 rounded-full cursor-pointer active:scale-95 group"
                onClick={() => {
                  setTabSlide(1), scrollToTop();
                }}
              >
                <span className="flex text-primary-500 font-normal text-lg group-hover:text-white">
                  Átras
                </span>
              </div>
              <div
                className="flex w-auto h-auto py-2 px-4 bg-tertiary-500 hover:bg-secondary-500 rounded-full cursor-pointer active:scale-95"
                onClick={() => {
                  setTabSlide(3), scrollToTop();
                }}
              >
                <span className="flex text-white font-normal text-lg">
                  Siguiente
                </span>
              </div>
            </div>
          </form>
        </div>
      )}
      {/* SLIDE 3 */}
      {tabSlide === 3 && (
        <div className="flex flex-col w-full h-auto ">
          <form className="flex flex-col w-full h-auto items-center">
            <div className="flex flex-col w-full max-w-[500px] h-auto mt-4 items-start">
              <span className="flex text-base text-primary-500 font-medium text-left">
                Disponibilidad
              </span>
            </div>
            <div className="flex flex-row w-full max-w-[500px] h-auto mt-4 justify-between items-center">
              <div className="flex w-auto h-auto items-center">
                <DoubleBedroom className="flex w-auto h-auto object-cover text-tertiary-500 fill-current" />
                <span className="flex ml-4 text-sm text-primary-500 font-normal text-left whitespace-nowrap">
                  Habitaciones dobles
                </span>
              </div>
              <Counter setValue={setAvailableDoubleRoomNumber} />
            </div>
            <div className="flex flex-row w-full max-w-[500px] h-auto mt-4 justify-between items-center">
              <div className="flex w-auto h-auto items-center">
                <SingleBedroom className="flex w-auto h-auto object-cover text-tertiary-500 fill-current" />
                <span className="flex ml-4 text-sm text-primary-500 font-normal text-left ">
                  Habitaciones individuales
                </span>
              </div>
              <Counter setValue={setAvailableIndividualRoomNumber} />
            </div>
            <div className="flex flex-row w-full max-w-[500px] h-auto mt-4 justify-between items-center">
              <div className="flex w-auto h-auto items-center">
                <span className="flex ml-9 text-sm text-primary-500 font-normal text-left whitespace-nowrap">
                  Habitaciones amuebladas
                </span>
              </div>
              <ToggleInput value={furnishedRoom} setValue={setFurnishedRoom} />
            </div>
            <div className="flex flex-col w-full max-w-[500px] mt-8 h-auto items-start">
              <span className="flex text-base text-primary-500 font-medium text-left">
                Precio
              </span>
            </div>
            <div className="flex flex-col w-full max-w-[500px] h-auto mt-4 items-start">
              <div className="flex flex-row w-auto h-auto items-center">
                <input
                  type="text"
                  className="flex w-full h-auto p-2 text-lg border-[1px] border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-500/50"
                />
                <span className="flex ml-4 text-base text-primary-500 font-normal text-left whitespace-nowrap">
                  € por mes
                </span>
              </div>
            </div>
            <div className="flex flex-row w-full max-w-[500px] h-auto mt-4 justify-between items-center">
              <div className="flex w-auto h-auto items-center">
                <span className="flex  text-sm text-primary-500 font-normal text-left whitespace-nowrap">
                  El precio es negociable
                </span>
              </div>
              <ToggleInput
                value={negotiablePrice}
                setValue={setNegotiablePrice}
              />
            </div>
            <div className="flex flex-col w-full max-w-[500px] h-auto mt-8 items-start">
              <span className="flex text-base text-primary-500 font-medium text-left">
                Ubicación
              </span>
            </div>
            <div className="flex flex-col w-full max-w-[500px] h-auto mt-4 items-start">
              <span className="flex text-sm text-primary-500 font-normal text-left whitespace-nowrap">
                ¿Dónde está ubicada tu vivienda?
              </span>
              <div className="flex flex-row w-full h-auto mt-4 items-center">
                <LocationInput />
              </div>
            </div>
            <div className="flex flex-col w-full max-w-[500px] h-auto mt-4 items-start">
              <span className="flex text-sm text-primary-500 font-normal text-left whitespace-nowrap">
                Localidad
              </span>
              <div className="flex flex-row w-full h-auto mt-4 items-center">
                <input
                  type="text"
                  className={`
                    flex flex-row 
                    w-full h-12
                    py-2 px-4
                    text-lg italic text-primary-500 font-normal
                    bg-white rounded-lg
                    border border-gray-300
                    focus:outline-none focus:ring-2 focus:ring-secondary-500/50
            `}
                />
              </div>
            </div>

            <div className="flex flex-row w-full max-w-[500px] h-auto mt-12 justify-end justify-between">
              <div
                className="flex w-auto h-auto py-2 px-10 bg-gray-300 hover:bg-secondary-500 rounded-full cursor-pointer active:scale-95 group"
                onClick={() => {
                  setTabSlide(2), scrollToTop();
                }}
              >
                <span className="flex text-primary-500 font-normal text-lg group-hover:text-white">
                  Átras
                </span>
              </div>
              <div
                className="flex w-auto h-auto py-2 px-4 bg-tertiary-500 hover:bg-secondary-500 rounded-full cursor-pointer active:scale-95"
                onClick={() => {
                  setTabSlide(4), scrollToTop();
                }}
              >
                <span className="flex text-white font-normal text-lg">
                  Siguiente
                </span>
              </div>
            </div>
          </form>
        </div>
      )}

      {/* SLIDE 4 */}
      {tabSlide === 4 && (
        <div className="flex flex-col w-full h-auto ">
          <form className="flex flex-col w-full h-auto items-center">
            <div className="flex flex-col w-full max-w-[500px] h-auto mt-4 items-start">
              <span className="flex text-base text-primary-500 font-medium text-left">
                Título del anuncio
              </span>
              <div className="flex flex-row w-full h-auto mt-4 items-center">
                <input
                  type="text"
                  className={`
                    flex flex-row 
                    w-full h-12
                    py-2 px-4
                    text-lg italic text-primary-500 font-normal
                    bg-white rounded-lg
                    border border-gray-300
                    focus:outline-none focus:ring-2 focus:ring-secondary-500/50
            `}
                />
              </div>
            </div>
            <div className="flex flex-col w-full max-w-[500px] h-auto mt-8 items-start">
              <span className="flex text-base text-primary-500 font-medium text-left">
                Descripción de la vivienda
              </span>
              <div className="flex flex-row w-full h-auto mt-4 items-center">
                <textarea
                  type="text"
                  className={`
                    flex flex-row 
                    w-full h-48
                    py-2 px-4
                    text-lg italic text-primary-500 font-normal
                    bg-white rounded-lg
                    border border-gray-300
                    focus:outline-none focus:ring-2 focus:ring-secondary-500/50
            `}
                />
              </div>
            </div>
            <div className="flex flex-col w-full max-w-[500px] h-auto mt-8 items-start">
              <span className="flex text-base text-primary-500 font-medium text-left">
                Características de la vivienda
              </span>
              <div className="flex flex-row w-full h-auto mt-4 items-center">
                <div className="flex flex-row flex-wrap w-full h-auto mt-4 justify-center items-center gap-4">
                  {houseFeatures?.map((data) => {
                    return (
                      <FilterChip
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
            </div>

            <div className="flex flex-row w-full max-w-[500px] h-auto mt-12 justify-end justify-between">
              <div
                className="flex w-auto h-auto py-2 px-10 bg-gray-300 hover:bg-secondary-500 rounded-full cursor-pointer active:scale-95 group"
                onClick={() => {
                  setTabSlide(3), scrollToTop();
                }}
              >
                <span className="flex text-primary-500 font-normal text-lg group-hover:text-white">
                  Átras
                </span>
              </div>
              <div
                className="flex w-auto h-auto py-2 px-4 bg-tertiary-500 hover:bg-secondary-500 rounded-full cursor-pointer active:scale-95"
                onClick={() => {
                  setTabSlide(1), setEndEditing(true), scrollToTop();
                }}
              >
                <span className="flex text-white font-normal text-lg">
                  Guardar
                </span>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
export default EditHouse;
