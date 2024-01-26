import React, { useEffect } from 'react';
import Sidebar from '../component/sideBar';
import Navbar from '../component/navbar';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function AdminpageLayout({ children }) {
  const { user } = UserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      if (user.role !== 'admin') {
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
      <div className='flex flex-col'>
        <Navbar />
        {children}
        <Sidebar />
      </div>
    </>
  );
}

export default AdminpageLayout;
