import { createSlice } from "@reduxjs/toolkit";

export const cashWalletReducer = createSlice({
  name: "cashWallet",
  initialState: {
    cashWallets: [],
    cashWallet: {},
  },
  reducers: {
    setCashWallets: (state, action) => {
      state.cashWallets = action.payload;
    },
    setCashWallet: (state, action) => {
      state.cashWallet = action.payload;
    },
  },
});

export const { setCashWallets, setCashWallet, deleteCashWallet } =
  cashWalletReducer.actions;

export default cashWalletReducer.reducer;
