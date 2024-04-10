/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import MobileCleanFilterBtn from "../elements/buttons/mobileCleanFilterBtn";
import MobileOpenFilterBtn from "../elements/buttons/mobileOpenFilterBtn";
import PeopleFilter from "../molecules/peopleFilter/peopleFilter";
import PeopleCard from "../elements/peopleCard/peopleCard";
import Pagination from "../elements/pagination/pagination";
import PeopleProfileSlideOver from "../molecules/peopleProfile/peopleProfileSlideover";

const SharingWithPage = () => {
  const [user, setUser] = useState(true); // to null
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isPeopleSlideOpen, setIsPeopleSlideOpen] = useState(false);
  const [pageTitle, setPageTitle] = useState("");

  const params = useParams();

  const peoples = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const tab = "Sin hijos";

  useEffect(() => {
    switch (Object.values(params)[0]) {
      case "personas-sin-hijos":
        setPageTitle("Personas sin hijos");
        break;
      case "personas-con-hijos":
        setPageTitle("Personas con hijos");
        break;
      case "personas-con-hijos-periodicamente":
        setPageTitle("Personas con hijos periodicamente");
        break;
      case "personas-de-mas-de-65":
        setPageTitle("Personas de más de 65 años");
        break;
    }
  }, [params]);

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

  function togglePeopleSlideOver() {
    setIsPeopleSlideOpen(!isPeopleSlideOpen);
    document
      .getElementById("people-slideover")
      .classList.toggle("translate-x-full");
    if (!isPeopleSlideOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }

  if (user)
    return (
      <div className="flex flex-col w-full h-auto mb-[170px] lg:mb-[40px] pt-12 md:pt-20 items-center relative z-10">
        <div
          id="filter-slideover"
          className={`
            flex lg:hidden fixed top-52 
            w-full h-screen px-4 
            justify-center
             bg-white/80
            duration-300 ease-out transition-all translate-y-full 
            z-50 `}
        >
          <div className="flex w-full max-w-[400px] h-auto mb-32">
            <PeopleFilter />
          </div>
        </div>

        <div
          id="people-slideover"
          className={`flex fixed inset-0 top-0 right-0 w-full h-screen duration-300 ease-out transition-all translate-x-full z-50`}
        >
          <div className="flex flex-col w-full h-auto items-center">
            <PeopleProfileSlideOver
              togglePeopleSlideOver={togglePeopleSlideOver}
            />
          </div>
        </div>

        <div className="flex flex-col w-full max-w-[1140px] h-auto px-4 md:px-8 lg:px-8 xl:px-0 items-center justify-center relative z-40">
          <div className="flex flex-row w-full h-auto mt-8 items-center justify-between">
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
              <span className="flex pl-4 text-xl font-normal text-primary-500 text-right">
                {pageTitle} con quién compartir
              </span>
            </div>
          </div>

          <div className="flex lg:hidden flex-row w-full h-auto mt-6 justify-end gap-2">
            <div className="flex lg:hidden w-auto h-auto ">
              <MobileCleanFilterBtn />
            </div>
            <div className="flex lg:hidden w-auto h-auto ">
              <MobileOpenFilterBtn
                toggleFilterSlideOver={toggleFilterSlideOver}
                isFilterOpen={isFilterOpen}
                setIsFilterOpen={setIsFilterOpen}
              />
            </div>
          </div>
          <div className="flex flex-row w-full h-auto mt-2 sm:mt-6 justify-center gap-8">
            <div className="hidden lg:flex flex-col w-[350px] min-w-[350px] h-full mt-6 bg-tertiary-100 rounded-lg">
              <PeopleFilter />
            </div>
            <div className="flex flex-col w-full h-auto">
              <div className="flex flex-col w-full max-w-[1140px] h-auto items-center ">
                <div className="flex flex-row w-full h-auto mt-6 justify-end">
                  <span className="flex pl-4 text-base font-light text-primary-500 xl:pr-8">
                    Resultado: personas
                  </span>
                </div>
                <div className="flex flex-row flex-wrap w-full h-auto mt-6 gap-8 gap-y-10 items-center justify-around md:justify-center lg:justify-around">
                  {peoples?.map((people, index) => {
                    return (
                      <PeopleCard
                        key={index}
                        togglePeopleSlideOver={togglePeopleSlideOver}
                        tab={tab}
                      />
                    );
                  })}
                </div>
                <div className="flex w-full h-auto mt-12 ">
                  <Pagination />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};
export default SharingWithPage;
