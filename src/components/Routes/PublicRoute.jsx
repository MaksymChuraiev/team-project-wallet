import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/auth-slice';
import { authSelectors } from 'redux/auth';

export default function PublicRoute({ children, restricted = false }) {
    const isLoggedIn = useSelector(getIsLoggedIn);
    const isRefreshing = useSelector(authSelectors.getIsFetching);
  const shouldRedirect = isLoggedIn && restricted && !isRefreshing;
  return shouldRedirect ? (
    <Navigate to="/home-tab" />
  ) : (
    children
  );
}