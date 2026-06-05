import React from 'react'
import RightContent from './RightContent'
import SplineModel from './SplineModel';

const Page1Content = () => {
  return (
    <div className='w-full'>
      
      <div className='max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-2 md:gap-5 min-h-screen md:min-h-[85vh] overflow-visible px-4'>
        
        {/* TEXT SECTION */}
        <div className='w-full md:w-1/2 h-auto flex flex-col justify-center pb-12 md:pb-0 z-10'>
          <RightContent />
        </div>

        {/* SPLINE MODEL SECTION */}
        <div className='w-full md:w-1/2 flex justify-center items-center pt-24 md:pt-0'>
          
          {/* YAHAN CHANGE KIYA HAI: Mobile ke liye exact choti width aur height (280px) di hai.
              md screen (desktop) par ye wapas full width aur 80vh height le lega. */}
          <div className='w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-full md:h-[80vh] flex justify-center items-center'>
            <SplineModel />
          </div>

        </div>

      </div>

    </div>
  )
}

export default Page1Content