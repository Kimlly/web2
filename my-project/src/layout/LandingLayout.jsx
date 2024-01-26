import React from 'react';
import Footer from '../component/footer';
import Navbar from '../component/navbar';
import { UserAuth } from '../context/AuthContext';

function LandingLayout({ children }) {
  return (
    <>
      <div className='flex flex-col'>
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
}

export default LandingLayout;
