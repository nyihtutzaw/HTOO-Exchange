import { createSlice } from "@reduxjs/toolkit";

export const authReducer = createSlice({
    name: "counter",
    initialState: {
        user: {},
        token: null
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setToken: (state, action) => {
            state.token = action.payload;
        }
    }
});


export const { setUser, setToken } = authReducer.actions;

export default authReducer.reducer;
