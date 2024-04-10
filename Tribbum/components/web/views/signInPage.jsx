"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import {
  signInUserWithEmailAndPassword,
  getCurrentUser
} from "@/firebase/auth";
import Link from "next/link";
import { set } from "date-fns";

function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [resetpasswordPopup, setResetpasswordPopup] = useState(false);
  const [recoveryEmail, setRecoveryEmail] = useState("");

  const handleForm = async () => {
    console.log("handleForm");
    const loginStatus = await signInUserWithEmailAndPassword(email, password);
    if (!loginStatus.error) {
      router.push("/tribu");
    } else {
      alert("error login");
    }
  };

  useEffect(() => {
    // getCurrentUser().then((user) => {
    //   if (user) {
    //     router.replace("/");
    //   }
    // });
  }, [router]);

  const handleResetpassword = async () => {
    console.log("reset password");
    setResetpasswordPopup(false);
  };
  return (
    <div className="flex flex-col w-full max-w-[500px] h-screen container mx-auto px-4 items-center justify-center relative">
      {resetpasswordPopup && (
        <div className="flex absolute top-0 left-0 w-full h-screen bg-white/80 justify-center items-center">
          <div className="flex flex-col w-full h-auto py-3 px-6 border border-tertiary-500 rounded-lg justify-center items-center">
            <span className="flex text-primary-500 text-center text-md">
              Entra tu email y en unos minutos
            </span>
            <span className="flex text-primary-500 text-center text-md">
              recibirás un correo con las instrucciones
            </span>
            <span className="flex text-primary-500 text-center text-md">
              para recuperar tu contraseña.
            </span>
            <input
              className="flex w-full h-auto p-2 mt-4 text-lg border-[1px] border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-500/50"
              onChange={(e) => setRecoveryEmail(e.target.value)}
              required
              type="email"
              name="recoveryEmail"
              id="recoveryEmail"
              autoComplete="email"
            />
            <div className="flex flex-row w-full h-auto mt-6 justify-center gap-4">
              <button
                className={`
                  flex 
                  w-auto h-auto py-2 px-6 
                  bg-white rounded-full 
                  items-center justify-center 
                  hover:bg-tertiary-500 
                  border border-tertiary-500
                  cursor-pointer active:scale-95`}
                onClick={() => handleResetpassword()}>
                Enviar
              </button>
              <button
                className={`
                  flex 
                  w-auto h-auto py-2 px-6 
                  bg-tertiary-500 rounded-full 
                  items-center justify-center 
                  hover:bg-white 
                  border border-tertiary-500
                  cursor-pointer active:scale-95`}
                onClick={() => setResetpasswordPopup(false)}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
      <h1 className="flex flex-col w-auto h-auto text-2xl text-tertiary-500 p-5 font-semibold">
        ¡Bienvenido de nuevo!
      </h1>
      <div className="flex flex-col w-full h-auto mt-8 items-start justify-center gap-2">
        <form className="flex flex-col w-full h-auto gap-2">
          <label
            htmlFor="email"
            className="flex flex-row w-full h-auto justify-start items-center">
            <span className="flex text-primary-200 text-center text-md">
              Email
            </span>
          </label>
          <input
            className="flex w-full h-auto p-2 text-lg border-[1px] border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-500/50"
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            name="email"
            id="email"
            autoComplete="email"
          />
          <label
            htmlFor="password"
            className="flex flex-row w-full h-auto mt-4 justify-start items-center">
            <span className="flex text-primary-200 text-center text-md">
              Contraseña
            </span>
          </label>
          <input
            className="flex w-full h-auto p-2 text-lg border-[1px] border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-500/50"
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            name="password"
            id="password"
            autoComplete="password"
          />
          <div className="flex flex-row w-full h-auto mt-2 justify-end ">
            <span
              className="flex text-tertiary-500 italic text-right text-sm cursor-pointer active:scale-95"
              onClick={() => setResetpasswordPopup(true)}>
              ¿Has olvidado tu contraseña?
            </span>
          </div>
          <button
            className="flex flex-col w-full h-auto py-2 px-6 mt-8 bg-tertiary-500 rounded-full items-center justify-center hover:bg-secondary-500 active:scale-95"
            type="button"
            onClick={() => {
              handleForm();
            }}>
            <span className="text-white text-center">Entrar</span>
          </button>
        </form>
        <div className="flex flex-row w-full h-auto mt-8 justify-center items-center gap-4">
          <span className="flex text-primary-500 text-right text-sm">
            ¿No tienes cuenta?
          </span>
          <Link href="/web/sign-up">
            <span className="flex text-tertiary-500 italic text-right text-sm cursor-pointer active:scale-95">
              Regístrate
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
