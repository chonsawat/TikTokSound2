import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { EventRecordType, eventActions } from "../../stores/events/event.slice";
import { useAppDispatch } from "../../stores/store";

type DeleteButtonProps = {
  data: EventRecordType;
};

const styleClass = `flex font-semibold py-2.5 px-5 rounded-lg shadow-lg`;

const DeleteButton: React.FC<DeleteButtonProps> = ({ data }) => {
  const dispatch = useAppDispatch();

  const onDeleteHandler = () => {
    const { id } = data;
    dispatch(eventActions.deleteEventRecord(id));
  };

  return (
    <div className="flex text-white">
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
};

export default DeleteButton;
