import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const eventReducer = (state: RootState) => state.event;
export const eventRecordsSelector = createSelector(
  [eventReducer],
  (state) => state.eventRecords
);
export const eventsSelector = createSelector(
  [eventReducer],
  (state) => state.events
);
export const isEventRecordsIsNullSelector = createSelector(
  [eventReducer],
  (state) => state.eventRecords.length === 0
);
