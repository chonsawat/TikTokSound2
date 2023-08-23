import TableRow from "./TableRow";
import { EventRecordType } from "../../stores/events/event.slice";

type TableBodyProps = {
  data: EventRecordType[];
};

export const TableBody = ({ data }: TableBodyProps) => {
  return (
    <>
      <tbody>
        {data.map((item) => (
          <TableRow key={item.id} data={item} />
        ))}
      </tbody>
    </>
  );
};
