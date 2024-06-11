"use client";
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link";
import { useState, useEffect } from "react";
import { getCurrentUser, signOutUser } from "@/firebase/auth";
import { usePathname } from "next/navigation";

const Footer = () => {
  const [user, setUser] = useState(false); // to null
  const params = usePathname();

  useEffect(() => {
    getCurrentUser().then((user) => {
      setUser(user?.resultData?.data);
      //console.log(user);
    });
  }, []);
  if (params.includes("web")) {
    return (
      <div className="flex w-full h-auto pb-10 font-system bg-[#04091e] justify-center">
        <div className="flex flex-col w-full max-w-[1140px] md:container md:mx-auto xl:max-w-[1140px] h-auto px-4 mt-5 items-center z-40">
          <div className="flex flex-col md:flex-row w-full h-auto md:justify-between items-center md:items-start ">
            <div className="flex flex-col w-auto h-auto items-center md:items-start">
              <Link href="/web/aviso-legal">
                <h5 className="text-white text-[19px] font-bold mb-1 hover:underline active:scale-95">
                  Legal
                </h5>
              </Link>
              <Link href="/web/privacidad">
                <h5 className="text-white text-[19px] font-bold mb-1 hover:underline active:scale-95">
                  Privacidad
                </h5>
              </Link>
              <Link href="/web/contacto">
                <h5 className="text-white text-[19px] font-bold mb-1 hover:underline active:scale-95">
                  FAQ
                </h5>
              </Link>
              <Link href="/web/contacto">
                <h5 className="text-white text-[19px] font-bold hover:underline active:scale-95">
                  Contáctanos
                </h5>
              </Link>
            </div>
            <div className="flex flex-row w-auto h-auto pr-2 mt-12 md:mt-0 gap-3">
              <Link href="https://www.facebook.com/tribbum/" target="_blank">
                <img
                  src="/assets/icons/facebook.png"
                  alt="facebook icon link"
                  className="w-[30px] h-[30px]"
                />
              </Link>
              <Link
                href="https://www.instagram.com/tribbum_app/"
                target="_blank"
              >
                <img
                  src="/assets/icons/instagram.png"
                  alt="facebook icon link"
                  className="w-[30px] h-[30px]"
                />
              </Link>
            </div>
          </div>
          <div className="flex w-full h-auto mt-8 md:mt-12 justify-center">
            <span className="text-white font-bold text-[15px] ">
              Copyright © 2020 Tribbum, Todos los derechos reservados.
            </span>
          </div>
        </div>
      </div>
    );
  }
};
export default Footer;
