import { Navigate } from 'react-router-dom';
import type { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';

const PublicRoute = ({ children }) => {
  const token = useSelector((store: RootState) => store?.user?.token); // hoặc state.auth.user
  return token ? <Navigate to="/home" replace /> : children;
};

export default PublicRoute;