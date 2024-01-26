import { onAuthStateChanged } from 'firebase/auth';
import { Outlet, useNavigate } from 'react-router-dom';
import { auth } from '../authentication/firebase';

const PrivateRoute = () => {
  const navigate = useNavigate();
  onAuthStateChanged(auth, (currentUser) => {
    return currentUser ? <Outlet /> : navigate('/login');
  });
};

export default PrivateRoute;
