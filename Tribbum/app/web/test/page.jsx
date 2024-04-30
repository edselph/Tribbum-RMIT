'use client'
// Originally not client

import React, { useEffect, useState } from "react";
import { getAllData, getDataById } from "@/firebase/entities/database";
import { createPost } from "@/firebase/entities/post";
import {
  addUser,
  setUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
} from "@/firebase/entities/users";

const Test = () => {

  const [eg, setEg] = useState('hi');

  useEffect(() => {

    getData()

  }, [])

  async function getData() {
    console.log("hello")

    // getUserById
    // const data = await getUserById("000b4075-8d0f-4c6a-9857-b6472b1e0483");

    // const data = await getAllData("groups");
    // console.log(data)


    const samplePost = {
      body: "Test!",                                // Main content of the post
      userId: "62e24dd9-5999-445d-b598-604b97e515e5", // ID of the user who created the post
      groupId: "1e9404c5-ee0b-4a5e-8908-2fcc3ff78e95", // ID of the group where the post was made, if applicable
      timeOfSubmission: new Date("2023-06-15T12:00:27+10:00"), // Timestamp when the post was submitted
      likedUserIds: [],  // Array to store the IDs of users who liked the post
      commentIds: []     // Array to store the IDs of comments made on the post
    };

    const data = await createPost(samplePost);
    console.log(data)


  }


  return (
    <div>

      {eg}

      <p>Test Users</p>
      <div>addUser</div>
      <div>setUser</div>
      <div>getAllUsers</div>
      <div>getUserById</div>
      <div>updateUser</div>
      <div>deleteUser</div>
    </div>
  );
};

export default Test;
