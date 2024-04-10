"use client";

import SearchIcon from "@/public/assets/icons/searchicon.svg";
import Chevron from "@/public/assets/icons/chevron_right.svg";

const SearchInput = ({ placeholder }) => {
  return (
    <div className="flex flex-row w-full md:max-w-[500px] h-auto justify-center items-center relative">
      <input
        placeholder={placeholder}
        className={`
            flex flex-row 
            w-full h-14
            py-2 pl-12
            text-lg italic text-primary-500 font-normal
            bg-white rounded-full
            border border-tertiary-500
            placeholder:font-thin placeholder:text-lg placeholder:text-primary-500 
            focus:outline-none
            `}
      />
      <div
        className={`
          absolute top-0 left-0
          w-16 h-auto justify-center items-center
          pt-4 px-4 rounded-2xl
          `}>
        <SearchIcon className="w-6 h-6 active:scale-95" />
      </div>
      <div
        className={`
          absolute top-0 right-4
          w-8 h-full justify-center items-center
          pt-4
         rounded-2xl
         
          `}>
        <Chevron className="w-5 h-5 text-tertiary-500 fill-current active:scale-90 rotate-90" />
      </div>
    </div>
  );
};

export default SearchInput;
