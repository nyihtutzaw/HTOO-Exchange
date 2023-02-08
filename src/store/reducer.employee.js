import { createSlice } from "@reduxjs/toolkit";

export const employeeReducer = createSlice({
  name: "employee",
  initialState: {
    employees: [],
    employee: {},
  },
  reducers: {
    setEmployees: (state, action) => {
      state.employees = action.payload;
    },
    setEmployee: (state, action) => {
      state.employee = action.payload;
    },
    deleteEmployee: (state, action) => {
      state.employees = state.employees.filter(
        (employee) => employee.id !== action.payload
      );
    },
  },
});

export const { setEmployee, setEmployees, deleteEmployee } =
  employeeReducer.actions;

export default employeeReducer.reducer;
