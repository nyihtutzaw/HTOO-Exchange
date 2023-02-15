import { createSlice } from "@reduxjs/toolkit";

export const expenseReducer = createSlice({
  name: "expense",
  initialState: {
    expenses: [],
    expense: {},
  },
  reducers: {
    setExpenses: (state, action) => {
      state.expenses = action.payload;
    },
    setExpense: (state, action) => {
      state.expense = action.payload;
    },
    deleteExpense: (state, action) => {
      state.expenses = state.expenses.filter(
        (expense) => expense.id !== action.payload
      );
    },
  },
});

export const { setExpenses, setExpense, deleteExpense } =
  expenseReducer.actions;

export default expenseReducer.reducer;
