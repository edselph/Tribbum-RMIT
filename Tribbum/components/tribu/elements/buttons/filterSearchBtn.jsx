"use client";

const FilterSearchBtn = ({ submitFilter }) => {
  return (
    <div
      className="flex w-full h-[52px] justify-center items-center bg-tertiary-400 rounded-full active:scale-95 cursor-pointer"
      onClick={() => submitFilter()}
    >
      <div className="flex w-auto h-auto">
        <span className="flex text-white text-base font-medium uppercase">
          Filtrar
        </span>
      </div>
    </div>
  );
};
export default FilterSearchBtn;
