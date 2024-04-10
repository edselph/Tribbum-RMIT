"use client";
const InputField = ({
  id,
  name,
  type,
  placeholder,
  inputValue,
  onChange,
  required,
}) => {
  return (
    <>
      <input
        id={id}
        name={name}
        type={type}
        value={inputValue}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        className={`flex flex-col 
        w-full md:w-80 h-10 px-4 py-1  
        text-base text-primary-500 font-system 
        border-[1px] border-gray-300 
        placeholder:text-primary-200
        placeholder:text-base placeholder:text-2xl 
        placeholder:font-light placeholder:font-system
        focus:outline-none focus:ring-2 focus:ring-secondary-500/50
        rounded-[5px]
        `}
      />
    </>
  );
};

export default InputField;
