"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import {
  signUpUserWithEmailAndPassword,
  getCurrentUser,
} from "@/firebase/auth.js";
import Link from "next/link";

function SignUpPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleForm = async () => {
    /*  if (password !== confirmPassword) {
    } else {
      await signUpUserWithEmailAndPassword(email, password);
      router.push("/");
    } */
    // remove comments on input prop required
    router.push("/tribu/on-boarding"); // remove when uncommented above
  };

  useEffect(() => {
    getCurrentUser().then((user) => {
      if (user) {
        router.replace("/tribu");
      }
    });
  }, [router]);

  return (
    <div className="flex flex-col w-full max-w-[500px] h-screen container mx-auto px-4 items-center justify-center">
      <h1 className="flex flex-col w-auto h-auto text-2xl text-tertiary-500 p-5 font-semibold text-center">
        Regístrate para encontrar
        <br />a tu nueva tribu
      </h1>
      <div className="flex flex-col w-full h-auto mt-8 items-start justify-center gap-2">
        <form
          className="flex flex-col w-full h-auto gap-2"
          onSubmit={handleForm}
        >
          <label
            htmlFor="email"
            className="flex flex-row w-full h-auto justify-start items-center"
          >
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
            className="flex flex-row w-full h-auto mt-4 justify-start items-center"
          >
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
            autoComplete="off"
          />
          <label
            htmlFor="confirmpassword"
            className="flex flex-row w-full h-auto mt-4 justify-start items-center"
          >
            <span className="flex text-primary-200 text-center text-md">
              Confirma la contraseña
            </span>
          </label>
          <input
            className="flex w-full h-auto p-2 text-lg border-[1px] border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-500/50"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            type="password"
            name="confirmpassword"
            id="confirmpassword"
            autoComplete="off"
          />
          <button
            className="flex flex-col w-full h-auto py-2 px-6 mt-8 bg-tertiary-500 rounded-full items-center justify-center hover:bg-secondary-500 active:scale-95"
            type="button"
            onClick={() => {
              handleForm();
            }}
          >
            <span className="text-white text-center">Registrarse</span>
          </button>
        </form>
        <div className="flex flex-row w-full h-auto mt-8 justify-center items-center gap-4">
          <span className="flex text-primary-500 text-right text-sm">
            ¿Ya tienes una cuenta?
          </span>
          <Link href="/web/sign-in">
            <span className="flex text-tertiary-500 italic text-right text-sm cursor-pointer active:scale-95">
              Inicia sesión
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default SignUpPage;
