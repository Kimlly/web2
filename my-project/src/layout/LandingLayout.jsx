import React from 'react'
import Navbar from '../component/navbar'
import Footer from '../component/footer'

function LandingLayout({ children }) {
  return (
    <>
        <div className='flex flex-col'>
            <Navbar />
            {children}
            <Footer />
        </div>
    </>
  )
}

export default LandingLayout