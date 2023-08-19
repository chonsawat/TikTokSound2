import React from "react";
import { MdDeleteOutline, MdPlayArrow } from "react-icons/md";

export enum ActionButtonEnum {
  PLAY = "PLAY",
  DELETE = "DELETE",
}

type ActionButtonProps = {
  action: string;
} & React.HTMLProps<HTMLAnchorElement>;

const ActionButton: React.FC<ActionButtonProps> = ({ action, onClick }) => {
  const color =
    action === "DELETE"
      ? "bg-red-500 shadow-red-500/30"
      : "bg-lime-500 shadow-lime-500/20";
  const styleClass = `flex font-medium text-white hover:underline  py-2 px-4 rounded-lg shadow-lg ${color}`;

  if (action === "PLAY") {
    return (
      <div className="flex">
        <a onClick={onClick} href="#" className={styleClass}>
          Play
          <MdPlayArrow className="ml-1 self-center"/>
        </a>
      </div>
    );
  } else {
    return (
      <div className="flex">
        <a onClick={onClick} href="#" className={styleClass}>
          Delete
          <MdDeleteOutline className="self-center ml-1" />
        </a>
      </div>
    );
  }
};

export default ActionButton;
