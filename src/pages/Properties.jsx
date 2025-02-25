import React from 'react'
import ImageSlider from '../components/Slider'

const Properties = () => {
  return (
    <div className=' py-10 px-7 md:px-20'>
      <div className='flex items-center justify-start mb-3'>
        <h1 className='md:text-lg text-sm'>Best Collection On Sale</h1>
      </div>
      <ImageSlider/>
    </div>
  )
}

export default Properties