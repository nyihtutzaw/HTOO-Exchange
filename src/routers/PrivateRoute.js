import { Navigate, Outlet } from "react-router-dom";
import React from 'react'
import { getToken } from "../utils/token"

const PirvateRoute = () => {
  const TOKEN = getToken();

  return TOKEN ? <Outlet /> : <Navigate to="/auth/login" replace />;

};
export default PirvateRoute;
