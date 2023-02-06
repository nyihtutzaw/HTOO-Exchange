import { createSlice } from "@reduxjs/toolkit";

export const roleReducer = createSlice({
    name: "branch",
    initialState: {
        branches: [],
        branch: {}
    },
    reducers: {
        setBranches: (state, action) => {
            state.branches = action.payload;
        },
        setBranch: (state, action) => {
            state.branch = action.payload;
        },

    }
});


export const { setBranch, setBranches } = roleReducer.actions;

export default roleReducer.reducer;
