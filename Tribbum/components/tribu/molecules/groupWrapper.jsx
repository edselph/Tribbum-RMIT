import React, { useState, useEffect } from "react";
import { getAllData } from "@/firebase/entities/database";
import GroupCard from "../elements/groupCard/groupCard";
import { useRouter } from "next/router";

const GroupWrapper = ({ toggleHouseSlideOver }) => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const handleGetGroups = async () => {
      const data = await getAllData("groups");
      setGroups(data);
    };

    handleGetGroups();
  }, []);

  const handleClick = () => {
    // Use window.location.href for navigation which is a standard way to redirect in vanilla JS
    if (typeof window !== "undefined") {
      window.location.href = "/tribu/grupos";
    }
  };

  return (
    <div className="relative w-full">
      {/* Render group cards */}
      <div className="flex flex-row w-full h-auto overflow-x-scroll overflow-y-hidden py-6">
        {groups.map((group, index) => (
          <GroupCard
            key={index}
            groupData={group}
            toggleHouseSlideOver={toggleHouseSlideOver}
          />
        ))}
      </div>
      <button
        onClick={handleClick}
        className="absolute top-0 right-0 mt-4 mr-4 rounded-full bg-primary-500 hover:bg-primary-700 text-white px-4 py-2 transition ease-in-out duration-200"
      >
        See All Groups
      </button>
    </div>
  );
};

export default GroupWrapper;
