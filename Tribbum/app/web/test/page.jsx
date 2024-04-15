'use client'
// Originally not client

import React, { useEffect, useState } from "react";
import { getAllData, getDataById } from "@/firebase/entities/database";
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

    const data = await getAllData("personalityTraits");
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
