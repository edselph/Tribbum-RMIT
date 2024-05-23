"use client";

import React, { useState, useEffect } from "react";
import GroupCard from "../../../components/tribu/elements/groupCard/GroupCard";
import { getAllData } from "@/firebase/entities/database";
import Link from "next/link";

const GroupsPage = () => {
  const [groupsData, setGroupsData] = useState([]);
  const [filteredGroups, setFilteredGroups] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortAsc, setSortAsc] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllData("groups");
      setGroupsData(data);
      setFilteredGroups(data);
    };

    fetchData().catch(console.error);
  }, []);

  useEffect(() => {
    let results = groupsData.filter(group =>
      group.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (sortAsc) {
      results.sort((a, b) => a.name.localeCompare(b.name)); // Sort alphabetically
    }

    setFilteredGroups(results);
  }, [searchTerm, groupsData, sortAsc]);

  const toggleSort = () => {
    setSortAsc(!sortAsc);
  };

  return (
    <div className="container mx-auto pt-16 md:pt-20 px-4 flex flex-col items-center justify-center min-h-screen">
    <h1 className="text-2xl font-bold mb-4 text-center">All Groups</h1>
    <div className="search-and-create w-full max-w-md mx-auto flex items-center space-x-2 mb-4">
      <input
        type="text"
        placeholder="Search groups..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="p-2 border rounded border-gray-300 w-full"
      />
      <Link href="create-new-group">
        <button className="py-2 px-4 text-gray-50 font-medium bg-tertiary-500 hover:bg-secondary-500 rounded-full cursor-pointer active:scale-95">
          +
        </button>
      </Link>
    </div>
    <div className="sort-button w-full max-w-md mx-auto mb-4">
      <button
        onClick={toggleSort}
        className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-full"
      >
        {sortAsc ? "Sort Z-A" : "Sort A-Z"}
      </button>
    </div>  

      <div className="w-full flex flex-wrap justify-center">
        {filteredGroups.map((group, index) => (
          <div key={index} className="m-4" style={{ maxWidth: "340px" }}>
            <GroupCard groupData={group} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroupsPage; // Adjusted vertical padding for header clearance
