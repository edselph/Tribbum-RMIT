"use client";
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";

/* datas from dummydatas before fetching */

import ToastReportUser from "../../elements/toasts/toastReportUser";
import PeopleProfile from "./peopleProfile";

const PeopleProfileSlideOver = ({ togglePeopleSlideOver }) => {
  const [isToastReportUserOpen, setIsToastReportUserOpen] = useState(false);

  return (
    <div className="flex flex-col w-full h-screen mt-[72px] px-4 md:px-8 lg:px-8 items-end relative z-40 bg-white md:bg-white/80 md:rounded-3xl">
      {isToastReportUserOpen && (
        <div className="flex w-full h-full absolute top-20">
          <ToastReportUser
            isToastReportUserOpen={isToastReportUserOpen}
            setIsToastReportUserOpen={setIsToastReportUserOpen}
          />
        </div>
      )}

      <div className="flex flex-col w-full h-full items-end ">
        <PeopleProfile
          togglePeopleSlideOver={togglePeopleSlideOver}
          isToastReportUserOpen={isToastReportUserOpen}
          setIsToastReportUserOpen={setIsToastReportUserOpen}
        />
      </div>
    </div>
  );
};
export default PeopleProfileSlideOver;
