// Marking this component as a Client Component
// use client
"use client"
import React, { useEffect, useState } from "react";
import { getAllUsers } from "@/firebase/entities/users";
//import { addData } from "@/firebase/data.js"
import UserList from "../molecules/UserList/UserList.jsx";

const createNewGroupPage = () => {
  const[group , setGroup] = useState("");
  const[selectedImage, setSelectImage] = useState(null);
  const[backgroundImage, setBackgroundImage] = useState(`url('/assets/images/section4-forwhom.png')`);
  const[showUsers, setShowUsers] = useState(false);
  const[selectedUsers, setSelectedUsers] = useState([]);
  const[users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const userData = await getAllUsers();
        setUsers(userData);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }
    fetchUsers();
  }, []);

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
    setSelectedUsers([...selectedUsers, user]);
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
      await Promise.all(selectedUsers.map((user) => addUserToGroup(groupId, user)));
      console.log("added group successfully!");
    } catch (error) {
      console.error("Error adding members to group:", error);
    }
    console.dir({ group, selectedUsers });
  };


  return (
  <div className='flex flex-col w-full h-full pt-12 md:pt-20 px-4 items-center relative z-10'>
      <h1 className='hidden md:flex text-2xl font-light text-primary-500 text-center'>
        Create New group
      </h1>

      <div className="flex flex-col w-full max-w-[1200px] h-auto gp-2 mt-8 mb-12 py-8 px-4 bg-tertiary-100 shadow-xl rounded-3xl border border-gray-200 " >
        <form onSubmit={handleSubmit}> 
          <div className="flex flex-col w-full h-[90px] p-2 mb-4 border-[1px] focus:outline-none focus:ring-2 focus:ring-secondary-500/50 relative"
            style={{backgroundImage: backgroundImage, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            backgroundColor: 'rgba(0, 0, 0, 1)',
            }}>
            <label htmlFor="upload-image" 
             className="text-lg text-primary-500 font-medium text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer">
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
            value ={group}
            className="flex w-3/4 h-auto p-2 mb-4 text-lg border-[1px] 
            border-gray-300 rounded-lg focus:outline-none focus:ring-2 
            focus:ring-secondary-500/50"
            type="text"
          />
          <div className="flex items-center">
            <button
            className="w-8 h-8 flex justify-center items-center rounded-full bg-gray-800 text-white text-xl hover:bg-gray-900"
            onClick={() => setShowUsers(!showUsers)}
            >
            +
            </button>
        
            <lebal className = "ml-2 text-lg text-primary-500 font-medium">member: </lebal>
          </div>
          <ul>
            {selectedUsers.map((user) => (
              <li key={user.id}>
                {user.name}
                <button
                  className="ml-2 text-lg text-primary-500 font-medium"
                  onClick={() => handleRemoveUser(user.id)}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
          {showUsers && (
              <div className="user-list-popup">
                <UserList users={users} onSelectUser={handleSelectUser} />
                <button className="close-btn" onClick={() => setShowUsers(false)}>Close</button>
              </div>
            )}
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="flex w-auto h-auto py-2 px-4 text-gray-50 right-1
            bg-tertiary-500 hover:bg-secondary-500 rounded-full cursor-pointer active:scale-95">
            Post
          </button>
        </form>
      </div>
    </div>
  );

};

export default createNewGroupPage;
