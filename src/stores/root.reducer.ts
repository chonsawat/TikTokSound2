import { combineReducers } from "@reduxjs/toolkit";
import { inputReducer } from "./input/input.slice";
import { eventReducer } from "./events/event.slice";

export const rootReducer = combineReducers({
    input: inputReducer,
    event: eventReducer
})