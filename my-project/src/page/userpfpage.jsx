import React, { useState,useEffect } from 'react'
import HomepageLayout from '../layout/HomepageLayout'
import { auth,db } from '../authentication/firebase'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import Modal from '../component/modal'
import { UserAuth } from '../context/AuthContext'
import { collection, onSnapshot } from 'firebase/firestore';

function Userpfpage() {
const {user, logOut} = UserAuth();
const [data, setData] = useState([]);
const dbCollectionRef = collection(db,"posts")
    const navigate = useNavigate()
    const [showModal, setShowModal] = useState(false);
    const handleOnClose = () => setShowModal(false)

    const userSignOut = () => (
        signOut(auth).then(() => {
            navigate("/")
        }).catch(error => console.log(error))
    )
    useEffect(()=> {

      onSnapshot(dbCollectionRef,(snapshot)=>{
        let posts=[]
        snapshot.docs.forEach((doc)=>{
          posts.push({...doc.data(),id:doc.id})
          // console.log([{...doc.data(),id:doc.id}]);
        })
        
        setData(posts)
        console.log(posts);
    
      })
    },[])
    return (
        <HomepageLayout>
          <Modal onClose={handleOnClose} visible={showModal}></Modal>
            <div className="flex justify-center">
                <div className="max-w-sm rounded p-5 text-center text-gray-500">
                    <img className="mx-auto h-32 w-32 rounded-full" src="https://i.pinimg.com/564x/61/36/26/6136265d0bd70e2a91df4241f902890c.jpg" alt="" />
                    <div className="mt-5 text-sm">
                        <a href="#" className="text-2xl font-medium leading-none text-gray-900 transition duration-500 ease-in-out hover:text-indigo-600">acc: {user && user.email} </a>
                    </div>

                    <p className="mt-2 text-lg text-gray-900">she fell in love but he was fictional.</p>
                </div>
            </div>
            
            <div className="flex justify-center">
                <button onClick={() => setShowModal(true)} className="rounded-full bg-gray-300 px-4 py-2 text-black hover:bg-gray-500" >Edit profile</button>
                <button onClick={userSignOut} className="rounded-full bg-gray-300 px-4 py-2 text-black hover:bg-gray-500">Log out</button>
            </div>
            
            <div className="p-8" />
            <nav className="flex justify-center space-x-4">
                <a href="/dashboard" className="rounded-md px-3 py-2 text-black hover:bg-gray-200 hover:text-slate-900">Created</a>
                <a href="/team" className="rounded-md px-3 py-2 text-black hover:bg-gray-200 hover:text-slate-900">Saved</a>
            </nav>
            <div class="mx-auto max-w-7xl pt-2"/>
  {/* <div class="columns-2 gap-4 p-2 md:columns-3 md:p-4 lg:columns-4">
    <div class="break-inside-avoid rounded-lg bg-white shadow-md hover:shadow-lg">
      <div class="flex flex-col">
        <img class="w-full overflow-hidden" src="https://i.pinimg.com/564x/5d/d9/9e/5dd99e9b0629d175db863d62fdc30594.jpg" />
      </div>
    </div>
    <div class="mt-4 break-inside-avoid rounded-lg bg-white shadow-md hover:shadow-lg">
      <div class="flex flex-col">
        <img class="w-full overflow-hidden" src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2952&amp;q=80" />
      </div>
    </div>
    <div class="break-inside-avoid rounded-lg bg-white shadow-md hover:shadow-lg">
      <div class="flex flex-col">
        <img class="w-full overflow-hidden" src="https://i.pinimg.com/564x/5d/d9/9e/5dd99e9b0629d175db863d62fdc30594.jpg" />
      </div>
    </div>
    <div class="mt-4 break-inside-avoid rounded-lg bg-white shadow-md hover:shadow-lg">
      <div class="flex flex-col">
        <img class="w-full overflow-hidden" src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2952&amp;q=80" />
      </div>
    </div>
    </div> */}
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

        </HomepageLayout>
    )
}

export default Userpfpage