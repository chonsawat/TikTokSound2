import { createSlice } from "@reduxjs/toolkit";
import { eventRecords } from "../../assets/data";
import { events } from "../../assets/data";

export type EventRecordType = {
  id: string;
  enable: boolean;
  event: string;
  volume: number;
  sound: string;
};

export type EventType = {
  label: string;
  value: string;
};

type initialStateType = {
  eventRecords: EventRecordType[];
  events: EventType[];
};

const initialState: initialStateType = {
  eventRecords,
  events,
};

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    addEventRecord: (state, action) => {
      state.eventRecords = [...state.eventRecords, action.payload];
    },
    deleteEventRecord: (state, action) => {
      state.eventRecords = state.eventRecords.filter(
        (item) => item.id !== action.payload
      );
    },
    setEventRecordVolume: (state, action) => {
      const { id, volume } = action.payload;
      const normalizeVolume = volume / 100;
      state.eventRecords.find((item) => {
        if (item.id === id) {
          item.volume = normalizeVolume
        }
      })
    },
  },
});

export const eventReducer = eventSlice.reducer;
export const eventActions = eventSlice.actions;
