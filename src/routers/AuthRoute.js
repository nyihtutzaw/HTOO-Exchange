import { Navigate, Outlet } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import { getToken } from "../utils/token"

const AuthRoute = ({ TOKEN }) => {
  // const token = true;
  // if (!token) {
  // // if (!token) {
  //   return <Navigate to="/auth/login" replace />;
  // }
  // return children;

  // const TOKEN = getToken();
  
  return TOKEN ? <Navigate to="/admin" /> : <Outlet />;
};
export default AuthRoute;
