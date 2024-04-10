"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { getCurrentUser, signOutUser } from "@/firebase/auth";

function Navigation() {
  const [user, setUser] = useState(null);
  const [signInDropdownIsOpen, setSignInDropdownIsOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    getCurrentUser().then((user) => {
      setUser(user);
      //console.log(user);
    });
  }, []);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (
        signInDropdownIsOpen &&
        ref.current &&
        !ref.current.contains(e.target)
      ) {
        setSignInDropdownIsOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    const handleScroll = (e) => {
      window.addEventListener("scroll", () => {
        setSignInDropdownIsOpen(false);
      });
    };
    handleScroll();

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [signInDropdownIsOpen]);

  if (user) {
    return (
      <div className="flex flex-row w-full h-auto ">
        <button
          className="flex w-auto h-auto py-1 px-4 border border-black cursor-pointer rounded-md hover:bg-secondary-500 hover:border-secondary-500 hover:text-white active:scale-95"
          onClick={async () => {
            await signOutUser();
            window.location.reload();
          }}
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <div
      className="flex flex-row w-full h-auto items-center gap-4 relative"
      ref={ref}
    >
      <Link
        className="hidden md:flex w-auto h-auto py-1 px-4 border border-black cursor-pointer rounded-md hover:bg-secondary-500 hover:border-secondary-500 hover:text-white active:scale-95"
        href="/web/sign-up"
      >
        Registrarse
      </Link>
      <Link
        href="/web/sign-in"
        className="hidden md:flex w-auto h-auto py-1 px-4 border border-black cursor-pointer rounded-md hover:bg-secondary-500 hover:border-secondary-500 hover:text-white active:scale-95 "
      >
        Entrar
      </Link>
      <div
        className="flex md:hidden w-auto h-auto py-1 px-4 border border-black cursor-pointer rounded-md hover:bg-secondary-500 hover:border-secondary-500 hover:text-white active:scale-95 "
        onClick={() => setSignInDropdownIsOpen(!signInDropdownIsOpen)}
      >
        Entrar
      </div>
      {signInDropdownIsOpen && (
        <div className="absolute top-10 right-0 flex flex-col w-auto h-auto py-2 px-4 bg-white border border-gray-200 rounded-lg shadow-sm gap-2 items-end ">
          <Link
            href="/web/sign-in"
            className="text-primary-500 text-md font-medium hover:text-secondary-500 active:scale-95 cursor-pointer whitespace-nowrap"
            onClick={() => setSignInDropdownIsOpen(false)}
          >
            Iniciar sesión
          </Link>
          <Link
            href="/web/sign-up"
            className="text-primary-500 text-md font-medium hover:text-secondary-500 active:scale-95 cursor-pointer whitespace-nowrap"
            onClick={() => setSignInDropdownIsOpen(false)}
          >
            Registrarse
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navigation;
