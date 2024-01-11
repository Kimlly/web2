import { Dialog, Transition } from '@headlessui/react';
import { collection, onSnapshot } from 'firebase/firestore';
import { Fragment, useEffect, useState } from 'react';
import { db } from '../authentication/firebase';
import Card from '../component/card';
import HomepageLayout from '../layout/HomepageLayout';

function Homepage() {
  let [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const [activePost, setActivePost] = useState('');

  function handleModal() {
    setIsOpen(!isOpen);
  }
  const dbCollectionRef = collection(db, 'posts');

  useEffect(() => {
    onSnapshot(dbCollectionRef, (snapshot) => {
      let posts = [];
      snapshot.docs.forEach((doc) => {
        posts.push({ ...doc.data(), id: doc.id });
      });

      setData(posts);
      console.log(posts);
    });
  }, []);

  return (
    <HomepageLayout>
      <div className='columns-6 mx-auto space-y-4 space-x-1 mt-2 md:mt-5 px-2 md:px-5'>
        {data.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              handleModal();
              setActivePost(item);
            }}
            className='group relative rounded-lg overflow-hidden bg-gray-300 hover:scale-105'
          >
            <img
              className='height={300} width={200}'
              src={item.imageURL}
              alt=''
            />
          </div>
        ))}
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={handleModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black/25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className=' transform overflow-hidden rounded-2xl text-left align-middle shadow-xl transition-all'>
                  <div>
                    <Card data={activePost} />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </HomepageLayout>
  );
}

export default Homepage;
