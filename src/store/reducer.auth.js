import { createSlice } from "@reduxjs/toolkit";
import { getCache } from "../utils/cache";

export const authReducer = createSlice({
    name: "counter",
    initialState: {
        user: getCache("user") ? JSON.parse(getCache("user")) : {},
        activeBranch: getCache("activeBranch") ? JSON.parse(getCache("activeBranch")) : {},
        token: null
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setToken: (state, action) => {
            state.token = action.payload;
        },
    }
});


export const { setUser, setToken } = authReducer.actions;

export default authReducer.reducer;
