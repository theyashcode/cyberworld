import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'
import LowerContent from './LowerContent'

const Page1Content = () => {
  return (
    <div className='pt-20'>
      
      <div className='py-10 flex flex-col md:flex-row items-center gap-5 md:h-[75vh] px-4 md:px-10'>
        <LeftContent />
        <RightContent />
      </div>

      <div>
        <LowerContent />
      </div>

    </div>
  )
}

export default Page1Content