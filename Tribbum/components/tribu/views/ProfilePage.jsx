// // pages/profile.jsx
// "use client";

// import React from "react";

// const ProfilePage = () => {
//   // Sample data
//   const profileData = {
//     name: "Maria Reyes",
//     age: "25 años",
//     location: "Madrid, Torrelodones",
//     description: "Soy María, madre soltera, quiero buscar otras madres solteras para compartir casa.",
//     image: "https://cdn.discordapp.com/attachments/1241705434641989736/1241705612543528970/rg43wcvmetp81.webp?ex=664b2bf7&is=6649da77&hm=6141e6ae8dee2451fb8733760aedfc958611984acc3b948ca8867ca83c1815bc&", // Placeholder profile image path
//     bannerImage: "https://cdn.discordapp.com/attachments/1241705434641989736/1241705655484678154/20210524_081913.jpg?ex=664b2c02&is=6649da82&hm=8ae2f9d9f08321d4db15720c332cee869d99e41064956e178ca90c8887ff759c&", // Placeholder banner image path
//     attributes: [
//       { key: "Gender", value: "Female" },
//       { key: "With kids", value: "3 niños de entre 5 y 10 años" },
//       { key: "Smoker", value: "No" },
//       { key: "Pets", value: "Con mascota" },
//       { key: "Employment", value: "Con empleo" }
//     ]
//   };

//   return (
//     <div className="container mx-auto p-4 flex flex-col items-center justify-center min-h-screen">
//       <div className="profile-header w-full p-4 text-white text-center"
//            style={{
//              backgroundImage: `url(${profileData.bannerImage})`,
//              backgroundSize: 'cover',
//              backgroundPosition: 'center',
//              opacity: 0.4, // Setting the opacity to 40%
//              filter: 'blur(8px)' // Optional: Add a blur effect
//            }}>
//         Profile page banner here
//       </div>
//       <div className="profile-info bg-white p-4 shadow rounded-lg my-4">
//         <img src={profileData.image} alt="Profile" className="w-24 h-24 rounded-full mx-auto" />
//         <h1 className="text-xl font-bold text-center my-2">{profileData.name}, {profileData.age}</h1>
//         <p className="text-center">{profileData.location}</p>
//         <p className="text-center">{profileData.description}</p>
//         <div className="attributes grid grid-cols-2 gap-2 my-2">
//           {profileData.attributes.map(attr => (
//             <div key={attr.key} className="flex justify-between items-center p-2 border-b">
//               <span className="font-medium">{attr.key}:</span>
//               <span>{attr.value}</span>
//             </div>
//           ))}
//         </div>
//         <div className="actions flex justify-around my-4">
//           <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//             Add Friends
//           </button>
//           <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
//             Send Message
//           </button>
//           <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
//             Edit Profile
//           </button>
//         </div>
//       </div>
//       <div className="profile-footer bg-green-500 w-full p-4 mt-4 text-white text-center">
//         Footer with links to posts, groups, friends
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;

// pages/profile.jsx
"use client";

import React from "react";

const ProfilePage = () => {
  const profileData = {
    name: "Maria Reyes",
    age: "25 años",
    location: "Madrid, Torrelodones",
    description:
      "Soy María, madre soltera, quiero buscar otras madres solteras para compartir casa.",
    image:
      "https://cdn.discordapp.com/attachments/1241705434641989736/1241705612543528970/rg43wcvmetp81.webp?ex=664d2637&is=664bd4b7&hm=106e90833df3a25aed599197ba52f9636507ed2884a05a7f4b94fea6358c73a7&", // Placeholder profile image path
    bannerImage:
      "https://cdn.discordapp.com/attachments/1241705434641989736/1241705655484678154/20210524_081913.jpg?ex=664d2642&is=664bd4c2&hm=b4758894c2319d23a64dc8bda110c0a8abe69aa512dde4596a41d53429fe7985&", // Placeholder banner image path
  };

  return (
    <div className="container mx-auto p-4 flex flex-col items-center justify-center min-h-screen">
      <style jsx>{`
        .profile-header {
          width: 100%;
          padding: 120px 0;
          position: relative;
          color: white;
          text-align: center;
        }
        .profile-header::after {
          content: "";
          background-image: url(${profileData.bannerImage});
          background-size: cover;
          background-position: center;
          opacity: 0.4;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          position: absolute;
          z-index: -1;
        }
        .profile-info {
          background: white;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          margin-top: -60px;
          width: 90%;
          max-width: 600px;
          z-index: 2; /* Make sure this is above the banner */
          position: relative;
        }
      `}</style>
      <div className="profile-header"></div>
      <div className="profile-info shadow rounded-lg my-4">
        <img
          src={profileData.image}
          alt="Profile"
          className="w-24 h-24 rounded-full mx-auto"
        />
        <h1 className="text-xl font-bold text-center my-2">
          {profileData.name}, {profileData.age}
        </h1>
        <p className="text-center">{profileData.location}</p>
        <p className="text-center">{profileData.description}</p>
        <div className="actions flex justify-around my-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add Friends
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Send Message
          </button>
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Edit Profile
          </button>
        </div>
      </div>
      <div className="profile-footer bg-green-500 w-full p-4 mt-4 text-white text-center">
        Footer with links to posts, groups, friends
      </div>
    </div>
  );
};

export default ProfilePage;
