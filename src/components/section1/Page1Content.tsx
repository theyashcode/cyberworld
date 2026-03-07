import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'
import LowerContent from './LowerContent'

const  Page1Content = () => {
  return (
    <div className='pt-20'>
      <div className='py-10 flex  items-center gap-5 h-[75vh] px-10  '>
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
