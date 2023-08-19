import { createSlice } from "@reduxjs/toolkit";

type InitialStateType = {
  uid: string;
  port: number;
};

const initialState: InitialStateType = {
  uid: "@mr.cmmb",
  port: 4751,
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
    }
  },
});

export const inputReducer = inputSlice.reducer;
export const inputActions = inputSlice.actions;