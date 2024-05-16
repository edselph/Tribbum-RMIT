// molecules/groupWrapper.jsx
import GroupCard from "@/components/tribu/elements/groupCard/groupCard";

const GroupWrapper = ({ groups, toggleHouseSlideOver }) => {
  return (
    <div className="flex flex-row w-full h-auto overflow-scroll overflow-visible py-6">
      {groups.map((group) => {
        return (
          <GroupCard
            key={group.id}
            group={group}
            toggleHouseSlideOver={toggleHouseSlideOver}
          />
        );
      })}
    </div>
  );
};

export default GroupWrapper;