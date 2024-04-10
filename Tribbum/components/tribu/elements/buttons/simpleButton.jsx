"use client";

// type can be "filled" or "outlined"
// text is the text to be displayed in the button
// handleAction is the function to be executed when the button is clicked

const SimpleButton = ({ text, type, handleAction }) => {
  return (
    <div
      className={`
            flex 
            w-auto h-auto py-2 px-4 
            border-[0.25px] border-tertiary-500 rounded-lg 
            ${type === "outlined" ? "bg-white" : "bg-tertiary-500"}
            active:scale-95 cursor-pointer
        `}
      onClick={() => handleAction()}
    >
      <span
        className={`flex text-center text-lg font-medium ${
          type === "outlined" ? "text-primary-500" : "text-white"
        } `}
      >
        {text}
      </span>
    </div>
  );
};
export default SimpleButton;
