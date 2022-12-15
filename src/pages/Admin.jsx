// import { Box } from "@mui/material";
// import Nav from "../components/navbar/Nav";
import { Routes, Route, Navigate } from "react-router-dom";
import CreateEmployee from "../components/Employee/CreateEmployee";
// import Customer from "../components/customer/Customer";
import BankName from "../components/bank_name/BankName";
import Navbar from "../components/navbar/Navbar";
import EditEmployee from "../components/Employee/EditEmployee";
import CreateCustomer from "../components/customer/CreateCustomer";
import EditCustomer from "../components/customer/EditCustomer";
// import { Navigate } from "react-router-dom";

// const pages = [
//   {
//     name: "Employee",
//     route: "/admin/employee",
//     element: <Employee />
//   }
// ];

const Admin = () => {
  return (
    <div>
      {/* <Nav /> */}
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/admin/create-employee"></Navigate>}
        ></Route>
        {/* stack routes */}
        <Route path="create-employee" element={<CreateEmployee />} />
        <Route path="edit-employee" element={<EditEmployee />} />
        {/* customer routes */}
        <Route path="create-customer" element={<CreateCustomer />} />
        <Route path="edit-customer" element={<EditCustomer />} />

        {/* <Route path="customer" element={<Customer />} /> */}
        <Route path="bank-name" element={<BankName />} />
        {/* {pages.map((page) => (
          <Route exact path={page.route} element={page.element}></Route>
        ))} */}
      </Routes>
    </div>
  );
};
export default Admin;
