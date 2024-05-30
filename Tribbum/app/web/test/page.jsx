'use client'
// Originally not client

import React, { useEffect, useState } from "react";
import { getAllData, getDataById } from "@/firebase/entities/database";
import { getPostOrCommentById } from "@/firebase/entities/post";
import {
  getCurrentUser
} from "@/firebase/auth.js";

import {
  createPostOrComment,
  getAllPostsOrComments,
  fetchPostsByGroupId
} from "@/firebase/entities/post";
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
  const [userData, setUserData] = useState();

  // useEffect(() => {

  //   // const data = fetchPostsByGroupId('1e9404c5-ee0b-4a5e-8908-2fcc3ff78e95', 2)
  //   getData()

  // }, [])



  useEffect(() => {
    getCurrentUser().then((user) => {
      if (user) {
        console.log(user)
      }
    });
  }, []);



  // useEffect(() => {

  //   console.log("useEffect")

  //   getUserData.then((response) => {
  //     if (response.result) {
  //       setUserData(response.resultData.data);
  //     } else {
  //       console.log("error", "fetch error.");
  //     }
  //   });
  // }, []);


  async function postCommentData() {

    const samplePost = {
      body: "Test!",                                // Main content of the post
      userId: "62e24dd9-5999-445d-b598-604b97e515e5", // ID of the user who created the post
      groupId: "1e9404c5-ee0b-4a5e-8908-2fcc3ff78e95", // ID of the group where the post was made, if applicable
      timeOfSubmission: new Date("2023-06-15T12:00:27+10:00"), // Timestamp when the post was submitted
      likedUserIds: [],  // Array to store the IDs of users who liked the post
      commentIds: []     // Array to store the IDs of comments made on the post
    };

    const data = await createPostOrComment(samplePost);
    console.log(data)

    const sampleComment = {
      body: "Really insightful post, thanks for sharing!",  // Main content of the comment
      userId: "a1b2c3d4e5f6",  // ID of the user who created the comment
      parentPostId: data,
      timeOfSubmission: new Date("2023-06-16T10:30:00+10:00"),  // Timestamp when the comment was submitted
      likedUserIds: []  // Array to store the IDs of users who liked the comment  
    };


    const data1 = await createPostOrComment(sampleComment, "comments");
    console.log(data1)


  }

  async function getData() {

    // const data = await getAllPostsOrComments();
    // console.log(data)

    // const data1 = await getAllPostsOrComments("comments");
    // console.log(data1)

    const data = await getPostOrCommentById('3622de06-f5b7-4f96-bdbd-2d971ca8603a', 'posts')
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
