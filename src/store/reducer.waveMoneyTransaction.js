import { createSlice } from "@reduxjs/toolkit";

export const waveMoneyTransactionReducer = createSlice({
  name: "waveMoneyTransaction",
  initialState: {
    waveMoneyTransactions: [],
    waveMoneyTransaction: {},
  },
  reducers: {
    setWaveMoneyTransactions: (state, action) => {
      state.waveMoneyTransactions = action.payload;
    },
    setWaveMoneyTransaction: (state, action) => {
      state.waveMoneyTransaction = action.payload;
    },
    deleteWaveMoneyTransaction: (state, action) => {
      state.waveMoneyTransactions = state.waveMoneyTransactions.filter(
        (waveMoneyTransaction) => waveMoneyTransaction.id !== action.payload
      );
    },
  },
});

export const {
  setWaveMoneyTransactions,
  setWaveMoneyTransaction,
  deleteWaveMoneyTransaction,
} = waveMoneyTransactionReducer.actions;

export default waveMoneyTransactionReducer.reducer;
