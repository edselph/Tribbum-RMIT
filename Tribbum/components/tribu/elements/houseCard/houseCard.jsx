"use client";
/* eslint-disable @next/next/no-img-element */
import BedIcon from "@/public/assets/icons/bedIcon.svg";
import BathroomIcon from "@/public/assets/icons/bathroomIcon.svg";

const HouseCard = ({ toggleHouseSlideOver, houseData }) => {
  const roomNumber =
    houseData.vacancy.individualRooms + houseData.vacancy.doubleRooms;

  const bed = 2;
  const data = [
    /*  { id: "1", title: "Sin niños" }, */
    { id: "2", title: "Con niños periodicamente" },
  ];
  return (
    <div
      className={`
        flex flex-col md:flex-row lg:flex-col
        w-full min-w-[250px] max-w-[340px] md:max-w-full lg:max-w-[340px] h-[300px] min-h[300px] md:h-[150px] md:min-h[150px] lg:h-[300px] lg:min-h[300px]
        rounded-md bg-white
        shadow-[0px_3px_12px_0px_rgba(0,0,0,0.2)]
        active:scale-105 cursor-pointer
        relative`}
      onClick={() => toggleHouseSlideOver()}
    >
      <div className="flex w-full md:w-1/3 md:min-w-[120px] lg:w-full h-1/2 md:h-full lg:h-1/2 bg-gray-100 relative">
        <img
          src={`${
            houseData.images[0]
              ? houseData.images[0]
              : "/assets/images/houseTestImg.svg"
          }`}
          alt=""
          className="w-full h-auto object-cover"
        />
        <div className="flex absolute bottom-0 right-0 w-[100px] h-[33px] bg-tertiary-400 justify-center items-center">
          <span className="text-[13px] font-light text-white">
            {" "}
            {houseData.cost}€/mes
          </span>
        </div>
      </div>
      <div className="flex flex-col w-full h-auto p-4 justify-start relative ">
        <span className="text-[17px] font-medium text-primary-500">
          {houseData.description.substring(0, 40)}
          {houseData.description.length > 40 ? "..." : ""}
        </span>
        <div className="flex flex-row w-full h-auto mt-2">
          <span className="text-xs text-priamry-500 font-light">
            {roomNumber}
            {roomNumber < 2
              ? " Habitación disponible"
              : " Habitaciones disponibles"}
          </span>
        </div>
        <div className="hidden md:flex flex-col lg:hidden absolute bottom-2 right-0 w-full h-auto px-4 justify-start items-start overflow-hidden">
          <div className="flex flex-row w-auto h-auto justify-start gap-2">
            {data.map((item) => {
              return (
                <div
                  className="flex w-auto h-auto px-2 py-1 bg-tertiary-100 border border-tertiary-500 rounded-full"
                  key={item.id}
                >
                  <span className="text-xs text-tertiary-500 font-light whitespace-nowrap">
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex md:hidden lg:flex absolute bottom-4 left-0 w-full h-auto px-4 justify-start items-center gap-4">
        <div className="flex flex-row flex-wrap w-auto h-auto justify-start gap-2">
          {data.map((item) => {
            return (
              <div
                className="flex w-auto h-auto px-2 py-1 bg-tertiary-100 border border-tertiary-500 rounded-full"
                key={item.id}
              >
                <span className="text-xs text-tertiary-500 font-light">
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default HouseCard;
