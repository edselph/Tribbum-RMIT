"use client";
import { useState } from "react";
import CheckIcon from "@/public/assets/icons/check.svg";

/* eslint-disable @next/next/no-img-element */
const FeatureChip = ({ id, text, icon, chipWidth, chipType }) => {
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
          bg-white rounded-xl `}
    >
      {chipType === "people" && (
        <>
          <div className="flex w-auto h-[60px] justify-center items-center">
            <div className="flex w-auto h-8 mt-2 justify-center">
              <img
                src={icon}
                alt={`${text} icon`}
                className="w-full h-full text-tertiary-500 fill-current"
              />
            </div>
          </div>
          <div className="flex w-full h-[30px] justify-center items-center">
            <span className=" text-primary-500 font-medium text-[10px] sm:text-xs text-center">
              {text}
            </span>
          </div>
        </>
      )}
      {chipType === "feature" && (
        <>
          <div className="flex w-auto h-[60px] justify-center items-center">
            <div className="flex w-auto h-6 justify-center ">
              <img
                src={icon}
                alt={`${text} icon`}
                className="w-full h-full text-tertiary-500 fill-current"
              />
            </div>
          </div>
          <div className="flex w-full h-[30px] justify-center items-center ">
            <span className=" text-primary-500 font-medium text-[10px] sm:text-xs text-center">
              {text}
            </span>
          </div>
        </>
      )}
    </div>
  );
};
export default FeatureChip;
