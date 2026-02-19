import Image from 'next/image'
import React from 'react'

const LeftCard = () => {
  return (
    <div className='h-full'>
        <Image
        src="/images/LeftContainerImage.png"
        alt="cybercafeimage"
        width={500}
        height={350}
        className=' rounded-2xl  mt-35 ml-10 '
        />
    </div>
  )
}

export default LeftCard