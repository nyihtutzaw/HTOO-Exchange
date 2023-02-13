import { createSlice } from "@reduxjs/toolkit";

export const adminReducer = createSlice({
    name: "admin",
    initialState: {
        admins: [],
        admin: {},
    },
    reducers: {
        setAdmins: (state, action) => {
            state.admins = action.payload;
        },
        setAdmin: (state, action) => {
            state.admin = action.payload;
        },
        deleteAdmin: (state, action) => {
            state.admins = state.admins.filter(
                (admin) => admin.id !== action.payload
            );
        },
    },
});

export const { setAdmin, setAdmins, deleteAdmin } = adminReducer.actions;

export default adminReducer.reducer;
