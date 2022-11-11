import React from "react";
import Navbar from "./components/navbar/Navbar";
import Nav from "./components/navbar/Nav";
import Employee from "./components/Employee/Employee";

const NavListArray = [
  "Employee",
  "Bank Name",
  "Customer",
  "Comm-Table"
  // "W-Agent1",
  // "W-Agent2",
  // "True Money"
  // "Exchange",
  // "Adjustment",
  // "Expensce",
  // "Reports",
  // "Accounts"
];
function App() {
  return (
    <>
      <Navbar lists={NavListArray} />
      {/* <Employee /> */}
      {/* <Nav /> */}
    </>
  );
}

export default App;
