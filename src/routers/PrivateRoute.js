import { Navigate } from "react-router-dom";
const PirvateRoute = ({ children }) => {
  const token = false;

  if (!token) {
    return <Navigate to="/admin" replace />;
  }
  return children;
};
export default PirvateRoute;
