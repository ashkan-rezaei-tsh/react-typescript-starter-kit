import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        data: {},
        loggedIn: false,
    },
    reducers: {
        setUserData(state, { payload }) {
            state.data = payload;
        },
        login(state, { payload }) {
            state.loggedIn = true;
        },
    },
});

export const { setUserData, login } = userSlice.actions;

export default userSlice.reducer;
