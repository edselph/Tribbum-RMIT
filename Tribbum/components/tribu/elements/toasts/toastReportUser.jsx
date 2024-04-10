"use client";
const ToastReportUser = ({
  isToastReportUserOpen,
  setIsToastReportUserOpen,
}) => {
  return (
    <div className="flex flex-col w-full h-screen items-center z-50">
      <div className="flex flex-col w-2/3 h-auto bg-red-500 rounded-xl justify-center items-center">
        <div className="flex flex-col w-full h-auto px-4 py-8 justify-center items-center ">
          <span className="text-white text-lg font-bold">¡Atención!</span>
          <p className="text-white text-lg font-medium mt-4">
            Vas a reportar algún problema con este usuario al equipo de tribbum.
          </p>
          <span className="text-white text-lg font-medium">
            ¿Deseas continuar?
          </span>
          <div className="flex flex-row w-full h-auto mt-8 justify-center gap-4">
            <button
              className={`
                flex w-24 h-auto px-4 py-2 
                justify-center items-center 
                rounded-full bg-red-500 border border-white text-white
                hover:bg-white hover:border hover:border-white hover:text-primary-500 
                cursor-pointer active:scale-95`}
            >
              Si
            </button>
            <button
              className={`
                flex w-24 h-auto px-4 py-2 
                justify-center items-center 
                rounded-full bg-white 
                hover:bg-red-500 hover:border hover:border-white hover:text-white 
                cursor-pointer active:scale-95`}
              onClick={() => setIsToastReportUserOpen(!isToastReportUserOpen)}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ToastReportUser;
