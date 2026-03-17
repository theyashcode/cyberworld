import React from 'react'

const LowerContent = () => {
  return (
    <div className="max-w-6xl mx-auto text-center px-4 md:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 text-white">
      
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-blue-400">5000+</h2>
        <p className="text-gray-400 text-sm md:text-base">Documents Processed</p>
      </div>

      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-blue-400">10+</h2>
        <p className="text-gray-400 text-sm md:text-base">Years Experience</p>
      </div>

      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-blue-400">100%</h2>
        <p className="text-gray-400 text-sm md:text-base">Customer Satisfaction</p>
      </div>

    </div>
  )
}

export default LowerContent