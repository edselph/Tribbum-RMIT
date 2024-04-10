"use client";
import { useState } from "react";

const SkillChip = ({ id, text }) => {
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
          w-auto h-auto px-3 py-2
          items-center justify-center 
          rounded-full
          ${
            active === id
              ? "border border-tertiary-500 bg-tertiary-400/10"
              : "border border-white bg-white"
          }
          cursor-pointer active:scale-95 `}
      onClick={() => handleSetActive(id)}
    >
      <p className="text-xs md:text-sm text-primary-500 font-medium">{text}</p>
    </div>
  );
};
export default SkillChip;
