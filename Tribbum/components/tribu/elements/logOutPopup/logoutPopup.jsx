"use client";

import SimpleButton from "../buttons/simpleButton";

const LogoutPopup = ({ setOpenLogOutPopup }) => {
  return (
    <div className="flex w-full h-screen absolute top-20 left-0 px-4 bg-white/80 justify-center items-center">
      <div className="flex flex-col w-[500px] h-[200px] bg-white rounded-md shadow-lg border-[0.25px] border-tertiary-500 items-center justify-center">
        <p className="flex text-center text-lg font-medium text-primary-500">
          Estás a punto de cerrar tu sesión.
        </p>
        <div className="flex w-full h-auto mt-8 justify-center items-center gap-4">
          <SimpleButton
            text="Cerrar sesión"
            type="outlined"
            handleAction={() => console.log("close session")}
          />
          <SimpleButton
            text="Cancelar"
            type="filled"
            handleAction={() => setOpenLogOutPopup(false)}
          />
        </div>
      </div>
    </div>
  );
};
export default LogoutPopup;
