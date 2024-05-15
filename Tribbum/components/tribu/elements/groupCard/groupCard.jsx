// elements/groupCard/groupCard.jsx
const GroupCard = ({ group, toggleHouseSlideOver }) => {
    return (
      <div className="flex flex-col w-full h-auto p-4 border-[0.25px] border-tertiary-500 rounded-lg cursor-pointer active:scale-95">
        <div className="flex flex-row w-full h-auto items-center">
          <div className="flex w-16 h-16 bg-primary-200 rounded-full justify-center items-center text-white overflow-hidden">
            <img
              src={group.photoUrl}
              alt="group avatar"
              className="flex w-full h-full object-cover"
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
    );
  };
  
  export default GroupCard;