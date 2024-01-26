import React from 'react';
import Navbar from '../component/navbar';

function HomepageLayout({ children }) {
  return (
    <>
      <div className='flex flex-col'>
        <Navbar />
        {children}
      </div>
    </>
  );
}

export default HomepageLayout;
