import React from 'react'
import LandingLayout from '../layout/LandingLayout'
function Teampage() {
    return (
        <LandingLayout>
            <section class="bg-white dark:bg-gray-900">

                <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                    <div class="mx-auto mb-8 max-w-screen-sm lg:mb-16">
                        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">What's MΣЯΛKI?</h2>
                        <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">In this vast digital landscape, it can be challenging for both newcomers and established artists to connect with their target audience effectively. The need for a platform that not only showcases their work but also enables them to reach a broader customer base is evident. This is where our project comes into play.</p>
                    </div>
                </div>
            <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                <div class="mx-auto mb-8 max-w-screen-sm lg:mb-16">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our team</h2>
                    <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">jub jea muy THE BEST trio of the year</p>
                </div>
                <div class="flex justify-center gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
                    <div class="text-center text-gray-500 dark:text-gray-400">
                        <img class="mx-auto mb-4 w-36 h-36 rounded-full" src="https://img.freepik.com/premium-photo/image-colorful-galaxy-sky-generative-ai_791316-9864.jpg" alt="Bonnie Avatar" />
                        <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <a href="#">Kao Sannymol</a>
                        </h3>
                        <p>Domlong Jvea</p>

                    </div>
                    <div class="text-center text-gray-500 dark:text-gray-400">
                        <img class="mx-auto mb-4 w-36 h-36 rounded-full" src="https://img.freepik.com/premium-photo/painting-man-standing-front-snowy-scene-with-sky-that-has-aurora-borealis_973047-8136.jpg" alt="Helene Avatar" />
                        <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <a href="#">Y Kimly</a>
                        </h3>
                        <p>Domlong P'rang</p>
                    </div>
                    <div class="text-center text-gray-500 dark:text-gray-400">
                        <img class="mx-auto mb-4 w-36 h-36 rounded-full" src="https://img.freepik.com/premium-photo/ball-with-picture-mountain-it_771703-16712.jpg" alt="Jese Avatar" />
                        <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <a href="#">Pech Sovathana</a>
                        </h3>
                        <p>Mnus Smos</p>
                    </div>
                </div>
            </div>
        </section>
    </LandingLayout >
    
  )
}

export default Teampage