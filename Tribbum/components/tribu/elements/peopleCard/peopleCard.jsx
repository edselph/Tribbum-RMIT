/* eslint-disable @next/next/no-img-element */
"use client";

const PeopleCard = ({ togglePeopleSlideOver, tab }) => {
  return (
    <div
      className={`
        flex flex-col 
        w-[140px] h-[220px] 
        rounded-xl overflow-hidden bg-tertiary-100
        shadow-[0px_3px_12px_0px_rgba(0,0,0,0.2)]
        active:scale-105 cursor-pointer
        relative`}
      onClick={() => togglePeopleSlideOver()}
    >
      <div className="flex w-full h-[180px] relative bg-gradient-to-t from-tertiary-100">
        <img
          src="/assets/images/portrait_profile.png"
          alt=""
          className="w-full h-auto object-cover"
        />
        <div className="flex w-full h-full bg-gradient-to-t from-tertiary-100 absolute bottom-0"></div>
      </div>
      <div className="flex flex-col w-full h-auto px-2 py-1 justify-start absolute bottom-0">
        <span className="text-sm font-medium text-primary-500">
          Inma Carbonell Fresneda, 46
        </span>
        <span className="text-xs font-medium text-primary-500 mt-1">
          Barcelona
        </span>

        <div className="flex w-auto h-auto justify-start">
          <div className="flex w-auto h-auto px-2 py-1 mt-2 bg-white border border-tertiary-400 rounded-full">
            <span className="text-[8px] text-primary-500 font-normal">
              {tab}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PeopleCard;
