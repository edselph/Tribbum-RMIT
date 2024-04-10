"use client";
import { useState } from "react";

const Counter = ({ setValue }) => {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
    setValue(count);
  };
  const decrementCount = () => {
    if (count > 0) setCount(count - 1);
    else if (count === 0) setCount(0);
    setValue(count);
  };
  return (
    <div className="flex flex-row w-auto h-auto items-center gap-2">
      <div
        className="flex w-8 h-8 pb-1 bg-gray-300 hover:bg-secondary-500 rounded-full justify-center items-center cursor-pointer active:scale-95"
        onClick={() => decrementCount()}
      >
        <p className="text-4xl text-primary-500 font-light">-</p>
      </div>
      <div className="flex flex-row w-6 min-w-6 h-auto justify-center items-center">
        <p className="text-sm text-primary-500 font-normal text-center">
          {count}
        </p>
      </div>
      <div
        className="flex w-8 h-8 bg-gray-300 hover:bg-secondary-500 rounded-full justify-center items-center cursor-pointer active:scale-95"
        onClick={() => incrementCount()}
      >
        <p className="text-4xl text-primary-500 font-light ">+</p>
      </div>
    </div>
  );
};
export default Counter;
