/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect, Suspense } from "react";
import ChipUploadHome from "@/components/web/elements/chipUploadHome/chipUploadHome";
import SearchInput from "@/components/tribu/elements/searchInput/searchInput";
import PlusIcon from "@/public/assets/icons/plus.svg";
import Link from "next/link";
// import Router from "next/router";

import SharingSectionWebApp from "@/components/web/molecules/sharingSectionWebApp/sharingSectionWebApp";
import HomeHouseCard from "@/components/tribu/elements/houseCard/homehouseCard";
import HouseProfile from "../molecules/houseProfile/houseProfile";

import { getUserData } from "@/firebase/entities/users";
import {
  getAllProvinces,
  getTenementsByProvince,
} from "@/firebase/entities/tenements";
import { set } from "date-fns";
import HouseWrapper from "../molecules/houseWrapper";
import GroupWrapper from "../molecules/groupWrapper";

const HomeAppPage = () => {
  const [user, setUser] = useState(true); // to null
  const [userData, setUserData] = useState();
  const [isHouseSlideOpen, setIsHouseSlideOpen] = useState(false);
  const [tenements, setTenements] = useState([]);
  const [provinces, setProvinces] = useState([]);

  // const goToGroupsPage = () => {
  //   Router.push("/groups");
  // };

  useEffect(() => {
    getUserData.then((response) => {
      if (response.result) {
        setUserData(response.resultData.data);
      } else {
        console.log("error", "fetch error.");
      }
    });
  }, []);

  useEffect(() => {
    const handleGetProvinces = async () => {
      const data = await getAllProvinces();
      setProvinces(data);
    };
    handleGetProvinces();
  }, []);

  useEffect(() => {
    const handleGetTenementsByProvinces = async () => {
      const data = await getTenementsByProvince("barcelona");
      setTenements(data);
    };
    handleGetTenementsByProvinces();
  }, []);

  console.log("tenements", tenements);

  useEffect(() => {
    if (user === null) router.push("/no-user");
  }, [user]);

  function toggleHouseSlideOver() {
    setIsHouseSlideOpen(!isHouseSlideOpen);
    document
      .getElementById("house-slideover")
      .classList.toggle("translate-x-full");
    if (!isHouseSlideOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }
  function Loading() {
    return (
      <div className="flex w-full h-auto justify-start items-center">
        <h2 className="text-primary-500">🌀 Loading...</h2>
      </div>
    );
  }
  if (user) {
    return (
      <div className="flex flex-col w-full h-auto min-h-screen mb-[170px] lg:mb-[40px] pt-12 md:pt-20 items-center relative z-10">
        <div
          id="house-slideover"
          className={`flex fixed inset-0 top-0 right-0 w-full h-screen duration-300 ease-out transition-all translate-x-full z-50 bg-white/80`}
        >
          <div className="flex flex-col w-full h-auto items-center">
            <HouseProfile toggleHouseSlideOver={toggleHouseSlideOver} />
          </div>
        </div>
        <div
          className={`
            flex flex-col 
            w-full max-w-[1140px] md:container md:mx-auto xl:max-w-[1140px] h-auto 
            px-4 md:px-8 lg:px-8 xl:px-0 
            items-center justify-center`}
        >
          <div className="flex flex-row w-full h-auto mt-12 items-center">
            <div className="flex w-16 h-16 bg-primary-200 rounded-full justify-center items-center text-white overflow-hidden">
              <img
                src={userData?.photoUrl}
                alt="user avatar"
                className="flex w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col w-auto h-auto items-start text-white ml-4">
              <span className="flex pl-2 text-2xl font-light text-primary-500">
                ¡Hola{" "}
                <span className="flex font-bold ml-2">{userData?.name}</span>!
              </span>
              <span className="text-2xl font-light  text-primary-500">
                ¿Dónde te gustaría buscar?
              </span>
            </div>
          </div>
          <div className="flex flex-row w-full h-auto mt-12">
            <SearchInput placeholder="Todas las provincias" />
          </div>
          <div className="flex flex-col w-full h-auto mt-12 overflow-visible">
            <div className="flex flex-row w-full h-auto justify-between items-center">
              <div className="flex w-auto h-auto">
                <span className="text-base font-light text-primary-500">
                  Casas por compartir
                </span>
              </div>
              <div className="flex w-auto h-auto px-4 py-2 border-[0.25px] border-tertiary-500 rounded-full cursor-pointer active:scale-95 group hover:bg-tertiary-500">
                <span className="text-md font-medium text-primary-500 group-hover:text-white">
                  <Link href="/tribu/casas">Ver todas las casas</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full h-[348px] items-center justify-center">
          <Suspense fallback={<div>Loading...</div>}>
            <HouseWrapper toggleHouseSlideOver={toggleHouseSlideOver} />
            {/* <div className="flex flex-row w-full h-auto overflow-scroll overflow-visible py-6 ">
              {tenements?.slice(0, 10).map((tenement, index) => {
                return (
                  <HomeHouseCard
                    key={index}
                    toggleHouseSlideOver={toggleHouseSlideOver}
                    tenement={tenement}
                  />
                );
              })}
            </div> */}
          </Suspense>
        </div>

        <h1 style={{ fontSize: "50px" }}>Groups</h1>

        <div className="flex flex-col w-full h-[348px] items-center justify-center">
          {/* New component to be introduced here 
            
            * Based on how it's been done, "group" data must be mapped 
              ( such as in houseWrapper.jsx ) in a new component "groupWrapper.jsx"
              in the root directory of "molocules"
            
            * This component will take in the function "toggleHouseSlideOver" which
              will enable the sliding over of groups (presumably?)
            
            * Furthermore, "groupCard.jsx" component will need to be created within
              the "elements" directory as done with "homehouseCard.jsx"
          
          */}

          <Suspense fallback={<div>Loading...</div>}>
            <GroupWrapper toggleHouseSlideOver={toggleHouseSlideOver} />
          </Suspense>
        </div>

        <div
          className={`
            flex flex-col 
            w-full max-w-[1140px] md:container md:mx-auto xl:max-w-[1140px] h-auto 
            px-4 md:mb-24 md:px-8 lg:px-8 xl:px-0 
            items-center justify-center`}
        >
          <div className="flex flex-col w-full h-auto mt-12">
            <div className="flex flex-row w-full h-auto justify-between items-end">
              <div className="flex w-full md:w-1/2 h-auto justify-start">
                <span className="text-base font-light text-primary-500">
                  ¿Con quién quieres compartir?
                </span>
              </div>
            </div>
            <div className="flex flex-col w-full h-auto mt-6">
              <SharingSectionWebApp />
            </div>
          </div>
        </div>
        <div className="flex flex-row fixed bottom-12 w-full h-auto justify-end px-4 md:pr-12">
          <Link
            href="/tribu/compartir-casa"
            className="flex w-[400px] h-auto justify-end"
          >
            <ChipUploadHome />
          </Link>
        </div>
      </div>
    );
  }
};
export default HomeAppPage;
