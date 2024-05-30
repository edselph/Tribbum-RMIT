/* eslint-disable @next/next/no-img-element */
"use client";

import { useRouter } from 'next/navigation';

const GroupCard = ({ groupData }) => {
  const router = useRouter();
  // const data = [{ id: "2", title: "Con niños periodicamente" }];

  const navigateToGroup = () => {
    router.push(`tribu/group-forum/${groupData.id}`);
  };

  return (
    <div
      className={`
        flex flex-col 
        w-full min-w-[250px] max-w-[340px] h-[300px] min-h[300px]
        mx-4
        rounded-md bg-white
        shadow-[0px_3px_12px_0px_rgba(0,0,0,0.2)]
        active:scale-105 cursor-pointer
        relative`}
    >
      <div className="flex w-full h-1/2 bg-gray-100 relative">
        <img
          src={groupData.bannerUrl ? groupData.bannerUrl : "/assets/images/houseTestImg.svg"}
          alt="Group Image"
          className="w-full h-auto object-cover"
        />
        <div className="flex absolute bottom-0 right-0 w-[100px] h-[33px] bg-tertiary-400 justify-center items-center">
          <span className="text-[13px] font-light text-white">
            <p>Join</p>
          </span>
        </div>
      </div>
      <div className="flex flex-col w-full h-[60px] p-4 justify-between relative">
        <span className="text-[15px] font-medium text-primary-500">
          {groupData.name.substring(0, 40)}{groupData.name.length > 40 ? "..." : ""}
        </span>
      </div>
      <div className="flex flex-row w-full h-auto px-4 mt-2">
        <span className="text-xs text-primary-500 font-light">
          {/* Additional dynamic room info could go here */}
        </span>
      </div>

      {/* <div className="flex absolute bottom-4 left-0 w-full h-auto px-4 justify-start items-center gap-4">
        <div className="flex flex-row flex-wrap w-auto h-auto justify-start gap-2">
          {data.map((item) => (
            <div
              className="flex w-auto h-auto px-2 py-1 bg-tertiary-100 border border-tertiary-500 rounded-full"
              key={item.id}
            >
              <span className="text-xs text-tertiary-500 font-light">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div> */}

      <button onClick={navigateToGroup} className="p-2 text-white bg-blue-500 rounded hover:bg-blue-600">
        View Group
      </button>
    </div>
  );
};

export default GroupCard;
