import { Navigate, Outlet } from "react-router-dom";
import React from 'react'
import { getCache } from "../utils/cache";

const PirvateRoute = () => {
  const TOKEN = getCache('access_token');

  return TOKEN ? <Outlet /> : <Navigate to="/auth/login" replace />;

};
export default PirvateRoute;
