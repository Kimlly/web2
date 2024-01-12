import React from 'react'

function Report() {
  return (
    <>
    <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="ms-3 mt-2 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 sm:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
  <span class="sr-only">Open sidebar</span>
  <svg class="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
  </svg>
</button>

<aside id="default-sidebar" class="fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full transition-transform sm:translate-x-0" aria-label="Sidebar">
  <div class="h-full overflow-y-auto bg-gray-50 px-3 py-4 dark:bg-gray-800">
    <ul class="space-y-2 font-medium">
      <li>
        <a href="#" class="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
          <svg class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
            <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
            <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
          </svg>
          <span class="ms-3">Report</span>
        </a>
      </li>
      <li>
        <a href="#" class="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
          <svg class="h-5 w-5 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
          </svg>
          <span class="ms-3 flex-1 whitespace-nowrap">Inbox</span>
          <span class="ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-blue-100 p-3 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">3</span>
        </a>
      </li>
      <li>
        <a href="#" class="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
          <svg class="h-5 w-5 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
            <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
          </svg>
          <span class="ms-3 flex-1 whitespace-nowrap">Manage Users</span>
        </a>
      </li>
      <li>
        <a href="#" class="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
          <svg class="h-5 w-5 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
          </svg>
          <span class="ms-3 flex-1 whitespace-nowrap">Sign Out</span>
        </a>
      </li>
    </ul>
  </div>
</aside>

<div class="bg-gray-900 p-4 sm:ml-64">
  <div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700">
    <ul class="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
      <li class="pb-3 sm:pb-4">
        <div class="flex items-center space-x-4 rtl:space-x-reverse">
          <div class="flex-shrink-0">
            <img class="h-8 w-8 rounded-full" src="https://i.pinimg.com/564x/e6/b1/46/e6b146d4eec4e917f81be6b22ef4ba46.jpg" alt="Neil image" />
          </div>
          <div class="min-w-0 flex-1">
            <p class="truncate text-sm font-medium text-gray-900 dark:text-white">Kao Sannymol</p>
            <p class="truncate text-sm text-gray-500 dark:text-gray-400">Art Title</p>
          </div>
          <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            <a class="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800" href="#">2</a>
          </div>
        </div>
      </li>
      <li class="py-3 sm:py-4">
        <div class="flex items-center space-x-4 rtl:space-x-reverse">
          <div class="flex-shrink-0">
            <img class="h-8 w-8 rounded-full" src="https://i.pinimg.com/564x/24/73/c0/2473c024b55a2ad96677ea189c1df227.jpg" alt="Neil image" />
          </div>
          <div class="min-w-0 flex-1">
            <p class="truncate text-sm font-medium text-gray-900 dark:text-white">Pech Sovathana</p>
            <p class="truncate text-sm text-gray-500 dark:text-gray-400">Art Title</p>
          </div>
          <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
             <a class="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800" href="#">2</a>
          </div>
        </div>
      </li>
      <li class="py-3 sm:py-4">
        <div class="flex items-center space-x-4 rtl:space-x-reverse">
          <div class="flex-shrink-0">
            <img class="h-8 w-8 rounded-full" src="https://i.pinimg.com/564x/fe/64/83/fe6483bcbdc84e60ab339b011436c83a.jpg" alt="Neil image" />
          </div>
          <div class="min-w-0 flex-1">
            <p class="truncate text-sm font-medium text-gray-900 dark:text-white">Y Kimly</p>
            <p class="truncate text-sm text-gray-500 dark:text-gray-400">Art Title</p>
          </div>
          <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
             <a class="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800" href="#">2</a>
          </div>
        </div>
      </li>
      <li class="py-3 sm:py-4">
        <div class="flex items-center space-x-4 rtl:space-x-reverse">
          <div class="flex-shrink-0">
            <img class="h-8 w-8 rounded-full" src="https://i.pinimg.com/564x/99/b5/0d/99b50d42f01e9d289acd01e17cd4456a.jpg" alt="Neil image" />
          </div>
          <div class="min-w-0 flex-1">
            <p class="truncate text-sm font-medium text-gray-900 dark:text-white">Soy Vitou</p>
            <p class="truncate text-sm text-gray-500 dark:text-gray-400">Art Title</p>
          </div>
          <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
             <a class="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800" href="#">2</a>
          </div>
        </div>
      </li>
      <li class="pb-0 pt-3 sm:pt-4">
        <div class="flex items-center space-x-4 rtl:space-x-reverse">
          <div class="flex-shrink-0">
            <img class="h-8 w-8 rounded-full" src="https://i.pinimg.com/564x/be/d6/7e/bed67e9496d695879ef00c1340684fbd.jpg" alt="Neil image" />
          </div>
          <div class="min-w-0 flex-1">
            <p class="truncate text-sm font-medium text-gray-900 dark:text-white">In Sothiry</p>
            <p class="truncate text-sm text-gray-500 dark:text-gray-400">Art Title</p>
          </div>
          <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"> <a class="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800" href="#">2</a></div>
        </div>
      </li>
    </ul>
  </div>
</div>
</>
  )
}

export default Report