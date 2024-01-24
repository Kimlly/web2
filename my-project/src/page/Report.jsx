import React from 'react'
import AdminpageLayout from '../layout/AdminpageLayout'

function Report() {
  return (

    <AdminpageLayout>
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
            
            
          </ul>
        </div>
      </div>
    </AdminpageLayout>
  )
}

export default Report