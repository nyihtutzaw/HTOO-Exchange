import { createSlice } from "@reduxjs/toolkit";

export const branchTransferReducer = createSlice({
  name: "branchTransfer",
  initialState: {
    branchTransfers: [],
    branchTransfer: {},
  },
  reducers: {
    setBranchTransfers: (state, action) => {
      state.branchTransfers = action.payload;
    },
    setBranchTransfer: (state, action) => {
      state.branchTransfer = action.payload;
    },
    deleteBranchTransfer: (state, action) => {
      state.branchTransfers = state.branchTransfers.filter(
        (branchTransfer) => branchTransfer.id !== action.payload
      );
    },
  },
});

export const { setBranchTransfers, setBranchTransfer, deleteBranchTransfer } =
  branchTransferReducer.actions;

export default branchTransferReducer.reducer;
