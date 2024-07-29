import { configureStore } from "@reduxjs/toolkit";
import { combineSlices } from "@reduxjs/toolkit";

import { userSlice } from "./userSlice";
import { todoSlice } from "./todoSlice";

export const rootReducer = combineSlices(todoSlice, userSlice);

export const store = configureStore({
  reducer: rootReducer,
});
