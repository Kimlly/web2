import { doc, getDoc, setDoc } from 'firebase/firestore';
import React, { useState } from 'react'
import { db } from '../authentication/firebase';

function EditImage({visible,onClose, itemData,onSaveChanges}) {
    if (!visible) return null;

    const [title, setTitle] = useState(itemData.title)
    const [description, setDescription] = useState(itemData.description)

    const handleSaveChanges = async (e) => {
        e.preventDefault();
        console.log(title, description);

        const docRef = doc(db, "posts", itemData.id);
        const docSnap = await getDoc(docRef);
        const newData = docSnap.data();

        await setDoc(doc(db, 'posts', itemData.id), {...newData, title: title, description: description});

        console.log("saved");
        onSaveChanges();
    }

  return (
    <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-10'>
      <form onSubmit={(e) => handleSaveChanges(e)}>
        <div className='bg-white p-3 rounded-3xl space-y-12 m-2 flex justify-center items-center'>
          <div className='w-max h-auto'>
            <h2 className='text-base font-semibold leading-7 text-gray-900'>Edit Post</h2>
            <p className='mt-1 text-sm leading-6 text-gray-600'>
              This information will be displayed publicly so be careful with what you share.
            </p>

            <div className=''>
              <div className='pb-5'>
                <label htmlFor='username' className='block text-sm font-medium leading-6 text-gray-900'>
                  Title
                </label>
                <div className='mt-2'>
                  <input
                    type='text'
                    id='username'
                    placeholder=''
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    required
                  />
                </div>
              </div>

              <div className='py-5'>
                <label htmlFor='about' className='block text-sm font-medium leading-6 text-gray-900'>
                  Description
                </label>
                <div className='mt-2'>
                  <textarea
                    id='about'
                    name='about'
                    rows='3'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  ></textarea>
                </div>
              </div>

              

              <div className='mt-6 flex items-center justify-end gap-x-6'>
                <button onClick={onClose} type='button' className='text-sm font-semibold leading-6 text-gray-900'>
                  Close
                </button>
                <button
                  type='submit'
                  onClick={handleSaveChanges}
                  className='rounded-md bg-blue-500 text-white hover:bg-blue-600 px-3 py-2 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                >
                  Save change
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default EditImage