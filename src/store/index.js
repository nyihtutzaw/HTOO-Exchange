import { configureStore } from '@reduxjs/toolkit'
import authReducer from './reducer.auth.js'
import roleReducer from './reducer.role.js';
import branchReducer from './reducer.branch.js';
import  employeeReducer  from './reducer.employee.js';

const store = configureStore({
    reducer: {
        auth: authReducer,
        role: roleReducer,
        branch: branchReducer,
        employee: employeeReducer
    }
})
export default store