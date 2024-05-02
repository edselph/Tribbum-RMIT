"use client"; // Make sure this is the very first line, with no imports above it.

import React, { useState, useEffect } from "react";
import GroupCard from "../../../components/tribu/elements/groupCard/GroupCard";
import { getAllData } from "@/firebase/entities/database";

const GroupsPage = () => {
  const [groupsData, setGroupsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllData("groups");
      setGroupsData(data);
    };

    fetchData().catch(console.error);
  }, []);

  // Increase the padding at the top to push the content down below the header
  const containerStyle = {
    paddingTop: "100px", // Adjust this value as needed to push content below the header
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  };

  // Styles for the "All Groups" title
  const titleStyle = {
    textAlign: "center",
    fontSize: "2rem",
    fontWeight: "bold",
    marginTop: "1rem",
    marginBottom: "2rem",
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>All Groups</h1>
      <div>
        {groupsData.map((group, index) => (
          <GroupCard key={index} groupData={group} />
        ))}
      </div>
    </div>
  );
};

export default GroupsPage;
