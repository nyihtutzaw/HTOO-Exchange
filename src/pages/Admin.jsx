import { Box } from "@mui/material";
import Nav from "../components/navbar/Nav";
import { Routes, Route, Navigate } from "react-router-dom";
import Employee from "../components/Employee/Employee";
import Customer from "../components/customer/Customer";
import BankName from "../components/bank_name/BankName";
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
      <Nav />

      <Routes>
        <Route
          path="/"
          element={<Navigate to="/admin/dashboard"></Navigate>}
        ></Route>
        <Route path="employee" element={<Employee />} />
        <Route path="customer" element={<Customer />} />
        <Route path="bank-name" element={<BankName />} />
        {/* {pages.map((page) => (
          <Route exact path={page.route} element={page.element}></Route>
        ))} */}
      </Routes>
    </div>
  );
};
export default Admin;
