import React from "react";
import { MdDeleteOutline, MdPlayArrow } from "react-icons/md";
import { EventRecordType, eventActions } from "../stores/events/event.slice";
import { useAppDispatch } from "../stores/store";

export enum ActionButtonEnum {
  PLAY = "PLAY",
  DELETE = "DELETE",
}

type ActionButtonProps = {
  action: string;
  data: EventRecordType;
};

const styleClass = `flex font-medium text-white hover:underline  py-2 px-4 rounded-lg shadow-lg`;

const ActionButton: React.FC<ActionButtonProps> = ({ action, data }) => {
  const dispatch = useAppDispatch();

  const onDeleteHandler = () => {
    const { id } = data;
    dispatch(eventActions.deleteEventRecord(id));
  };

  if (action === "PLAY") {
    return (
      <div className="flex">
        <a href="#" className={`${styleClass} bg-lime-500 shadow-lime-500/20`}>
          Play
          <MdPlayArrow className="ml-1 self-center" />
        </a>
      </div>
    );
  } else {
    return (
      <div className="flex">
        <a
          onClick={onDeleteHandler}
          href="#"
          className={`${styleClass} bg-red-500 shadow-red-500/30`}
        >
          Delete
          <MdDeleteOutline className="self-center ml-1" />
        </a>
      </div>
    );
  }
};

export default ActionButton;
