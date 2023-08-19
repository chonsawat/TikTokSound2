import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const eventReducer = (state: RootState) => state.event;
export const eventRecordsSelector = createSelector([eventReducer], (state) => state.eventRecords);