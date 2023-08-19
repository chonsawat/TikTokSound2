import React from "react";
import AddButton from "./AddButton";

const TableHeader = () => {
  return (
    <>
      <thead className="text-xs text-gray-700 uppercase bg-gray-100">
        <tr>
          <th scope="col" className="px-6 py-3 flex items-center">
            <p>Action </p>
            <AddButton />
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
