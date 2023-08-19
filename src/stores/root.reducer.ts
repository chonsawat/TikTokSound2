import { combineReducers } from "@reduxjs/toolkit";
import { inputReducer } from "./input/input.slice";

export const rootReducer = combineReducers({
    input: inputReducer
})