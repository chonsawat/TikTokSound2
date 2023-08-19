import React, { useState } from "react";
import { EventRecordType, eventActions } from "../stores/events/event.slice";
import ActionButton, { ActionButtonEnum } from "./ActionButton";
import { useAppDispatch } from "../stores/store";
import VolumeRangeBar from "./VolumeRangeBar";
import CheckBox from "./CheckBox";

type TableRowProps = {
  data: EventRecordType;
};

const TableRow = ({ data }: TableRowProps) => {
  const dispatch = useAppDispatch();
  const [percentage, setPercentage] = useState<number>(data.volume * 100);

  const onDeleteHandler = () => {
    const { id } = data;
    dispatch(eventActions.deleteEventRecord(id));
  };

  const onVolumeChange = (event: any) => {
    dispatch(
      eventActions.setEventRecordVolume({
        id: data.id,
        volume: event.target.value,
      })
    );
    setPercentage(parseFloat(event.target.value));
  };

  const truncate = (str: string) => {
    const n = 20;
    return str.length > n ? <>{str.slice(0, n - 1)}&hellip;</> : str;
  };

  return (
    <>
      <tr className="bg-white border-b">
        <td id="play" scope="row" className="table-data">
          <ActionButton action={ActionButtonEnum.PLAY} />
        </td>
        <td id="volume" className="table-data">
          <VolumeRangeBar
            percentage={percentage}
            onVolumeChange={onVolumeChange}
          />
        </td>
        <td id="enable" className="table-data">
          <CheckBox data={data} />
        </td>
        <td
          id="event"
          className="table-data font-medium text-gray-900 whitespace-nowrap"
        >
          {data.event}
        </td>
        <td id="sound" className="table-data">
          {truncate(data.sound)}
        </td>
        <td id="delete" className="table-data">
          <ActionButton
            onClick={onDeleteHandler}
            action={ActionButtonEnum.DELETE}
          />
        </td>
      </tr>
    </>
  );
};

export default TableRow;
