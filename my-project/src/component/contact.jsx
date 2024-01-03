import React from 'react'

function contact() {
  return (
    <section class="bg-white dark:bg-gray-900">
  <div class="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-6 lg:py-16">
    <div class="mx-auto mb-8 max-w-screen-sm lg:mb-16">
      <h2 class="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">Our team</h2>
      <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind</p>
    </div>
    <div class="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-16">
      <div class="text-center text-gray-500 dark:text-gray-400">
        <img class="mx-auto mb-4 h-36 w-36 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Avatar" />
        <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <a href="#">Bonnie Green</a>
        </h3>
        <p>CEO/Co-founder</p>
        <ul class="mt-4 flex justify-center space-x-4"></ul>
      </div>
      <div class="text-center text-gray-500 dark:text-gray-400">
        <img class="mx-auto mb-4 h-36 w-36 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png" alt="Helene Avatar" />
        <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <a href="#">Helene Engels</a>
        </h3>
        <p>CTO/Co-founder</p>
        <ul class="mt-4 flex justify-center space-x-4"></ul>
      </div>
      <div class="text-center text-gray-500 dark:text-gray-400">
        <img class="mx-auto mb-4 h-36 w-36 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Avatar" />
        <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <a href="#">Jese Leos</a>
        </h3>
        <p>SEO & Marketing</p>
        <ul class="mt-4 flex justify-center space-x-4"></ul>
      </div>
      <div class="text-center text-gray-500 dark:text-gray-400">
        <img class="mx-auto mb-4 h-36 w-36 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="Joseph Avatar" />
        <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <a href="#">Joseph Mcfall</a>
        </h3>
        <p>Sales</p>
        <ul class="mt-4 flex justify-center space-x-4"></ul>
      </div>
    </div>
  </div>
</section>
  )
}

export default contact