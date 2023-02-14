import { createSlice } from "@reduxjs/toolkit";

export const salaryReducer = createSlice({
    name: "salary",
    initialState: {
        salarys: [],
        salary: {},
    },
    reducers: {
        setSalarys: (state, action) => {
            state.salarys = action.payload;
        },
        setSalary: (state, action) => {
            state.salary = action.payload;
        },
        deleteSalary: (state, action) => {
            state.salarys = state.salarys.filter(
                (salary) => salary.id !== action.payload
            );
        },
    },
});

export const { setSalary, setSalarys, deleteSalary } = salaryReducer.actions;

export default salaryReducer.reducer;
