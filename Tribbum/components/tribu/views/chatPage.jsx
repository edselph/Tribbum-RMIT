/* eslint-disable @next/next/no-img-element */
"use client";
import BreakpointsHelper from "@/utils/breakpointsHelper";
import { useState } from "react";
import SearchInput from "../elements/searchInput/searchInput";
import ChatCard from "../elements/chatCard/chatCard";
import SendIcon from "@/public/assets/icons/send.svg";
import ChatBoard from "../molecules/chatBoard/chatBoard";
import { chatMessages } from "@/utils/dummyChatMessages";

const ChatPage = () => {
  const [user, setUser] = useState(true); // to null
  const [isChatSlideOpen, setIsChatSlideOpen] = useState(false);
  const chatUsers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [activeChat, setActiveChat] = useState(chatUsers[0]);

  function toggleChatSlideOver() {
    setIsChatSlideOpen(!isChatSlideOpen);
    document
      .getElementById("chat-slideover")
      .classList.toggle("translate-x-full");
    if (!isChatSlideOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }

  if (user) {
    return (
      <div className="flex flex-col w-full h-full items-center pt-12 md:pt-20 overscroll-contain relative">
        <div
          id="chat-slideover"
          className={`flex fixed inset-0 top-0 right-0 w-full h-screen duration-300 ease-out transition-all translate-x-full z-50 bg-white`}
        >
          <div className="flex flex-col w-full h-auto items-center pt-20">
            <div
              className="flex flex-row w-full h-auto pt-0 pb-4 px-4 border-b border-gray-200"
              onClick={() => toggleChatSlideOver()}
            >
              <div className="flex flex-row w-auto h-auto items-center cursor-pointer active:scale-95 ">
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
            </div>

            <ChatBoard
              activeChat={activeChat}
              setActiveChat={setActiveChat}
              chatMessages={chatMessages}
            />
          </div>
        </div>
        <div className="flex flex-row w-full h-full fixed border-t border-gray-200">
          <div className="flex flex-col w-full md:w-1/3 h-screen md:border-r md:border-gray-200">
            <div className="flex flex-col w-full h-auto px-4 md:px-6 lg:px-8 xl:px-12 border-b border-gray-200">
              <h1 className="text-2xl font-semibold text-left px-6 md:px-0 py-6">
                Chat
              </h1>
            </div>

            <div className="flex md:hidden flex-col w-full h-auto px-6  lg:px-8 xl:px-12 pb-12 overflow-scroll">
              {chatUsers.map((chatUser) => {
                return (
                  <div
                    className="flex w-auto h-auto"
                    key={chatUser}
                    onClick={() => toggleChatSlideOver()}
                  >
                    <ChatCard
                      activeChat={activeChat}
                      setActiveChat={setActiveChat}
                      user={chatUser}
                    />
                  </div>
                );
              })}
              {/*  <BreakpointsHelper /> */}
            </div>
            <div className="hidden md:flex flex-col w-full h-auto px-6  lg:px-8 xl:px-12 pb-12 overflow-scroll">
              {chatUsers.map((chatUser) => {
                return (
                  <div className="flex w-auto h-auto" key={chatUser}>
                    <ChatCard
                      activeChat={activeChat}
                      setActiveChat={setActiveChat}
                      user={chatUser}
                    />
                  </div>
                );
              })}
              {/*  <BreakpointsHelper /> */}
            </div>
          </div>
          <div className="hidden md:flex flex-col w-full md:w-2/3 h-full relative z-10">
            <ChatBoard
              activeChat={activeChat}
              setActiveChat={setActiveChat}
              chatMessages={chatMessages}
            />
          </div>
        </div>
      </div>
    );
  }
};
export default ChatPage;
