"use client";

import Link from "next/link";
import { useState } from "react";

const HeaderDropdown = ({
  openLogOutPopup,
  setOpenLogOutPopup,
  setOpenDropdown,
}) => {
  const style =
    "flex w-auto h-auto px-4 py-2 text-sm font-medium text-primary-500 whitespace-nowrap text-right hover:text-tertiary-500 active:cale-95 cursor-pointer";

  const handleLogOut = () => {
    setOpenLogOutPopup(true);
    setOpenDropdown(false);
  };
  return (
    <div className="flex flex-col w-auto h-auto absolute top-10 right-0 py-4 bg-white rounded-md shadow-lg items-end">
      <Link href="/tribu/editar-perfile">
        <span className={`${style}`}>Editar mi perfil</span>
      </Link>
      <Link href="/tribu/reset-email">
        <span className={`${style}`}>Cambiar email</span>
      </Link>
      <Link href="/tribu/reset-password">
        <span className={`${style}`}>Cambiar contraseña</span>
      </Link>
      <span className={`${style}`}>Compartir la App con un amigo</span>
      <a href="mailto:tribbum@tribbum.com?Subject=Soporte%20dudas%20o%20contacto&body=Hola%20equipo%20Tribbum,%20me%20puede%20ayudar%20con:">
        <span className={`${style}`}>Dudas / contacto</span>
      </a>
      <Link href="/web/aviso-legal" target="_blank">
        <span className={`${style}`}>Términos y condiciones</span>
      </Link>
      <Link href="/web">
        <span className={`${style}`}>Ir a la web de tribbum</span>
      </Link>
      <Link href="/tribu/editar-perfile/#eliminar-cuenta">
        <span className={`${style}`}>Eliminar cuenta</span>
      </Link>

      <span className={`${style}`} onClick={() => handleLogOut()}>
        Cerrar sesión
      </span>
    </div>
  );
};
export default HeaderDropdown;
