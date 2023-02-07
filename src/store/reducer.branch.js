import { createSlice } from "@reduxjs/toolkit";

export const roleReducer = createSlice({
  name: "branch",
  initialState: {
    branches: [],
    branch: {},
  },
  reducers: {
    setBranches: (state, action) => {
      state.branches = action.payload;
    },
    setBranch: (state, action) => {
      state.branch = action.payload;
    },
    deleteBranch: (state, action) => {
      state.branches = state.branches.filter(
        (branch) => branch.id !== action.payload
      );
    },
  },
});

export const { setBranch, setBranches, deleteBranch } = roleReducer.actions;

export default roleReducer.reducer;
