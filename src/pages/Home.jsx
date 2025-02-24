import React from 'react'
import Button from '../components/Button'
import Marquee from '../components/Marquee'
import ScrollDownIndicator from '../components/ScrollDown'
import Properties from './Properties'

const Home = () => {
  return (
    <>
    <div className='flex justify-center items-center z-10 relative'>
        <h1 className='absolute capitalize z-20 top-[5%] md:top-[5%] text-2xl md:text-6xl left-10 md:left-[30%] '>Discover our range of <br /> premium real estates</h1>
        <img className='relative md:z-20 scale-75 md:scale-110  opacity-25 md:opacity-100 z-0' src=" modern-house-isolated-transparent-background.png" height={550} width={550} alt="" />
        <div className='absolute top-[25%] md:top-1/3  md:left-20 left-10 w-3/4 md:w-1/6'>
          <p className='text-gray-500 mb-4 md:text-base text-sm'>We specilaize in building homes and apartment according to your need and preference.</p>
          <Button/>
        </div>

        <div className='bg-primary absolute bottom-0  w-full z-20'>
          <Marquee texts={["High Quality","Clean","Property","Premium Property","High Quality","Clean","Property","Premium Property","High Quality","Clean","Property","Premium Property","High Quality","Clean","Property","Premium Property","High Quality","Clean","Property","Premium Property","High Quality","Clean","Property","Premium Property","High Quality","Clean","Property","Premium Property","High Quality","Clean","Property","Premium Property","High Quality","Clean","Property","Premium Property","High Quality","Clean","Property","Premium Property","High Quality","Clean","Property","Premium Property","High Quality","Clean","Property","Premium Property"]}/>
        </div>

        <div className='absolute bottom-20 md:top-1/2 right-20 md:right-40 md:block'>
        <ScrollDownIndicator/>
        </div>
    </div>
    <Properties/>
    </>
  )
}

export default Home