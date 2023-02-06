// // import { Box } from "@mui/material";
// // import Nav from "../components/navbar/Nav";
// import { Routes, Route, Navigate } from "react-router-dom";
// import CreateEmployee from "../components/Employee/CreateEmployee";
// // import Customer from "../components/customer/Customer";
// import BankName from "../components/bank_name/CreateBankName";
// import Navbar from "../components/navbar/Navbar";
// import EditEmployee from "../components/Employee/EditEmployee";
// import CreateCustomer from "../components/customer/CreateCustomer";
// import EditCustomer from "../components/customer/EditCustomer";
// import EditBankName from "../components/bank_name/EditBankName";
// import CreateBranch from "../components/branch/CreateBranch";
// import EditBranch from "../components/branch/EditBranch";
// import CreateRoleAccess from "../components/roleAndAccess/CreateRoleAccess";
// import CreateStackSalary from "../components/stackSalary/CreateStackSalary";
// import EditStackSalary from "../components/stackSalary/EditStackSalary";
// import CreateExpense from "../components/expense/CreateExpense";
// import CreateBranchTransfer from "../components/branchTransfer/CreateBranchTransfer";
// import EmployeeList from "../components/Employee/EmployeeList";
// import CustomerList from "../components/customer/CustomerList";
// import BankNameList from "../components/bank_name/BankNameList";
// import BranchList from "../components/branch/BranchList";
// import RoleAndAccessList from "../components/roleAndAccess/RoleAndAccessList";
// import StackSalaryList from "../components/stackSalary/StackSalaryList";
// import ExpenseList from "../components/expense/ExpenseList";
// // import { Navigate } from "react-router-dom";

// // const pages = [
// //   {
// //     name: "Employee",
// //     route: "/admin/employee",
// //     element: <Employee />
// //   }
// // ];

// const Admin = () => {
//   return (
//     <div>
//       {/* <Nav /> */}
//       <Navbar />
//       <Routes>
//         <Route
//           path="/"
//           element={<Navigate to="/admin/list-employee"></Navigate>}
//         ></Route>
//         {/* stack routes */}
//         <Route path="create-employee" element={<CreateEmployee />} />
//         <Route path="edit-employee" element={<EditEmployee />} />
//         <Route path="list-employee" element={<EmployeeList />} />
//         {/* customer routes */}
//         <Route path="create-customer" element={<CreateCustomer />} />
//         <Route path="edit-customer" element={<EditCustomer />} />
//         <Route path="list-customer" element={<CustomerList />} />

//         {/* bank routes */}
//         <Route path="create-bank" element={<BankName />} />
//         <Route path="edit-bank" element={<EditBankName />} />
//         <Route path="list-bank" element={<BankNameList />} />
//         {/* branch routes */}
//         <Route path="create-branch" element={<CreateBranch />} />
//         <Route path="edit-branch" element={<EditBranch />} />
//         <Route path="list-branch" element={<BranchList />} />
//         {/* Role and  access routes */}
//         <Route path="create-role-access" element={<CreateRoleAccess />} />
//         <Route path="list-role-access" element={<RoleAndAccessList />} />

//         {/* stack salary routes */}
//         <Route path="create-stack-salary" element={<CreateStackSalary />} />
//         <Route path="edit-stack-salary" element={<EditStackSalary />} />
//         <Route path="list-stack-salary" element={<StackSalaryList />} />

//         {/* expense rouetes */}
//         <Route path="create-expense" element={<CreateExpense />} />
//         <Route path="list-expense" element={<ExpenseList />} />
//         {/* branch transfer routes */}
//         <Route path="create-branch-transfer" element={<CreateBranchTransfer />} />
//         {/* {pages.map((page) => (
//           <Route exact path={page.route} element={page.element}></Route>
//         ))} */}
//       </Routes>
//     </div>
//   );
// };
// export default Admin;
