import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../authentication/firebase';

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  onAuthStateChanged(auth, (currentUser) => {
    if (!currentUser) {
      navigate('/');
      return;
    }
  });

  return children;
};

export default ProtectedRoute;
