import React from 'react'
import Navbar2 from '../component/navbar2'
function Artistlayout({children}) {
  return (
    <>
        <div className='flex flex-col'>
            <Navbar2 />
            {children}
        </div>
    </>
  )
}

export default Artistlayout