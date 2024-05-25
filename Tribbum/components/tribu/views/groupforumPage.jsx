"use client"
import React, { useState, useRef, useCallback, useEffect } from "react";
import Heart from "react-animated-heart";
import PostCard from "../elements/postCard/postCard";
import { fetchPostsByGroupId, createPostOrComment } from "@/firebase/entities/post";
import timeAgo from "@/utils/dateConversion";

const GroupForumPage = () => {
  const [posts, setPosts] = useState([]);
  const [group, setGroup] = useState('1e9404c5-ee0b-4a5e-8908-2fcc3ff78e95');  // Must change to route params

  useEffect(() => {

    // Correct handling of async function within useEffect
    const loadData = async () => {
      const fetchedPosts = await fetchPostsByGroupId(group);
      setPosts(fetchedPosts); // Setting the state with the resolved data
    };
    loadData();

  }, []);



  const handleCreatePost = async () => {
    if (!newPostContent.trim()) return; // Avoid creating empty posts

    const newPost = {
      body: newPostContent,
      commentIds: [],
      groupId: group.id,
      timeOfSubmission: { seconds: Math.floor(Date.now() / 1000) },
      likedUserIds: [],
    };

    try {
      await createPostOrComment(newPost, 'posts'); // Replace with your actual API call
      setPosts((prevPosts) => [newPost, ...prevPosts]); // Prepend to list to display at the top
      setNewPostContent(""); // Clear the input after submission
    } catch (error) {
      console.error("Failed to create post:", error);
    }
  };



  return (
    <div className="flex flex-col w-full h-auto pt-12 md:pt-20 px-4 items-center relative z-10">
      <div style={{ position: "relative", width: "100%" }}>
        <div style={{ overflow: "hidden", width: "100%", height: "400px" }}>
          {/* Set height to half of the original image height */}
          <img
            src="https://firebasestorage.googleapis.com/v0/b/tribbum-ffe98.appspot.com/o/forums%2FAyud%C3%A9monos%20en%20comunidad.png?alt=media&token=beed46cc-f379-4a74-85c1-883b177ecacc"
            style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }}
            alt="Group Forum"
          />
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "0",
            right: 0, // Stretch to the right
            left: "50%", // Align to the left
            height: "50%", // Height set to 50% to crop bottom
            background: "linear-gradient(transparent, white)", // Gradient from transparent to white to hide the cropped part
          }}
        />
        <div
          style={{
            position: "absolute",
            width: '100%',
            bottom: "0",
            left: "0",
            padding: "50px",
            boxSizing: "border-box",
            background: "rgba(255, 255, 255, 0.7)", // Translucent white background
            textAlign: "center", // Center text horizontally
          }}
        >
          <h1 className="hidden md:flex text-2xl font-light text-primary-500 text-center">
            Group Name
          </h1>
        </div>
      </div>


      {/** Tasks for this page
       * 
       * Posts (post component/card)
       * Comments (comment component/card)
       * Functionality
       * Like/Dislike
       * Profile routing
          - Map out posts here, and comments too (CRUD)
       */
      }

      <div className="forum-page-container">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            post={{
              ...post,
              timeAgoText: timeAgo(post.timeOfSubmission?.seconds || 0)
            }}
          />
        ))}
      </div>

    </div>
  );
};

export default GroupForumPage;