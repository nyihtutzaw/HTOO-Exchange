import { createSlice } from "@reduxjs/toolkit";

export const roleReducer = createSlice({
    name: "bank",
    initialState: {
        banks: [],
        bank: {},
    },
    reducers: {
        setBanks: (state, action) => {
            state.banks = action.payload;
        },
        setBank: (state, action) => {
            state.bank = action.payload;
        },
        deleteBank: (state, action) => {
            state.banks = state.banks.filter(
                (bank) => bank.id !== action.payload
            );
        },
    },
});

export const { setBank, setBanks, deleteBank } = roleReducer.actions;

export default roleReducer.reducer;
