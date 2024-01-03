import React from 'react'
import { Link } from 'react-router-dom'
import LandingLayout from '../layout/LandingLayout'

function Landingpage() {
    return (
        <LandingLayout>
                <>
                <section className="bg-white dark:bg-gray-900">
                    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                        <div className="mr-auto place-self-center lg:col-span-7">
                            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Welcome to MΣЯΛKI</h1>
                            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Join us on this journey as we celebrate the beauty of art and empower artists to share their passion with the world. Meraki is where extraordinary talent finds its true audience, and where creativity thrives.</p>
                        </div>
                        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup" />
                        </div>
                    </div>
                </section><section className="bg-white dark:bg-gray-900">
                    <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                        <img className="w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg" alt="dashboard image" />
                        <img className="w-full hidden dark:block" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg" alt="dashboard image" />
                        <div className="mt-4 md:mt-0">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Let's create more tools and ideas that brings us together.</h2>
                            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Meraki is more than just a platform; it is a catalyst for the creative economy. We understand the value of art as an essential form of expression and the immense contributions which our platform acts as a bridge, connecting artists with individuals and businesses eager to embrace and support their work.</p>
                        </div>
                    </div>
                </section>
                <section className="bg-white dark:bg-gray-900">
                    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Supporting the Creative Economy</h2>
                            <p className="mb-4">Online platform that gives up-and-coming artists a place to show their work, build their portfolios, and get in touch with potential clients, all of which can help their jobs grow and last. It supports the creative economy by giving people, companies, and art lovers a space where they can find unique, high-quality digital art and content.</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <img className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" />
                            <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" />
                        </div>
                    </div>
                </section>
            </>
        </LandingLayout>
    )

}


export default Landingpage