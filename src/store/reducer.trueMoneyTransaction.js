import { createSlice } from "@reduxjs/toolkit";

export const trueMoneyTransactionReducer = createSlice({
  name: "trueMoneyTransaction",
  initialState: {
    trueMoneyTransactions: [],
    trueMoneyTransaction: {},
  },
  reducers: {
    setTrueMoneyTransactions: (state, action) => {
      state.trueMoneyTransactions = action.payload;
    },
    setTrueMoneyTransaction: (state, action) => {
      state.trueMoneyTransaction = action.payload;
    },
    deleteTrueMoneyTransaction: (state, action) => {
      state.trueMoneyTransactions = state.trueMoneyTransactions.filter(
        (trueMoneyTransaction) => trueMoneyTransaction.id !== action.payload
      );
    },
  },
});

export const {
  setTrueMoneyTransactions,
  setTrueMoneyTransaction,
  deleteTrueMoneyTransaction,
} = trueMoneyTransactionReducer.actions;

export default trueMoneyTransactionReducer.reducer;
