import { createSlice } from "@reduxjs/toolkit";

export const trueMoneyTransferReducer = createSlice({
  name: "true_money_transfer",
  initialState: {
    trueMoneyTransfers: [],
    trueMoneyTransfer: {},
  },
  reducers: {
    setTrueMoneyTransfers: (state, action) => {
      state.trueMoneyTransfers = action.payload;
    },
    setTrueMoneyTransfer: (state, action) => {
      state.trueMoneyTransfer = action.payload;
    },
    deleteTrueMoneyTransfer: (state, action) => {
      state.trueMoneyTransfers = state.trueMoneyTransfers.filter(
        (trueMoneyTransfer) => trueMoneyTransfer.id !== action.payload
      );
    },
  },
});

export const {
  setTrueMoneyTransfers,
  setTrueMoneyTransfer,
  deleteTrueMoneyTransfer,
} = trueMoneyTransferReducer.actions;

export default trueMoneyTransferReducer.reducer;
