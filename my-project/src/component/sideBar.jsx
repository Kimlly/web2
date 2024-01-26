import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { auth } from '../authentication/firebase';
import { signOut } from 'firebase/auth';
import { UserAuth } from '../context/AuthContext';

function Sidebar() {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();
  // State to manage the visibility of the dropdown
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle the dropdown state
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const userSignOut = () => {
    logout();
    signOut(auth)
      .then(() => {
        navigate('/');
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <button
        data-drawer-target='default-sidebar'
        data-drawer-toggle='default-sidebar'
        aria-controls='default-sidebar'
        type='button'
        class='ms-3 mt-2 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 sm:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
      >
        <span class='sr-only'>Open sidebar</span>
        <svg class='h-6 w-6' aria-hidden='true' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
          <path
            clip-rule='evenodd'
            fill-rule='evenodd'
            d='M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z'
          ></path>
        </svg>
      </button>

      <aside
        id='default-sidebar'
        class='fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full transition-transform sm:translate-x-0'
        aria-label='Sidebar'
      >
        <div class='h-full overflow-y-auto bg-gray-50 px-3 py-4 dark:bg-gray-800'>
          <ul class='space-y-2 font-medium'>
            <li>
              <NavLink
                to='/report'
                className='group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
              >
                <svg
                  className='h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 22 21'
                >
                  <path d='M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z' />
                  <path d='M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z' />
                </svg>
<<<<<<< Updated upstream
                <span className="ms-3">Inbox</span>
=======
                <span className='ms-3'>Report</span>
>>>>>>> Stashed changes
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/inbox'
                className='group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
              >
                <svg
                  className='h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 22 21'
                >
                  <path d='m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z' />
                </svg>
                <span className='ms-3'>Inbox</span>
              </NavLink>
            </li>
            <li>
              <button
                type='button'
                onClick={toggleDropdown}
                class='flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                aria-controls='dropdown-example'
                data-collapse-toggle='dropdown-example'
              >
                <svg
                  class='flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 18 21'
                >
                  <path d='M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z' />
                </svg>
                <span class='flex-1 ms-3 text-left rtl:text-right whitespace-nowrap'>Accout</span>
                <svg class='w-3 h-3' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 10 6'>
                  <path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m1 1 4 4 4-4' />
                </svg>
              </button>
              <ul id='dropdown-example' className={`py-2 space-y-2 ${isDropdownOpen ? '' : 'hidden'}`}>
                <li>
                  <NavLink
                    to='/usertable'
                    // onClick={() => handleItemClick('User')}
                    className='flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                  >
                    User
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/artisttable'
                    // onClick={() => handleItemClick('Artist')}
                    className='flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                  >
                    Artist
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/admintable'
                    // onClick={() => handleItemClick('Admin')}
                    className='flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                  >
                    Admin
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink
                onClick={userSignOut}
                className='group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
              >
                <svg
                  className='h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 22 21'
                >
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3'
                  />
                </svg>
                <span className='ms-3'>Sign Out</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
