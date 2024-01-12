/* eslint-disable react/prop-types */
import { addDoc, collection, doc, getDoc, onSnapshot, setDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../authentication/firebase';
import cn from '../utils/cn';
import { UserAuth } from '../context/AuthContext';

function Card({ data }) {
  const { user } = UserAuth();

  const [postOwner, setPostOwner] = useState({});
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(data.likes.length);
  const [isSaved, setIsSaved] = useState(false);

  const [comment, setComment] = useState('');

  useEffect(() => {
    getDoc(doc(db, 'users', data.postOwner.uid)).then((user) => {
      setPostOwner(user.data());
    });
  }, []);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, 'posts', data.id), (doc) => {
      if (doc.data().likes.length > 0) {
        setLiked(doc.data().likes.find((userLike) => userLike.uid === user.uid));
        setLikeCount(doc.data().likes.length);
      } else {
        setLiked(false);
        setLikeCount(0);
      }
    });

    return () => unsub;
  }, []);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, 'users', user.uid), (doc) => {
      if (doc.data().savePosts.includes(data.id)) {
        setIsSaved(true);
      } else {
        setIsSaved(false);
      }
    });

    return () => unsub;
  }, []);

  const handleLike = () => {
    setLiked((prev) => !prev);
    if (!liked) {
      setLikeCount((prev) => prev + 1);

      const likeInput = {
        uid: user.uid,
        pfImgURL: user.pfImgURL,
        name: user.username,
        createdAt: new Date(Date.now()).toISOString(),
      };

      const updatePosts = data.likes;
      updatePosts.push(likeInput);
      console.log(updatePosts);

      console.log(data);

      setDoc(doc(db, 'posts', data.id), { ...data, likes: updatePosts });
    } else {
      setLikeCount((prev) => prev - 1);
      const updatePosts = data.likes;
      const index = updatePosts.findIndex((userLike) => userLike.uid === user.uid);
      updatePosts.splice(index, 1);
      setDoc(doc(db, 'posts', data.id), { ...data, likes: updatePosts });
    }
  };

  const handleSavePost = (e) => {
    e.preventDefault();

    console.log(data.id);
    if (!isSaved) {
      getDoc(doc(db, 'users', user.uid)).then((userData) => {
        const updatePosts = userData.data().savePosts;
        updatePosts.push(data.id);

        setDoc(doc(db, 'users', user.uid), { ...userData.data(), savePosts: updatePosts });
        setIsSaved(true);
      });
    } else {
      getDoc(doc(db, 'users', user.uid)).then((userData) => {
        const updatePosts = userData.data().savePosts;
        const index = updatePosts.findIndex((post) => post === data.id);

        updatePosts.splice(index, 1);

        setDoc(doc(db, 'users', user.uid), { ...userData.data(), savePosts: updatePosts });
      });
      setIsSaved(false);
    }
  };

  const handleComment = (e) => {
    e.preventDefault();

    if (!comment || comment.trim().length === 0) {
      return;
    }

    const inputData = {
      uid: user.uid,
      name: user.username,
      pfImgURL: user.pfImgURL,
      comment: comment,
      likes: [],
      replies: [],
      createdAt: new Date(Date.now()).toISOString(),
    };

    console.log(inputData);

    const updatePosts = data.comments;
    updatePosts.push(inputData);
    console.log(updatePosts);
    console.log(data);

    setDoc(doc(db, 'posts', data.id), { ...data, comments: updatePosts }).then(() => {
      setComment('');
    });
  };

  return (
    <div className=' p-6 bg-white border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700'>
      <div className='w-full md:w-[600px] h-auto max-h-[400px] overflow-hidden rounded-lg border border-gray-700 mb-5'>
        <img className='max-h-[400px] w-full object-contain' src={data.imageURL} alt='' />
      </div>
      <div className='flex items-center gap-4'>
        <div className='w-9 h-9 rounded-full overflow-hidden'>
          <img className='h-full w-full object-cover' src={postOwner.pfImgURL} alt='' />
        </div>
        <div className='font-medium dark:text-white'>
          <div>{postOwner.username}</div>
          <div className='text-sm text-gray-500 dark:text-gray-400'>
            Joined in {new Date(postOwner.createdAt).toString().split(' ').splice(0, 4).join(' ')}
          </div>
        </div>
      </div>
      <div className='mt-3 mb-5'>
        <a href='#'>
          <h5 className='mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white'>{data.title}</h5>
        </a>
        <p className='mb-3 font-normal text-gray-500 dark:text-gray-400'>{data.description}</p>
        <p className='mb-3 text-xs font-normal text-gray-500 dark:text-gray-400'>
          {new Date(data.createdAt).toString().split(' ').splice(0, 5).join(' ')}
        </p>
      </div>
      <div className='flex -space-x-3.5 rtl:space-x-reverse '>
        {data.likes.map((like) => (
          <img
            key={like.uid + 'a'}
            className='w-6 h-6 border-2 border-white rounded-full dark:border-gray-800'
            src={like.pfImgURL}
            alt=''
          />
        ))}

        {data.likes.length >= 3 && (
          <a
            className='flex items-center justify-center w-auto h-6 px-1 text-xs text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800'
            href='#'
          >
            {data.likes.length - 2}+
          </a>
        )}
      </div>
      <p className='mt-3 mb-2 font-normal text-gray-800 dark:text-white '>
        {likeCount} like{likeCount > 1 ? 's' : ''}
      </p>

      <div className='inline-flex rounded-md shadow-sm' role='group'>
        <button
          type='button'
          onClick={() => handleLike()}
          className={cn(
            'inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg  hover:text-blue-700 focus:z-10   focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white   dark:focus:text-white',
            {
              'bg-blue-700 text-white dark:bg-blue-700': liked,
            }
          )}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='h-5 w-5'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
            ></path>
          </svg>
          {liked ? 'Liked' : 'Like'}
        </button>
        <button
          type='button'
          className='inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white'
        >
          <svg
            className='w-6 h-6 text-gray-800 dark:text-white'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 20 18'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='m1 14 3-3m-3 3 3 3m-3-3h16v-3m2-7-3 3m3-3-3-3m3 3H3v3'
            />
          </svg>
          Share
        </button>
        <button
          type='button'
          onClick={(e) => handleSavePost(e)}
          className={cn(
            'inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white',
            {
              'bg-blue-700 text-white dark:bg-blue-700': isSaved,
            }
          )}
        >
          <svg
            className='h-6 w-6 text-gray-800 dark:text-white'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 14 20'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='m13 19-6-5-6 5V2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17Z'
            />
          </svg>
          {isSaved ? 'Saved' : 'Save'}
        </button>
        <button
          type='button'
          className='inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z'
            />
          </svg>
          Report
        </button>
      </div>

      <div>
        <form className='flex flex-col items-center justify-center mt-10' onSubmit={(e) => handleComment(e)}>
          <textarea
            type='text'
            name='description'
            id='description'
            placeholder='Comment . . . .'
            className='border bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 pl-2 w-full rounded-md border-none min-h-[100px]'
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />

          <button
            type='submit'
            className='bg-blue-500 text-white font-medium py-3 px-5 mt-3 self-end rounded-md tracking-wide'
            value='Post Comment'
          >
            Post comment
          </button>
        </form>
      </div>

      <div className='my-5'>
        <h1 className='text-white mb-3'>Comments</h1>

        {data.comments.length > 0
          ? data.comments.map((comment, index) => (
              <div key={index} className='py-2 px-3 border border-gray-300 dark:border-gray-700 rounded-md mb-2'>
                <div className='flex items-center gap-4'>
                  <div className='w-8 h-8 rounded-full overflow-hidden'>
                    <img className='h-full w-full object-cover' src={comment.pfImgURL} alt='' />
                  </div>
                  <div className='font-medium dark:text-white'>
                    <div>{comment.name}</div>
                    <div className='text-xs text-gray-500 dark:text-gray-400'>
                      {new Date(comment.createdAt).toString().split(' ').splice(0, 5).join(' ')}
                    </div>
                  </div>
                </div>
                <p className='text-gray-800 dark:text-white opacity-70 text-sm mt-3'>{comment.comment}</p>
              </div>
            ))
          : ''}
      </div>
    </div>
  );
}

export default Card;
