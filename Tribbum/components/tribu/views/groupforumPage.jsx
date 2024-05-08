"use client"
import React, { useState } from "react";
import Heart from "react-animated-heart";

const GroupForumPage = () => {
  const [isClick, setClick] = useState(false);
  const [group, setGroup] = useState("");
  const [likeCount, setLikeCount] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.dir(group);
  };

  const handleHeartClick = () => {
    setClick(!isClick);
    if (!isClick) {
      setLikeCount(likeCount + 1);
    } else {
      setLikeCount(likeCount - 1);
    }
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSendComment = () => {
    // Implement your logic to send the comment
    console.log("Comment:", comment);
    setComment(""); // Clear the input after sending the comment
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
      <div className="flex flex-col w-full h-auto mx-auto mt-8 mb-12 py-8 px-4 bg-tertiary-100 shadow-xl rounded-3xl border border-gray-200" style={{ maxWidth: "80%" }}>
        <form onSubmit={handleSubmit} className="flex justify-between items-center">
          <label className="flex text-lg text-primary-500 font-medium">
            This is a group post test
          </label>
          <div className="flex items-center">
            <span className="mr-2">{likeCount}</span>
            <Heart isClick={isClick} onClick={handleHeartClick} />
          </div>
        </form>
        <div className="flex mt-4">
          <input
            type="text"
            value={comment}
            onChange={handleCommentChange}
            placeholder="Type your comment here"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:border-primary-500"
          />
          <button
            onClick={handleSendComment}
            className="px-4 py-2 bg-primary-500 text-white rounded-r-md hover:bg-primary-600 focus:outline-none focus:bg-primary-600"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroupForumPage;