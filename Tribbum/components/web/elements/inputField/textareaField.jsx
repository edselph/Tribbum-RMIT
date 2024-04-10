"use client";
const TextAreaField = ({
  id,
  name,
  placeholder,
  inputValue,
  onChange,
  required,
}) => {
  return (
    <>
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        value={inputValue}
        rows="5"
        onChange={onChange}
        required={required}
        className={`flex flex-col 
        w-full max-w-[730px] p-4 my-2 
        text-base text-primary-500 font-system
        border-[1px] border-gray-300 
        placeholder:text-primary-200
        placeholder:text-base placeholder:text-2xl 
        placeholder:font-light placeholder:font-system
        focus:outline-none focus:ring-2 focus:ring-secondary-500/50
        rounded-[5px]`}
      />
    </>
  );
};

export default TextAreaField;
