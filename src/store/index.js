import { configureStore } from '@reduxjs/toolkit'
import authReducer from './reducer.auth.js'
import roleReducer from './reducer.role.js';
import branchReducer from './reducer.branch.js';

const store = configureStore({
    reducer: {
        auth: authReducer,
        role: roleReducer,
        branch: branchReducer,
    }
})
export default store