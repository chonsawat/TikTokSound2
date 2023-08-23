import React from "react";
import AddButton from "./Button/AddButton";
import { useAppSelector } from "../stores/store";
import { isEventRecordsIsNullSelector } from "../stores/events/event.selector";

const TableHeader = () => {
  const isEventRecordsIsNull = useAppSelector(isEventRecordsIsNullSelector);

  return (
    <>
      <thead className="text-xs text-gray-700 uppercase bg-gray-100">
        <tr>
          <th scope="col" className="px-6 py-3 flex items-center">
            <p>Action </p>
            <AddButton
              additionalClass={isEventRecordsIsNull ? "animate-bounce" : ""}
            />
          </th>
          <th scope="col" className="px-6 py-3">
            Volume
          </th>
          <th scope="col" className="px-6 py-3">
            Enable
          </th>
          <th scope="col" className="px-6 py-3">
            Event Name
          </th>
          <th scope="col" className="px-6 py-3">
            Sound Effect
          </th>
          <th scope="col" className="px-6 py-3">
            Delete
          </th>
        </tr>
      </thead>
    </>
  );
};

export default TableHeader;
