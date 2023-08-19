import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const inputReducer = (state: RootState) => state.input;
export const tiktokUidSelector = createSelector([inputReducer], (state) => state.uid);