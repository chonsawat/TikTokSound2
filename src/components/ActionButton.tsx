import React from "react";

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
  const styleClass = `font-medium text-white hover:underline  py-2 px-4 rounded-lg shadow-lg ${color}`;
  const text = action === "PLAY" ? "Play" : "Delete";
  return (
    <a onClick={onClick} href="#" className={styleClass}>
      {text}
    </a>
  );
};

export default ActionButton;
