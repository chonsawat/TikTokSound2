import { EventRecordType, eventActions } from "../stores/events/event.slice";
import ActionButton, { ActionButtonEnum } from "./ActionButton";
import { useAppDispatch } from "../stores/store";
import VolumeRangeBar from "./VolumeRangeBar";
import CheckBox from "./CheckBox";
import EventSelection from "./EventSelection";
import FileInput from "./FileInput";

type TableRowProps = {
  data: EventRecordType;
};

const TableRow = ({ data }: TableRowProps) => {
  const truncate = (str: string) => {
    const n = 20;
    return str.length > n ? <>{str.slice(0, n - 1)}&hellip;</> : str;
  };

  return (
    <>
      <tr className="bg-white border-b">
        <td id="play" scope="row" className="table-data">
          <ActionButton data={data} action={ActionButtonEnum.PLAY} />
        </td>
        <td id="volume" className="table-data">
          <VolumeRangeBar data={data} />
        </td>
        <td id="enable" className="table-data">
          <CheckBox data={data} />
        </td>
        <td
          id="event"
          className="table-data font-medium text-gray-900 whitespace-nowrap"
        >
          <EventSelection data={data} />
        </td>
        <td id="sound" className="table-data">
          {/* {truncate(data.sound)} */}
          <FileInput data={data}/>
        </td>
        <td id="delete" className="table-data">
          <ActionButton data={data} action={ActionButtonEnum.DELETE} />
        </td>
      </tr>
    </>
  );
};

export default TableRow;
