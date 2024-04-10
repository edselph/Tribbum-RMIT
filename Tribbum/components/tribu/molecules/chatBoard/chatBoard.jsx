"use client";

import ChatCard from "../../elements/chatCard/chatCard";
import SendIcon from "@/public/assets/icons/send.svg";

const ChatBoard = ({ activeChat, setActiveChat, chatMessages }) => {
  return (
    <div className="flex flex-col w-full h-full relative">
      <div className="flex fixed flex-row w-full md:w-2/3 h-20 py-4 px-6 border-b border-gray-200 items-center bg-white z-50">
        <ChatCard
          activeChat={activeChat}
          setActiveChat={setActiveChat}
          user={activeChat}
        />
      </div>
      <div className="flex flex-col w-full h-full px-4 pb-48 pt-24 gap-6 overflow-scroll">
        {chatMessages
          ?.sort((a, b) => (a.date > b.date ? 1 : -1))
          .map((message) => {
            return (
              <div className="flex w-full h-auto " key={message.id}>
                <div
                  className={`flex flex-row w-full h-auto ${
                    message.chatUser === "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={`flex flex-col w-auto max-w-[80%] h-auto py-2 px-4 rounded-2xl ${
                      message.chatUser === "user"
                        ? "bg-tertiary-400/20"
                        : "bg-primary-200/20"
                    }`}
                  >
                    <span className="flex text-primary-500 text-md">
                      {message.message}
                    </span>
                    <div className="flex w-full h-auto mt-2 justify-end">
                      <span className="flex text-xs text-gray-400">
                        {message.date.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div className="flex fixed bottom-0 flex-row w-full md:w-2/3 h-auto py-4 px-4 border-t border-gray-200 bg-white items-center z-50">
        <div className="flex w-full h-auto items-center justify-center relative">
          <input
            placeholder="Escribe tu mensaje"
            className="flex flex-row w-full h-14 py-2 pl-4 text-lg text-primary-500 font-normal bg-white rounded-2xl border border-tertiary-500 placeholder:text-base placeholder:font-thin placeholder:text-base placeholder:text-primary-500 focus:outline-none "
          />
          <div className="flex absolute right-0 top-4 px-4">
            <SendIcon className="flex text-primary-500 fill-current active:scale-90 hover:text-tertiary-500 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChatBoard;
