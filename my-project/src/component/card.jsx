import { collection, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../authentication/firebase';

function Card() {
  const dbCollectionRef = collection(db, 'posts');
  const [data, setData] = useState([]);
  useEffect(() => {
    onSnapshot(dbCollectionRef, (snapshot) => {
      let posts = [];
      snapshot.docs.forEach((doc) => {
        posts.push({ ...doc.data(), id: doc.id });
        // console.log([{...doc.data(),id:doc.id}]);
      });

      setData(posts);
      console.log(posts);
    });
  }, []);

  return (
    <>
      {data.map((item, index) => (
        <>
          {' '}
          <div
            key={index}
            className='max-w-lg p-6 bg-white border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700'
          >
            <img className='h-auto max-w-full rounded-lg mb-3 ' src={item.imageURL} alt='' />
            <div className='flex items-center gap-4'>
              <img
                className='w-10 h-10 rounded-full'
                src='https://scontent.fpnh19-1.fna.fbcdn.net/v/t39.30808-1/409651562_3571806073136781_558167033718993052_n.jpg?stp=dst-jpg_p240x240&_nc_cat=111&ccb=1-7&_nc_sid=11e7ab&_nc_eui2=AeExgWTT_zS0I5JddbjYLhllbChTSz-d6WJsKFNLP53pYjuRmaOiED3DUHq1MQZMQT4eAc8iGgp0meklEk47RQ-Q&_nc_ohc=FZKO3SC8x_AAX99Jfg0&_nc_ht=scontent.fpnh19-1.fna&oh=00_AfCN-dS5I_PddUovoaa0-P_MQvZg_FFV9f8QaK2dO-EYpw&oe=65A13271'
                alt=''
              />
              <div className='font-medium dark:text-white'>
                <div>nymol</div>
                <div className='text-sm text-gray-500 dark:text-gray-400'>Joined in August 2014</div>
              </div>
            </div>
            <a href='#'>
              <h5 className='mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white'>{item.title}</h5>
            </a>
            <p className='mb-3 font-normal text-gray-500 dark:text-gray-400'>{item.description}</p>
            <div className='flex -space-x-4 rtl:space-x-reverse '>
              <img
                className='w-10 h-10 border-2 border-white rounded-full dark:border-gray-800'
                src='https://scontent.fpnh5-5.fna.fbcdn.net/v/t39.30808-6/364712451_1839596593101347_4735073780204185409_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeE00FoEHQP7jWvRQMqZTQEDPCDzqBwqnaA8IPOoHCqdoJWx9LsSTsdd-R2A1EIbUz9vAIuGESA8iIL6HiPEM0Ut&_nc_ohc=I6WpLthIlgYAX_GzrbK&_nc_ht=scontent.fpnh5-5.fna&oh=00_AfDFKO_6A5sonYgIBZH-m2Ny_6kF35W3ykU8E7eE9pi8mA&oe=65A16EDA'
                alt=''
              />
              <img
                className='w-10 h-10 border-2 border-white rounded-full dark:border-gray-800'
                src='https://scontent.fpnh5-5.fna.fbcdn.net/v/t39.30808-6/405207521_890631325986100_2046401148450773974_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeEpVHoUnuSGYRYfYymBbhsYaO-8LrhqoqFo77wuuGqioUYfw89CV80-4l7sar_ruQdplgmtr6kY5ynX11olFjRX&_nc_ohc=eyuMXTW_62sAX_uIYHP&_nc_ht=scontent.fpnh5-5.fna&oh=00_AfC-V7Um6r4wzeHfYJI5K63ap7fIdS5aAKhPoDkraZgorg&oe=65A17AA2'
                alt=''
              />
              <img
                className='w-10 h-10 border-2 border-white rounded-full dark:border-gray-800'
                src='https://scontent.fpnh5-5.fna.fbcdn.net/v/t39.30808-6/387020131_3537103346607054_7942417849146140981_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeEqgfXAO-A1tqzLrEPZH_q75YfdGsxrj4Plh90azGuPg0uL6uWsPeiKjKRsrg4vefADQG_odH9mqSLcTiv40Qjc&_nc_ohc=eUp5XwvKic4AX8D9OLi&_nc_ht=scontent.fpnh5-5.fna&oh=00_AfDlbPbXknJtYFJ2stNnyxhPTwhFYIQl6SJ7ys3EOUmV0A&oe=65A0EDB0'
                alt=''
              />
              <a
                className='flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800'
                href='#'
              >
                +99
              </a>
            </div>
            <p className='mb-3 font-normal text-white dark:text-gray-400'>Liked by sovathana_beksloy and others</p>

            <div className='inline-flex rounded-md shadow-sm' role='group'>
              <button
                type='button'
                className='inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white'
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
                Like
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
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='m1 14 3-3m-3 3 3 3m-3-3h16v-3m2-7-3 3m3-3-3-3m3 3H3v3'
                  />
                </svg>
                Share
              </button>
              <button
                type='button'
                className='inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white'
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
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='m13 19-6-5-6 5V2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17Z'
                  />
                </svg>
                Save
              </button>
              <button
                type='button'
                className='inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white'
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
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='m13 19-6-5-6 5V2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17Z'
                  />
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z'
                  />
                </svg>
                Report
              </button>
            </div>
            <div className='flex items-center justify-center shadow-lg mt-4 max-w-lg'>
              <form className='w-full max-w-xl bg-transparent rounded-lg px-4 pt-2'>
                <div className='flex flex-wrap -mx-3 mb-6' />
                <div className='w-full md:w-full '>
                  <textarea
                    className='bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white'
                    name='body'
                    placeholder='Type Your Comment'
                    required
                  ></textarea>
                </div>
                <div className='w-full flex items-start  px-3'>
                  <div>
                    <input
                      type='submit'
                      className='bg-transparent text-white font-medium py-1 px-5 -m-3 mt-1 border border-gray-400 rounded-lg tracking-wide'
                      value='Post Comment'
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </>
      ))}
    </>
  );
}

export default Card;
