import { createSlice } from "@reduxjs/toolkit";

export const allowanceReducer = createSlice({
  name: "allowance",
  initialState: {
    allowances: [],
    allowance: {},
  },
  reducers: {
    setAllowances: (state, action) => {
      state.allowances = action.payload;
    },
    setAllowance: (state, action) => {
      state.allowance = action.payload;
    },
    deleteAllowance: (state, action) => {
      state.allowances = state.allowances.filter(
        (allowance) => allowance.id !== action.payload
      );
    },
  },
});

export const { setAllowances, setAllowance, deleteAllowance } =
  allowanceReducer.actions;

export default allowanceReducer.reducer;
