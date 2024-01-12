import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../authentication/firebase';

const ProtectedRoute = ({ children,role }) => {
  const navigate = useNavigate();
  onAuthStateChanged(auth, (currentUser) => {
    if (!currentUser) {
      navigate('/');
      return;
    }
    // Check if the user is in 'artist' mode
    else {
      return children; // Allow access to the protected route (create page)
    }
  });

  return children;
  
};

export default ProtectedRoute;
