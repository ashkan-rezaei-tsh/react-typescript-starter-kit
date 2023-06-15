import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { AuthState } from "../../interfaces/auth";

const initialState: AuthState = {
    loginData: Cookies.get("token"),
    isLoggedIn: typeof Cookies.get("token") !== "undefined",
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        authenticate: (state, { payload }) => {
            throw new Error("Function not implemented.");
        },
        login: (state, { payload }) => {
            Cookies.set("access_token", payload.access_token);
            Cookies.set("refresh_token", payload.refresh_token);
            state.loginData = payload;
            state.isLoggedIn = true;
        },
        logout: (state, action) => {
            Cookies.remove("access_token");
            Cookies.remove("refresh_token");
            state.loginData = undefined;
            state.isLoggedIn = false;
        },
    },
});

export const { authenticate, login, logout } = authSlice.actions;

export default authSlice.reducer;
