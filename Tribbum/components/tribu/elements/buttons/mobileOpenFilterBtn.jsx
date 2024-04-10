"use client";

import FilterIcon from "@/public/assets/icons/filter_icon.svg";

const MobileOpenFilterBtn = ({ toggleFilterSlideOver, isFilterOpen }) => {
  return (
    <div
      className="flex w-[128px] h-[35px] justify-center items-center bg-tertiary-400 rounded-full active:scale-95 cursor-pointer"
      onClick={() => toggleFilterSlideOver()}
    >
      {isFilterOpen ? (
        <div className="flex w-auto h-auto">
          <span className="flex text-white text-[13px] font-medium uppercase">
            Cerrar
          </span>
        </div>
      ) : (
        <>
          <div className="flex w-4 h-4 mr-4 justify-center items-center">
            <FilterIcon className="flex w-full h-full text-white fill-current" />
          </div>
          <div className="flex w-auto h-auto">
            <span className="flex text-white text-[13px] font-medium uppercase">
              Filtrar
            </span>
          </div>
        </>
      )}
    </div>
  );
};
export default MobileOpenFilterBtn;
