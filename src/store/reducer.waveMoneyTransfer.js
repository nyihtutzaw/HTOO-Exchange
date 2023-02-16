import { createSlice } from "@reduxjs/toolkit";

export const waveMoneyTransferReducer = createSlice({
  name: "waveMoneyTransfer",
  initialState: {
    waveMoneyTransfers: [],
    waveMoneyTransfer: {},
  },
  reducers: {
    setWaveMoneyTransfers: (state, action) => {
      state.waveMoneyTransfers = action.payload;
    },
    setWaveMoneyTransfer: (state, action) => {
      state.waveMoneyTransfer = action.payload;
    },
    deleteWaveMoneyTransfer: (state, action) => {
      state.waveMoneyTransfers = state.waveMoneyTransfers.filter(
        (waveMoneyTransfer) => waveMoneyTransfer.id !== action.payload
      );
    },
  },
});

export const { setWaveMoneyTransfers, setWaveMoneyTransfer, deleteWaveMoneyTransfer } =
  waveMoneyTransferReducer.actions;

export default waveMoneyTransferReducer.reducer;
