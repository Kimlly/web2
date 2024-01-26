import React from 'react';
import Swal from 'sweetalert2';
import AdminpageLayout from '../layout/AdminpageLayout';

function Report() {
  const handleDelete = (artistName) => {
    Swal.fire({
      title: 'Are you sure?',
      text: `Do you want to delete ${artistName}'s art?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        // Perform delete action here
        Swal.fire('Deleted!', `${artistName}'s art has been deleted.`, 'success');
        // Show additional alert
      }
    });
  };

  return (
    <AdminpageLayout>
      <div className="bg-gray-900 p-4 sm:ml-64">
        <div className="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700">
          <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
            {/* Repeat the following block for each artist */}
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="flex-shrink-0">
                  <img className="h-8 w-8 rounded-full" src="artist_image_url" alt="Artist Image" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Artist Name</p>
                  <p className="truncate text-sm text-gray-500 dark:text-gray-400">Art Title</p>
                </div>
                <div className="relative inline-block text-left">
                  <button
                    type="button"
                    className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-white bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-opacity-75 focus-visible:ring-white dark:focus-visible:ring-gray-900"
                    id="options-menu"
                    aria-haspopup="true"
                    aria-expanded="true"
                    onClick={() => handleDelete('Artist Name')}
                  >
                    <span className="sr-only">Open options</span>
                    {/* Dots icon for dropdown */}
                    <svg
                      className="h-5 w-5 text-gray-400 dark:text-gray-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </li>
            {/* End of repeated block */}
          </ul>
        </div>
      </div>
    </AdminpageLayout>
  );
}

export default Report;
