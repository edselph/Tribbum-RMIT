"use client";

const ChatCard = ({ activeChat, setActiveChat, user }) => {
  return (
    <div
      className="flex flex-row w-full h-auto items-center cursor-pointer py-4"
      onClick={() => setActiveChat(user)}
    >
      <div
        className={`
      flex w-12 h-12 shrink-0 
      bg-primary-200/10 rounded-full 
      justify-center items-center
      ${activeChat === user && "border border-tertiary-500"}`}
      >
        <span className="text-primary-500">IMG</span>
      </div>
      <div className="flex flex-col w-auto h-auto ml-4 gap-1 active:scale-95">
        <span
          className={`text-sm ${
            activeChat === user
              ? "font-bold text-primary-500"
              : "font-normal text-primary-500/70"
          }`}
        >
          User {user} fullname
        </span>
        <span className="text-xs text-primary-500/50">
          Último mensaje el xx/xx/xx
        </span>
      </div>
    </div>
  );
};
export default ChatCard;
