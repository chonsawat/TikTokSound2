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
        id="default-checkbox"
        type="checkbox"
        value=""
        className="w-4 h-4 rounded-lg accent-pink-500"
      />
    </div>
  );
};

export default CheckBox;
