import React from 'react'
import Navbar1 from '../component/navbar1'
import Footer from '../component/footer'

function HomepageLayout({ children }) {
  return (
    <>
        <div className='flex flex-col'>
            <Navbar1 />
            {children}
        </div>
    </>
  )
}

export default HomepageLayout