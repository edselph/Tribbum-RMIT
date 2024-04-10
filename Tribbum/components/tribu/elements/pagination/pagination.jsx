"use client";
import Chevron from "@/public/assets/icons/chevron_right.svg";

const Pagination = () => {
  return (
    <div className="flex w-full h-auto justify-center items-center gap-2">
      <div className="flex w-auto h-auto px-4 py-2 bg-tertiary-500 rounded-l-full items-center justify-center cursor-pointer active:scale-95">
        <Chevron className="flex w-auto h-4 text-white fill-current rotate-180" />
        <span className="hidden sm:flex pl-4 text-base font-light text-white">
          Página anterior
        </span>
        <span className="flex sm:hidden pl-4 text-base font-light text-white">
          Anterior
        </span>
      </div>
      <div className="flex w-auto h-auto px-4 py-2 bg-tertiary-500 rounded-r-full items-center justify-center cursor-pointer active:scale-95">
        <span className="hidden sm:flex mr-4 text-base font-light text-white ">
          Página siguiente
        </span>
        <span className="flex sm:hidden mr-4 text-base font-light text-white ">
          Siguiente
        </span>
        <Chevron className="flex w-auto h-4 text-white fill-current" />
      </div>
    </div>
  );
};
export default Pagination;
