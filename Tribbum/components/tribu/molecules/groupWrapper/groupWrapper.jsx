// molecules/groupWrapper.jsx
import GroupCard from "@/components/tribu/elements/groupCard/groupCard";

const GroupWrapper = ({ groups, toggleHouseSlideOver }) => {
  return (
    <div className="flex flex-col w-full h-auto mt-12">
      {groups.map((group, index) => {
        return (
          <GroupCard
            key={index}
            group={group}
            toggleHouseSlideOver={toggleHouseSlideOver}
          />
        );
      })}
    </div>
  );
};

export default GroupWrapper;