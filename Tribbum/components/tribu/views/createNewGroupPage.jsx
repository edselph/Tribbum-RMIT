// Marking this component as a Client Component
// use client
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { createForums } from "@/firebase/entities/forum.js";
import UserList from "../molecules/userlist/userlist";

const createNewGroupPage = () => {
  const router = useRouter();
  const [group, setGroup] = useState("");
  const [selectedImage, setSelectImage] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState(
    `url('/assets/images/section4-forwhom.png')`
  );
  const [showUsers, setShowUsers] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [error, setError] = useState("");

  //handle upload image
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectImage(file);
      setBackgroundImage(`url(${URL.createObjectURL(file)})`);
    } else {
      setSelectImage(null);
      setBackgroundImage(`url('/assets/images/section4-forwhom.png')`);
    }
  };

  //handle selecting user
  const handleSelectUser = (user) => {
    setSelectedUsers((prev) => [...prev, user]);
  };

  const handleCloseUserList = () => {
    setShowUsers(false);
  };

  //handle removing user
  const handleRemoveUser = (userId) => {
    setSelectedUsers(selectedUsers.filter((user) => user.id !== userId));
  };

  //handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let bannerUrl = null;
      if (selectedImage) {
        bannerUrl = URL.createObjectURL(selectedImage);
      } else {
        bannerUrl = "/assets/images/section4-forwhom.png";
      }
      // const groupData = {
      //   id: " ",
      //   name: group,
      //   postIds: [],
      //   userIds: selectedUsers.map((user) => user.id),
      //   bannerUrl,
      // };
      if (!group || !selectedImage) {
        throw new Error("Group name or image should not be empty");
      }
      await createForums({
        forumImage: selectedImage,
        forumName: group,
        forumMembers: selectedUsers.map((user) => user.id),
      });
      setError("");
      alert("Group created successfully");
      router.push("/tribu");
      // await addData("groups", groupData);
      console.log("Group added successfully!");
    } catch (error) {
      setError(error.message);
      console.error("Error adding group:", error);
    }
    console.dir({ group, selectedUsers });
  };

  return (
    <div className="flex flex-col w-full h-full pt-12 md:pt-20 px-4 items-center relative z-10">
      <h1 className="hidden md:flex text-2xl font-light text-primary-500 text-center">
        Create New group
      </h1>

      <div className="flex flex-col w-full max-w-[1200px] h-auto gp-2 mt-8 mb-12 py-8 px-4 bg-tertiary-100 shadow-xl rounded-3xl border border-gray-200 ">
        <form onSubmit={handleSubmit}>
          <div
            className="flex flex-col w-full h-[90px] p-2 mb-4 border-[1px] focus:outline-none focus:ring-2 focus:ring-secondary-500/50 relative"
            style={{
              backgroundImage: backgroundImage,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundColor: "rgba(0, 0, 0, 1)",
            }}
          >
            <label
              htmlFor="upload-image"
              className="text-lg text-primary-500 font-medium text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
            >
              {selectedImage ? "Change Image" : "Upload Group Picture"}
            </label>
            <input
              id="upload-image"
              onChange={handleImageChange}
              className="absolute opacity-0 w-full h-full cursor-pointer"
              type="file"
              accept="image/*"
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <label className="flex-grow text-lg text-primary-500 font-medium">
              Group Name:
            </label>
            <input
              onChange={(e) => setGroup(e.target.value)}
              value={group}
              className="flex w-3/4 h-auto p-2 text-lg border-[1px] 
            border-gray-300 rounded-lg focus:outline-none focus:ring-2 
            focus:ring-secondary-500/50"
              type="text"
            />
            <div className="flex items-center">
              <button
                type="button" // Change type to button
                className="w-8 h-8 flex justify-center items-center rounded-full bg-gray-800 text-white text-xl hover:bg-gray-900"
                onClick={() => setShowUsers(!showUsers)}
              >
                +
              </button>

              <label className="ml-2 text-lg text-primary-500 font-medium">
                member:{" "}
              </label>
            </div>
          </div>

          <UserList
            selectedUsers={selectedUsers}
            onSelectUser={handleSelectUser}
            handleRemoveUser={handleRemoveUser}
            showUsers={showUsers}
            setShowUsers={setShowUsers}
          />
          {error && <p className="text-[red]">{error}</p>}
          <button
            type="submit"
            onClick={handleSubmit}
            className="flex w-auto h-auto py-2 px-4 text-gray-50 right-1
            bg-tertiary-500 hover:bg-secondary-500 rounded-full cursor-pointer active:scale-95"
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default createNewGroupPage;
