const ToggleInput = ({ value, setValue }) => {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value={value}
        className="sr-only peer"
        checked={value === true ? "checked" : ""}
        onChange={() => setValue(!value)}
      />
      <div
        className={`
          w-11 h-6 
          bg-gray-200 rounded-full
          peer peer-focus:outline-none peer-focus:ring-0 
          peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-tertiary-500`}
      ></div>
    </label>
  );
};
export default ToggleInput;
