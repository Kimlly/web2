import React, { useState, useEffect } from 'react';
import AdminpageLayout from '../layout/AdminpageLayout';
import {
  onSnapshot,
  collection,
  query,
  where,
  deleteDoc,
  updateDoc,
  doc,
  getDocs,
} from 'firebase/firestore';
import { db } from '../authentication/firebase';
import Swal from 'sweetalert2';
import { UserAuth } from '../context/AuthContext';

function Inbox() {
  const { user } = UserAuth();
  const [requests, setRequests] = useState([]);
  // Use an object to manage the dropdown state for each request
  const [dropdownStates, setDropdownStates] = useState({});

  // Function to toggle the dropdown state for a specific request
  const toggleDropdown = (requestId) => {
    setDropdownStates((prevStates) => {
      const isOpen = prevStates[requestId];
      const newState = { ...prevStates, [requestId]: !isOpen };

      if (!isOpen) {
        // If the clicked dropdown is closed, close all others
        Object.keys(newState).forEach((key) => {
          if (key !== requestId) {
            newState[key] = false;
          }
        });
      }

      return newState;
    });
  };

  useEffect(() => {
    const requestsCollection = collection(db, 'requests'); // Replace 'requests' with your actual collection name

    const unsubscribe = onSnapshot(requestsCollection, (snapshot) => {
      const requestsData = [];
      snapshot.forEach((doc) => {
        requestsData.push({ id: doc.id, ...doc.data() });
      });
      // Filter out approved requests
      const pendingRequests = requestsData.filter((request) => !request.approved);
      setRequests(pendingRequests);
    });

    return () => unsubscribe();
  }, []); // useEffect dependency array is empty, so it runs once on component mount

  const handleDelete = async (request) => {
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
          await deleteDoc(doc(db, 'requests', request.id));

          Swal.fire('Deleted!', 'User has been deleted.', 'success');
        } catch (error) {
          console.error('Error deleting user:', error);
          Swal.fire('Error', 'Failed to delete user.', 'error');
        }
      }
    });
  };

  const handleApprove = async (request) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This will approve the request!',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, approve it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          // Update request in Firestore to mark it as approved
          await updateDoc(doc(db, 'requests', request.id), {
            approved: true,
          });

          // Ensure that request.user.email is defined before proceeding with the query
          if (request.user && request.user.email) {
            // Find the user based on email
            const userQuery = query(
              collection(db, 'users'),
              where('email', '==', request.user.email)
            );
            const userQuerySnapshot = await getDocs(userQuery);

            if (userQuerySnapshot.docs.length === 1) {
              const userId = userQuerySnapshot.docs[0].id;

              console.log('Found user in the users collection:', userQuerySnapshot.docs[0].data());

              // Change the role of the user who submitted the request to "artist"
              await updateDoc(doc(db, 'users', userId), {
                role: 'artist',
              });

              // Inform the admin about successful approval
              Swal.fire('Approved!', 'The request has been approved.', 'success');
            } else {
              console.error('User not found in the users collection:', request.user.email);
              Swal.fire('Error', 'Failed to find user in the users collection.', 'error');
            }
          } else {
            console.error('User email is undefined in the request');
            Swal.fire('Error', 'User email is undefined in the request.', 'error');
          }
        } catch (error) {
          console.error('Error approving request:', error);
          Swal.fire('Error', 'Failed to approve request.', 'error');
        }
      }
    });
  };
  

  return (
    <AdminpageLayout>
    <div>
    {requests.map((request) => (
      <div key={request.id} class="bg-gray-900 p-4 sm:ml-64">
    <div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700">
      <div class="flex items-start gap-2.5">
        <img class="h-8 w-8 rounded-full" src="https://scontent.fpnh2-2.fna.fbcdn.net/v/t39.30808-6/416094771_1122383675796641_1070414280810856505_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeG2Kqmic7wWnM759lhfDdCb5RuZMiQn1oXlG5kyJCfWhcLqOCD2HyD7xGg4ZjWpla5UfLfW2Am7dCHyRXxSLE6r&_nc_ohc=A5yhwqGQzPQAX86wYUm&_nc_ht=scontent.fpnh2-2.fna&oh=00_AfCnq-IHhp5s_UWl2cTHeyrx2z3u2bIZJbldylas_mh1Cg&oe=65A2D160" alt="Jese image" />
        <div class="leading-1.5 flex w-full max-w-[320px] flex-col rounded-e-xl rounded-es-xl border-gray-200 bg-gray-100 p-4 dark:bg-gray-700">
          <div class="flex items-center space-x-2.5 rtl:space-x-reverse">
            <span class="text-sm font-semibold text-gray-900 dark:text-white">{request.user.email || 'Unknown User'}</span>
            
            <span class="text-sm font-normal text-gray-500 dark:text-gray-400">11:46</span>
          </div>
          <p class="py-2.5 text-sm font-normal text-gray-900 dark:text-white">{request.description}</p>
          
        </div>
        <button 
        id={`dropdownMenuIconButton_${request.id}`}
        onClick={() => toggleDropdown(request.id)}
        data-dropdown-toggle={`dropdownDots_${request.id}`}
        data-dropdown-placement="bottom-start" class="inline-flex items-center self-center rounded-lg bg-white p-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-50 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800 dark:focus:ring-gray-600" type="button">
          <svg class="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
            <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
          </svg>
        </button>
        <div 
        id={`dropdownDots_${request.id}`}
        className={`py-2 space-y-2 ${dropdownStates[request.id] ? '' : 'hidden'}`}
        class="z-10 hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow dark:divide-gray-600 dark:bg-gray-700">
          <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconButton">
            <li>
              <button onClick={() => handleApprove(request)} href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Approve</button>
            </li>
            <li>
              <button onClick={() => handleDelete(request)} class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Delete</button>
            </li>
            
            
          </ul>
        </div>
      </div>
      
    </div>
  </div>
  ))}
  </div>
  </AdminpageLayout>
  )
}

export default Inbox