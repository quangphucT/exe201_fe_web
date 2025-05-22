
import { Navigate } from 'react-router-dom';
import type { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
    const token = useSelector((store: RootState) => store?.user?.token); // hoặc state.auth.user
    const role = useSelector((store: RootState) => store?.user?.role);
    if (token && role !== 'ADMIN') {
      return <Navigate to="/home" replace />
    }
    return children
};

export default PrivateRoute;