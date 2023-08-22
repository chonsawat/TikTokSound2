import TableHeader from "../components/TableHeader";
import { TableBody } from "../components/TableBody";
import EventNotFound from "../components/EventNotFound";
import { useAppSelector } from "../stores/store";
import {
  eventRecordsSelector,
  isEventRecordsIsNullSelector,
} from "../stores/events/event.selector";

const EventTable = () => {
  const eventRecords = useAppSelector(eventRecordsSelector);
  const isEventRecordsIsNull = useAppSelector(isEventRecordsIsNullSelector);

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <TableHeader />
          <TableBody data={eventRecords} />
        </table>
        {isEventRecordsIsNull && <EventNotFound />}
      </div>
    </>
  );
};

export default EventTable;
