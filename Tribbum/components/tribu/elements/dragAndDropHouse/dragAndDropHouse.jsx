/* eslint-disable @next/next/no-img-element */
import { useRef, useState, useEffect } from "react";
import FileUploadIcon from "@/public/assets/icons/file_upload.svg";

export default function DragAndDropHouse({ portrait, setPortrait, gender }) {
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef();
  const [files, setFiles] = useState([]);
  const [dataUrl, setDataUrl] = useState("");
  const [fileIsUploaded, setFileIsUploaded] = useState(false);
  const [portraitPlaceholder, setPortraitPlaceholder] = useState(
    "/assets/icons/man.svg"
  );
  const [previewImage, setPreviewImage] = useState([]);

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
    // console.log("File has been added");
    if (e.target.files && e.target.files[0]) {
      console.log(e.target.files);
      for (let i = 0; i < e.target.files["length"]; i++) {
        setFiles((prevState) => [...prevState, e.target.files[i]]);
      }
    }
    if (e.target.files && e.target.files[0]) {
      for (let i = 0; i < e.target.files["length"]; i++) {
        setPreviewImage((previewImage) => [
          ...previewImage,
          URL.createObjectURL(e.target.files[i]),
        ]);
      }
    }
  }

  async function handleSubmitFile(e) {
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
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      for (let i = 0; i < e.dataTransfer.files["length"]; i++) {
        setPreviewImage((previewImage) => [
          ...previewImage,
          URL.createObjectURL(e.dataTransfer.files[i]),
        ]);
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
    setFiles(newArr);
    setDataUrl("");
    setFileIsUploaded(false);
    const newPreviewImage = [...previewImage];
    newPreviewImage.splice(idx, 1);
    setPreviewImage(newPreviewImage);
  }

  function openFileExplorer() {
    inputRef.current.value = "";
    inputRef.current.click();
  }

  return (
    <div className="flex flex-col  w-full max-w-[500px] h-auto items-center gap-4">
      <div className="flex flex-col w-full h-auto">
        <div
          className={`flex flex-col w-full h-auto 
          border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-white/60 
          ${dragActive ? "bg-black" : "bg-white/10"} p-4 rounded-lg`}
        >
          <div
            className={`flex flex-col w-full h-auto items-center justify-center`}
            onDragEnter={handleDragEnter}
            onSubmit={(e) => e.preventDefault()}
            onDrop={handleDrop}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
          >
            <>
              <FileUploadIcon className="flex w-10 h-auto text-tertiary-500" />
              <input
                placeholder="fileInput"
                className="hidden"
                ref={inputRef}
                type="file"
                multiple={true}
                onChange={handleChange}
                accept="image/*"
              />

              <span className="flex text-xs md:text-sm text-gray-400 font-normal mt-2 text-center">
                Drag & Drop fotos
              </span>
              <p>
                <span
                  className="flex w-full mt-1 justify-center text-xs md:text-sm font-semibold text-gray-400 text-center underline cursor-pointer"
                  onClick={openFileExplorer}
                >
                  o selecciona archivos
                </span>
              </p>
              <span className="flex text-xs italic text-gray-400 font-normal mt-2 text-center">
                .jpg, .jpeg, .png. .webp
              </span>
            </>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap w-full max-w-[500px] h-auto justify-center items-center mt-4 gap-6 ">
        {previewImage.map((image, idx) => {
          return (
            <div
              className="flex w-32 h-32 shrink-0 justify-end relative"
              key={idx}
            >
              <div className="flex w-32 h-32 shrink-0 border-2 border-gray-300 border-dashed rounded-xl overflow-hidden ">
                <img
                  src={image}
                  className="flex w-full h-auto object-cover"
                  alt="portrait"
                />
              </div>
              <div
                className="flex absolute -top-2 -right-2 w-8 p-1 h-8 p-1 rounded-full bg-primary-200 justify-center items-center hover:bg-secondary-500 cursor-pointer active:scale-95 "
                onClick={() => removeFile(image, idx)}
              >
                <span className="text-white text-xl font-medium"> X</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
