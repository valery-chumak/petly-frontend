import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';

export default function PrivateRoute() {
  const isLogined = useSelector(selectIsLoggedIn);

  if (!isLogined) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}
