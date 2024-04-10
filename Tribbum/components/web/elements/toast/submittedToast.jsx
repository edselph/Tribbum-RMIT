const SubmittedToast = ({ type, dict }) => {
  return (
    <>
      <div
        className={`flex flex-col w-full h-auto px-4 pb-4 mt-24 justify-center items-center ${
          type === "success" ? "bg-secondary-500" : "bg-red-500"
        }  rounded-2xl`}
      >
        <div
          className={`flex w-full h-auto mt-4 justify-center items-center text-center text-medium text-lg ${
            type === "success" ? "text-primary-500" : "text-white"
          } tracking-widest`}
        >
          {type === "success"
            ? "Hemos recibido tu mensaje, en breve nos pondremos en contacto contigo"
            : "Oups!! algo ha salido mal, por favor intenta de nuevo en un momento"}
        </div>
      </div>
    </>
  );
};

export default SubmittedToast;
