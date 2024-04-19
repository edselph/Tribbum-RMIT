import react from "react"
const createNewGroupForm = () => {
    function scrollToTop() {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }
    return(
    <div className="flex flex-col w-full h-auto mt-12 items-center">
        <span className="flex text-lg text-primary-500 font-medium">
            Create new Group
        </span>
        <form className="flex flex-col w-full h-auto items-center">
          <div className="flex flex-col w-full max-w-[500px] h-auto mt-4 items-center gap-2">
            <label
              htmlFor="firstname"
              className="flex flex-row w-full h-auto justify-start items-center">
                  <span className="text-xs font-medium text-primary-500">
                    Title of the Group
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
              <div className="flex flex-row w-full max-w-[500px] h-auto mt-12 justify-end">
                <div
                  className="flex w-auto h-auto py-2 px-4 bg-tertiary-500 hover:bg-secondary-500 rounded-full cursor-pointer active:scale-95"
                  onClick={() => {
                    scrollToTop();
                  }}>
                  <span className="flex text-white font-normal text-lg">
                    Submit
                  </span>
                </div>
              </div>
        </form>
    </div>
    );
};

export default createNewGroupForm;