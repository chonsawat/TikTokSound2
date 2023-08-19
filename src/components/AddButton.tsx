import React from "react";
import { useAppDispatch } from "../stores/store";
import { eventActions } from "../stores/events/event.slice";
import { MdAdd } from "react-icons/md";

type AddButtonProps = {
  additionalClass: string;
} & React.HTMLProps<HTMLButtonElement>;

const AddButton: React.FC<AddButtonProps> = ({ additionalClass }) => {
  const dispatch = useAppDispatch();

  const onClickHandle = () => {
    dispatch(
      eventActions.addEventRecord({
        id: Math.random().toString(),
        enable: true,
        event: "following",
        volume: 0.2,
        sound:
          "C:\\Users\\Acer\\Documents\\TikTokSoundTemp\\assets\\sound\\fart.wav",
      })
    );
  };

  return (
    <button
      onClick={onClickHandle}
      className={`ml-5 self-center px-1 rounded-md bg-slate-400 hover:bg-amber-500 hover:shadow hover:amber-lime-500 hover:text-white ${additionalClass}`}
    >
      <div className="flex">
        <p className="p-[4px] center text-white font-bold">ADD </p>
        <MdAdd className="self-center text-white animate-pulse"/>
      </div>
    </button>
  );
};

export default AddButton;
