import { createSlice } from "@reduxjs/toolkit";
import { eventRecords as evr } from "../../assets/data";

export type EventRecordType = {
  id: string;
  enable: boolean;
  event: string;
  volume: number;
  sound: string;
};

type initialStateType = {
  eventRecords: EventRecordType[];
};

const initialState: initialStateType = {
  eventRecords: evr,
};

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    addEventRecord: (state, action) => {
      state.eventRecords = [...state.eventRecords, action.payload];
    },
    deleteEventRecord: (state, action) => {
      state.eventRecords = state.eventRecords.filter((item) => item.id !== action.payload)
    }
  },
});

export const eventReducer = eventSlice.reducer;
export const eventActions = eventSlice.actions;
