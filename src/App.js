import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import BankName from "./components/bank_name/BankName";
import Navbar from "./components/navbar/Navbar";
// import Admin from "./pages/Admin";
// import Login from "./pages/Login";
import Login_form from "./pages/Login_form";
import AuthRoute from "./routers/AuthRoute";
import PirvateRoute from "./routers/PrivateRoute";
import Admin from "./pages/Admin";



function App() {
  return (
    <Router>
      {/* <Nav /> */}
      {/* <Navbar lists={lists} /> */}
      <Routes>
        {/* <Route path="admin/employee" element={<Employee />} /> */}
        {/*<Route path="/bank-name" element={<BankName />} />
        <Route path="/customer" element={<Customer />} /> */}
        <Route path="*" element={<Navigate to="/auth/login" />} />
        <Route
          path="/auth/login"
          element={
            <PirvateRoute>
              <Login_form />
            </PirvateRoute>
          }
        />
        <Route
          path="/admin/*"
          element={
            <AuthRoute>
              <Admin />
              {/* <Nav /> */}
            </AuthRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
