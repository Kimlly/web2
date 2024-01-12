/* eslint-disable react/prop-types */
import { Link, NavLink, useLocation } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { Fragment, useEffect, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Card from './card';
import { QuerySnapshot, collection, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../authentication/firebase';

function Navbar() {
  const { user } = UserAuth();
  const location = useLocation();
  const [data, setData] = useState([]);
  let [isOpen, setIsOpen] = useState(false);

  const [activePost, setActivePost] = useState('');

  function handleModal() {
    setIsOpen(!isOpen);
  }

  const isLandingpage = location.pathname === '/';

  const [searchInput, setSearchInput] = useState('');
  const searchRef = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (searchInput.length >= 1) {
      const q = query(collection(db, 'posts'), where('title', '>=', searchInput));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const res = [];
        querySnapshot.forEach((doc) => {
          res.push(doc.data());
        });

        setData(res.filter((item) => item.title.includes(searchInput)));
      });
      return () => {
        unsubscribe();
      };
    }
  }, [searchInput]);

  return (
    <nav className='bg-white border-gray-200 dark:bg-gray-900 relative'>
      <div className='flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4'>
        <Link to='/' className='flex items-center space-x-3 rtl:space-x-reverse'>
          {/* <img src='https://flowbite.com/docs/images/logo.svg' className='h-8' alt='Flowbite Logo' /> */}
          <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>MΣЯΛKI</span>
        </Link>
        {isLandingpage ? (
          <>
            <NavLink
              to='/team'
              activeclassname='text-blue-600' // Apply this class for the active link
              className='block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700'
            >
              Team
            </NavLink>
          </>
        ) : (
          <>
            <div id='mega-menu-icons' className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'>
              <ul className='flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse'>
                <li>
                  <NavLink
                    to='/homepage'
                    // Use  to match the  path
                    activeclassname='text-blue-600' // Apply this class for the active link
                    className='block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700'
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/createpage'
                    activeclassname='text-blue-600' // Apply this class for the active link
                    className='block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700'
                  >
                    Create
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/contact'
                    activeclassname='text-blue-600' // Apply this class for the active link
                    className='block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700'
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
              <Link
                to='/userpfpage'
                className='relative w-10 h-10 ml-10 border overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600'
              >
                <img src={user.pfImgURL} alt={user.email} />
                {/* <svg
                  className='absolute w-12 h-12 text-gray-400 -left-1'
                  fillRule='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path fillRule='evenodd' d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z' clipRule='evenodd'></path>
                </svg> */}
              </Link>
            </div>

            <form ref={searchRef} onClick={() => setIsModalOpen(true)}>
              <label htmlFor='default-search' className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'>
                Search
              </label>
              <div className='flex md:order-2'>
                <button
                  type='button'
                  data-collapse-toggle='navbar-search'
                  aria-controls='navbar-search'
                  aria-expanded='false'
                  className='md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1'
                >
                  <svg
                    className='w-5 h-5'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fillRule='none'
                    viewBox='0 0 20 20'
                  >
                    <path
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                    />
                  </svg>
                  <span className='sr-only'>Search</span>
                </button>

                <div className='relative hidden md:block'>
                  <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                    <svg
                      className='w-4 h-4 text-gray-500 dark:text-gray-400'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fillRule='none'
                      viewBox='0 0 20 20'
                    >
                      <path
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                      />
                    </svg>
                    <span className='sr-only'>Search icon</span>
                  </div>
                  <input
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    type='text'
                    id='search-navbar'
                    className='block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    placeholder='Search...'
                  />
                </div>
              </div>
            </form>
          </>
        )}
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} searchRef={searchRef}>
        <div>
          <h2>Search Result: {data.length}</h2>
          <div className='columns-6 mx-auto space-y-4 space-x-1 mt-2 md:mt-5'>
            {data.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  handleModal();
                  setActivePost(item);
                }}
                className='group relative rounded-lg overflow-hidden bg-gray-300 hover:scale-105'
              >
                <img className='height={300} width={200}' src={item.imageURL} alt='' />
              </div>
            ))}
          </div>
        </div>
      </Modal>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={handleModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black/25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className=' transform overflow-hidden rounded-2xl text-left align-middle shadow-xl transition-all'>
                  <div>
                    <Card data={activePost} />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      {/* {isOpen ? <div className='absolute top-20 left-0 w-full h-[80vh] shadow-2xl bg-white z-10 border-2'></div> : ''} */}
    </nav>
  );
}

export default Navbar;

const Modal = ({ isOpen, onClose, children, searchRef }) => {
  const modalRef = useRef();

  // Close the modal when clicking outside of it
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target) && !searchRef.current.contains(event.target)) {
      onClose();
    }
  };

  // Attach the click outside event listener
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  // Render the modal if it is open
  return isOpen ? (
    <div className='bg-white px-10 py-5 absolute z-10 w-full min-h-[500px] shadow-md'>
      <div className='mdal' ref={modalRef}>
        {children}
      </div>
    </div>
  ) : null;
};
