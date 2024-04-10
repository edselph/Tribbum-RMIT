"use client";

import CloseIcon from "@/public/assets/icons/close_icon.svg";

const MobileCleanFilterBtn = () => {
  return (
    <div
      className="flex w-[172px] h-[35px] justify-center items-center bg-tertiary-400 rounded-full active:scale-95 cursor-pointer"
      onClick={() => toggleSlideOver()}
    >
      <div className="flex w-6 h-6 mr-1 justify-center items-center">
        <CloseIcon className="flex w-full h-full text-white fill-current" />
      </div>
      <div className="flex w-auto h-auto">
        <span className="flex text-white text-[13px] font-medium uppercase">
          Eliminar filtros
        </span>
      </div>
    </div>
  );
};
export default MobileCleanFilterBtn;
