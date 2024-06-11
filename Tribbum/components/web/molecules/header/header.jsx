/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import Navigation from "./navigation";
import { getCurrentUser, signOutUser } from "@/firebase/auth";
import MenuBurger from "@/public/assets/icons/menuIcon.svg";

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const ref = useRef();
  const pathname = usePathname();
  const [user, setUser] = useState(null); // to null
  const [activePathname, setActivePathname] = useState("/web/valores");

  useEffect(() => {
    getCurrentUser().then((user) => {
      setUser(user?.resultData?.data);
      //console.log(user);
    });
  }, []);

  useEffect(() => {
    setActivePathname(pathname);
  }, [pathname]);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (openDropdown && ref.current && !ref.current.contains(e.target)) {
        setOpenDropdown(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    const handleScroll = (e) => {
      window.addEventListener("scroll", () => {
        setOpenDropdown(false);
      });
    };
    handleScroll();

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [openDropdown]);

  return (
    <div className="flex flex-row w-full h-[72px] py-2 px-8 font-system z-50">
      <div className="flex lg:hidden w-full h-full items-center justify-between">
        <div className="flex w-auto h-auto items-center ">
          <Link
            href="/web"
            className="flex w-[20px[ md:w-[197px] h-auto md:h-14 active:scale-95"
          >
            <img
              src="/assets/images/tribbum-log.png"
              alt="tribbum-logo"
              className="flex w-[50px[ md:w-[197px] h-10 md:h-14 "
            />
          </Link>
        </div>
        <div className="flex w-auto h-auto items-center gap-4">
          <div className="flex flex-row gap-4 ml-4">
            <Navigation />
          </div>
          <div
            className="flex w-auto h-auto justify-center items-center relative"
            ref={ref}
          >
            <MenuBurger
              className="w-8 h-8 text-primary-500 fill-current active:scale-95 cursor-pointer"
              onClick={() => setOpenDropdown(!openDropdown)}
            />
            {openDropdown && (
              <div className="flex absolute top-10 right-0 w-60 h-auto py-8 bg-secondary-100 rounded-md shadow-md z-50">
                <div className="flex flex-col w-full h-full ">
                  <div className="flex flex-col w-auto h-auto px-4 justify-start gap-8">
                    <Link href="/web">
                      <span
                        className={`flex text-base font-semibold hover:underline active:scale-95 ${
                          activePathname === "/web"
                            ? "underline text-primary-500"
                            : "text-primary-500"
                        }}`}
                      >
                        ¿Qué hacemos?
                      </span>
                    </Link>
                    <Link href="/web/valores">
                      <span
                        className={`flex text-base font-semibold hover:underline active:scale-95 ${
                          activePathname === "/web/valores"
                            ? "underline text-primary-500"
                            : "text-primary-500"
                        }}`}
                      >
                        Valores
                      </span>
                    </Link>
                    <Link href="/web/para-quien">
                      <span
                        className={`flex text-base font-semibold hover:underline active:scale-95 ${
                          activePathname === "/web/para-quien"
                            ? "underline text-primary-500"
                            : "text-primary-500"
                        }`}
                      >
                        ¿A quién va dirigido?
                      </span>
                    </Link>
                    <Link href="/web/contacto">
                      <span
                        className={`flex text-base font-semibold hover:underline active:scale-95 ${
                          activePathname === "/web/contacto"
                            ? "underline text-primary-500"
                            : "text-primary-500"
                        }}`}
                      >
                        Contacto
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div
        className={`
          hidden lg:flex flex-row 
          w-full h-full
          ${
            pathname === "/web/sign-in" || pathname === "/web/sign-up"
              ? "justify-between"
              : "justify-end"
          } 
          items-center gap-2
          `}
      >
        <div
          className={`
            ${
              pathname === "/web/sign-in" || pathname === "/web/sign-up"
                ? "flex"
                : "hidden"
            }
            w-auto h-auto 
            items-center 
        `}
        >
          <Link
            href="/web"
            className="flex w-[20px[ md:w-[197px] h-auto md:h-14 active:scale-95"
          >
            <img
              src="/assets/images/tribbum-log.png"
              alt="tribbum-logo"
              className="flex w-[50px[ md:w-[197px] h-10 md:h-14 "
            />
          </Link>
        </div>
        <div className="flex w-auto h-auto items-center gap-2">
          <div className="flex flex-row w-auto h-auto items-center gap-6">
            <Link href="/">
              <span
                className={`flex text-base font-semibold hover:underline active:scale-95 ${
                  activePathname === "/web"
                    ? "underline text-primary-500"
                    : "text-primary-500"
                }}`}
              >
                ¿Qué hacemos?
              </span>
            </Link>
            <Link href="/web/valores">
              <span
                className={`flex text-base font-semibold hover:underline active:scale-95 ${
                  activePathname === "/web/valores"
                    ? "underline text-primary-500"
                    : "text-primary-500"
                }}`}
              >
                Valores
              </span>
            </Link>
            <Link href="/web/para-quien">
              <span
                className={`flex text-base font-semibold hover:underline active:scale-95 ${
                  activePathname === "/web/para-quien"
                    ? "underline text-primary-500"
                    : "text-primary-500"
                }`}
              >
                ¿A quién va dirigido?
              </span>
            </Link>
            <Link href="/web/contacto">
              <span
                className={`flex text-base font-semibold hover:underline active:scale-95 ${
                  activePathname === "/web/contacto"
                    ? "underline text-primary-500"
                    : "text-primary-500"
                }}`}
              >
                Contacto
              </span>
            </Link>
          </div>
          <div className="hidden lg:flex flex-row gap-4 ml-4">
            <div className="flex flex-row w-full h-auto items-center gap-4">
              {!user && (
                <>
                  <Link
                    className="flex w-auto h-auto py-1 px-4 border border-black cursor-pointer rounded-md hover:bg-secondary-500 hover:border-secondary-500 hover:text-white active:scale-95"
                    href="/web/sign-up"
                  >
                    Registrarse
                  </Link>
                  <Link
                    className="flex w-auto h-auto py-1 px-4 border border-black cursor-pointer rounded-md hover:bg-secondary-500 hover:border-secondary-500 hover:text-white active:scale-95"
                    href="/web/sign-in"
                  >
                    Entrar
                  </Link>
                </>
              )}
              {user && (
                <Link
                  className="flex w-auto h-auto py-1 px-4 border border-black cursor-pointer rounded-md hover:bg-secondary-500 hover:border-secondary-500 hover:text-white active:scale-95"
                  href="/tribu"
                >
                  Entrar
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
