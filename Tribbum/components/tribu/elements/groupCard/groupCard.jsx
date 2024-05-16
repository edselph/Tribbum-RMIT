// elements/groupCard/groupCard.jsx
const GroupCard = ({ group, toggleHouseSlideOver }) => {
    return (
      <div className="">
        <div className="flex flex-col 
          w-full min-w-[250px] max-w-[340px] h-[300px] min-h[300px]
          mx-4
          rounded-md bg-white
          shadow-[0px_3px_12px_0px_rgba(0,0,0,0.2)]
          active:scale-105 cursor-pointer
          relative">
          <div className="flex w-full h-1/2  bg-gray-100 relative">
            <img
              src={group.bannerUrl}
              alt="group image"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="flex flex-col w-auto h-auto ml-4">
            <span className="flex pl-2 text-xl font-light text-primary-500">
              {group.name}
            </span>
            <span className="text-xl font-light text-primary-500">
              {group.description}
            </span>
          </div>
            <div className="flex w-full h-auto mt-4">
              <button
              className="py-2 px-4 text-gray-50 font-medium bg-tertiary-500 hover:bg-secondary-500 rounded-full cursor-pointer active:scale-95"
              onClick={() => toggleHouseSlideOver(group)}
            >
              Ver más
              </button>
            </div>
      </div>
        
      </div>
    );
  };
  
  export default GroupCard;