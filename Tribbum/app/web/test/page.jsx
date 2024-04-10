import React from "react";
import {
  addUser,
  setUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
} from "@/firebase/entities/users";

const Test = () => {
  return (
    <div>
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
