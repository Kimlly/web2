import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [clickHome, setClickHome] = useState(false)
  const [clickContact, setClickContact] = useState(false)
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
    <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
      <a href="https://flowbite.com" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">MΣЯΛKI</span>
      </a>
      
      <div id="mega-menu-icons" className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
        <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
          <li>
            <Link to='/' 
              className="block py-2 px-3 text-blue-600 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              aria-current="page">Home</Link>
          </li>
          <li>
            <Link to = '/contact'
              className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
          </li>
          <li>
            <Link to='/team'
              className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Team</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  )
}

export default Navbar