import { configureStore } from '@reduxjs/toolkit'
import authReducer from './reducer.auth.js'
import roleReducer from './reducer.role.js';
import branchReducer from './reducer.branch.js';
import employeeReducer from './reducer.employee.js';
import customerReducer from './reducer.customer.js';
import adminReducer from './reducer.admin.js';

import bankReducer from './reducer.bank.js';


import allowanceReducer from './reducer.allowance.js';


const store = configureStore({
    reducer: {
        auth: authReducer,
        admin: adminReducer,
        role: roleReducer,
        branch: branchReducer,
        employee: employeeReducer,
        customer: customerReducer,

        bank: bankReducer

        allowance: allowanceReducer,

    }
})
export default store