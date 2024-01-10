import React, { useState, Fragment, useEffect } from 'react'
import HomepageLayout from '../layout/HomepageLayout'
import Card from '../component/card';
import { Dialog, Transition } from '@headlessui/react'
import { collection, onSnapshot } from 'firebase/firestore';
import { storage, db } from '../authentication/firebase';


function Homepage() {
  // const [showModal, setShowModal] = useState(false);
  // const handleOnClose = () => setShowModal(false)
  let [isOpen, setIsOpen] = useState(false)
  const [data, setData] = useState([]);

  function handleModal() {
    setIsOpen(!isOpen)
  }
  const dbCollectionRef = collection(db, "posts")

  useEffect(() => {

    onSnapshot(dbCollectionRef, (snapshot) => {
      let posts = []
      snapshot.docs.forEach((doc) => {
        posts.push({ ...doc.data(), id: doc.id })
        // console.log([{...doc.data(),id:doc.id}]);
      })

      setData(posts)
      console.log(posts);

    })
  }, [])

  return (
    <HomepageLayout>

      <div class="grid grid-cols-4 gap-4 mt-10 md:grid-cols-4">
        {data.map(item => {
          return (
            <div class="group relative rounded-lg bg-gray-300 hover:scale-105">
              <img class="h-auto max-w-full rounded-lg" src={item.imageURL} alt="" />
              <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div class="inline-flex rounded-md shadow-sm" role="group">
                  <button type="button" class="place-items-endk inline-flex h-auto max-w-full rounded-l-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500">
                    <svg class="h-6 w-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m13 19-6-5-6 5V2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17Z" />
                    </svg>
                    Save
                  </button>
                  <button type="button" class="inline-flex items-center rounded-e-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path>
                    </svg>
                    Like
                  </button>
                </div>
              </div>
            </div>
          )
        })}

      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={handleModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">

                  <div><Card /></div>

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </HomepageLayout >
  )
}

export default Homepage