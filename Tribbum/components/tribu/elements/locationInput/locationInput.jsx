"use client";

import SearchIcon from "@/public/assets/icons/searchicon.svg";
import Chevron from "@/public/assets/icons/chevron_right.svg";
import { provinces } from "@/utils/provinceList";

const LocationInput = ({ placeholder }) => {
  return (
    <div className="flex flex-row w-full md:max-w-[500px] h-auto justify-center items-center relative">
      <select
        id="provincias"
        className="bg-white border border-tertiary-500 text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5"
      >
        <option defaultValue>Selecciona una provincia</option>
        {Object.values(provinces).map((name) => (
          <option value={name} key={name}>
            {name}
          </option>
        ))}
      </select>
      <div
        className={`
          absolute top-0 right-0
          w-8 h-full justify-center items-center
          pt-3
         rounded-2xl
          `}
      >
        <Chevron className="w-4 h-4 text-tertiary-500 fill-current rotate-90 -z-10" />
      </div>
    </div>
  );
};

export default LocationInput;
