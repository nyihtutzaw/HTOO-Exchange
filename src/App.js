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

import CreateExpense from "./pages/expense/CreateExpense";
import ExpenseList from "./pages/expense/ExpenseList";
import CreateBranchTransfer from "./pages/branchTransfer/CreateBranchTransfer";



import BranchTransferList from "./pages/branchTransfer/BranchTransferList";

// import ListExchange from "./components/exchange/ListExchange";

import TotalMoney from "./components/bank_money/TotalMoney";
import TrueMoney from "./components/bank_money/TrueMoney";

import TrueMoneyInvoice from "./pages/true/TrueMoneyInvoice";
import YomaBank from "./components/bank_money/YomaBank";
// import ListExchange from "./components/exchange/ListExchange";

import ListWave from "./pages/wave/WaveList";
import WaveInvoice from "./pages/wave/WaveInvoice";
import TransitionRecord from "./components/transition_record/TransitionRecord";

import CreateBranch from "./pages/branch/CreateBranch";
import EditBranch from "./pages/branch/EditBranch";
import BranchList from "./pages/branch/BranchList";
import LoginForm from "./pages/LoginForm";
import CreateRoleAccess from "./pages/roleAndAccess/CreateRoleAccess";
import EditRoleAccess from "./pages/roleAndAccess/EditRoleAccess";
import RoleAndAccessList from "./pages/roleAndAccess/RoleAndAccessList";
import Invoice from "./pages/invoice/Invoice";
import AllowanceList from "./pages/allowance/AllowanceList";
import CreateAllowance from "./pages/allowance/CreateAllowance";
import EditAllowance from "./pages/allowance/EditAllowance";
import AddMoney from "./pages/bank/AddMoney";
import EditExpense from "./pages/expense/EditExpense";

import ExchangeCreate from "./pages/exchange/ExchangeCreate";
import ExchangeEdit from "./pages/exchange/ExchangeEdit";
import ExchangeLists from "./pages/exchange/ExchangeLists";
import ExchangeInvoice from "./pages/exchange/ExchangeInvoice";

import WaveMoneyTransferList from "./pages/waveMoneyTransfer/WaveMoneyTransferList";
import CreateWaveMoneyTransfer from "./pages/waveMoneyTransfer/CreateWaveMoneyTransfer";
import EditWaveMoneyTransfer from "./pages/waveMoneyTransfer/EditWaveMoneyTransfer";

import TrueMoneyTransferList from "./pages/trueMoneyTransfer/TrueMoneyTransferList";
import CreateTrueMoneyTransfer from "./pages/trueMoneyTransfer/CreateTrueMoneyTransfer";
import EditTrueMoneyTransfer from "./pages/trueMoneyTransfer/EditTrueMoneyTransfer";

import CashWalletList from "./pages/cashWallet/CashWalletList";
import CreateCashWallet from "./pages/cashWallet/CreateCashWallet";
import EditBranchTransfer from "./pages/branchTransfer/EditBranchTransferr";
import ListTrue from "./pages/true/TrueList";

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
          <Route path="/admin/list-stack-salary" element={<SalaryList />} />

          {/* expense rouetes */}
          <Route path="/admin/create-expense" element={<CreateExpense />} />
          <Route path="/admin/list-expense" element={<ExpenseList />} />
          <Route path="/admin/edit-expense/:id" element={<EditExpense />} />
          {/* branch transfer routes */}
          <Route
            path="/admin/create-branch-transfer"
            element={<CreateBranchTransfer />}
          />

          {/* branch transfer */}
          <Route
            path="/admin/list-branch-transfer"
            element={<BranchTransferList />}
          />
          <Route
            path="/admin/edit-branch-transfer/:id"
            element={<EditBranchTransfer />}
          />

          {/* wave routes */}
          {/* <Route path="/admin/create-wave" element={<CreateWave />} /> */}
          <Route path="/admin/list-wave" element={<ListWave />} />
          <Route path="/admin/wave-invoice/:id" element={<WaveInvoice />} />



          {/* true routes */}
          <Route path="/admin/list-true" element={<ListTrue />} />

          {/* exchange routes */}
          {/* <Route path="/admin/create-exchange" element={<CreateExchange />} /> */}
          <Route path="/admin/create-exchange" element={<ExchangeCreate />} />
          <Route path="/admin/edit-exchange" element={<ExchangeEdit />} />
          {/* <Route path="/admin/list-exchange" element={<ListExchange />} /> */}
          <Route path="/admin/list-exchange" element={<ExchangeLists />} />
          <Route path="/admin/exchange-invoice/:id" element={<ExchangeInvoice />} />



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

          {/* wave money transfer routes */}
          <Route
            path="/admin/create-wave-money-transfer"
            element={<CreateWaveMoneyTransfer />}
          />
          <Route
            path="/admin/edit-wave-money-transfer/:id"
            element={<EditWaveMoneyTransfer />}
          />
          <Route
            path="/admin/list-wave-money-transfer"
            element={<WaveMoneyTransferList />}
          />

          {/* true money transfer routes */}
          <Route
            path="/admin/create-true-money-transfer"
            element={<CreateTrueMoneyTransfer />}
          />
          <Route
            path="/admin/edit-true-money-transfer/:id"
            element={<EditTrueMoneyTransfer />}
          />
          <Route
            path="/admin/list-true-money-transfer"
            element={<TrueMoneyTransferList />}
          />
          <Route
            path="/admin/truemoney-invoice/:id"
            element={<TrueMoneyInvoice />}
          />


          {/* cash wallet rouetes */}
          <Route
            path="/admin/create-cash-wallet"
            element={<CreateCashWallet />}
          />
          <Route path="/admin/list-cash-wallet" element={<CashWalletList />} />
          <Route path="/admin/invoice" element={<Invoice />} />
        </Route>
      </Routes>
      <NotificationContainer />
    </Router>
  );
}

export default App;
