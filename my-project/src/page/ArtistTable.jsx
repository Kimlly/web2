import React from 'react'
import AdminpageLayout from '../layout/AdminpageLayout'
function ArtistTable() {
  return (
    <AdminpageLayout>
<div class="bg-gray-900 p-4 sm:ml-64">
  <div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700">
    <div class="w-full rounded-md bg-white p-8">
      <div class="flex items-center justify-between pb-6">
        <div class="-mx-4 overflow-x-auto px-4 py-4 sm:-mx-8 sm:px-8">
          <div class="inline-block min-w-full overflow-hidden rounded-lg shadow">
            <table class="min-w-full leading-normal">
              <thead>
                <tr>
                  <th class="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">Name</th>
                  <th class="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">Role</th>
                  <th class="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">Created at</th>
                  <th class="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">Post</th>
                  <th class="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <div class="flex items-center">
                      <div class="h-10 w-10 flex-shrink-0">
                        <img class="h-full w-full rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80" alt="" />
                      </div>
                      <div class="ml-3">
                        <p class="whitespace-no-wrap text-gray-900">Vera Carpenter</p>
                      </div>
                    </div>
                  </td>
                  <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p class="whitespace-no-wrap text-gray-900">Admin</p>
                  </td>
                  <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p class="whitespace-no-wrap text-gray-900">Jan 21, 2020</p>
                  </td>
                  <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p class="whitespace-no-wrap text-gray-900">43</p>
                  </td>
                  <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <span class="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                      <span aria-hidden class="absolute inset-0 rounded-full bg-green-200 opacity-50"></span>
                      <span class="relative">Activo</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <div class="flex items-center">
                      <div class="h-10 w-10 flex-shrink-0">
                        <img class="h-full w-full rounded-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80" alt="" />
                      </div>
                      <div class="ml-3">
                        <p class="whitespace-no-wrap text-gray-900">Blake Bowman</p>
                      </div>
                    </div>
                  </td>
                  <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p class="whitespace-no-wrap text-gray-900">Editor</p>
                  </td>
                  <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p class="whitespace-no-wrap text-gray-900">Jan 01, 2020</p>
                  </td>
                  <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p class="whitespace-no-wrap text-gray-900">77</p>
                  </td>
                  <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <span class="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                      <span aria-hidden class="absolute inset-0 rounded-full bg-green-200 opacity-50"></span>
                      <span class="relative">Activo</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <div class="flex items-center">
                      <div class="h-10 w-10 flex-shrink-0">
                        <img class="h-full w-full rounded-full" src="https://images.unsplash.com/photo-1540845511934-7721dd7adec3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80" alt="" />
                      </div>
                      <div class="ml-3">
                        <p class="whitespace-no-wrap text-gray-900">Dana Moore</p>
                      </div>
                    </div>
                  </td>
                  <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p class="whitespace-no-wrap text-gray-900">Editor</p>
                  </td>
                  <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p class="whitespace-no-wrap text-gray-900">Jan 10, 2020</p>
                  </td>

                  <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p class="whitespace-no-wrap text-gray-900">64</p>
                  </td>
                  <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <span class="relative inline-block px-3 py-1 font-semibold leading-tight text-orange-900">
                      <span aria-hidden class="absolute inset-0 rounded-full bg-orange-200 opacity-50"></span>
                      <span class="relative">Suspended</span>
                    </span>
                  </td>
                </tr>
                
              </tbody>
            </table>
            <div class="xs:flex-row xs:justify-between flex flex-col items-center border-t bg-white px-5 py-5">
              <span class="xs:text-sm text-xs text-gray-900"> Showing 1 to 4 of 50 Entries </span>
              <div class="xs:mt-0 mt-2 inline-flex">
                <button class="rounded-l bg-indigo-600 px-4 py-2 text-sm font-semibold text-indigo-50 transition duration-150 hover:bg-indigo-500">Prev</button>
                &nbsp; &nbsp;
                <button class="rounded-r bg-indigo-600 px-4 py-2 text-sm font-semibold text-indigo-50 transition duration-150 hover:bg-indigo-500">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </AdminpageLayout>
  )
}

export default ArtistTable