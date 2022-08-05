
import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';
// import { authSelectors } from "redux/auth";
import { getIsLoggedIn } from "redux/auth/auth-slice";

export default function ProtectedRoute ({ children })  {
  const isLoggedIn = useSelector(getIsLoggedIn);
  // const isFetching = useSelector(authSelectors.getIsFetching);
  console.log(isLoggedIn);

  return isLoggedIn ? children : <Navigate to="/login" replace={true} />
}

// export default ProtectedRoute;
