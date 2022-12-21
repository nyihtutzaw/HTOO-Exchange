import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import BankName from "./components/bank_name/CreateBankName";
import Navbar from "./components/navbar/Navbar";
// import Admin from "./pages/Admin";
// import Login from "./pages/Login";
import Login_form from "./pages/Login_form";
import AuthRoute from "./routers/AuthRoute";
import PirvateRoute from "./routers/PrivateRoute";
import Admin from "./pages/Admin";
import CreateEmployee from "./components/Employee/CreateEmployee";
import EditEmployee from "./components/Employee/EditEmployee";
import EmployeeList from "./components/Employee/EmployeeList";
import CreateCustomer from "./components/customer/CreateCustomer";
import EditCustomer from "./components/customer/EditCustomer";
import CustomerList from "./components/customer/CustomerList";
import EditBankName from "./components/bank_name/EditBankName";
import BankNameList from "./components/bank_name/BankNameList";
import CreateBranch from "./components/branch/CreateBranch";
import EditBranch from "./components/branch/EditBranch";
import BranchList from "./components/branch/BranchList";
import CreateRoleAccess from "./components/roleAndAccess/CreateRoleAccess";
import RoleAndAccessList from "./components/roleAndAccess/RoleAndAccessList";
import CreateStackSalary from "./components/stackSalary/CreateStackSalary";
import EditStackSalary from "./components/stackSalary/EditStackSalary";
import StackSalaryList from "./components/stackSalary/StackSalaryList";
import CreateExpense from "./components/expense/CreateExpense";
import ExpenseList from "./components/expense/ExpenseList";
import CreateBranchTransfer from "./components/branchTransfer/CreateBranchTransfer";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth/login" element={<Login_form />} />

        
        <Route path="/admin" element={<PirvateRoute />} >
          <Route
            path="/admin/*"
            element={<Navigate to="/admin/list-employee"></Navigate>}
          />
          {/* stack routes */}
          <Route path="create-employee" element={<CreateEmployee />} />
          <Route path="edit-employee" element={<EditEmployee />} />
          <Route path="list-employee" element={<EmployeeList />} />
          {/* customer routes */}
          <Route path="create-customer" element={<CreateCustomer />} />
          <Route path="edit-customer" element={<EditCustomer />} />
          <Route path="list-customer" element={<CustomerList />} />

          {/* bank routes */}
          <Route path="create-bank" element={<BankName />} />
          <Route path="edit-bank" element={<EditBankName />} />
          <Route path="list-bank" element={<BankNameList />} />
          {/* branch routes */}
          <Route path="create-branch" element={<CreateBranch />} />
          <Route path="edit-branch" element={<EditBranch />} />
          <Route path="list-branch" element={<BranchList />} />
          {/* Role and  access routes */}
          <Route path="create-role-access" element={<CreateRoleAccess />} />
          <Route path="list-role-access" element={<RoleAndAccessList />} />

          {/* stack salary routes */}
          <Route path="create-stack-salary" element={<CreateStackSalary />} />
          <Route path="edit-stack-salary" element={<EditStackSalary />} />
          <Route path="list-stack-salary" element={<StackSalaryList />} />

          {/* expense rouetes */}
          <Route path="create-expense" element={<CreateExpense />} />
          <Route path="list-expense" element={<ExpenseList />} />
          {/* branch transfer routes */}
          <Route path="create-branch-transfer" element={<CreateBranchTransfer />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
