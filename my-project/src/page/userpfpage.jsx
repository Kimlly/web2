import { signOut } from 'firebase/auth';
import { deleteDoc, doc, getDoc, onSnapshot, setDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { auth, db } from '../authentication/firebase';
import Modal from '../component/modal';
import EditImage from '../component/editImage';
import { UserAuth } from '../context/AuthContext';
import HomepageLayout from '../layout/HomepageLayout';
import cn from '../utils/cn';

function Userpfpage() {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editPf,setShowEditPf]=useState('')
  const [showEditImage, setShowEditImage] = useState(false);
  const [editingData, setEditingData] = useState('')

  const [activeTab, setActiveTab] = useState(user.role === 'user' ? 'saved' : 'created');

  const handleOnClose = () => setShowModal(false);
  const handleClose = () => setShowEditImage(false);

  const handleDelete = (inputData) => {
    // Display SweetAlert confirmation dialog
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to restore this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        // Handle delete action here (e.g., call delete API)

        const index = user.posts.findIndex((eachId) => eachId === inputData.id);

        getDoc(doc(db, 'users', user.uid)).then((userData) => {
          const updatePosts = userData.data().posts;
          updatePosts.splice(index, 1);
          setDoc(doc(db, 'users', user.uid), { ...userData.data(), posts: updatePosts });

          deleteDoc(doc(db, 'posts', inputData.id)).then(() => {
            Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
          });
        });
      }
    });
  };

  const userSignOut = () => {
    logout();
    signOut(auth)
      .then(() => {
        navigate('/');
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    //Do this if there is a user logged in
    if (user.uid) {
      //Fetch only data that is posted by the user
      const fetchData = async () => {
        setData([]);
        //Reset

        if (activeTab === 'created') {
         
          // user is an object with a property 'posts' which is an array of post IDs
          await Promise.all(
            user.posts.map(async (postId) => {
              const docRef = doc(db, 'posts', postId);
              console.log(postId);
              getDoc(docRef).then (res => {
                const postData = { ...res.data(), id: postId };
                setData((prevData) => [...prevData, postData]);
              });
            })
          );
        } else if (activeTab === 'saved') {
     
          await Promise.all(
            user.savePosts.map(async (postId) => {
              const docRef = doc(db, 'posts', postId);
              const docSnap = await getDoc(docRef);

              if (docSnap.exists()) {
                const postData = { ...docSnap.data(), id: postId };
                setData((prevData) => [...prevData, postData]);
              } else {
                console.log('Document does not exist for post ID:', postId);
              }
            })
          );
        }
      };

      // Call the async function
      fetchData();
    }
  }, [user, activeTab]);

  const handleSavedChanges = async (inputData) => {
    try {
      const userDocRef = doc(db, 'users', user.uid);
      const userData = await getDoc(userDocRef);
  
      if (userData.exists()) {
        const updatePosts = userData.data().savePosts;
        const index = updatePosts.findIndex((post) => post === inputData.id);
  
        if (index !== -1) {
          updatePosts.splice(index, 1);
          await setDoc(userDocRef, { ...userData.data(), savePosts: updatePosts });
          Swal.fire('Unsaved!', 'The image has been unsaved.', 'success');
        } else {
          console.log('Post not found in savePosts array');
        }
      } else {
        console.log('User document does not exist');
      }
    } catch (error) {
      console.error('Error updating savePosts:', error);
    }
  };

  const handleEdit = (item) => {
    setShowEditImage(true)
    setEditingData(item)
  }

  const handleEditPf = (user) => {
    setShowModal(true)
    setShowEditPf(user)
  }

  const handleSaveChangesInEdit = () => {
    // Display success alert
    Swal.fire({
      title: 'Changes Saved Successfully',
      icon: 'success',
      confirmButtonText: 'OK',
    });

    // Optionally, you can navigate to a specific page after saving changes
    navigate('/homepage');
  };

  const handleSaveChangesInEditPf = () => {

    console.log(user.uid);
    // getDoc(doc(db, 'users', user.id))
    // Display success alert
    Swal.fire({
      title: 'Changes Saved Successfully',
      icon: 'success',
      confirmButtonText: 'OK',
    });

    // Optionally, you can navigate to a specific page after saving changes
    navigate('/homepage');
  };
  

  return (
    <HomepageLayout>
      <Modal onClose={handleOnClose} visible={showModal} userData={editPf} onSaveChanges={handleSaveChangesInEditPf}></Modal>
      <EditImage onClose={handleClose} visible={showEditImage} itemData={editingData} onSaveChanges={handleSaveChangesInEdit}></EditImage>

      <div className='flex justify-center'>
        <div className='max-w-sm rounded p-5 text-center text-gray-500'>
          <img className='mx-auto h-32 w-32 rounded-full' src={user.pfImgURL} alt='' />
          <div className='mt-5'>
            <p className='text-xl font-semibold mb-1'>{user.username}</p>
            <a
              
              className='text-2xl font-medium leading-none text-gray-900 transition duration-500 ease-in-out hover:text-indigo-600'
            >
              {user && user.email}
            </a>
          </div>

          <p className='mt-2 text-lg text-gray-900'>{user.info}</p>
        </div>
      </div>

      <div className='flex justify-center gap-5'>
        <button onClick={() => handleEditPf(user)} className='rounded-full bg-gray-300 px-4 py-2 text-black hover:bg-gray-500'>
          Edit profile
        </button>
        <button onClick={userSignOut} className='rounded-full bg-gray-300 px-4 py-2 text-black hover:bg-gray-500'>
          Log out
        </button>
      </div>

      <div className='p-8' />
      <nav className='flex justify-center space-x-4'>
        {user.role==='artist' && (
          <button
          onClick={() => setActiveTab('created')}
          className={cn('rounded-md px-3 py-2 text-black hover:bg-gray-200 hover:text-slate-900', {
            underline: activeTab === 'created',
          })}
        >
          Created
        </button>
        )}
        

        <button
          onClick={() => setActiveTab('saved')}
          className={cn('rounded-md px-3 py-2 text-black hover:bg-gray-200 hover:text-slate-900', {
            underline: activeTab === 'saved',
          })}
        >
          Saved
        </button>
      </nav>
      <div className='mx-auto  pt-2' />

      <div className='columns-6 mx-auto mt-5 space-y-2 space-x-2 px-3 md:px-5'>
        {data.map((item, index) => (
          <div key={index} className='group relative rounded-lg overflow-hidden bg-gray-300 hover:scale-105'>
            <img className='height={300} width={200}' src={item.imageURL} alt='' />
            <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100'>
              {activeTab === 'created' ? (
                <>
                  <button
                    type='button'
                    onClick={() => handleEdit(item)}
                    className='inline-flex items-center rounded-l-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500'
                  >
                    Edit
                  </button>
                  <button
                    type='button'
                    onClick={() => handleDelete(item)}
                    className='inline-flex items-center rounded-r-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500'
                  >
                    Delete
                  </button>
                </>
              ) : (
                <button
                  type='button'
                  onClick={() => handleSavedChanges(item)}
                  className='inline-flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500'
                >
                  Unsave
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </HomepageLayout>
  );
}

export default Userpfpage;
