import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../authentication/firebase';
import { UserAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const {user } = UserAuth();
  const navigate = useNavigate();


  onAuthStateChanged(auth, (currentUser) => {
    if (!currentUser) {
      navigate('/');
      return;
    }
    else {
      return children; // Allow access to the protected route (create page)
    }
  });

  return children;
  
};

export default ProtectedRoute;
