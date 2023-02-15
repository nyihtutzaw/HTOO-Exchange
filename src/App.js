import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./i18n";
import NotificationContainer from "react-notifications/lib/NotificationContainer";
// import BankName from "./components/bank_name/CreateBankName";
// import Navbar from "./components/navbar/Navbar";
// import Login_form from "./pages/LoginForm";
// import AuthRoute from "./routers/AuthRoute";
import PirvateRoute from "./routers/PrivateRoute";
// import Admin from "./pages/Admin";
import CreateEmployee from "./pages/Employee/CreateEmployee";
import EditEmployee from "./pages/Employee/EditEmployee";
import EmployeeList from "./pages/Employee/EmployeeList";

import CreateAdmin from "./pages/Admin/CreateAdmin";
import EditAdmin from "./pages/Admin/EditAdmin";
import AdminList from "./pages/Admin/AdminList";

import CreateBank from "./pages/bank/CreateBank";
import EditBank from "./pages/bank/EditBank";
import BankList from "./pages/bank/BankList";

import CreateCustomer from "./pages/customer/CreateCustomer";
import EditCustomer from "./pages/customer/EditCustomer";
import CustomerList from "./pages/customer/CustomerList";

import CreateStaffSalary from "./pages/salary/CreateStaffSalary";
import EditStaffSalary from "./pages/salary/EditStaffSalary";
import SalaryList from "./pages/salary/SalaryList";

import CreateExpense from "./components/expense/CreateExpense";
import ExpenseList from "./components/expense/ExpenseList";

import CreateExpense from "./pages/expense/CreateExpense";
import ExpenseList from "./pages/expense/ExpenseList";
import CreateBranchTransfer from "./components/branchTransfer/CreateBranchTransfer";
import CreateWave from "./components/wave/CreateWave";
import CreateTrue from "./components/true/CreateTrue";

import BranchTransferList from "./components/branchTransfer/BranchTransferList";

// import ListExchange from "./components/exchange/ListExchange";
import ExchangeCreate from "./components/exchange/ExchangeCreate";
import ExchangeEdit from "./components/exchange/ExchangeEdit";
import TotalMoney from "./components/bank_money/TotalMoney";
import TrueMoney from "./components/bank_money/TrueMoney";
import YomaBank from "./components/bank_money/YomaBank";
// import ListExchange from "./components/exchange/ListExchange";
import ExchangeLists from "./components/exchange/ExchangeLists";
import ListWave from "./components/wave/ListWave";
import TransitionRecord from "./components/transition_record/TransitionRecord";

import CreateBranch from "./pages/branch/CreateBranch";
import EditBranch from "./pages/branch/EditBranch";
import BranchList from "./pages/branch/BranchList";
import LoginForm from "./pages/LoginForm";
import CreateRoleAccess from "./pages/roleAndAccess/CreateRoleAccess";
import EditRoleAccess from "./pages/roleAndAccess/EditRoleAccess";
import RoleAndAccessList from "./pages/roleAndAccess/RoleAndAccessList";

import AllowanceList from "./pages/allowance/AllowanceList";
import CreateAllowance from "./pages/allowance/CreateAllowance";
import EditAllowance from "./pages/allowance/EditAllowance";
import AddMoney from "./pages/bank/AddMoney";
import EditExpense from "./pages/expense/EditExpense";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth/login" element={<LoginForm />} />
        <Route element={<PirvateRoute />}>
          <Route
            path="/"
            element={<Navigate to="/admin/list-employee"></Navigate>}
          />
          {/* stack routes */}
          <Route path="/admin/create-employee" element={<CreateEmployee />} />
          <Route path="/admin/edit-employee/:id" element={<EditEmployee />} />
          <Route path="/admin/list-employee" element={<EmployeeList />} />

          {/* admin routes */}
          <Route path="/admin/create-admin" element={<CreateAdmin />} />
          <Route path="/admin/edit-admin/:id" element={<EditAdmin />} />
          <Route path="/admin/list-admin" element={<AdminList />} />

          {/* customer routes */}
          <Route path="/admin/create-customer" element={<CreateCustomer />} />
          <Route path="/admin/edit-customer/:id" element={<EditCustomer />} />
          <Route path="/admin/list-customer" element={<CustomerList />} />

          {/* bank routes */}
          <Route path="/admin/create-bank" element={<CreateBank />} />
          <Route path="/admin/edit-bank/:id" element={<EditBank />} />
          <Route path="/admin/add-money-to-bank/:id" element={<AddMoney />} />
          <Route path="/admin/list-bank" element={<BankList />} />
          {/* branch routes */}
          <Route path="/admin/create-branch" element={<CreateBranch />} />
          <Route path="/admin/edit-branch/:id" element={<EditBranch />} />
          <Route path="/admin/list-branch" element={<BranchList />} />
          {/* Role and  access routes */}
          <Route
            path="/admin/create-role-access"
            element={<CreateRoleAccess />}
          />
          <Route
            path="/admin/edit-role-access/:id"
            element={<EditRoleAccess />}
          />
          <Route
            path="/admin/list-role-access"
            element={<RoleAndAccessList />}
          />

          {/* stack salary routes */}
          <Route
            path="/admin/create-stack-salary"
            element={<CreateStaffSalary />}
          />
          <Route
            path="/admin/edit-stack-salary/:id"
            element={<EditStaffSalary />}
          />
          <Route
            path="/admin/list-stack-salary"
            element={<SalaryList />}
          />

          {/* expense rouetes */}
          <Route path="/admin/create-expense" element={<CreateExpense />} />
          <Route path="/admin/list-expense" element={<ExpenseList />} />
          <Route path="/admin/edit-expense/:id" element={<EditExpense />} />
          {/* branch transfer routes */}
          <Route
            path="/admin/create-branch-transfer"
            element={<CreateBranchTransfer />}
          />
          <Route
            path="/admin/list-branch-transfer"
            element={<BranchTransferList />}
          />

          {/* wave routes */}
          <Route path="/admin/create-wave" element={<CreateWave />} />
          <Route path="/admin/list-wave" element={<ListWave />} />

          {/* true routes */}
          <Route path="/admin/create-true" element={<CreateTrue />} />

          {/* exchange routes */}
          {/* <Route path="/admin/create-exchange" element={<CreateExchange />} /> */}
          <Route path="/admin/create-exchange" element={<ExchangeCreate />} />
          <Route path="/admin/edit-exchange" element={<ExchangeEdit />} />
          {/* <Route path="/admin/list-exchange" element={<ListExchange />} /> */}
          <Route path="/admin/list-exchange" element={<ExchangeLists />} />

          {/* bank_money_left */}
          <Route path="/admin/total-money" element={<TotalMoney />} />
          <Route path="/admin/true-money" element={<TrueMoney />} />
          <Route path="/admin/yoma-money" element={<YomaBank />} />

          {/* transition-records */}
          <Route
            path="/admin/list-transitions"
            element={<TransitionRecord />}
          />

          {/* allowance routes */}
          <Route path="/admin/create-allowance" element={<CreateAllowance />} />
          <Route path="/admin/edit-allowance/:id" element={<EditAllowance />} />
          <Route path="/admin/list-allowance" element={<AllowanceList />} />
        </Route>
      </Routes>
      <NotificationContainer />
    </Router>
  );
}

export default App;
