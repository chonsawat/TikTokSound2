import React from "react";
import { useAppDispatch } from "../stores/store";
import { eventActions } from "../stores/events/event.slice";

const AddButton = () => {
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
    <button onClick={onClickHandle} className="ml-5 self-center px-1 rounded-md bg-slate-400 hover:bg-amber-500 hover:shadow hover:amber-lime-500 hover:text-white">
      <p className="p-[4px] center text-white font-bold">ADD</p>
    </button>
  );
};

export default AddButton;
