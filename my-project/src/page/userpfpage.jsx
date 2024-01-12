import { signOut } from 'firebase/auth';
import { collection, doc, getDoc, onSnapshot, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import { auth, db } from '../authentication/firebase';
import Modal from '../component/modal';
import { UserAuth } from '../context/AuthContext';
import HomepageLayout from '../layout/HomepageLayout';

function Userpfpage() {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleOnClose = () => setShowModal(false);

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
        //Reset
        setData([]);

        // user is an object with a property 'posts' which is an array of post IDs
        await Promise.all(
          user.posts.map(async (postId) => {
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
      };

      // Call the async function
      fetchData();
    }
  }, [user]);
  

  return (
    <HomepageLayout>
      <Modal onClose={handleOnClose} visible={showModal} user={user} ></Modal>

      <div className='flex justify-center'>
        <div className='max-w-sm rounded p-5 text-center text-gray-500'>
          <img className='mx-auto h-32 w-32 rounded-full' src={user.pfImgURL} alt=''  />
          <div className='mt-5'>
            <p className='text-xl font-semibold mb-1'>{user.username}</p>
            <a
              href='#'
              className='text-2xl font-medium leading-none text-gray-900 transition duration-500 ease-in-out hover:text-indigo-600'
            >
              {user && user.email}
            </a>
          </div>

          <p className='mt-2 text-lg text-gray-900'>{user.info}</p>
        </div>
      </div>

      <div className='flex justify-center gap-5'>
        <button onClick={() => setShowModal(true)} className='rounded-full bg-gray-300 px-4 py-2 text-black hover:bg-gray-500'>
          Edit profile
        </button>
        <button onClick={userSignOut} className='rounded-full bg-gray-300 px-4 py-2 text-black hover:bg-gray-500'>
          Log out
        </button>
      </div>

      <div className='p-8' />
      <nav className='flex justify-center space-x-4'>
        <Link to ='/userpfpage'  className='rounded-md px-3 py-2 text-black hover:bg-gray-200 hover:text-slate-900'>
          Created
        </Link>

        <a href='/team' className='rounded-md px-3 py-2 text-black hover:bg-gray-200 hover:text-slate-900'>
          Saved
        </a>
      </nav>
      <div className='mx-auto  pt-2' />

      <div className='columns-6 mx-auto space-y-2 space-x-2 px-3 md:px-5'>
        {data.map((item, index) => (
          <div key={index} className='group relative rounded-lg overflow-hidden bg-gray-300 hover:scale-105'>
            <img className='height={300} width={200}' src={item.imageURL} alt='' />
            <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100'>
              <button
                type='button'
                className='inline-flex items-center rounded-l-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500'
              >
                Edit
              </button>
              <button
                type='button'
                className='inline-flex items-center rounded-r-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500'
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </HomepageLayout>
  );
}

export default Userpfpage;
