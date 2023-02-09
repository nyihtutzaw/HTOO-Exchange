import { createSlice } from "@reduxjs/toolkit";

export const customerReducer = createSlice({
  name: "customer",
  initialState: {
    customers: [],
    customer: {},
  },
  reducers: {
    setCustomers: (state, action) => {
      state.customers = action.payload;
    },
    setCustomer: (state, action) => {
      state.customer = action.payload;
    },
    deleteCustomer: (state, action) => {
      state.customers = state.customers.filter((customer) => customer.id !== action.payload);
    },
  },
});

export const { setCustomers, setCustomer, deleteCustomer } = customerReducer.actions;

export default customerReducer.reducer;
