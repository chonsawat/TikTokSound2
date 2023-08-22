import React, { useState } from "react";
import { MdDeleteOutline, MdPlayArrow } from "react-icons/md";
import { EventRecordType, eventActions } from "../stores/events/event.slice";
import { useAppDispatch } from "../stores/store";
import { ImSpinner7 } from "react-icons/im";

export enum ActionButtonEnum {
  PLAY = "PLAY",
  PAUSE = "PAUSE",
  DELETE = "DELETE",
}

type ActionButtonProps = {
  action: string;
  data: EventRecordType;
};

const styleClass = `flex font-medium text-white  py-2.5 px-5 rounded-lg shadow-lg`;

const ActionButton: React.FC<ActionButtonProps> = ({ action, data }) => {
  const dispatch = useAppDispatch();
  const [isPlaying, setIsPlaying] = useState(false);

  const onDeleteHandler = () => {
    const { id } = data;
    dispatch(eventActions.deleteEventRecord(id));
  };

  const onPlayToggleHandler = () => {
    console.log();

    

    setIsPlaying((current) => !current);
  };

  if (action === "PLAY") {
    const isPlayingColor = isPlaying
      ? "bg-rose-500 shadow-rose-500/20 hover:bg-rose-800"
      : "bg-slate-100 shadow-slate-800/20 hover:bg-slate-800 text-black hover:text-white";
    return (
      <div className="flex">
        <a
          onClick={onPlayToggleHandler}
          href="#"
          className={`${styleClass} ${isPlayingColor} no-underline`}
        >
          {isPlaying ? (
            <>
              <p className="">PAUSE</p>{" "}
              <ImSpinner7 className="animate-spin ml-2 self-center" />
            </>
          ) : (
            <>
              <p className="">PLAY</p>{" "}
              <MdPlayArrow size={20} className="ml-3 self-center" />
            </>
          )}
        </a>
      </div>
    );
  } else if (action === "DELETE") {
    return (
      <div className="flex">
        <a
          onClick={onDeleteHandler}
          href="#"
          className={`${styleClass} bg-red-500 shadow-red-500/30 hover:bg-red-800 hover:animate-pulse`}
        >
          Delete
          <MdDeleteOutline className="self-center ml-1" />
        </a>
      </div>
    );
  } else {
    return null;
  }
};

export default ActionButton;
