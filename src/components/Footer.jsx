import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="w-full bg-secondary text-white border-t-[1px] border-gray-500 py-14 px-8 md:px-20  flex flex-col md:flex-row justify-between items-start">
       <div className="text-start flex flex-col md:flex justify-center items-start  md:w-1/2 ">
       <Link to="/" className="flex items-center justify-center gap-1 font-bold text-white mb-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fe6e48"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-hotel"
        >
          <path d="M10 22v-6.57" />
          <path d="M12 11h.01" />
          <path d="M12 7h.01" />
          <path d="M14 15.43V22" />
          <path d="M15 16a5 5 0 0 0-6 0" />
          <path d="M16 11h.01" />
          <path d="M16 7h.01" />
          <path d="M8 11h.01" />
          <path d="M8 7h.01" />
          <rect x="4" y="2" width="16" height="20" rx="2" />
        </svg>
        <h1 className="text-xl">Elite Homes</h1>
      </Link>
            <p className='text-sm text-gray-500'>©2025</p>
            <p className='text-sm text-gray-500'>All Rights Reserved | Made by Swapnil</p>
          </div>
       <div className="flex flex-col md:flex-row md:items-center items-start  gap-4 mt-6 sm:mt-0">
          <div className=" sm:text-left">
            <h3 className="text-sm text-gray-500 mb-2">Office</h3>
            <p className='text-sm'>(406) 123-321</p>
            <p className='text-sm'>st.Louis - 40024</p>
          </div>
          <div className=" sm:text-left">
            <h3 className="text-sm text-gray-500 mb-2">Phone / Email</h3>
            <p className='text-sm'>3524667</p>
            <p className='text-sm'>new@realestate.com</p>
          </div>
        </div>
      </footer>
  )
}

export default Footer