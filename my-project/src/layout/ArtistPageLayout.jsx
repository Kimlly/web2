import { useNavigate } from 'react-router-dom';
import Navbar from '../component/navbar';
import Sidebar from '../component/sideBar';
import { UserAuth } from '../context/AuthContext';
import { useEffect } from 'react';

const ArtistPageLayout = ({ children }) => {
  const { user } = UserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      if (user.role !== 'artist') {
        navigate('/');
      }
    }
  }, [user, navigate]);

  if (!user) {
    return (
      <>
        <h1>Checking Auth</h1>
      </>
    );
  }

  return (
    <>
      <div className='flex flex-col'>{children}</div>
    </>
  );
};

export default ArtistPageLayout;
