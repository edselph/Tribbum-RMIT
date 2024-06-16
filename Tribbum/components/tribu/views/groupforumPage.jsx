"use client"
import React, { useState, useEffect } from "react";
import PostCard from "../elements/postCard/postCard";
import {
  fetchPostsByGroupId,
  createPostOrComment,
  addPostToGroup
} from "@/firebase/entities/post";
import { getUserById } from "@/firebase/entities/users";
import timeAgo from "@/utils/dateConversion";
import { v4 as uuidv4 } from 'uuid';
import { containsProfanity } from "@/utils/profanityFilter";
import { getDataById } from "@/firebase/entities/database";

const GroupForumPage = ({ groupIdParams }) => {
  const [posts, setPosts] = useState([]);
  const [newPostContent, setNewPostContent] = useState("");
  const [groupId, setGroupId] = useState(groupIdParams.id)
  const [userData, setUserData] = useState();
  const [showPopup, setShowPopup] = useState(false);
  const [group, setGroup] = useState(null);

  useEffect(() => {

    loadGroupData();
    loadPostData();
    currentUserData();

    console.log(group)

  }, [groupId]);

  // Sample user, manually loaded
  const currentUserData = async () => {
    const usr = await getUserById("00123456-789a-bcde-f012-3456789abcde")
    console.log(usr)
    setUserData(usr)
  }

  // Retrieve Group data
  const loadGroupData = async () => {
    const groupData = await getDataById("groups", groupId);
    setGroup(groupData)
  };

  // Retrieve Post data
  const loadPostData = async () => {
    const fetchedPosts = await fetchPostsByGroupId(groupId);
    const sortedPosts = fetchedPosts.sort((a, b) => b.timeOfSubmission.seconds - a.timeOfSubmission.seconds);
    setPosts(sortedPosts);
  };

  const handleCreatePost = async () => {
    if (!newPostContent.trim()) return; // Avoid creating empty posts

    if (containsProfanity(newPostContent)) {
      setShowPopup(true);
      return;
    }

    const newPost = {
      id: uuidv4(),
      body: newPostContent,
      commentIds: [],
      userId: userData.id,
      groupId: groupId,
      timeOfSubmission: { seconds: Math.floor(Date.now() / 1000) },
      likedUserIds: [],
    };

    try {
      await createPostOrComment(newPost, 'posts', newPost.id);
      await addPostToGroup(groupId, newPost.id)
      setPosts((prevPosts) => [newPost, ...prevPosts]); // Prepend to list to display at the top
      setNewPostContent("");
    } catch (error) {
      console.error("Failed to create post:", error);
    }
  };

  return (
    <div className="flex flex-col w-full h-auto pt-12 md:pt-20 px-4 items-center relative z-10">

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={() => setShowPopup(false)}>
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full z-50" onClick={e => e.stopPropagation()}>
            <h2 className="text-lg font-semibold mb-4">Atención</h2>
            <p>En Tribbum, queremos asegurarnos de que todos los usuarios se sientan cómodos y
              respetados. Por lo tanto, no toleramos el uso de palabras ofensivas o cualquier
              comportamiento que pueda ser perjudicial para la experiencia y seguridad del usuario.
              Si no entiendes o no estás de acuerdo con los valores de esta aplicación, te recomendamos
              que elimines tu cuenta y dejes de participar en ella. Esto te ayudará a encontrar otras
              alternativas que puedan satisfacer tus necesidades.</p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setShowPopup(false)}>
              Cerrar
            </button>
          </div>
        </div>
      )}

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
            {/* {group.name ? group.name : "Group Name"} */}
            Group Name
          </h1>
        </div>
      </div>

      <div className="create-post-container mt-4 mb-6 w-full mx-auto">
        <div className="flex items-center">
          <input
            type="text"
            value={newPostContent}
            onChange={(e) => setNewPostContent(e.target.value)}
            placeholder="What's on your mind?"
            className="border border-gray-300 p-2 flex-grow rounded-md mr-2"
          />
          <button
            onClick={handleCreatePost}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Post
          </button>
        </div>
      </div>

      <style jsx>{`
        .create-post-container input, .forum-page-container {
          overflow-wrap: break-word;
          word-wrap: break-word;
          white-space: normal;
        }
      `}</style>

      <div className="forum-page-container w-2/3 mx-auto">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            post={{
              ...post,
              timeAgoText: timeAgo(post.timeOfSubmission?.seconds || 0)
            }}
            usr={userData}
          />
        ))}
      </div>
    </div>
  );
};

export default GroupForumPage;
