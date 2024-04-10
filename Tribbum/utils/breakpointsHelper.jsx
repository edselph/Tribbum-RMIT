const BreakpointsHelper = () => {
  return (
    <div className="flex w-full h-auto justify-end px-12 mt-4 ">
      <div className="flex md:hidden text-red-500 text-xl border border-secondary-500 px-4 bg-secondary-500 rounded-lg">
        SM
      </div>
      <div className="hidden md:flex lg:hidden text-red-500 text-xl border border-secondary-500 px-4 bg-secondary-500 rounded-lg">
        MD
      </div>
      <div className="hidden lg:flex xl:hidden text-red-500 text-xl border border-secondary-500 px-4 bg-secondary-500 rounded-lg">
        LG
      </div>
      <div className="hidden xl:flex text-red-500 text-xl border border-secondary-500 px-4 bg-secondary-500 rounded-lg">
        XL
      </div>
    </div>
  );
};

export default BreakpointsHelper;
