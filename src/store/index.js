import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducer.auth.js";
import roleReducer from "./reducer.role.js";
import branchReducer from "./reducer.branch.js";
import employeeReducer from "./reducer.employee.js";
import customerReducer from "./reducer.customer.js";
import adminReducer from "./reducer.admin.js";

import allowanceReducer from "./reducer.allowance.js";
import salaryReducer from "./reducer.salary.js";
import bankReducer from "./reducer.bank.js";
import expenseReducer from "./reducer.expense.js";
import exchangeReducer from "./reducer.exchange.js";
import waveMoneyTransferReducer from "./reducer.waveMoneyTransfer.js";
import trueMoneyTransferReducer from "./reducer.trueMoneyTransfer.js";
import cashWalletReducer from "./reducer.cashWallet.js";
import branchTransferReducer from "./reducer.branchTransfer.js";
import waveMoneyTransactionReducer from "./reducer.waveMoneyTransaction.js";

import trueMoneyTransactionReducer from "./reducer.trueMoneyTransaction.js";


const store = configureStore({
  reducer: {
    auth: authReducer,
    admin: adminReducer,
    role: roleReducer,
    branch: branchReducer,
    employee: employeeReducer,
    customer: customerReducer,
    salary: salaryReducer,
    bank: bankReducer,
    allowance: allowanceReducer,
    expense: expenseReducer,
    exchange: exchangeReducer,
    waveMoneyTransfer: waveMoneyTransferReducer,
    trueMoneyTransfer: trueMoneyTransferReducer,
    cashWallet: cashWalletReducer,
    branchTransfer: branchTransferReducer,
    waveMoneyTransaction: waveMoneyTransactionReducer,

    trueMoneyTransaction: trueMoneyTransactionReducer,

  },
});
export default store;
