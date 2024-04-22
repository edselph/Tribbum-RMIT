// ./components/tribu/views/createNewGroupPage.jsx
// Marking this component as a Client Component
// use client
"use client"
import React, { useState } from "react";

const createNewGroupPage = () => {
  const[group , setGroup] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.dir(group)
  };


  return (
    <div className='flex flex-col w-full h-auto pt-12 md:pt-20 px-4 items-center relative z-10'>
      <h1 className='hidden md:flex text-2xl font-light text-primary-500 text-center'>
        Create New group
      </h1>
      <div className="flex flex-col w-full max-w-[760px] h-auto gp-2
        mt-8 mb-12 py-8 px-4 bg-tertiary-100 shadow-xl rounded-3xl border border-gray-200">
        <form onSubmit={handleSubmit}>
          <label className="flex text-lg text-primary-500 font-medium">
            Group Topic:
          </label>
          <input
            onChange={(e) => setGroup(e.target.value)} 
            value ={group}
            className="flex w-full h-auto p-2 mb-4 text-lg border-[1px] 
            border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-500/50"
            type="text"
          />
          <button
            type="button"
            onClick={handleSubmit}
            className="flex w-auto h-auto py-2 px-4 text-gray-50 right-1
            bg-tertiary-500 hover:bg-secondary-500 rounded-full cursor-pointer active:scale-95">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default createNewGroupPage;
