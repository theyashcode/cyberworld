import Image from 'next/image'
import React from 'react'

const LeftCard = () => {
  return ( 
    <div className="w-full flex justify-center px-4">
      <Image
        src="/images/LeftContainerImage.png"
        alt="cybercafeimage"
        width={500}
        height={350}
        className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-2xl"
      />
    </div>
  )
}

export default LeftCard