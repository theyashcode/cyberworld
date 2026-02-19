import React from 'react'
import Heading from './heading'
import Card from './Card'



const Section2 = () => {
  return (

    <section className=' w-full bg-slate-900   '>

      <div className="max-w-7xl mx-auto px-6 text-center py-20 " >
         
        <Heading />
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16'>
          
          <Card serviceName="Aadhar Services" service="New Apply, Address Update, Mobile Update" LinkUrl="/services/adar" />
          <Card serviceName="PAN Card Services" service="Apply for new PAN or correct existing details" LinkUrl="/services/pancard" />
          <Card serviceName="Voter ID Services" service="New registration and voter ID corrections" LinkUrl="/services/voterid         " />
          <Card serviceName="Online Forms" service="Government and private online form assistance" LinkUrl="/services/onlineform" />
          <Card serviceName="Print & Scan" service="printing and document scanning" LinkUrl="/services/ID" />
          <Card serviceName="Passport Services" service="Passport application and documentation guidance" LinkUrl="/services/passport" />
          

        </div>
         
        
       
      </div>


    </section>
    


  )
}

export default Section2