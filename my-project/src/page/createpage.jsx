import { clsx } from 'clsx';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { v4 } from 'uuid';
import { db, storage } from '../authentication/firebase';
import HomepageLayout from '../layout/HomepageLayout';
import Swal from 'sweetalert2';

// ----------- import some firebase functions --------------
import { addDoc, collection, doc, getDoc, setDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import ArtistPageLayout from '../layout/ArtistPageLayout';

const CreatePost = () => {
  const { user } = UserAuth();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [errorTitle, setErrorTitle] = useState('');

  const [description, setDescription] = useState('');
  const [errorDescription, setErrorDescription] = useState('');

  const [image, setImage] = useState('');
  const [fileImage, setFileImage] = useState('');
  const [errorImage, setErrorImage] = useState(false);

  const [uploading, setUploading] = useState(false);

  // const [imgURL, setImgURL] = useState([]);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      setErrorImage(true);
      return;
    } else {
      setErrorImage(false);
    }
    if (!title) {
      setErrorTitle(true);
      return;
    } else {
      setErrorTitle(false);
    }
    if (!description) {
      setErrorDescription(true);
      return;
    } else {
      setErrorDescription(false);
    }

    setUploading(true);

    // ----------- upload fileimg to firebase and get its URL --------------
    // ----------- file_name need to generate auto using UUID --------------

    const fileRef = ref(storage, `img/${v4()}`);

    const data = await uploadBytes(fileRef, fileImage);
    const val = await getDownloadURL(data.ref);

    console.log(user);

    const inputData = {
      title,
      description,
      imageURL: val,
      postOwner: {
        uid: user.uid,
        email: user.email,
      },
      likes: [],
      comments: [],
      createdAt: new Date(Date.now()).toISOString(),
    };

    console.log(inputData);

    // ----------- upload data to firebase database --------------
    const dbCollectionRef = collection(db, 'posts');

    addDoc(dbCollectionRef, inputData).then((res) => {
      const postId = res.id;
      console.log(postId);

      getDoc(doc(db, 'users', user.uid)).then((userData) => {
        const updatePosts = userData.data().posts;
        updatePosts.push(postId);

        setDoc(doc(db, 'users', user.uid), { ...userData.data(), posts: updatePosts });
      });
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Your post has been submitted successfully.',
      });
      // Clear the form after submission
      setTitle('');
      setDescription('');
      setImage('');
      setFileImage('');
      setUploading(false);
    });
  };

  const handleUploadImg = (e) => {
    e.preventDefault();

    const inputData = e.target.files[0];
    const Url = URL.createObjectURL(inputData);

    console.log(Url);

    setImage(Url);
    setFileImage(inputData);
  };

  const handleDelete = async () => {
    setImage('');
    setFileImage('');
  };

  //Merge Classnames function
  const cn = (...inputs) => {
    return twMerge(clsx(inputs));
  };

  return (
    <HomepageLayout>
      <ArtistPageLayout>
        <div className='w-full'>
          <div className='flex flex-col max-w-[500px] mx-auto my-10 px-5 lg:px-0'>
            <h1 className='text-3xl font-semibold text-center my-5'>Create Post</h1>

            <form className='mt-5 space-y-10' onSubmit={(e) => onSubmit(e)}>
              {image ? null : (
                <label
                  htmlFor='dropzone-file'
                  className={cn(
                    'flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600',
                    { 'border-red-500 dark:border-red-500': errorImage }
                  )}
                >
                  <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                    <svg
                      className='w-8 h-8 mb-4 text-gray-500 dark:text-gray-400'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 20 16'
                    >
                      <path
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2'
                      />
                    </svg>
                    <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
                      <span className='font-semibold'>Click to upload</span>
                    </p>
                    <p className='text-xs text-gray-500 dark:text-gray-400'>SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    {errorImage && <p className='text-xs text-red-500'>Please upload an image.</p>}
                  </div>
                  <input id='dropzone-file' type='file' className='hidden' onChange={(e) => handleUploadImg(e)} />
                </label>
              )}

              <div>
                {!image ? null : (
                  <div className='relative rounded-md overflow-hidden'>
                    <img src={image} alt='' />
                    <button
                      type='button'
                      onClick={handleDelete}
                      className='absolute top-2 right-2 px-3 py-1 bg-red-500 rounded-md text-white'
                    >
                      X
                    </button>
                  </div>
                )}
              </div>

              <div className='flex flex-col gap-2'>
                <label htmlFor='title' className='text-xl font-semibold'>
                  Title
                </label>
                <input
                  type='text'
                  name='title'
                  id='title'
                  placeholder='Title'
                  className='border bg-gray-50 py-2 pl-2'
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                {errorTitle && <p className=' text-red-500'>Error Title</p>}
              </div>

              <div className='flex flex-col gap-2'>
                <label htmlFor='description' className='text-xl font-semibold'>
                  Description
                </label>
                <textarea
                  type='text'
                  name='description'
                  id='description'
                  placeholder='Describe ....'
                  className='border bg-gray-50 py-2 pl-2'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                {errorDescription && <p className=' text-red-500'>Error Description</p>}
              </div>
              <div className='w-full flex justify-end'>
                <button type='submit' className='px-5 py-2 bg-blue-500 text-white rounded-sm'>
                  {uploading ? 'Loading' : 'Post'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </ArtistPageLayout>
    </HomepageLayout>
  );
};

export default CreatePost;
