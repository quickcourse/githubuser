import { IconBrandGithub, IconBrandX, IconExternalLink } from '@tabler/icons-react'
import React from 'react'

function App() {
  return (
    <div className='flex items-center flex-col space-y-3 w-full h-[100vh] justify-center mt-5 bg-slate-50'>
      <div className=''>
        <div className='w-[43rem] focus:border-none border-none'>
          <div class="relative border-none">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <div className=''>
              <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm focus:border-none  bg-white border-none rounded-lg " placeholder="Search for Users" />
            </div>
            <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
          </div>
        </div>

      </div>
      <div>
        <div>
          <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-80">
              <div className="group">
                <div
                  className="relative h-full w-full shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                  <img src="" alt="profile-picture" />

                  <div
                    className="absolute inset-0 h-full w-full rounded-xl p-8 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="flex flex-col justify-between h-full">
                      <div className="space-y-3">
                        <p className="text-[#16453a] text-lg font-light leading-5">Username:</p>
                        <p className="text-[#16453a] text-lg font-light leading-5">Name:</p>
                        <p className="text-[#16453a] text-lg font-light leading-5">Repositories:</p>
                        <p className="text-[#16453a] text-lg font-light leading-5">Gists:</p>
                        <p className="text-[#16453a] text-lg font-light leading-5">Member Since:</p>
                        <p className="text-[#16453a] text-lg font-light leading-5">Email:</p>
                        <p className="text-[#16453a] text-lg font-light leading-5 flex flex-row hover:cursor-pointer">Blog: <IconExternalLink size={"0.7rem"} /></p>
                        <p className="text-[#16453a] text-lg font-light leading-5">Bio:</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 text-center">
              <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                User Name
              </h4>

            </div>
            <div className="grid grid-cols-2 gap-4 px-2 mb-2 ">
              <div className="bg-green-100 p-4  rounded-lg  flex flex-row justify-center items-center">
                <IconBrandX size={"2rem"} />
              </div>
              <div className="bg-yellow-200 p-4 hover:cursor-pointer  flex flex-row justify-center items-center">

                <IconBrandGithub />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default App