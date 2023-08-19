import React, { useState } from "react";
import TableHeader from "../components/TableHeader";
import { TableBody } from "../components/TableBody";
import EventNotFound from "../components/EventNotFound";
import { useAppSelector } from "../stores/store";
import { eventRecordsSelector } from "../stores/events/event.selector";

const EventTable = () => {
  const eventRecords = useAppSelector(eventRecordsSelector);

  const isNull = (data: any[]) => {
    return data.length === 0;
  };

  const eventRecordsIsNull = () => {
    return isNull(eventRecords);
  };

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <TableHeader isEventRecordIsNull={eventRecordsIsNull} />
          <TableBody data={eventRecords} />
        </table>
        {isNull(eventRecords) && <EventNotFound />}
      </div>
    </>
  );
};

export default EventTable;
