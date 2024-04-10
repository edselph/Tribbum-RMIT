"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signOutUser } from "@/firebase/auth";

const ResetPasswordPage = () => {
  const [endEditing, setEndEditing] = useState(false);
  const router = useRouter();

  const handleRedirrect = () => {
    setEndEditing(false);
    signOutUser();
    router.replace("/web/sign-in");
  };

  return (
    <div className="flex flex-col w-full h-auto pt-12 md:pt-20 px-4 items-center relative z-10">
      {endEditing && (
        <div className="flex flex-col absolute top-0 left-0 w-full h-full px-4 bg-white/80 mt-20 items-center z-50">
          <div className="flex flex-col w-full md:w-1/2 h-[400px] px-4 bg-tertiary-100 rounded-xl justify-center items-center">
            <p className="flex text-primary-500 text-lg font-normal text-center">
              Tu datos se han guardado exitosamente, <br /> Te redireccionamos a
              la página de login.
            </p>
            <div className="flex flex-col md:flex-row w-full max-w-[500px] h-auto mt-12 justify-end justify-end">
              <button
                className="flex w-auto h-auto mt-8 md:mt-0 py-2 px-4 justify-center items-center bg-tertiary-500 hover:bg-secondary-500 rounded-full cursor-pointer active:scale-95"
                onClick={() => handleRedirrect()}
              >
                <span className="flex text-white font-normal text-lg">
                  Continuar
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col w-full max-w-[1140px] h-auto px-4 md:px-8 lg:px-8 xl:px-0 items-center">
        <div className="flex w-full h-auto mt-8 justify-center ">
          <h1 className="hidden md:flex text-2xl font-light text-primary-500 text-center ">
            Cambiar de contraseña
          </h1>

          <h1 className="flex md:hidden px-6 text-xl font-light text-primary-500 text-center ">
            Cambiar de contraseña
          </h1>
        </div>
      </div>
      <div className="flex flex-col w-full max-w-[760px] h-auto mt-8 mb-12 py-8 px-4 bg-tertiary-100 shadow-xl rounded-3xl border border-gray-200 ">
        <form className="flex flex-col w-full h-auto items-center">
          <div className="flex flex-col w-full max-w-[500px] h-auto mt-4 items-start">
            <span className="flex text-base text-primary-500 font-medium text-left">
              Introduce tu contraseña actual
            </span>
            <div className="flex flex-row w-full h-auto mt-4 items-center">
              <input
                type="text"
                className={`
              flex flex-row 
              w-full h-12
              py-2 px-4
              text-lg italic text-primary-500 font-normal
              bg-white rounded-lg
              border border-gray-300
              focus:outline-none focus:ring-2 focus:ring-secondary-500/50
      `}
              />
            </div>
          </div>
          <div className="flex flex-col w-full max-w-[500px] h-auto mt-16 items-start">
            <span className="flex text-base text-primary-500 font-medium text-left">
              Introduce tu nueva contraseña
            </span>
            <div className="flex flex-row w-full h-auto mt-4 items-center">
              <input
                type="password"
                placeholder="Nueva contraseña"
                className={`
              flex flex-row 
              w-full h-12
              py-2 px-4
              text-lg italic text-primary-500 font-normal
              placeholder:text-base
              bg-white rounded-lg
              border border-gray-300
              focus:outline-none focus:ring-2 focus:ring-secondary-500/50
      `}
              />
            </div>
          </div>
          <div className="flex flex-col w-full max-w-[500px] h-auto mt-4 items-start">
            <div className="flex flex-row w-full h-auto mt-4 items-center">
              <input
                type="password"
                placeholder="Confirma tu nueva contraseña"
                className={`
              flex flex-row 
              w-full h-12
              py-2 px-4
              text-lg italic text-primary-500 font-normal
              placeholder:text-base
              bg-white rounded-lg
              border border-gray-300
              focus:outline-none focus:ring-2 focus:ring-secondary-500/50
      `}
              />
            </div>
          </div>
          <div className="flex flex-row w-full max-w-[500px] h-auto mt-12 justify-end">
            <div
              className="flex w-auto h-auto py-2 px-4 bg-tertiary-500 hover:bg-secondary-500 rounded-full cursor-pointer active:scale-95"
              onClick={() => {
                setEndEditing(true);
              }}
            >
              <span className="flex text-white font-normal text-lg">
                Guardar
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ResetPasswordPage;
