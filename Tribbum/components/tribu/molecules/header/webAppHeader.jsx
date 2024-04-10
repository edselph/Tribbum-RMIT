/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import Navigation from "../../../web/molecules/header/navigation";
import { getCurrentUser, signOutUser } from "@/firebase/auth";
import MenuBurger from "@/public/assets/icons/menuIcon.svg";
import UserIcon from "@/public/assets/icons/user.svg";
import ChatIcon from "@/public/assets/icons/chat.svg";
import HeaderDropdown from "../../elements/headerDropdown/headerDropdown";
import LogoutPopup from "../../elements/logOutPopup/logoutPopup";

const WebAppHeader = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openLogOutPopup, setOpenLogOutPopup] = useState(false);
  const ref = useRef();
  const pathname = usePathname();

  const [user, setUser] = useState(true); // to null

  /*   useEffect(() => {
    getCurrentUser().then((user) => {
      setUser(user);
      //console.log(user);
    });
  }, []); */

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (openDropdown && ref.current && !ref.current.contains(e.target)) {
        setOpenDropdown(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    const handleScroll = (e) => {
      window.addEventListener("scroll", () => {
        setOpenDropdown(false);
      });
    };
    handleScroll();

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [openDropdown]);

  if (user === true) {
    return (
      <div className="flex flex-row w-full h-[72px] py-2 px-8 font-system bg-white fixed z-30 ">
        <div className="flex w-full h-full relative">
          {openLogOutPopup && (
            <LogoutPopup setOpenLogOutPopup={setOpenLogOutPopup} />
          )}
          <div className="flex w-full h-full items-center justify-between">
            <div className="flex w-auto h-auto items-center ">
              <Link
                href="/tribu"
                className="flex w-[20px[ md:w-[197px] h-auto md:h-14 active:scale-95"
              >
                <img
                  src="/assets/images/tribbum-log.png"
                  alt="tribbum-logo"
                  className="flex w-[50px[ md:w-[197px] h-10 md:h-14 "
                />
              </Link>
            </div>
          </div>
          <div className="flex flex-row w-auto h-auto items-center md:gap-4">
            <div className="flex w-10 h-10 justify-center items-center">
              <Link href="/tribu/chat">
                <ChatIcon
                  className={`
                    w-auto h-auto 
                    ${
                      pathname === "/tribu/chat"
                        ? "text-tertiary-500"
                        : "text-primary-500"
                    } fill-current 
                    active:scale-95 cursor-pointer`}
                />
              </Link>
            </div>
            <div
              className="flex w-9 h-9 mx-4 justify-center items-center relative"
              onClick={() => setOpenDropdown(!openDropdown)}
              ref={ref}
            >
              <UserIcon className="w-auto h-auto active:scale-95 cursor-pointer" />
              {openDropdown && (
                <HeaderDropdown
                  setOpenLogOutPopup={setOpenLogOutPopup}
                  setOpenDropdown={setOpenDropdown}
                  openLogOutPopup={openLogOutPopup}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default WebAppHeader;
