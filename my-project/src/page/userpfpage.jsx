import React, { useState } from 'react'
import HomepageLayout from '../layout/HomepageLayout'
import { auth } from '../authentication/firebase'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import Modal from '../component/modal'

function Userpfpage() {
    const navigate = useNavigate()
    const [showModal, setShowModal] = useState(false);
    const handleOnClose=()=>setShowModal(false)

    const userSignOut = () => (
        signOut(auth).then(() => {
            navigate("/")
        }).catch(error => console.log(error))
    )

    return (
        <HomepageLayout>
            <><div className="flex justify-center">
                <div className="max-w-sm rounded p-5 text-center text-gray-500">
                    <img className="mx-auto h-32 w-32 rounded-full" src="https://i.pinimg.com/564x/61/36/26/6136265d0bd70e2a91df4241f902890c.jpg" alt="" />
                    <div className="mt-5 text-sm">
                        <a href="#" className="text-2xl font-medium leading-none text-gray-900 transition duration-500 ease-in-out hover:text-indigo-600">Jey's </a>
                        <p>Blogger &amp; Youtuber</p>
                    </div>

                    <p className="mt-2 text-lg text-gray-900">she fell in love but he was fictional.</p>
                </div>
            </div>
                <div className="flex justify-center">
                    <button onClick={()=>setShowModal(true)} className="rounded-full bg-gray-300 px-4 py-2 text-black hover:bg-gray-500" >Edit profile</button>
                    <button onClick={userSignOut} className="rounded-full bg-gray-300 px-4 py-2 text-black hover:bg-gray-500">Log out</button>
                </div>
                <Modal onClose={handleOnClose} visible={showModal}/>
                <div className="p-8">
                    <nav className="flex justify-center space-x-4">
                        <a href="/dashboard" className="rounded-md px-3 py-2 text-black hover:bg-gray-200 hover:text-slate-900">Created</a>
                        <a href="/team" className="rounded-md px-3 py-2 text-black hover:bg-gray-200 hover:text-slate-900">Saved</a>
                    </nav>
                </div><div className="mx-auto max-w-7xl pt-2">
                    <div className="columns-2 gap-4 p-2 md:columns-3 md:p-4 lg:columns-4">
                        <div className="break-inside-avoid rounded-lg bg-white shadow-md hover:shadow-lg">
                            <div className="flex flex-col">
                                <img className="w-full overflow-hidden" src="https://i.pinimg.com/564x/5d/d9/9e/5dd99e9b0629d175db863d62fdc30594.jpg" />
                                <div className="basis-14 p-2 text-gray-800">
                                    <div className="flex justify-between">
                                        <p className="text-md font-bold leading-6">A lion with Dan</p>
                                        <div className="flex items-center justify-between space-x-1 text-sm text-gray-500">
                                            <div className="mt-1 flex gap-1">
                                                <span>10</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 break-inside-avoid rounded-lg bg-white shadow-md hover:shadow-lg">
                            <div className="flex flex-col">
                                <img className="w-full overflow-hidden" src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2952&amp;q=80" />
                                <div className="basis-14 p-2 text-gray-800">
                                    <div className="flex justify-between">
                                        <p className="text-md font-bold leading-6">Mountain summit</p>
                                        <div className="flex items-center justify-between space-x-1 text-sm text-gray-500">
                                            <div className="mt-1 flex gap-1">
                                                <span>10</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 break-inside-avoid rounded-lg bg-white shadow-md hover:shadow-lg">
                            <div className="flex flex-col">
                                <img className="w-full overflow-hidden" src="https://cdn.pixabay.com/photo/2015/11/16/16/28/bird-1045954_960_720.jpg" />
                                <div className="basis-14 p-2 text-gray-800">
                                    <div className="flex justify-between">
                                        <p className="text-md font-bold leading-6">The bird</p>
                                        <div className="flex items-center justify-between space-x-1 text-sm text-gray-500">
                                            <div className="mt-1 flex gap-1">
                                                <span>10</span>


                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 break-inside-avoid rounded-lg bg-white shadow-md hover:shadow-lg">
                            <div className="flex flex-col">
                                <img className="w-full overflow-hidden" src="https://images.unsplash.com/photo-1463288889890-a56b2853c40f?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=3132&amp;q=80" />
                                <div className="basis-14 p-2 text-gray-800">
                                    <div className="flex justify-between">
                                        <p className="text-md font-bold leading-6">Mountain an lake</p>
                                        <div className="flex items-center justify-between space-x-1 text-sm text-gray-500">
                                            <div className="mt-1 flex gap-1">
                                                <span>10</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 break-inside-avoid rounded-lg bg-white shadow-md hover:shadow-lg">
                            <div className="flex flex-col">
                                <img className="w-full overflow-hidden" src="https://i.pinimg.com/564x/62/a4/e1/62a4e12c60987590a76b8924c20eb42d.jpg" />
                                <div className="basis-14 p-2 text-gray-800">
                                    <div className="flex justify-between">
                                        <p className="text-md font-bold leading-6">Beautiful landscape</p>
                                        <div className="flex items-center justify-between space-x-1 text-sm text-gray-500">
                                            <div className="mt-1 flex gap-1">
                                                <span>4</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>    
                    </div>
                </div></>

        </HomepageLayout>
    )
}

export default Userpfpage