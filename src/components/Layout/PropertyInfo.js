import React from 'react'
import SwipeableTextMobileStepper from './PropertyImgCarousel'
import {FaPhone, FaFacebook, FaTwitter, FaGooglePlus} from 'react-icons/fa'
function PropertyInfo() {
  return (
    <div>
      <div className='sm:flex sm:justify-center '>
       <div className=' m-10'>
      <div className=' text-center'>
        <h2 className=' font-bold text-3xl'>Hunting mansion in Makurdi</h2>
        </div>

        <div className=' flex justify-center '>
       <SwipeableTextMobileStepper/>
       </div>
        <div className='flex justify-center border-b border-gray-400 p-4 sm:w-[50%] sm:m-auto '>
       <div className=' flex '>
       <span className=' text-red-400 font-bold   '>Price:</span> <span className=' ml-4 font-bold'>&#8358;</span> <h4 className='font-bold'>1200000</h4>
       </div>
       </div>
       </div>
      
       
       
       <div className='otherpart'>
       <div className='border-b border-gray-400 sm:w-[50%] mt-5 p-4 sm:m-auto '>
       <h2 className='  text-red-400  text-3xl font-bold mb-5' >Property Description</h2>
       <p className='text-xl'>Enjoy a refreshing time amidst the monumental River Benue, in a townhouse that will host the most luxurious holiday for you and your family.</p>
       </div>

    <div className='border-b border-gray-400 sm:w-[50%] mt-5 p-4 sm:m-auto'>
    <h2 className='text-3xl  text-red-400 font-bold  '>Quick Summary</h2>
    <div className='flex'>
    <label className=' font-bold text-xl'>Property ID:</label> 
    <h4 className='ml-4 text-xl'>812</h4>
    </div> 
    <div className=' flex'>
    <label className=' font-bold text-xl'>Property status:</label> 
    <h4 className='ml-4 text-xl'>Sale</h4>
    </div>
    <div className='flex'>
    <label className=' font-bold text-xl'>Property type:</label> 
    <h4 className='ml-4 text-xl'>Building</h4>
    </div>
    <div className='flex'>
    <label className=' font-bold text-xl'>Location:</label> 
    <h4 className='ml-4 text-xl'>2001-2099 Saint Charles Street High Level, Makurdi, Nigeria</h4>
    </div>
    <div className='flex'>
    <label className=' font-bold text-xl'>Bedrooms:</label>
     <h4 className='ml-4 text-xl'>2</h4>
     </div>
     <div className='flex'>
    <label className=' font-bold text-xl'>Bathrooms:</label> 
    <h4 className='ml-4 text-xl'>3</h4>
    </div>
    <div className='flex'>
    <label className=' font-bold text-xl'>Parking place:</label>
     <h4 className='ml-4 text-xl'>1</h4>
     </div>
     <div className='flex w-[10%]'>
    <label className=' font-bold text-xl'>Property Features:</label> 
    <h4 className='ml-4 text-xl'>Air conditioning Balcony Bedding Coffee pot Microwave Outdoor kitchen</h4>
    </div>
    </div>
    </div>
    </div>
    <div className=' flex justify-center'>
    <div className=''>
    <div className=''>
    <h2 className='text-3xl  text-red-400 font-bold '>Contact Agent</h2>
    </div>

    <img src='/images/user-01.jpg' alt='Agent'/>
    <div className='AgentName'>
    <h4 className=' font-bold text-2xl p-4'>Ugozi Eze</h4>
    </div>

    <div className='shortBio'>
    <p className=' w-[50%] text-xl'>Hello! My name is Ugozi Eze and i'm a full-time licensed real estate agent and I've been helping my clients achieve the "Lagos Dream" since 1990. I've been working at this same agency for over 15 years! You can always reach me directly via the phone number below.
    </p>
    </div>

    <div className='contactMeans'>
    <label><span><FaPhone className='text-red-400'/></span>08065032361</label>
    <label><span><FaPhone className='text-red-400'/></span>08065032361</label>

    <ul className='socialHandles'>
    <li><FaFacebook className=' text-red-400'/></li>
    <li><FaTwitter className='text-red-400'/></li>
    <li><FaGooglePlus className='text-red-400'/></li>
    </ul>
    </div>
    </div>
    </div>

    </div>
  )
}

export default PropertyInfo;