import React,{useState,useEffect} from 'react'
import AdminpageLayout from '../layout/AdminpageLayout'
import { onSnapshot, collection,query, where } from 'firebase/firestore';
import { db } from '../authentication/firebase';
import { UserAuth } from '../context/AuthContext';
function AdminTable() {
  const [users, setUsers] = useState([]);

  const user = UserAuth();

  useEffect(() => {
    const usersCollection = collection(db, 'users'); // replace 'users' with your actual collection name

    const q = query(usersCollection, where('role', '==', 'admin'));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const usersData = [];
      snapshot.forEach((doc) => {
        usersData.push({ id: doc.id, ...doc.data() });
      });
      setUsers(usersData);
    });

    return () => unsubscribe();
  }, []); // useEffect dependency array is empty, so it runs once on component mount
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
                  <th class="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">Gmail</th>
                  <th class="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">Created at</th>
                  <th class="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">Post</th>
                  <th class="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">Status</th>
                </tr>
              </thead>
              <tbody>
              {users.map((user) => (
                <tr>
                  <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <div class="flex items-center">
                      <div class="h-10 w-10 flex-shrink-0">
                        <img class="h-full w-full rounded-full" src={user.pfImgURL} alt="" />
                      </div>
                      <div class="ml-3">
                        <p class="whitespace-no-wrap text-gray-900">{user.username}</p>
                      </div>
                    </div>
                  </td>
                  <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p class="whitespace-no-wrap text-gray-900">{user.email}</p>
                  </td>
                  <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p class="whitespace-no-wrap text-gray-900">{user.createdAt}</p>
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
                
              ))}
                
              </tbody>
            </table>
            {/* <div class="xs:flex-row xs:justify-between flex flex-col items-center border-t bg-white px-5 py-5">
              <span class="xs:text-sm text-xs text-gray-900"> Showing 1 to 4 of 50 Entries </span>
              <div class="xs:mt-0 mt-2 inline-flex">
                <button class="rounded-l bg-indigo-600 px-4 py-2 text-sm font-semibold text-indigo-50 transition duration-150 hover:bg-indigo-500">Prev</button>
                &nbsp; &nbsp;
                <button class="rounded-r bg-indigo-600 px-4 py-2 text-sm font-semibold text-indigo-50 transition duration-150 hover:bg-indigo-500">Next</button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </AdminpageLayout>
  )
}

export default AdminTable