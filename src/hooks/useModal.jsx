import { useState } from "react";

function useModal(message, callback) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function handleCallback() {
    callback();
    setModalIsOpen(false);
  }
  const ModalUI = function () {
    return modalIsOpen ? (
      <div className="w-0 h-0 sticky top-0 bottom-0 left-0 right-0 z-[1000]">
        <div className="absolute w-screen h-screen flex justify-center items-center backdrop-blur-md z-[1000] bottom-[0] left-[0]">
          <div className="bg-[#ffffff7e] border-2 border-customYellow w-[400px] h-[300px] rounded-2xl flex flex-col justify-evenly items-center shadow-2xl p-4 gap-4">
            <h1 className="text-xl font-extrabold ">{message}</h1>
            <div className="flex justify-evenly items-center w-full">
              <button
                className="w-20 py-2 px-10 bg-customYellow text-2xl font-extrabold flex justify-center items-center rounded-xl"
                onClick={() => setModalIsOpen(false)}
              >
                No
              </button>
              <button
                className="w-20 py-2 px-10 bg-customYellow text-2xl font-extrabold flex justify-center items-center rounded-xl"
                onClick={handleCallback}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
    ) : null;
  };

  return { ModalUI, setModalIsOpen };
}

export default useModal;
