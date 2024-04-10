/* eslint-disable @next/next/no-img-element */
import { useRef, useState, useEffect } from "react";
import { uploadFile } from "@/firebase/upload";
import FileUploadIcon from "@/public/assets/icons/file_upload.svg";

export default function DragAndDropPerfil({ portrait, setPortrait, gender }) {
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef();
  const [files, setFiles] = useState([]);
  const [dataUrl, setDataUrl] = useState("");
  const [fileIsUploaded, setFileIsUploaded] = useState(false);
  const [portraitPlaceholder, setPortraitPlaceholder] = useState(
    "/assets/icons/man.svg"
  );

  useEffect(() => {
    if (portrait) {
      // post portrait to backend
      // retrieve portrait url
      // setPortraitPlaceholder(new portrait Url);
    }
    if (!portrait) {
      if (gender === " " || gender === null || gender === undefined)
        setPortraitPlaceholder("/assets/icons/man.svg");
      if (gender === "hombre") setPortraitPlaceholder("/assets/icons/man-svg");
      if (gender === "mujer") setPortraitPlaceholder("/assets/icons/woman-svg");
      if (gender === "ambos")
        setPortraitPlaceholder("/assets/icons/man_woman.svg");
    }
  }, [portrait, gender]);

  function handleChange(e) {
    e.preventDefault();
    console.log("File has been added");
    if (e.target.files && e.target.files[0]) {
      console.log(e.target.files);
      for (let i = 0; i < e.target.files["length"]; i++) {
        setFiles((prevState) => [...prevState, e.target.files[i]]);
      }
    }
  }

  async function handleSubmitFile(fileName) {
    let file = files[0];
    let pathFile = "assets/img/profile/" + fileName;
    await uploadFile(file, pathFile);
    /* const { data, error } = await supabase.storage
      .from("avatars")
      .upload(files[0].name, files[0]);
    if (data) {
      setFileIsUploaded(true);
    }
    if (error) {
      console.log("error", error);
    }
    const { data: dataImage } = supabase.storage
      .from("avatars")
      .getPublicUrl(files[0].name);
    console.log("dataImage", dataImage.publicUrl);
    setDataUrl(dataImage.publicUrl); */
  }

  function handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      for (let i = 0; i < e.dataTransfer.files["length"]; i++) {
        setFiles((prevState) => [...prevState, e.dataTransfer.files[i]]);
      }
    }
  }

  function handleDragLeave(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  }

  function handleDragOver(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  }

  function handleDragEnter(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  }

  function removeFile(fileName, idx) {
    const newArr = [...files];
    newArr.splice(idx, 1);
    setFiles([]);
    setFiles(newArr);
    setDataUrl("");
    setFileIsUploaded(false);
  }

  function openFileExplorer() {
    inputRef.current.value = "";
    inputRef.current.click();
  }

  return (
    <div className="flex flex-col md:flex-row w-full max-w-[500px] h-auto items-center gap-4">
      <div className="flex flex-col w-full md:w-2/3 h-auto">
        <div
          className={`flex flex-col w-full h-auto 
          border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-white/60 
          ${dragActive ? "bg-black" : "bg-white/10"} p-4 rounded-lg`}>
          <div
            className={`flex flex-col w-full h-auto items-center justify-center`}
            onDragEnter={handleDragEnter}
            onSubmit={(e) => e.preventDefault()}
            onDrop={handleDrop}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}>
            {files.length <= 0 && (
              <>
                <FileUploadIcon className="flex w-10 h-auto text-tertiary-500 " />

                {/* this input element allows us to select files for upload. We make it hidden so we can activate it when the user clicks select files */}
                <input
                  placeholder="fileInput"
                  className="hidden"
                  ref={inputRef}
                  type="file"
                  multiple={true}
                  onChange={handleChange}
                  accept="image/*"
                />

                <p className="flex text-xs md:text-sm text-gray-400 font-normal mt-2 text-center">
                  Drag & Drop una imagen
                </p>
                <p>
                  <span
                    className="flex w-full mt-1 justify-center text-xs md:text-sm font-semibold text-gray-400 text-center underline cursor-pointer"
                    onClick={openFileExplorer}>
                    o selecciona un archivo
                  </span>
                </p>
                <p className="flex text-xs italic text-gray-400 font-normal mt-2 text-center">
                  .jpg, .jpeg, .png. .webp
                </p>
              </>
            )}
          </div>

          <div className="flex flex-col w-full h-auto items-center px-2 py-2">
            {files.slice(0, 1).map((file, idx) => (
              <div
                key={idx}
                className="flex flex-col w-full h-auto items-center gap-3 ">
                <span className="text-xs md:text-sm text-primary-500 font-light ">
                  {file.name}
                </span>
                <div
                  className={`flex flex-row w-full h-auto mt-2 justify-around items-center`}>
                  <div
                    className={`
                        flex px-4 py-2
                        text-primary-500 text-xs md:text-sm hover:text-white
                        bg-tertiary-400 hover:bg-secondary-500 rounded-lg 
                        cursor-pointer active:scale-95`}
                    onClick={() => handleSubmitFile(file.name)}>
                    {dataUrl ? "Cambiar" : "Añadir"}
                  </div>

                  <button
                    className={`
                        flex px-4 py-2
                        text-gray-400 text-xs md:text-sm hover:text-primary-500
                        bg-white hover:bg-gray-300 rounded-lg 
                        cursor-pointer active:scale-95`}
                    onClick={() => removeFile(file.name, idx)}>
                    Borrar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex w-full md:w-1/3 h-auto justify-center items-center mt-4 md:mt-0">
        <div className="flex w-40 h-40 shrink-0 p-4 justify-end border-2 border-gray-300 border-dashed rounded-full overflow-hidden">
          <img
            src={dataUrl ? dataUrl : portraitPlaceholder}
            className="flex w-full h-auto object-contain"
            alt="portrait"
          />
        </div>
      </div>
    </div>
  );
}
