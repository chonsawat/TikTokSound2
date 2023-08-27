import { createSlice } from "@reduxjs/toolkit";
import { eventRecords } from "../../assets/data";
import { events } from "../../assets/data";
import { Gift } from "../../types/gift";

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
	name: string;
};

type initialStateType = {
	eventRecords: EventRecordType[];
	events: (EventType & Gift)[];
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
			const { id, enable } = action.payload;
			state.eventRecords.find((item) => {
				if (item.id === id) {
					item.enable = enable;
				}
			});
		},
		setEventRecordSound: (state, action) => {
			const { id, soundPath } = action.payload;
			state.eventRecords.find((item) => {
				if (item.id === id) {
					item.sound.path = soundPath;
				}
			});
		},
		setEventRecordEvent: (state, action) => {
			const { id, event } = action.payload;
			state.eventRecords.find((item) => {
				if (item.id === id) {
					item.event = event;
				}
			});
		},
	},
});

export const eventReducer = eventSlice.reducer;
export const eventActions = eventSlice.actions;
