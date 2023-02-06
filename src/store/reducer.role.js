import { createSlice } from "@reduxjs/toolkit";

export const roleReducer = createSlice({
    name: "role",
    initialState: {
        roles: [],
        role: {}
    },
    reducers: {
        setRoles: (state, action) => {
            state.roles = action.payload;
        },
        setRole: (state, action) => {
            state.role = action.payload;
        },

    }
});


export const { setRoles, setRole } = roleReducer.actions;

export default roleReducer.reducer;
