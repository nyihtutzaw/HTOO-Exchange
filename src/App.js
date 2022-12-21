import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import BankName from "./components/bank_name/CreateBankName";
// import Navbar from "./components/navbar/Navbar";
import Login_form from "./pages/Login_form";
// import AuthRoute from "./routers/AuthRoute";
import PirvateRoute from "./routers/PrivateRoute";
// import Admin from "./pages/Admin";
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
import CreateWave from "./components/wave/CreateWave";
import CreateTrue from "./components/true/CreateTrue";
import CreateExchange from "./components/exchange/CreateExchange";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth/login" element={<Login_form />} />
        <Route element={<PirvateRoute />} >
          <Route
            path="/"
            element={<Navigate to="/admin/list-employee"></Navigate>}
          />

          {/* stack routes */}
          <Route path="/admin/create-employee" element={<CreateEmployee />} />
          <Route path="/admin/edit-employee" element={<EditEmployee />} />
          <Route path="/admin/list-employee" element={<EmployeeList />} />
          {/* customer routes */}
          <Route path="/admin/create-customer" element={<CreateCustomer />} />
          <Route path="/admin/edit-customer" element={<EditCustomer />} />
          <Route path="/admin/list-customer" element={<CustomerList />} />

          {/* bank routes */}
          <Route path="/admin/create-bank" element={<BankName />} />
          <Route path="/admin/edit-bank" element={<EditBankName />} />
          <Route path="/admin/list-bank" element={<BankNameList />} />
          {/* branch routes */}
          <Route path="/admin/create-branch" element={<CreateBranch />} />
          <Route path="/admin/edit-branch" element={<EditBranch />} />
          <Route path="/admin/list-branch" element={<BranchList />} />
          {/* Role and  access routes */}
          <Route path="/admin/create-role-access" element={<CreateRoleAccess />} />
          <Route path="/admin/list-role-access" element={<RoleAndAccessList />} />

          {/* stack salary routes */}
          <Route path="/admin/create-stack-salary" element={<CreateStackSalary />} />
          <Route path="/admin/edit-stack-salary" element={<EditStackSalary />} />
          <Route path="/admin/list-stack-salary" element={<StackSalaryList />} />

          {/* expense rouetes */}
          <Route path="/admin/create-expense" element={<CreateExpense />} />
          <Route path="/admin/list-expense" element={<ExpenseList />} />
          {/* branch transfer routes */}
          <Route path="/admin/create-branch-transfer" element={<CreateBranchTransfer />} />

          {/* wave routes */}
          <Route path="/admin/create-wave" element={<CreateWave />} />
          {/* true routes */}
          <Route path="/admin/create-true" element={<CreateTrue />} />
          {/* exchange routes */}
          <Route path="/admin/create-exchange" element={<CreateExchange />} />


        </Route>
      </Routes>
    </Router>
  );
}

export default App;
