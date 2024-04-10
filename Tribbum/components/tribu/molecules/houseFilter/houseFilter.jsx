"use client";
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import FilterChip from "@/components/tribu/elements/filterChip/filterChip";
import SearchInput from "@/components/tribu/elements/searchInput/searchInput";
import MultiRangeSlider from "../../elements/multiRangeSlider/multiRangeSlider";
import {
  sharingPeople,
  sharingGender,
  houseFeatures
} from "@/utils/filterDatas.jsx";
import FilterSearchBtn from "../../elements/buttons/filterSearchBtn";

const HouseFilter = ({
  closeFilter,
  setCloseFilter,
  filteredHouse,
  setFilteredHouse
}) => {
  const [rangeMin, setRangeMin] = useState(0);
  const [rangeMax, setRangeMax] = useState(1000);

  const submitFilter = () => {
    setFilteredHouse(() => console.log("filtrando casas"));
  };

  return (
    <div className="flex flex-col w-full h-auto px-4 mb-24 md:mb-10 bg-tertiary-100 rounded-3xl overflow-scroll ">
      <div className="flex flex-row w-full h-auto mt-8 justify-between items-center">
        <span className="text-xl font-medium text-primary-500">
          ¿Dónde quieres vivir?
        </span>
      </div>
      <div className="flex flex-row w-full h-auto mt-4 ">
        <SearchInput placeholder="Todas las provincias" />
      </div>
      <form>
        <div className="flex w-full h-auto mt-8">
          <span className="text-xs font-medium text-primary-500">
            ¿Quieres compartir casa con personas en cual situación?
          </span>
        </div>
        <div className="flex flex-row flex-wrap w-full h-auto mt-4 justify-center items-center gap-4">
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
        <div className="flex w-full h-auto mt-8">
          <span className="text-xs font-medium text-primary-500">
            ¿Con quién quieres compartir?
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
        <div className="flex w-full h-auto mt-8">
          <span className="text-xs font-medium text-primary-500">Precio</span>
        </div>
        <div className="flex flex-row flex-wrap w-full h-auto mt-4 justify-center items-center relative">
          <MultiRangeSlider
            min={0}
            max={1000}
            onChange={({ min, max }) => {
              setRangeMin(min);
              setRangeMax(max);
            }}
          />
        </div>
        <div className="flex w-full h-auto mt-16">
          <span className="text-xs font-medium text-primary-500">
            Característcias de la vivienda
          </span>
        </div>
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
        <div className="flex w-full h-auto mt-12 mb-12 md:mb-0">
          <FilterSearchBtn submitFilter={submitFilter} />
        </div>
      </form>
    </div>
  );
};
export default HouseFilter;
