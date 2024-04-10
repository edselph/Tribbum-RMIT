"use client";

import PlusIcon from "@/public/assets/icons/plus.svg";

const ChipUploadHome = () => {
  return (
    <div className="flex w-full h-auto items-center lg:pl-6">
      <div
        className={`
            flex flex-row
            w-full h-14 px-8 
            bg-tertiary-500 rounded-full
            hover:bg-secondary-500
            items-center justify-between
           active:scale-95 cursor-pointer `}
      >
        <div className="flex w-auto h-auto justify-start">
          <PlusIcon className="flex w-10 h-10 text-white fill-current mt-2" />
        </div>
        <div className="flex w-auto h-auto justify-start">
          <span className="flex text-2xl text-white font-light uppercase whitespace-nowrap">
            Compartir tu casa
          </span>
        </div>
      </div>
    </div>
  );
};
export default ChipUploadHome;
