/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import { getCurrentUser, signOutUser } from "@/firebase/auth";
import HouseCard from "@/components/tribu/elements/houseCard/houseCard";
import HouseFilter from "@/components/tribu/molecules/houseFilter/houseFilter";
import MobileOpenFilterBtn from "@/components/tribu/elements/buttons/mobileOpenFilterBtn";
import MobileCleanFilterBtn from "../elements/buttons/mobileCleanFilterBtn";
import Link from "next/link";
import HouseProfile from "../molecules/houseProfile/houseProfile";
import Chevron from "@/public/assets/icons/chevron_right.svg";
import Pagination from "../elements/pagination/pagination";
import PeopleProfile from "../molecules/peopleProfile/peopleProfile";
import {
  addData,
  setData,
  getAllData,
  getDataById,
  updateData,
  deleteData
} from "@/firebase/entities/database";

const HousesPage = () => {
  const [user, setUser] = useState(true); // to null
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isHouseSlideOpen, setIsHouseSlideOpen] = useState(false);
  const [filteredHouse, setFilteredHouse] = useState([]);
  const [houseDatas, setHouseDatas] = useState([]);

  /*   useEffect(() => {
    getCurrentUser().then((user) => {
      setUser(user);
      //console.log(user);
    });
  }, []); */
  const houses = [1, 2, 3, 4, 5, 6];

  const handleGetTenements = async () => {
    const data = await getAllData("tenements");
    //console.log("data", data);
    setHouseDatas(data);
  };
  useEffect(() => {
    handleGetTenements();
  });

  function toggleFilterSlideOver() {
    document
      .getElementById("filter-slideover")
      .classList.toggle("translate-y-full");
    setIsFilterOpen(!isFilterOpen);
    if (!isFilterOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }

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

  if (user) {
    return (
      <div className="flex flex-col w-full h-auto mb-[170px] lg:mb-[40px] pt-12 md:pt-20 items-center relative z-10">
        <div
          id="filter-slideover"
          className={`flex 
          md:hidden fixed top-48 w-full h-screen px-4 z-50 duration-300 ease-out transition-all translate-y-full justify-center bg-white/80`}>
          <div className="flex w-full max-w-[400px] h-auto mb-32">
            <HouseFilter
              filteredHouse={filteredHouse}
              setFilteredHouse={setFilteredHouse}
            />
          </div>
        </div>

        <div
          id="house-slideover"
          className={`flex fixed inset-0 top-0 right-0 w-full h-screen duration-300 ease-out transition-all translate-x-full z-50`}>
          <div className="flex flex-col w-full h-auto items-center">
            <HouseProfile toggleHouseSlideOver={toggleHouseSlideOver} />
          </div>
        </div>

        <div className="flex flex-col w-full max-w-[1140px] h-auto mt-8 px-4 md:px-8 lg:px-8 xl:px-0 items-center justify-center relative z-40">
          <div className="flex flex-row w-full h-auto items-center justify-between">
            <Link href="/tribu">
              <div className="flex flex-row w-auto h-auto items-center cursor-pointer active:scale-95 hover:underline">
                <div className="flex w-auto h-auto justify-center items-center">
                  <img
                    src="/assets/icons/chevron_right.svg"
                    alt="back icon"
                    className="flex w-3 h-3 mr-4 rotate-180 text-white fill-current"
                  />
                </div>
                <span className="flex text-lg text-primary-500 font-light">
                  Atrás
                </span>
              </div>
            </Link>
            <div className="flex flex-col w-auto h-auto items-start text-white ml-8 sm:ml-12">
              <span className="flex pl-4 text-xl font-normal text-primary-500 text-right whitespace-nowrap">
                Casas por compartir
              </span>
            </div>
          </div>
          <div className="flex md:hidden flex-row w-full h-auto mt-6 justify-end gap-2">
            <div className="flex md:hidden w-auto h-auto ">
              <MobileCleanFilterBtn />
            </div>
            <div className="flex md:hidden w-auto h-auto ">
              <MobileOpenFilterBtn
                toggleFilterSlideOver={toggleFilterSlideOver}
                isFilterOpen={isFilterOpen}
                setIsFilterOpen={setIsFilterOpen}
              />
            </div>
          </div>
          <div className="flex flex-row w-full h-auto mt-2 sm:mt-6 justify-center gap-8">
            <div className="hidden md:flex flex-col w-[350px] min-w-[350px] h-full mt-6 bg-tertiary-100 rounded-lg">
              <HouseFilter
                filteredHouse={filteredHouse}
                setFilteredHouse={setFilteredHouse}
              />
            </div>
            <div className="flex flex-col w-full h-auto">
              <div className="flex flex-col w-full max-w-[1140px] h-auto items-center justify-center">
                <div className="flex flex-row w-full h-auto mt-6 justify-end">
                  <span className="flex pl-4 text-lg font-light text-primary-500 xl:pr-8">
                    Resultado: {houses.length} vivienda
                    {houses.length > 1 && "s"} de {houses.length}
                  </span>
                </div>
                <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 w-full h-auto mt-6 gap-x-6 gap-y-12 md:gap-y-10 lg:gap-y-12  items-center justify-between">
                  {houseDatas?.slice(0, 6)?.map((houseData, index) => {
                    return (
                      <HouseCard
                        key={index}
                        toggleHouseSlideOver={toggleHouseSlideOver}
                        houseData={houseData}
                      />
                    );
                  })}
                </div>
                <div className="flex w-full h-auto mt-12 justify-center items-center gap-2">
                  <Pagination />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default HousesPage;
