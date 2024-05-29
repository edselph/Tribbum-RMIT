"use client"
import React, { useState, useEffect } from "react";
import PostCard from "../elements/postCard/postCard";
import { fetchPostsByGroupId, createPostOrComment } from "@/firebase/entities/post";
import timeAgo from "@/utils/dateConversion";
import { v4 as uuidv4 } from 'uuid';

const GroupForumPage = ({ groupIdParams }) => {
  const [posts, setPosts] = useState([]);
  const [newPostContent, setNewPostContent] = useState("");
  const [groupId, setGroupId] = useState(groupIdParams.id)

  useEffect(() => {

    loadData();

    console.log(groupIdParams)
  }, [groupId]);

  // Retrieve Post data
  const loadData = async () => {
    const fetchedPosts = await fetchPostsByGroupId(groupId);
    const sortedPosts = fetchedPosts.sort((a, b) => b.timeOfSubmission.seconds - a.timeOfSubmission.seconds);
    setPosts(sortedPosts);
  };


  const handleCreatePost = async () => {
    if (!newPostContent.trim()) return; // Avoid creating empty posts

    const newPost = {
      id: uuidv4(),
      body: newPostContent,
      commentIds: [],
      groupId: groupId,
      timeOfSubmission: { seconds: Math.floor(Date.now() / 1000) },
      likedUserIds: [],
    };

    try {
      await createPostOrComment(newPost, 'posts', newPost.id);
      setPosts((prevPosts) => [newPost, ...prevPosts]); // Prepend to list to display at the top
      setNewPostContent("");
    } catch (error) {
      console.error("Failed to create post:", error);
    }
  };

  return (
    <div className="flex flex-col w-full h-auto pt-12 md:pt-20 px-4 items-center relative z-10">
      <div style={{ position: "relative", width: "100%" }}>
        <div style={{ overflow: "hidden", width: "100%", height: "400px" }}>
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

      <div className="create-post-container mt-4 mb-6">
        <input
          type="text"
          value={newPostContent}
          onChange={(e) => setNewPostContent(e.target.value)}
          placeholder="What's on your mind?"
          className="border border-gray-300 p-2 w-full rounded-md"
        />
        <button
          onClick={handleCreatePost}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
        >
          Post
        </button>
      </div>

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
