import { Navigate } from "react-router-dom";

const AuthRoute = ({ children }) => {
  const token = false;

  if (token) {
    return <Navigate to="/auth/login" replace />;
  }
  return children;
};
export default AuthRoute;
