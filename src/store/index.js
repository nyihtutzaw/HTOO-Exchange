import { configureStore } from '@reduxjs/toolkit'
import authReducer from './reducer.auth.js'
import roleReducer from './reducer.role.js';
import branchReducer from './reducer.branch.js';
import employeeReducer from './reducer.employee.js';
import customerReducer from './reducer.customer.js';
import adminReducer from './reducer.admin.js';

const store = configureStore({
    reducer: {
        auth: authReducer,
        admin: adminReducer,
        role: roleReducer,
        branch: branchReducer,
        employee: employeeReducer,
        customer: customerReducer
    }
})
export default store