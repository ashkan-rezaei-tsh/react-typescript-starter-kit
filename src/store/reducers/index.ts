import { combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "./auth";
import { userSlice } from "../features/userSlice";

export const rootReducers = combineReducers({
    auth: authSlice.reducer,
    user: userSlice.reducer,
});
