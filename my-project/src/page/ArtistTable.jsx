import React,{ useEffect, useState } from 'react'
import AdminpageLayout from '../layout/AdminpageLayout'
import { onSnapshot, collection,query, where } from 'firebase/firestore';
import { db } from '../authentication/firebase';
import { UserAuth } from '../context/AuthContext';
import Swal from 'sweetalert2';
function ArtistTable() {
  const [users, setUsers] = useState([]);

  const user = UserAuth();

  useEffect(() => {
    const usersCollection = collection(db, 'users'); // replace 'users' with your actual collection name

    const q = query(usersCollection, where('role', '==', 'artist'));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const usersData = [];
      snapshot.forEach((doc) => {
        usersData.push({ id: doc.id, ...doc.data() });
      });
      setUsers(usersData);
    });

    return () => unsubscribe();
  }, []); // useEffect dependency array is empty, so it runs once on component mount
  
  const handleDelete = async (userData) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to restore this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          // Delete user from Firestore
          await deleteDoc(doc(db, 'users', userData.id));
  
          // Delete user from Firebase Authentication
          const userAuth = await auth.getUserByEmail(userData.email);
          await auth.deleteUser(userAuth.uid);
  
          Swal.fire('Deleted!', 'User has been deleted.', 'success');
        } catch (error) {
          console.error('Error deleting user:', error);
          Swal.fire('Error', 'Failed to delete user.', 'error');
        }
      }
    });
  };
  
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
                    <p class="whitespace-no-wrap text-gray-900">30</p>
                  </td>
                  <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <button onClick={() => handleDelete(user)} type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
                  </td>
                </tr>
                
                ))} 
              </tbody>
            </table>
            
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