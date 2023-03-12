import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';

export default function PublicRoute() {
  const isLogined = useSelector(selectIsLoggedIn);

  if (isLogined) {
    return <Navigate to="/user" />;
  }

  return <Outlet />;
}
