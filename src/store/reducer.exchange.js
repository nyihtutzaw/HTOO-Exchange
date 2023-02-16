import { createSlice } from "@reduxjs/toolkit";

export const exchangeReducer = createSlice({
    name: "exchange",
    initialState: {
        exchanges: [],
        exchange: {},
    },
    reducers: {
        setExchanges: (state, action) => {
            state.exchanges = action.payload;
        },
        setExchange: (state, action) => {
            state.exchange = action.payload;
        },
        deleteExchange: (state, action) => {
            state.exchanges = state.exchanges.filter(
                (exchange) => exchange.id !== action.payload
            );
        },
    },
});

export const { setExchanges, setExchange, deleteExchange } =
    exchangeReducer.actions;

export default exchangeReducer.reducer;
