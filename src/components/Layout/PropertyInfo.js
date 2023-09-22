import React from 'react'

function PropertyInfo() {
  return (
    <div>

      <div className='headers'>
        <h2>Hunting mansion in Lekki</h2>
        </div>

        <div className='imagepack'>
       <img src='' alt='mansions'/>
       </div>

       <div className='price'>
       <label>Price:</label> <h4>1200000</h4>
       </div>

       {/* ___________________________________________ */}

       <div className='property description'>
       <h2>Property Description</h2>
       <p>Enjoy a refreshing time amidst the monumental Appalachan mountians, in a townhouse that will host the most luxurious holiday for you and your family</p>
       </div>

       <div className='quick summary'>
    <h2>Quick Summary</h2>
    <label>Property ID:</label> <h4>812</h4> 
    <label>Property status:</label> <h4>Sale</h4>
    <label>Property type:</label> <h4>Building</h4>
    <label>Location:</label> <h4>2001-2099 Saint Charles Street Lekki, Lagos, Nigeria</h4>
    <label>Bedrooms:</label> <h4>2</h4>
    <label>Bathrooms:</label> <h4>3</h4>
    <label>Parking place:</label> <h4>1</h4>
    <label>Property Features:</label> <h4>Air conditioning, Balcony, Bedding, Coffee pot, Microwave, Outdoor kitchen</h4>
    </div>

    <div className='AgentContact'>

    <div className='headers'>
    <h2>Contact Agent</h2>
    </div>

    <img src='' alt='Agent'/>
    <div className='AgentName'>
    <h4>Ugozi Eze</h4>
    </div>

    <div className='shortBio'>
    <p>Hello! My name is Ugozi Eze and i'm a full-time licensed real estate agent and I've been helping my clients achieve the "Lagos Dream" since 1990. I've been working at this same agency for over 15 years! You can always reach me directly via the phone number below.
    </p>
    </div>

    <div className='contactMeans'>
    <label>08065032361</label>
    <label>08065032361</label>

    <div className='socialHandles'>
    <span>facebook</span>
    <span>twitter</span>
    <span>email</span>
    </div>

    </div>

    </div>

    </div>
  )
}

export default PropertyInfo;