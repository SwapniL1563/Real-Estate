import React from 'react'
import Properties from './Properties'

const Contact = () => {
  return (
    <>
    <div className="w-full bg-secondary flex flex-col md:flex-row">
        <div className='w-full md:w-[85%] flex justify-start items-center py-10 md:py-20 px-10 md:px-20 '> 
            <h1 className='text-4xl text-white' >Let's find you the dream <br /> home you always deserved.</h1>
        </div>
        <div className='w-1/2 md:w-[15%] flex justify-end items-center py-4  px-20 bg-primary'>
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-step-forward"><line x1="6" x2="6" y1="4" y2="20"/><polygon points="10,4 20,12 10,20"/></svg>
        </div>
      </div>
      </>
  )
}

export default Contact