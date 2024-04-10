"use client";
import { useState } from "react";
import CheckIcon from "@/public/assets/icons/check.svg";

/* eslint-disable @next/next/no-img-element */
const NoIconCHip = ({ id, text, icon, chipWidth }) => {
  const [active, setActive] = useState(false);

  const handleSetActive = (id) => {
    if (active === id) {
      return setActive(null);
    }
    setActive(id);
  };

  return (
    <div
      className={`
    flex flex-col 
    ${chipWidth === "large" && "w-[130px] sm:w-[150px]"} 
    ${chipWidth === "small" && "w-[80px] sm:w-[90px]"} h-[90px] 
    px-1 pb-1
    items-center justify-center 
     rounded-md 
    ${
      active === id
        ? "border border-tertiary-500 bg-tertiary-400/10"
        : "border border-white bg-white"
    }
    cursor-pointer active:scale-95 relative`}
      onClick={() => handleSetActive(id)}
    >
      <div className="flex w-full h-[30px] mt-2 justify-center items-center ">
        <span className=" text-primary-500 font-medium text-[10px] sm:text-xs text-center">
          {text}
        </span>
      </div>
      {active === id && (
        <div className="flex absolute top-1 right-0 w-full h-auto justify-end">
          <CheckIcon className="flex w-4 h-4" />
        </div>
      )}
    </div>
  );
};
export default NoIconCHip;
