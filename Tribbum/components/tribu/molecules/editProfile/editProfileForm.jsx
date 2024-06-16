"use client";
import { useEffect, useState } from "react";
import FilterChip from "../../elements/filterChip/filterChip";
import {
  sharingPeople,
  sharingGender,
  houseFeatures,
  peopleDetailsEditProfil,
  civilState,
  profileSkills,
  pastimeDatas,
} from "@/utils/filterDatas.jsx";
import { provinces } from "@/utils/provinceList";
import FileUploadIcon from "@/public/assets/icons/file_upload.svg";
import DragAndDropPerfil from "../../elements/dragAndDropPerfil/dragAndDropPerfil";
import CitiesList from "@/utils/citiesList";
import MultiRangeSlider from "../../elements/multiRangeSlider/multiRangeSlider";
import SkillChip from "../../elements/skillChip/skillChip";
import Checkbox from "../../elements/checkbox/checkbox";
import Link from "next/link";
import { getAuth, updateProfile } from "firebase/auth";
import { getUserData, updateUser } from "@/firebase/entities/users";
import app from "@/firebase/init";

/* eslint-disable @next/next/no-img-element */
const EditProfileForm = ({ tabSlide, setTabSlide }) => {
  const [updateOrCreate, setUpdateOrCreate] = useState(false);
  const [portrait, setPortrait] = useState("");
  const [portraitPlaceholder, setPortraitPlaceholder] = useState(
    "/assets/icons/man.svg"
  );
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [photoURL, setPhotoUrl] = useState("");

  const [rangeMin, setRangeMin] = useState(0);
  const [rangeMax, setRangeMax] = useState(1000);
  const [endEditing, setEndEditing] = useState(false);

  /* const list = CitiesList();
  console.log("list", list); */

  function scrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }
  const auth = getAuth(app);
  useEffect(() => {
    getUserData.then((response) => {
      if (response.result) {
        const user = response.resultData.data;
        setFirstname(user?.name);
        setLastname(user?.surname);
        setAge(user?.age);
        setPortrait(user?.photoURL);
      } else {
        console.log("error", "fetch error.");
      }
    });
  }, []);
  const updateUserInfo = () => {
    updateProfile(auth.currentUser, {
      displayName: firstname + lastname,
      photoURL: photoURL,
    })
      .then(async () => {
        try {
          await updateUser(auth.currentUser.email, {
            photoUrl: photoURL,
            name: (firstname ?? "") + (lastname ?? ""),
          });
        } catch (error) {
          console.log("error", error);
        }

        alert("profile updated!");
      })
      .catch((error) => {
        alert("profile error!");
        console.log("error", error);
      });
  };
  console.log("province", province);
  console.log("city", city);
  return (
    <div className="flex flex-col w-full h-auto ">
      {endEditing && (
        <div className="flex flex-col absolute top-0 left-0 w-full h-full px-4 bg-white/80 mt-20 items-center z-50">
          <div className="flex flex-col w-full md:w-1/2 h-[400px] px-4 bg-tertiary-100 rounded-xl justify-center items-center">
            <p className="flex text-primary-500 text-lg font-normal text-center">
              Tu datos se han guardado exitosamente
            </p>
            <div className="flex flex-col md:flex-row w-full max-w-[500px] h-auto mt-12 justify-between">
              <button
                className="flex w-auto h-auto py-2 px-10 justify-center items-center bg-gray-300 hover:bg-secondary-500 rounded-full cursor-pointer active:scale-95 group"
                onClick={() => setEndEditing(false)}
              >
                <span className="flex text-primary-500 font-normal text-lg group-hover:text-white text-center">
                  Seguir editando
                </span>
              </button>
              <Link
                href="/tribu"
                className="flex w-auto h-auto mt-8 md:mt-0 py-2 px-4 justify-center items-center bg-tertiary-500 hover:bg-secondary-500 rounded-full cursor-pointer active:scale-95"
              >
                <span className="flex text-white font-normal text-lg">
                  Ir a la home
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* SLIDE 1 */}
      {tabSlide === 1 && (
        <div className="flex flex-col w-full max-w-[760px] h-auto ">
          <div className="flex flex-col w-full h-auto items-center">
            <span className="flex text-lg text-primary-500 font-medium">
              Tu foto de perfil
            </span>
            <div className="flex flex-row w-full max-w-[500px] h-auto mt-4">
              <DragAndDropPerfil
                gender={gender}
                portraitPlaceholder={portraitPlaceholder}
                portrait={portrait}
                setPortrait={setPortrait}
              />
            </div>
          </div>
          <div className="flex flex-col w-full h-auto mt-12 items-center">
            <span className="flex text-lg text-primary-500 font-medium">
              Tus datos personales
            </span>
            <span className="text-xs font-medium text-primary-500/50">
              Campos con * requeridos
            </span>
            <form className="flex flex-col w-full h-auto items-center">
              <div className="flex flex-col w-full max-w-[500px] h-auto mt-4 items-center gap-2">
                <label
                  htmlFor="firstname"
                  className="flex flex-row w-full h-auto justify-start items-center"
                >
                  <span className="text-xs font-medium text-primary-500">
                    Nombre*
                  </span>
                </label>
                <input
                  className="flex w-full h-auto p-2 text-lg border-[1px] border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-500/50"
                  onChange={(e) => setFirstname(e.target.value)}
                  required
                  value={firstname}
                  type="text"
                  name="firstname"
                  id="firstname"
                  autoComplete="firstname"
                />
              </div>
              <div className="flex flex-col w-full max-w-[500px] h-auto mt-6 items-center gap-2">
                <label
                  htmlFor="lastname"
                  className="flex flex-row w-full h-auto justify-start items-center"
                >
                  <span className="text-xs font-medium text-primary-500">
                    Apellidos*
                  </span>
                </label>
                <input
                  className="flex w-full h-auto p-2 text-lg border-[1px] border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-500/50"
                  onChange={(e) => setLastname(e.target.value)}
                  required
                  value={lastname}
                  type="text"
                  name="lastname"
                  id="lastname"
                  autoComplete="lastname"
                />
              </div>
              <div className="flex flex-col md:flex-row w-full max-w-[500px] h-auto mt-6 justify-between items-start">
                <div className="flex flex-col w-auto h-auto justify-start ">
                  <label
                    htmlFor="lastname"
                    className="flex flex-row w-full h-auto justify-start "
                  >
                    <span className="text-xs font-medium text-primary-500">
                      Sexo*
                    </span>
                  </label>
                  <div className="flex flex-row  w-full h-auto mt-2 justify-start  gap-4">
                    {sharingGender?.map((data) => {
                      return (
                        <FilterChip
                          text={data.text}
                          icon={data.icon}
                          chipWidth={data.chipWidth}
                          key={data.id}
                          id={data.id}
                          chipType={data.chipType}
                          setChipInput={setGender}
                        />
                      );
                    })}
                  </div>
                </div>
                <div className="flex flex-col w-auto max-w-[500px] h-auto mt-6 md:mt-0 justify-start gap-2">
                  <label
                    htmlFor="age"
                    className="flex flex-row w-full h-auto justify-start "
                  >
                    <span className="text-xs font-medium text-primary-500">
                      Edad*
                    </span>
                  </label>
                  <input
                    className="flex w-[100px] h-auto p-2 text-lg border-[1px] border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-500/50"
                    onChange={(e) => setAge(e.target.value)}
                    required
                    value={age}
                    type="text"
                    name="age"
                    id="age"
                    autoComplete="age"
                  />
                </div>
              </div>
              <div className="flex flex-col w-full max-w-[500px] h-auto mt-6 items-start gap-2">
                <label
                  htmlFor="Province"
                  className="flex flex-row w-full h-auto justify-start items-center"
                >
                  <span className="text-xs font-medium text-primary-500">
                    Provincia
                  </span>
                </label>
                <select
                  className="flex w-full h-auto p-2 text-lg border-[1px] border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-500/50"
                  onChange={(e) => {
                    setProvince(e.target.value);
                  }}
                  required
                  value={province}
                  type="text"
                  name="province"
                  id="province"
                  autoComplete="province"
                >
                  {provinces?.map((province) => {
                    return (
                      <option key={province.id} value={province.province}>
                        {province.name}
                      </option>
                    );
                  })}
                  {/* // options listado provincia */}
                </select>
              </div>
              <div className="flex flex-col w-full max-w-[500px] h-auto mt-6 items-start gap-2">
                <label
                  htmlFor="city"
                  className="flex flex-row w-full h-auto justify-start items-center"
                >
                  <span className="text-xs font-medium text-primary-500">
                    Localidad
                  </span>
                </label>
                <input
                  className="flex w-full h-auto p-2 text-lg border-[1px] border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-500/50"
                  onChange={(e) => setCity(e.target.value)}
                  required
                  value={city}
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="city"
                />
              </div>
              <div className="flex flex-row w-full max-w-[500px] h-auto mt-12 justify-end">
                <div
                  className="flex w-auto h-auto py-2 px-4 bg-tertiary-500 hover:bg-secondary-500 rounded-full cursor-pointer active:scale-95"
                  onClick={() => {
                    setTabSlide(2), scrollToTop();
                  }}
                >
                  <span className="flex text-white font-normal text-lg">
                    Siguiente
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* SLIDE 2 */}
      {tabSlide === 2 && (
        <div className="flex flex-col w-full h-auto ">
          <form className="flex flex-col w-full h-auto items-center">
            <div className="flex flex-col w-full h-auto items-center">
              <span className="flex text-lg text-primary-500 font-medium text-center">
                ¿Cuál es tu situación?
              </span>
            </div>
            <div className="flex flex-row flex-wrap w-full max-w-[500px] h-auto mt-4 px-4md:px-8 justify-center items-center gap-4">
              {sharingPeople?.map((data) => {
                return (
                  <FilterChip
                    text={data.text}
                    icon={data.icon}
                    chipWidth={data.chipWidth}
                    key={data.id}
                    id={data.id}
                    chipType={data.chipType}
                  />
                );
              })}
            </div>
            <div className="flex flex-col w-full h-auto mt-8 items-center">
              <span className="flex text-lg text-primary-500 font-medium text-center">
                Ayuda a otros usuarios a conocerte un poco mejor
              </span>
            </div>
            <div className="flex flex-row flex-wrap w-full h-auto mt-4 justify-center items-center gap-4">
              {peopleDetailsEditProfil?.map((data) => {
                return (
                  <FilterChip
                    text={data.text}
                    icon={data.icon}
                    chipWidth={data.chipWidth}
                    key={data.id}
                    id={data.id}
                    chipType={data.chipType}
                  />
                );
              })}
            </div>
            <div className="flex flex-col w-full h-auto mt-8 items-center">
              <span className="flex text-lg text-primary-500 font-medium text-center">
                Estado civil
              </span>
            </div>
            <div className="flex flex-row flex-wrap w-full h-auto mt-4 justify-center items-center gap-4">
              {civilState?.map((data) => {
                return (
                  <FilterChip
                    text={data.text}
                    icon={data.icon}
                    chipWidth={data.chipWidth}
                    key={data.id}
                    id={data.id}
                    chipType={data.chipType}
                  />
                );
              })}
            </div>
            <div className="flex flex-col w-full h-auto mt-8 items-center">
              <span className="flex text-lg text-primary-500 font-medium text-center">
                Presupuesto para compartir casa
              </span>
            </div>
            <div className="flex flex-row flex-wrap w-full h-auto mt-6 justify-center items-center relative">
              <MultiRangeSlider
                min={0}
                max={1000}
                onChange={({ min, max }) => {
                  setRangeMin(min);
                  setRangeMax(max);
                }}
              />
            </div>
            <div className="flex flex-col w-full h-auto mt-16 items-center">
              <span className="flex text-lg text-primary-500 font-medium text-center">
                ¿Qué tal añadir una pequeña descripción?
              </span>
            </div>
            <div className="flex w-full max-w-[500px] h-auto mt-4">
              <textarea
                className={`
                      flex 
                      w-full h-[200px] p-2 
                      text-lg placeholder:text-gray-300 placeholder:italic placeholder:text-base
                      border-[1px] border-gray-300 rounded-lg
                      focus:outline-none focus:ring-2 focus:ring-secondary-500/50
                      `}
                required
                type="text"
                name="description"
                id="description"
                autoComplete="description"
                placeholder="Madrileña de adopción, asturiana de nacimiento. Con dos preciosos hijos de 13 y 16 años. Soy profesora de secundaria amante de ...."
              />
            </div>
            <div className="flex flex-row w-full max-w-[500px] h-auto mt-12 justify-between">
              <div
                className="flex w-auto h-auto py-2 px-10 bg-gray-300 hover:bg-secondary-500 rounded-full cursor-pointer active:scale-95 group"
                onClick={() => {
                  setTabSlide(1), scrollToTop();
                }}
              >
                <span className="flex text-primary-500 font-normal text-lg group-hover:text-white">
                  Atrás
                </span>
              </div>
              <div
                className="flex w-auto h-auto py-2 px-4 bg-tertiary-500 hover:bg-secondary-500 rounded-full cursor-pointer active:scale-95"
                onClick={() => {
                  setTabSlide(3), scrollToTop();
                }}
              >
                <span className="flex text-white font-normal text-lg">
                  Siguiente
                </span>
              </div>
            </div>
          </form>
        </div>
      )}

      {/* SLIDE 3 */}
      {tabSlide === 3 && (
        <div className="flex flex-col w-full max-w-[760px] h-auto">
          <form className="flex flex-col w-full h-auto items-center ">
            <div className="flex flex-row w-full h-auto items-center justify-center gap-4">
              <div className="flex w-5 h-5 justify-center items-center">
                <img
                  src="/assets/icons/medal.svg"
                  alt="icon detalle perfil"
                  className="flex w-full h-auto object-contain"
                />
              </div>
              <span className="flex text-lg text-primary-500 font-medium text-center">
                Elige las características que más te definen.
              </span>
            </div>
            <div className="flex flex-row flex-wrap w-full max-w-[500px] h-auto mt-4 items-center gap-2">
              {profileSkills
                .sort((a, b) => (a.pastime > b.pastime ? 1 : -1))
                .map((skill) => {
                  return (
                    <SkillChip
                      text={skill.skillName}
                      key={skill.id}
                      id={skill.id}
                    />
                  );
                })}
            </div>
            <div className="flex flex-row w-full h-auto mt-8 items-center justify-center gap-4">
              <div className="flex w-6 h-6 justify-center items-center ">
                <img
                  src="/assets/icons/masks.svg"
                  alt="icon detalle perfil"
                  className="flex w-full h-auto object-contain"
                />
              </div>
              <span className="flex text-lg text-primary-500 font-medium text-center">
                ¿Qué aficiones tienes?
              </span>
            </div>
            <div className="flex flex-row flex-wrap w-full max-w-[500px] h-auto mt-4 items-center gap-2">
              {pastimeDatas
                .sort((a, b) => (a.pastime > b.pastime ? 1 : -1))
                .map((pastime) => {
                  return (
                    <SkillChip
                      text={pastime.pastime}
                      key={pastime.id}
                      id={pastime.id}
                    />
                  );
                })}
            </div>
            <div className="flex flex-row w-full max-w-[500px] h-auto mt-8 items-center gap-4">
              <div className="flex w-10 h-10 justify-center items-center">
                <Checkbox />
              </div>
              <Link
                href="/web/aviso-legal"
                target="_blank"
                className="flex flex-row w-full h-auto justify-start items-center "
              >
                <p className="flex mt-1 text-md text-primary-500 underline hover:text-tertiary-500">
                  Términos y condiciones
                </p>
              </Link>
            </div>
            <div className="flex flex-row w-full max-w-[500px] h-auto mt-2 items-center gap-4">
              <div className="flex w-10 h-10 justify-center items-center">
                <Checkbox />
              </div>
              <Link
                href="/web/privacidad"
                target="_blank"
                className="flex flex-row w-full h-auto justify-start items-center "
              >
                <p className="flex mt-1 text-md text-primary-500 underline hover:text-tertiary-500">
                  Política de privacidad
                </p>
              </Link>
            </div>
            <div className="flex flex-row w-full max-w-[500px] h-auto mt-12 justify-between">
              <div
                className="flex w-auto h-auto py-2 px-10 bg-gray-300 hover:bg-secondary-500 rounded-full cursor-pointer active:scale-95 group"
                onClick={() => {
                  setTabSlide(2), scrollToTop();
                }}
              >
                <span className="flex text-primary-500 font-normal text-lg group-hover:text-white">
                  Atrás
                </span>
              </div>
              <div
                className="flex w-auto h-auto py-2 px-4 bg-tertiary-500 hover:bg-secondary-500 rounded-full cursor-pointer active:scale-95"
                onClick={() => {
                  let r = confirm("Deseas actualizar tus datos?");
                  if (r) {
                    updateUserInfo();
                    setTabSlide(1);
                    setEndEditing(true);
                    scrollToTop();
                  }
                }}
              >
                <span className="flex text-white font-normal text-lg">
                  Guardar
                </span>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
export default EditProfileForm;
