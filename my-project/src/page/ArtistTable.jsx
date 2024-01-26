import React, { useEffect, useState } from 'react';
import AdminpageLayout from '../layout/AdminpageLayout';
import { onSnapshot, collection, query, where, deleteDoc, doc } from 'firebase/firestore';
import {  db } from '../authentication/firebase';

function ArtistTable() {
  const [users, setUsers] = useState([]);



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


  return (
    <AdminpageLayout>
      <div className='bg-gray-900 p-4 sm:ml-64'>
        <div className='rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700'>
          <div className='w-full rounded-md bg-white p-8'>
            <div className='flex items-center justify-between pb-6'>
              <div className='-mx-4 overflow-x-auto px-4 py-4 sm:-mx-8 sm:px-8'>
                <div className='inline-block min-w-full overflow-hidden rounded-lg shadow'>
                  <table className='min-w-full leading-normal'>
                    <thead>
                      <tr>
                        <th className='border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600'>
                          Name
                        </th>
                        <th className='border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600'>
                          Gmail
                        </th>
                        <th className='border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600'>
                          Created at
                        </th>
                        <th className='border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600'>
                          Post
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user) => (
                        <tr key={user.email}>
                          <td className='border-b border-gray-200 bg-white px-5 py-5 text-sm'>
                            <div className='flex items-center'>
                              <div className='h-10 w-10 flex-shrink-0'>
                                <img className='h-full w-full rounded-full' src={user.pfImgURL} alt='' />
                              </div>
                              <div className='ml-3'>
                                <p className='whitespace-no-wrap text-gray-900'>{user.username}</p>
                              </div>
                            </div>
                          </td>
                          <td className='border-b border-gray-200 bg-white px-5 py-5 text-sm'>
                            <p className='whitespace-no-wrap text-gray-900'>{user.email}</p>
                          </td>
                          <td className='border-b border-gray-200 bg-white px-5 py-5 text-sm'>
                            <p className='whitespace-no-wrap text-gray-900'>{user.createdAt}</p>
                          </td>
                          <td className='border-b border-gray-200 bg-white px-5 py-5 text-sm'>
                            <p className='whitespace-no-wrap text-gray-900'>30</p>
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
  );
}

export default ArtistTable;
