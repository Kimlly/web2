import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { auth, db, storage } from '../authentication/firebase';
import { UserAuth } from '../context/AuthContext';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cfpassword, setCfPassword] = useState('');
  const [validation, setValidation] = useState(true);

  const [profileImgURL, setProfileImgURL] = useState('');
  const [profileImgFile, setProfileImgFile] = useState();

  const navigate = useNavigate();

  const signUp = async (e) => {
    e.preventDefault();

    const fileRef = ref(storage, `img/${v4()}`);

    const data = await uploadBytes(fileRef, profileImgFile);
    const val = await getDownloadURL(data.ref);

    const inputData = {
      username,
      email,
      pfImgURL: val,
      role: 'user',
      posts: [],
      savePosts: [],
      createdAt: new Date(Date.now()).toISOString(),
    };

    createUserWithEmailAndPassword(auth, email, password, cfpassword)
      .then(async (userCredential) => {
        console.log(userCredential.user.uid);

        await setDoc(doc(db, 'users', userCredential.user.uid), inputData);

        Swal.fire({
          title: 'Create Account Successfully',
          icon: 'success',
          confirmButtonText: 'OK',
        });
        navigate('/homepage');
      })
      .catch(() => {
        Swal.fire({
          title: 'Email address already exist ',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      });
  };
  function validate(cfpassword, password) {
    if (cfpassword == password) {
      setValidation(true);
    } else {
      setValidation(false);
    }
    console.log(validation);
  }

  const handleUploadImg = (e) => {
    e.preventDefault();

    const url = URL.createObjectURL(e.target.files[0]);

    setProfileImgURL(url);
    setProfileImgFile(e.target.files[0]);
  };

  return (
    <section className='bg-gray-50 dark:bg-gray-900'>
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
        <a href='#' className='flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white'>
          <img className='w-8 h-8 mr-2' src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg' alt='logo' />
          MΣЯΛKI
        </a>
        <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
              Create an account
            </h1>

            <div className='flex flex-col items-center my-10 overflow-hidden'>
              <label
                htmlFor='dropzone-file'
                className=' overflow-hidden flex flex-col items-center justify-center w-32 h-32 border-2 mx-auto border-gray-300  rounded-full cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600'
              >
                {profileImgURL ? <img src={profileImgURL} alt='s' className='w-full h-full object-cover' /> : 'u'}
                <input id='dropzone-file' type='file' className='hidden' onChange={(e) => handleUploadImg(e)} />
              </label>
            </div>

            <form onSubmit={signUp} className='space-y-4 md:space-y-6' action='#'>
              <div>
                <label htmlFor='name' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                  Username
                </label>
                <input
                  type='text'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  name='name'
                  id='name'
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='name'
                  required
                />
              </div>
              <div>
                <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                  Your email
                </label>
                <input
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name='email'
                  id='email'
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='name@meraki.com'
                  required
                />
              </div>
              <div>
                <label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                  Password (at least 6 character)
                </label>
                <input
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  name='password'
                  id='password'
                  placeholder='••••••••'
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  required
                />
              </div>
              <div>
                <label htmlFor='confirm-password' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                  Confirm password
                </label>
                <input
                  type='password'
                  value={cfpassword}
                  onChange={(e) => setCfPassword(e.target.value)}
                  name='confirm-password'
                  id='confirm-password'
                  placeholder='••••••••'
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  required
                />
                {validation ? '' : <p className='text-red-600 indent-3 text-sm mt-1 '> password is not matching</p>}
              </div>
              <div className='flex items-start'>
                <div className='flex items-center h-5'>
                  <input
                    id='terms'
                    aria-describedby='terms'
                    type='checkbox'
                    className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800'
                    required
                  />
                </div>
                <div className='ml-3 text-sm'>
                  <label htmlFor='terms' className='font-light text-gray-500 dark:text-gray-300'>
                    I accept the{' '}
                    <a className='font-medium text-primary-600 hover:underline dark:text-primary-500' href='#'>
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <button
                type='submit'
                onClick={() => {
                  validate(cfpassword, password);
                }}
                className='w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
              >
                Create an account{' '}
              </button>
              <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
                Already have an account?{' '}
                <Link to='/login' className='font-medium text-primary-600 hover:underline dark:text-primary-500'>
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
