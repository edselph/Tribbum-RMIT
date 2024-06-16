// "use client";
// import FeatureChip from "../../elements/featureChip/featureChip";
// import AlertIcon from "@/public/assets/icons/alert-hexagon.svg";
// /* datas from dummydatas before fetching */
// import { profileDatas } from "@/utils/dummyDatas";
// import Link from "next/link";
// import { useState } from "react";
// import ChatSlideOver from "../chatBoard/chatSlideOver";
// /* eslint-disable @next/next/no-img-element */
// const PeopleProfile = ({
//   togglePeopleSlideOver,
//   isToastReportUserOpen,
//   setIsToastReportUserOpen,
// }) => {
//   const [isChatSlideOpen, setIsChatSlideOpen] = useState(false);

//   function toggleChatSlideOver() {
//     setIsChatSlideOpen(!isChatSlideOpen);
//     document
//       .getElementById("chat-slideover")
//       .classList.toggle("translate-y-full");
//     if (!isChatSlideOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }
//   }

//   return (
//     <div className="flex flex-col w-full max-w-[760px] h-full mb-24 bg-tertiary-100 shadow-xl rounded-3xl border border-gray-200 overflow-scroll">
//       <div
//         id="chat-slideover"
//         className={`flex fixed inset-0 bottom-0 right-0 w-full h-full px-4 md:px-8 mt-20 justify-end items-end duration-300 ease-out transition-all translate-y-full z-50`}
//       >
//         <div
//           className={`
//             flex flex-col
//             w-full max-w-[760px] h-4/5
//             justify-end items-end
//             `}
//         >
//           <ChatSlideOver toggleChatSlideOver={toggleChatSlideOver} />
//         </div>
//       </div>
//       <div className="flex flex-col w-auto max-w-[1140px] h-auto mt-4 items-end">
//         <div className="flex flex-row w-full h-auto px-4 mt-4 justify-between">
//           <button
//             className="flex w-10 h-10 justify-center items-center"
//             onClick={() => setIsToastReportUserOpen(!isToastReportUserOpen)}
//           >
//             <AlertIcon className="flex w-full h-full" />
//           </button>
//           <button
//             className="flex w-[128px] h-[35px] py-2 px-4 justify-center items-center bg-tertiary-400 rounded-full active:scale-95 cursor-pointer"
//             onClick={() => {
//               togglePeopleSlideOver(), setIsToastReportUserOpen(false);
//             }}
//           >
//             <span className="flex text-white text-[13px] font-medium uppercase">
//               Cerrar
//             </span>
//           </button>
//         </div>
//       </div>
//       <div className="flex flex-col w-auto h-auto mt-8 overflow-scroll">
//         <div
//           id="profile portrait"
//           className="flex flex-col md:flex-row w-full h-auto md:items-center"
//         >
//           <div className="flex w-full md:w-1/2 h-[300px] px-4">
//             <div className="flex w-full h-full overflow-hidden bg-white rounded-xl">
//               <img
//                 src={profileDatas.portraitUrl}
//                 alt="Foto casa por compartir"
//                 className="flex w-full min-w-[300px] h-auto object-cover"
//               />
//             </div>
//           </div>
//           <div className="flex flex-col w-full md:w-1/2 h-auto px-4 mt-8 md:mt-0">
//             <div className="flex flex-col w-full h-auto ">
//               {/* Name */}
//               <div className="flex flex-col w-auto h-auto px-2 items-start">
//                 <span className="text-xl font-medium text-primary-500">
//                   Inma Carbonell Fresnada
//                 </span>
//                 <span className="text-xl font-medium text-primary-500">
//                   46 años
//                 </span>
//               </div>
//               {/* Address */}
//               <div className="flex flex-row w-auto h-auto px-2 mt-2 justify-between items-center">
//                 <span className="text-lg font-normal text-primary-500">
//                   Barcelona
//                 </span>
//               </div>
//             </div>
//             {/* Add Comment*/}
//             <div className="flex flex-col w-full h-auto mt-8 ">
//               <div className="flex flex-col w-full h-auto px-2 ">
//                 <span className="text-sm font-normal text-primary-500">
//                   Artista madrileña y vegeteriana, Me apasiona viajar y mi
//                   profesión. Busco compartir piso en zona bien comunicada.
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Profile Traits */}
//         <div className="flex flex-row w-auto h-auto px-4 mt-2 justify-center items-center">
//           <div className="flex flex-row flex-wrap w-full h-auto mt-4 justify-start items-center gap-4">
//             {profileDatas.profileTraits?.map((trait) => {
//               return (
//                 <FeatureChip
//                   text={trait.text}
//                   icon={trait.icon}
//                   chipWidth={trait.chipWidth}
//                   key={trait.id}
//                   id={trait.id}
//                   chipType={trait.chipType}
//                 />
//               );
//             })}
//           </div>
//         </div>
//         <div className="flex w-full h-auto my-10 px-4">
//           <div className="flex w-full h-0.5 bg-gray-500/20 "></div>
//         </div>
//         {/* Personality*/}
//         <div className="flex flex-col w-full h-auto px-4 ">
//           <div className="flex w-full h-auto ">
//             <span className="text-sm font-light text-primary-500">
//               Caracteristicas personales
//             </span>
//           </div>
//           <div className="flex flex-row flex-wrap w-full h-auto mt-4 gap-4">
//             {profileDatas.personality?.map((data) => {
//               return (
//                 <div
//                   key={data.id}
//                   id={data.id}
//                   className="flex w-auto h-auto px-4 py-1 justify-center items-center  rounded-full bg-white"
//                 >
//                   <span className="flex text-primary-500 text-sm font-light">
//                     {data.title}
//                   </span>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//         {/* Hobbies*/}
//         <div className="flex flex-col w-full h-auto px-4 mt-8 pb-12">
//           <div className="flex w-full h-auto ">
//             <span className="text-sm font-light text-primary-500">
//               Aficiones
//             </span>
//           </div>
//           <div className="flex flex-row flex-wrap w-full h-auto mt-4 gap-4">
//             {profileDatas.hobbies?.map((data) => {
//               return (
//                 <div
//                   key={data.id}
//                   id={data.id}
//                   className="flex w-auto h-auto px-4 py-1 justify-center items-center rounded-full bg-white"
//                 >
//                   <span className="flex text-primary-500 text-sm font-light">
//                     {data.title}
//                   </span>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//         {/* Chat with */}
//         <div className="flex w-full h-auto mt-8 mb-40 px-4">
//           <div className="flex w-full h-14 px-8 bg-tertiary-500 rounded-full items-center justify-center text-white active:scale-95 cursor-pointer relative">
//             <div
//               className="flex w-auto h-auto justify-center"
//               onClick={() => toggleChatSlideOver()}
//             >
//               <span className="flex text-2xl text-white font-light uppercase">
//                 Chatear con Inma
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default PeopleProfile;

