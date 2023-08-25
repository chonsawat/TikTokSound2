import { createSlice } from "@reduxjs/toolkit";

type InitialStateType = {
	uid: string;
	port: number;
	isConnect: boolean;
};

const initialState: InitialStateType = {
	uid: "@mr.cmmb",
	port: 8000,
	isConnect: false,
};

const inputSlice = createSlice({
	name: "input",
	initialState,
	reducers: {
		setUid: (state, action) => {
			state.uid = action.payload;
		},
		setPort: (state, action) => {
			state.port = action.payload;
		},
		setIsConnect: (state, action) => {
			state.isConnect = action.payload;
		},
	},
});

export const inputReducer = inputSlice.reducer;
export const inputActions = inputSlice.actions;
