import React from 'react'
import Sidebar from '../component/sideBar'
import Navbar from '../component/navbar'

function AdminpageLayout({children}) {
  return (
    <>
      <div className='flex flex-col'>
        <Navbar />
        {children}
        <Sidebar />
      </div>
    </>
  )
}

export default AdminpageLayout