"use client";
import FeatureChip from "../../elements/featureChip/FeatureChip";
import AlertIcon from "@/public/assets/icons/alert-hexagon.svg";
import { useEffect, useState } from "react";
import ChatSlideOver from "../chatBoard/ChatSlideOver";
import { getUserById } from "@/firebase/entities/users";
import Link from "next/link";

/* eslint-disable @next/next/no-img-element */

const PeopleProfile = ({
  groupIdParams,
  togglePeopleSlideOver,
  isToastReportUserOpen,
  setIsToastReportUserOpen,
}) => {
  const [isChatSlideOpen, setIsChatSlideOpen] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const usr = await getUserById(groupIdParams.id);
    console.log(usr)
    setUserData(usr);
  };

  function toggleChatSlideOver() {
    setIsChatSlideOpen(!isChatSlideOpen);
    document
      .getElementById("chat-slideover")
      .classList.toggle("translate-y-full");
    if (!isChatSlideOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }

  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col w-full max-w-[760px] h-full mb-24 bg-tertiary-100 shadow-xl rounded-3xl border border-gray-200 overflow-scroll">
        <div
          id="chat-slideover"
          className="flex fixed inset-0 bottom-0 right-0 w-full h-full px-4 md:px-8 mt-20 justify-end items-end duration-300 ease-out transition-all translate-y-full z-50"
        >
          {isChatSlideOpen && (
            <ChatSlideOver toggleChatSlideOver={toggleChatSlideOver} />
          )}
        </div>
        <div className="flex flex-col w-auto max-w-[1140px] h-auto mt-4 items-center">
          <div className="flex flex-row w-full h-auto px-4 mt-4 justify-between">
            <button
              className="flex w-10 h-10 justify-center items-center"
              onClick={() => setIsToastReportUserOpen(!isToastReportUserOpen)}
            >
              <AlertIcon className="flex w-full h-full" />
            </button>
            <button
              className="flex w-[128px] h-[35px] py-2 px-4 justify-center items-center bg-tertiary-400 rounded-full active:scale-95 cursor-pointer"
              onClick={() => {
                togglePeopleSlideOver(), setIsToastReportUserOpen(false);
              }}
            >
              <span className="flex text-white text-[13px] font-medium uppercase">
                Close
              </span>
            </button>
          </div>
          {userData && (
            <div className="flex flex-col w-auto h-auto mt-8 overflow-scroll">
              <div
                id="profile portrait"
                className="flex flex-col md:flex-row w-full h-auto md:items-center"
              >
                <div className="flex w-full md:w-1/2 h-[300px] px-4">
                  <div className="flex w-full h-full overflow-hidden bg-white rounded-xl">
                    <img
                      src={userData.photoUrl}
                      alt={`${userData.name} ${userData.surname}`}
                      className="flex w-full min-w-[300px] h-auto object-cover"
                    />
                  </div>
                </div>
                <div className="flex flex-col w-full md:w-1/2 h-auto px-4 mt-8 md:mt-0">
                  <div className="flex flex-col w-full h-auto ">
                    <div className="flex flex-col w-auto h-auto px-2 items-start">
                      <span className="text-xl font-medium text-primary-500">
                        {userData.name} {userData.surname}
                      </span>
                      <span className="text-xl font-medium text-primary-500">
                        {userData.age} years
                      </span>
                    </div>
                    <div className="flex flex-row w-auto h-auto px-2 mt-2 justify-between items-center">
                      <span className="text-lg font-normal text-primary-500">
                        {userData.location}, {userData.province}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col w-full h-auto mt-8 ">
                    <div className="flex flex-col w-full h-auto px-2 ">
                      <span className="text-sm font-normal text-primary-500">
                        {userData.description}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row w-auto h-auto px-4 mt-2 justify-center items-center">
                <div className="flex flex-row flex-wrap w-full h-auto mt-4 justify-start items-center gap-4">
                  {Object.values(userData.personalityTraits).map((trait, index) => {
                    return (
                      <FeatureChip
                        text={trait.name}
                        icon={trait.icon}
                        chipWidth="normal"
                        key={index}
                        id={trait.id}
                        chipType="personality"
                      />
                    );
                  })}
                </div>
              </div>
              <div className="flex w-full h-auto my-10 px-4">
                <div className="flex w-full h-0.5 bg-gray-500/20 "></div>
              </div>
              <div className="flex flex-col w-full h-auto px-4 ">
                <div className="flex w-full h-auto ">
                  <span className="text-sm font-light text-primary-500">
                    Personal Characteristics
                  </span>
                </div>

                <div className="flex flex-row flex-wrap w-full h-auto mt-4 justify-start items-center gap-4">
                  {userData && Object.entries(userData.personalityTraits).map(([key, trait]) => (
                    <FeatureChip
                      text={trait.name}
                      icon={trait.icon} // Assuming there's an icon property, otherwise remove this
                      chipWidth="normal"
                      key={key}
                      id={trait.id}
                      chipType="personality"
                    />
                  ))}
                </div>

                <div className="flex flex-row flex-wrap w-full h-auto mt-4 gap-4">
                  {userData && Object.entries(userData.hobbies).map(([key, hobby]) => (
                    <div
                      key={key}
                      id={hobby.id}
                      className="flex w-auto h-auto px-4 py-1 justify-center items-center rounded-full bg-white"
                    >
                      <span className="flex text-primary-500 text-sm font-light">
                        {hobby.name}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
              <div className="flex w-full h-auto mt-8 mb-40 px-4">
                <div className="flex w-full h-14 px-8 bg-tertiary-500 rounded-full items-center justify-center text-white active:scale-95 cursor-pointer relative">
                  <div
                    className="flex w-auto h-auto justify-center"
                    onClick={() => toggleChatSlideOver()}
                  >
                    <span className="flex text-2xl text-white font-light uppercase">
                      Chat with {userData.name}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PeopleProfile;
