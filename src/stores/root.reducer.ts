import { combineReducers } from "@reduxjs/toolkit";

import storage from "redux-persist/lib/storage";

import { eventReducer } from "./events/event.slice";
import { inputReducer } from "./input/input.slice";
import persistReducer from "redux-persist/es/persistReducer";

const inputPersistConfig = {
	key: "input",
	storage,
    blacklist: ["isConnect"]
};

const eventPersistConfig = {
	key: "event",
	storage,
    blacklist: ["events"]
};

export const rootReducer = combineReducers({
	input: persistReducer(inputPersistConfig, inputReducer),
	event: persistReducer(eventPersistConfig, eventReducer),
});
