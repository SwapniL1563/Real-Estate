import React from 'react'
import Button from '../components/Button'
import Marquee from '../components/Marquee'
import ScrollDownIndicator from '../components/ScrollDown'

const Home = () => {
  return (
    <div className='flex justify-center items-center z-10 relative'>
        <h1 className='absolute capitalize z-20 top-[5%]  text-6xl '>Discover our range of <br /> premium real estates</h1>
        <img className='relative z-20 scale-110' src=" modern-house-isolated-transparent-background.png" height={550} width={550} alt="" />
        <div className='absolute left-20 w-1/6'>
          <p className='text-gray-500 mb-4'>We specilaize in building homes and apartment according to your need and preference.</p>
          <Button/>
        </div>

        <div className='bg-primary absolute bottom-0  w-full z-20'>
          <Marquee texts={["High Quality","Clean","Property","Premium Property","High Quality","Clean","Property","Premium Property","High Quality","Clean","Property","Premium Property","High Quality","Clean","Property","Premium Property","High Quality","Clean","Property","Premium Property","High Quality","Clean","Property","Premium Property","High Quality","Clean","Property","Premium Property","High Quality","Clean","Property","Premium Property","High Quality","Clean","Property","Premium Property","High Quality","Clean","Property","Premium Property","High Quality","Clean","Property","Premium Property","High Quality","Clean","Property","Premium Property"]}/>
        </div>

        <div className='absolute top-1/2 right-40 '>
        <ScrollDownIndicator/>
        </div>
    </div>
  )
}

export default Home