import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { collection, getDoc, doc,  getDocs as getDocsForQuery } from 'firebase/firestore';
import AdminpageLayout from '../layout/AdminpageLayout';
import { db } from '../authentication/firebase';

function Report() {
  const [reportedPosts, setReportedPosts] = useState([]);

  useEffect(() => {
    const fetchReportedPosts = async () => {
      try {
        // Replace 'CURRENT_USER_ID' with the actual user ID or use the logged-in user's ID
        const userId = 'CURRENT_USER_ID';
        const userDocRef = doc(db, 'users', userId);
        const userDocSnapshot = await getDoc(userDocRef);
        const userData = userDocSnapshot.data();
    
        if (userData && userData.reportedPosts) {
          // Fetch detailed information about reported posts from the 'reports' collection
          const reportedPostsPromises = userData.reportedPosts.map(async (reportedPostId) => {
            const reportDocRef = doc(db, 'reports', reportedPostId);
            const reportDocSnapshot = await getDoc(reportDocRef);
            const reportData = reportDocSnapshot.data();
    
            if (reportData) {
              // Fetch detailed information about the reported post from the 'posts' collection
              const postDocRef = doc(db, 'posts', reportData.postId);
              const postDocSnapshot = await getDoc(postDocRef);
              const postData = postDocSnapshot.data();
    
              if (postData) {
                // Fetch detailed information about the post owner from the 'users' collection
                const postOwnerDocRef = doc(db, 'users', postData.postOwner.uid);
                const postOwnerDocSnapshot = await getDoc(postOwnerDocRef);
                const postOwnerData = postOwnerDocSnapshot.data();
    
                return {
                  ...postData,
                  postOwner: postOwnerData,
                };
              }
            }
    
            return null;
          });
    
          const reportedPostsData = await Promise.all(reportedPostsPromises);
          setReportedPosts(reportedPostsData.filter(Boolean)); // Filter out any null values
        }
      } catch (error) {
        console.error('Error fetching reported posts:', error);
      }
    };
    

    fetchReportedPosts();
  }, []);

  const handleDelete = async (postId, artistName) => {
    Swal.fire({
      title: 'Are you sure?',
      text: `Do you want to delete ${artistName}'s art?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          // Delete post from the current user's reported posts array
          // Replace 'CURRENT_USER_ID' with the actual user ID or use the logged-in user's ID
          const userId = 'CURRENT_USER_ID';
          const userDocRef = doc(db, 'users', userId);
          await db.runTransaction(async (transaction) => {
            const userDocSnapshot = await transaction.get(userDocRef);
            const userData = userDocSnapshot.data();

            if (userData && userData.reportedPosts) {
              const updatedReportedPosts = userData.reportedPosts.filter((reportedPostId) => reportedPostId !== postId);
              transaction.update(userDocRef, { reportedPosts: updatedReportedPosts });
            }
          });

          // Remove the deleted post from the local state
          setReportedPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));

          Swal.fire('Deleted!', `${artistName}'s art has been deleted.`, 'success');
        } catch (error) {
          console.error('Error deleting post:', error);
        }
      }
    });
  };


  return (
    <AdminpageLayout>
      <div className="bg-gray-900 p-4 sm:ml-64">
        <div className="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700">
          <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
            {/* Repeat the following block for each reported post */}
            {reportedPosts.map((reportedPost) => (
              <li key={reportedPost.id} className="py-3 sm:py-4">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="flex-shrink-0">
                    <img className="h-8 w-8 rounded-full" src={reportedPost.artistImageURL} alt="Artist Image" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-gray-900 dark:text-white">{reportedPost.info}</p>
                    <p className="truncate text-sm text-gray-500 dark:text-gray-400">{reportedPost.title}</p>
                  </div>
                  <div className="flex items-center space-x-2 mt-2">
          <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Post Owner:</span>
          <img className="h-5 w-5 rounded-full" src={reportedPost.postOwner?.pfImgURL} alt="Post Owner" />
          <span className="text-xs text-gray-700 dark:text-white">{reportedPost.postOwner?.username}</span>
        </div>
                  <div className="relative inline-block text-left">
                    <button
                      type="button"
                      className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-white bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-opacity-75 focus-visible:ring-white dark:focus-visible:ring-gray-900"
                      id="options-menu"
                      aria-haspopup="true"
                      aria-expanded="true"
                      onClick={() => handleDelete(reportedPost.id, reportedPost.info)}
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
            ))}
            {/* End of repeated block */}
          </ul>
        </div>
      </div>
    </AdminpageLayout>
  );
}

export default Report;
