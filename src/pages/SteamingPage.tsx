import { LuCopy } from "react-icons/lu";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const SteamingPage = () => {
  const onClickHandler = () => {
    navigator.clipboard.writeText("http://localhost:5021");
    toast.success("Copy to clipboard!");
  };

  return (
    <>
      <div>SteamingPage</div>
      <div className="flex text-center items-center mt-3">
        <p className="font-semibold">Sound Url</p>

        <div className="ml-3">
          <button onClick={onClickHandler} className="flex">
            <code className="bg-slate-200 py-1 px-4 rounded-xl ml-3">
              http://localhost:5021
            </code>
            <LuCopy className="self-center ml-2" />
          </button>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={600}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        toastStyle={{
          backgroundColor: "white",
          textAlign: "center",
          fontWeight: "bolder",
        }}
      />
    </>
  );
};

export default SteamingPage;
