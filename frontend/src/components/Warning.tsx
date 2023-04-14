import { AiOutlineClose } from "react-icons/ai";

type WarningProps = {
  message: string;
  showWarning: boolean;
  onCloseWarning: () => void;
};

const Warning = ({ message, showWarning, onCloseWarning }: WarningProps) => {
  return (
    <>
      {showWarning && (
        <div className="flex w-full items-center justify-center">
          <div className="flex justify-center" />
          <div className="relative mx-auto w-9/12 bg-red-100 p-4 text-black">
            <button
              className="absolute top-3 right-0 p-2  text-gray-500 text-opacity-50 hover:text-gray-800 focus:outline-none"
              onClick={onCloseWarning}
            >
              <AiOutlineClose size={16} />
            </button>
            <h2 className="text-pink-800">{message}</h2>
          </div>
        </div>
      )}
    </>
  );
};

export default Warning;
