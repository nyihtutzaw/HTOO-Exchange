import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import "./i18n";
// import BankName from "./components/bank_name/CreateBankName";
// import Navbar from "./components/navbar/Navbar";
// import Login_form from "./pages/LoginForm";
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
import CreateExchange from "./components/exchange/ExchangeLists";
import CreateBankName from "./components/bank_name/CreateBankName";
import BranchTransferList from "./components/branchTransfer/BranchTransferList";
import LoginForm from "./pages/LoginForm";
// import ListExchange from "./components/exchange/ListExchange";
import ExchangeCreate from "./components/exchange/ExchangeCreate";
import ExchangeEdit from "./components/exchange/ExchangeEdit";
import TotalMoney from "./components/bank_money/TotalMoney";
import TrueMoney from "./components/bank_money/TrueMoney";
import YomaBank from "./components/bank_money/YomaBank";
import ListExchange from "./components/exchange/ListExchange";
import ExchangeLists from "./components/exchange/ExchangeLists";
import ListWave from "./components/wave/ListWave";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth/login" element={<LoginForm />} />
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
          <Route path="/admin/create-bank" element={<CreateBankName />} />
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
          <Route path="/admin/list-branch-transfer" element={<BranchTransferList />} />

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


        </Route>
      </Routes>
    </Router>
  );
}

export default App;
