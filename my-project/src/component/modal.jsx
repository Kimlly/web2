function Modal({ visible, onClose }) {
  
  if (!visible) return null;
  return (
    <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-10'>
      <form>
        <div className='bg-white p-3 rounded-3xl space-y-12 m-2 flex justify-center items-center'>
          <div className='w-max h-auto'>
            <h2 className='text-base font-semibold leading-7 text-gray-900'>Edit profile</h2>
            <p className='mt-1 text-sm leading-6 text-gray-600'>
              This information will be displayed publicly so be careful with what you share.
            </p>
            <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
              <div className='col-span-full'>
                <label htmlFor='photo' className='block text-sm font-medium leading-6 text-gray-900'>
                  Photo
                </label>
                <div className='mt-2 bg-gray-50 border border-gray-300 rounded-md flex items-center justify-between gap-x-3'>
                  <svg className='max-h-16 w-16 text-gray-300' viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'>
                    <path
                      fillRule='evenodd'
                      d='M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <button
                    type='button'
                    className='rounded-md bg-blue-500 text-white hover:bg-blue-600 px-2.5 py-1.5 mr-5 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300'
                  >
                    Change photo
                  </button>
                </div>
              </div>
            </div>

            <div className=''>
              <div className='pb-5'>
                <label htmlFor='username' className='block text-sm font-medium leading-6 text-gray-900'>
                  Username
                </label>
                <div className='mt-2'>
                  <input
                    type='text'
                    id='username'
                    placeholder=''
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    required
                  />
                </div>
              </div>

              <div className='py-5'>
                <label htmlFor='about' className='block text-sm font-medium leading-6 text-gray-900'>
                  About
                </label>
                <div className='mt-2'>
                  <textarea
                    id='about'
                    name='about'
                    rows='3'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  ></textarea>
                </div>
                <p className='mt-3 text-sm leading-6 text-gray-600'>Write a few sentences about yourself.</p>
              </div>

              

              <div className='mt-6 flex items-center justify-end gap-x-6'>
                <button onClick={onClose} type='button' className='text-sm font-semibold leading-6 text-gray-900'>
                  Close
                </button>
                <button
                  type='submit'
                  className='rounded-md bg-blue-500 text-white hover:bg-blue-600 px-3 py-2 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                >
                  Save change
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Modal;
