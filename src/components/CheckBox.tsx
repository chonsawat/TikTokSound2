import React from "react";
import { useAppDispatch } from "../stores/store";
import { EventRecordType, eventActions } from "../stores/events/event.slice";

type CheckBoxProps = {
  data: EventRecordType;
};

const CheckBox: React.FC<CheckBoxProps> = ({ data }) => {
  const dispatch = useAppDispatch();

  const onClickHandler = () => {
    dispatch(
      eventActions.setEventRecordEnable({ id: data.id, enable: !data.enable })
    );
  };

  return (
    <div>
      <input
        checked={data.enable}
        onChange={onClickHandler}
        type="checkbox"
        className="p-3 w-4 h-4 text-pink-600 bg-gray-100 border-gray-300 rounded-lg focus:ring-pink-500 focus:ring-0 text-left shadow-inner text-xl"
      />
    </div>
  );
};

export default CheckBox;
