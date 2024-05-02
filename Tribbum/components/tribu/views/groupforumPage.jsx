"use client"
import React, { useState } from "react";
const GroupForumPage = () => {
  const[group , setGroup] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.dir(group)
  };


  return (
    <div className='flex flex-col w-full h-auto pt-12 md:pt-20 px-4 items-center relative z-10'>
      <div style={{ position: 'relative', width: '100%',}}>
      <div style={{ overflow: 'hidden', width: '100%', height: '400px' }}> {/* Set height to half of the original image height */}
        <img
         src="https://firebasestorage.googleapis.com/v0/b/tribbum-ffe98.appspot.com/o/forums%2FAyud%C3%A9monos%20en%20comunidad.png?alt=media&token=beed46cc-f379-4a74-85c1-883b177ecacc"
          style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
        />
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: '0',
          width: '100%',
          height: '50%',  // Height set to 50% to crop bottom
          background: 'linear-gradient(transparent, white)', // Gradient from transparent to white to hide the cropped part
        }}
      />
    <div
          style={{
            position: 'absolute',
            bottom: '0',
            left: '0',
            width: '100%', // Fill the width of the image container
          padding: '50px',
          boxSizing: 'border-box',
          background: 'rgba(255, 255, 255, 0.7)', // Translucent white background
          textAlign: 'center', // Center text horizontally
          }}
      >
      <h1 className='hidden md:flex text-2xl font-light text-primary-500 text-center'>
      Group Name
      </h1>
      </div>
      </div>
      <div className="flex flex-col w-full h-auto gp-2
        mt-8 mb-12 py-8 px-4 bg-tertiary-100 shadow-xl rounded-3xl border border-gray-200">
        <form onSubmit={handleSubmit}>
          <label className="flex text-lg text-primary-500 font-medium">
            Group Topic:
          </label>
        </form>
      </div>
    </div>
  );
}

export default GroupForumPage;