import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';
import { authSelectors } from "redux/auth";

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return isLoggedIn ? (
    children
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoute;
