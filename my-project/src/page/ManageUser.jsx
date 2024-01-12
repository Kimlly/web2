import React from 'react'

function ManageUser() {
  return (
<>
    <div class="bg-gray-900 p-4 sm:ml-64"/>
  <div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700">
    <div class="w-full rounded-md bg-white p-8">
      <div class="flex items-center justify-between pb-6">
        <div class="-mx-4 overflow-x-auto px-4 py-4 sm:-mx-8 sm:px-8">
          <div class="inline-block min-w-full overflow-hidden rounded-lg shadow">
            <table class="min-w-full leading-normal">
              <thead>
                <tr>
                  <th class="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">Name</th>
                  <th class="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">products</th>
                  <th class="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">Created at</th>
                  <th class="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">QRT</th>
                  <th class="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">Status</th>
                </tr>
              </thead>
              <tbody>
             

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
                <tr>
                  <td class="bg-white px-5 py-5 text-sm">
                    <div class="flex items-center">
                      <div class="h-10 w-10 flex-shrink-0">
                        <img class="h-full w-full rounded-full" src="https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80" alt="" />
                      </div>
                      <div class="ml-3">
                        <p class="whitespace-no-wrap text-gray-900">Alonzo Cox</p>
                      </div>
                    </div>
                  </td>
                  <td class="bg-white px-5 py-5 text-sm">
                    <p class="whitespace-no-wrap text-gray-900">Admin</p>
                  </td>
                  <td class="bg-white px-5 py-5 text-sm">
                    <p class="whitespace-no-wrap text-gray-900">Jan 18, 2020</p>
                  </td>
                  <td class="bg-white px-5 py-5 text-sm">
                    <p class="whitespace-no-wrap text-gray-900">70</p>
                  </td>
                  <td class="bg-white px-5 py-5 text-sm">
                    <span class="relative inline-block px-3 py-1 font-semibold leading-tight text-red-900">
                      <span aria-hidden class="absolute inset-0 rounded-full bg-red-200 opacity-50"></span>
                      <span class="relative">Inactive</span>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="xs:flex-row xs:justify-between flex flex-col items-center">
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default ManageUser