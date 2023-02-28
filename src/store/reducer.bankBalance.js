import { createSlice } from "@reduxjs/toolkit";

export const bankBalanceReducer = createSlice({
  name: "bankBalance",
  initialState: {
    bankBalances: [],
    bankBalance: {},
    openBalanceTotal: 0,
    closeBalanceTotal: 0,
  },
  reducers: {
    setBankBalances: (state, action) => {
      state.bankBalances = action.payload.data;
      state.openBalanceTotal = action.payload.open_balance_total;
      state.closeBalanceTotal = action.payload.close_balance_total;
    },
    setBankBalance: (state, action) => {
      state.bankBalance = action.payload;
    },
  },
});

export const { setBankBalances, setBankBalance } = bankBalanceReducer.actions;

export default bankBalanceReducer.reducer;
