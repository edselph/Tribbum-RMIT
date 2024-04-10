const BreakpointsHelper = () => {
  return (
    <div className="flex w-full justify-end px-12 mt-4">
      <div className="flex md:hidden text-white  px-4 bg-gray-500 rounded-lg">
        SM
      </div>
      <div className="hidden md:flex lg:hidden text-white  px-4 bg-gray-500 rounded-lg">
        MD
      </div>
      <div className="hidden lg:flex xl:hidden text-white  px-4 bg-gray-500 rounded-lg">
        LG
      </div>
      <div className="hidden xl:flex text-white px-4 bg-gray-500 rounded-lg">
        XL
      </div>
    </div>
  );
};

export default BreakpointsHelper;
