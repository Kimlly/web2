import React from 'react'
import { NavLink,Link } from 'react-router-dom';
import Footer from '../component/footer'
function Teampage() {
    return (
        <><nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
                <Link to='/' className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">MΣЯΛKI</span>
                </Link>
                <>

                    <li>
                        <NavLink
                            to='/team'
                            activeclassname="text-blue-600" // Apply this class for the active link
                            className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                        >
                            Team
                        </NavLink>

                    </li></>
            </div>

        </nav><section className="bg-white dark:bg-gray-900">

                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                    <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">What's MΣЯΛKI?</h2>
                        <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">In this vast digital landscape, it can be challenging for both newcomers and established artists to connect with their target audience effectively. The need for a platform that not only showcases their work but also enables them to reach a broader customer base is evident. This is where our project comes into play.</p>
                    </div>
                </div>
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                    <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our team</h2>
                    </div>
                    <div className="flex justify-center gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
                        <div className="text-center text-gray-500 dark:text-gray-400">
                            <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="https://img.freepik.com/premium-photo/image-colorful-galaxy-sky-generative-ai_791316-9864.jpg" alt="Bonnie Avatar" />
                            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <a href="#">Kao Sannymol</a>
                            </h3>

                        </div>
                        <div className="text-center text-gray-500 dark:text-gray-400">
                            <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="https://img.freepik.com/premium-photo/painting-man-standing-front-snowy-scene-with-sky-that-has-aurora-borealis_973047-8136.jpg" alt="Helene Avatar" />
                            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <a href="#">Y Kimly</a>
                            </h3>
                        </div>
                        <div className="text-center text-gray-500 dark:text-gray-400">
                            <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="https://img.freepik.com/premium-photo/ball-with-picture-mountain-it_771703-16712.jpg" alt="Jese Avatar" />
                            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <a href="#">Pech Sovathana</a>
                            </h3>
                        </div>
                    </div>
                </div>
            </section><Footer /></>
    
  )
}

export default Teampage;