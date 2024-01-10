import React, { useState } from 'react'
import HomepageLayout from '../layout/HomepageLayout'
import { auth } from '../authentication/firebase'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import Modal from '../component/modal'
import { UserAuth } from '../context/AuthContext'

function Userpfpage() {
const {user, logOut} = UserAuth();

    const navigate = useNavigate()
    const [showModal, setShowModal] = useState(false);
    const handleOnClose = () => setShowModal(false)

    const userSignOut = () => (
        signOut(auth).then(() => {
            navigate("/")
        }).catch(error => console.log(error))
    )
    return (
        <HomepageLayout>
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
            <Modal onClose={handleOnClose} visible={showModal}></Modal>
            <div className="p-8" />
            <nav className="flex justify-center space-x-4">
                <a href="/dashboard" className="rounded-md px-3 py-2 text-black hover:bg-gray-200 hover:text-slate-900">Created</a>
                <a href="/team" className="rounded-md px-3 py-2 text-black hover:bg-gray-200 hover:text-slate-900">Saved</a>
            </nav>
            <div class="mx-auto max-w-7xl pt-2"/>
  <div class="columns-2 gap-4 p-2 md:columns-3 md:p-4 lg:columns-4">
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
    </div>

        </HomepageLayout>
    )
}

export default Userpfpage