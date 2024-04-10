import React, { ChangeEvent } from "react";

const Checkbox = ({ id, name, value }) => {
  return (
    <div className="flex flex-row w-auto h-auto items-center gap-2 relative">
      <div className="flex w-auto h-auto ">
        <input
          id={id}
          name={name}
          value={value}
          type="checkbox"
          className={`relative peer shrink-0 appearance-none w-6 h-6 border-2 border-gray-400 rounded-sm mt-1 checked:border-0`}
          /* onChange={(e) => setGender(e.target.value)} */
        />
        <svg
          className={`absolute 
          w-6 h-6 mt-1 hidden 
          peer-checked:block pointer-events-none 
          fill-none 
          border-2  border-gray-400 rounded-sm`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke="#00CC84"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
    </div>
  );
};

export default Checkbox;
