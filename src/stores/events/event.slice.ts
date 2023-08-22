import { createSlice } from "@reduxjs/toolkit";
import { eventRecords } from "../../assets/data";
import { events } from "../../assets/data";

export type SoundType = {
  path: string;
  fileInputRef?: React.RefObject<HTMLInputElement>;
};

export type EventRecordType = {
  id: string;
  enable: boolean;
  event: string;
  volume: number;
  sound: SoundType;
};

export type EventType = {
  label: string;
  value?: string;
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
          item.volume = normalizeVolume;
        }
      });
    },
    setEventRecordEnable: (state, action) => {
      state.eventRecords.find((item) => {
        const { id, enable } = action.payload;
        if (item.id === id) {
          item.enable = enable;
        }
      });
    },
    setEventRecordSound: (state, action) => {
      state.eventRecords.find((item) => {
        const { id, soundPath } = action.payload;
        if (item.id === id) {
          item.sound.path = soundPath;
        }
      });
    },
  },
});

export const eventReducer = eventSlice.reducer;
export const eventActions = eventSlice.actions;
