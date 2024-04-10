/* eslint-disable @next/next/no-img-element */
import UserSmall from "@/public/assets/icons/user_small.svg";
import Link from "next/link";

const SharingSectionWebApp = () => {
  return (
    <div className="flex flex-col w-full h-auto gap-8">
      <div className="flex flex-col md:flex-row w-full h-auto gap-8">
        <div className="flex flex-row w-full md:w-1/2 h-[155px] ">
          <Link
            href="/tribu/con-quien-compartir/personas-sin-hijos"
            className="flex flex-row w-full h-full bg-[#25D59B]/40 rounded-[5px] justify-between active:scale-95 cursor-pointer  active:scale-95 cursor-pointer"
          >
            <div className="flex flex-col w-1/2 h-auto justify-center pl-6">
              <span className="flex text-[15px] text-primary-500 font-medium">
                Personas sin hijos
              </span>
              <span className="flex text-[11px] text-primary-500 font-medium mt-1">
                Comparte piso con
                <br />
                personas como tú.
              </span>
              <div className="flex flex-row w-[80px] h-6 justify-center items-center mt-3 bg-white rounded-full">
                <div className="flex w-3 h-3 mr-2 justify-center items-center">
                  <UserSmall className="flex w-full h-full text-primary-500 fill-current" />
                </div>
                <span className="flex text-sm text-primary-500 font-medium ">
                  2,4K
                </span>
              </div>
            </div>
            <div className="flex w-1/2 h-auto justify-center items-center p-4">
              <img
                src="/assets/images/people_without_child.svg"
                alt="People without child"
                className="w-full min-w-[131px] h-full "
              />
            </div>
          </Link>
        </div>
        <div className="flex flex-row w-full md:w-1/2 h-[155px]">
          <Link
            href="/tribu/con-quien-compartir/personas-con-hijos"
            className="flex flex-row w-full h-full bg-[#DAF2FF] rounded-[5px] justify-between active:scale-95 cursor-pointer  "
          >
            <div className="flex flex-col w-1/2 h-auto justify-center pl-6">
              <span className="flex text-[15px] text-primary-500 font-medium leading-snug">
                Padres o madres con hijos que viven con ellos
              </span>
              <span className="flex text-[11px] text-primary-500 font-medium mt-1">
                Residencia habitual
                <br />
                de los hijos.
              </span>
              <div className="flex flex-row w-[80px] h-6 justify-center items-center mt-3 bg-white rounded-full">
                <div className="flex w-3 h-3 mr-2 justify-center items-center">
                  <UserSmall className="flex w-full h-full text-primary-500 fill-current" />
                </div>
                <span className="flex text-sm text-primary-500 font-medium ">
                  2,4K
                </span>
              </div>
            </div>
            <div className="flex w-1/2 h-auto justify-center items-center p-4">
              <img
                src="/assets/images/parent_with_child.svg"
                alt="People without child"
                className="w-full min-w-[131px] h-full "
              />
            </div>
          </Link>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full h-auto gap-8">
        <div className="flex flex-row w-full md:w-1/2 h-[155px]">
          <Link
            href="/tribu/con-quien-compartir/personas-con-hijos-periodicamente"
            className="flex flex-col md:flex-row w-full h-auto gap-8"
          >
            <div className="flex flex-row w-full h-full bg-[#FFF5DB]/40 rounded-[5px] justify-between active:scale-95 cursor-pointer  ">
              <div className="flex flex-col w-1/2 min-w-[200px] h-auto justify-center pl-6">
                <span className="flex text-[15px] text-primary-500 font-medium">
                  Padre o madres con hijos que viven periodicamente con ellos
                </span>
                <span className="flex text-[11px] text-primary-500 font-medium mt-1">
                  Custodia compartida, visitas…
                </span>
                <div className="flex flex-row w-[80px] h-6 justify-center items-center mt-3 bg-white rounded-full">
                  <div className="flex w-3 h-3 mr-2 justify-center items-center">
                    <UserSmall className="flex w-full h-full text-primary-500 fill-current" />
                  </div>
                  <span className="flex text-sm text-primary-500 font-medium ">
                    2,4K
                  </span>
                </div>
              </div>
              <div className="flex w-1/2 h-auto justify-center items-center p-4">
                <img
                  src="/assets/images/parent_with_intermitant_child.svg"
                  alt="People without child"
                  className="w-full  h-full "
                />
              </div>
            </div>
          </Link>
        </div>
        <div className="flex flex-row w-full md:w-1/2 h-[155px]">
          <Link
            href="/tribu/con-quien-compartir/personas-de-mas-de-65"
            className="flex flex-row w-full h-full bg-[#baa3f9]/50 rounded-[5px] justify-between active:scale-95 cursor-pointer  "
          >
            <div className="flex flex-col w-1/2 h-auto justify-center pl-6">
              <span className="flex text-[15px] text-primary-500 font-medium leading-snug">
                + 65 años
              </span>
              <span className="flex text-[11px] text-primary-500 font-medium mt-1">
                Companía, cuidados...
              </span>
              <div className="flex flex-row w-[80px] h-6 justify-center items-center mt-3 bg-white rounded-full">
                <div className="flex w-3 h-3 mr-2 justify-center items-center">
                  <UserSmall className="flex w-full h-full text-primary-500 fill-current" />
                </div>
                <span className="flex text-sm text-primary-500 font-medium ">
                  2,4K
                </span>
              </div>
            </div>
            <div className="flex w-1/2 h-auto justify-center items-center p-1 md:p-3">
              <img
                src="/assets/images/elder_people.svg"
                alt="People without child"
                className="w-full h-full "
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default SharingSectionWebApp;
