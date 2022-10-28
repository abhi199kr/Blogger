import React from 'react'
import "./D6.css"
import know from "../Images/know.png"
import map from "../Images/map.png"

const D6 = () => {
  return (
    <div className='bg6'>
    <div className='d-flex flex-md-row flex-column'>
    <div className="col-md-6 col-sm-12 p-5" >
        <div className="container  text-light py">
    <h1>Know your audience</h1>
    <h5 className='py-5'>Find out which posts are a hit with Blogger’s built-in analytics. You’ll see where your audience is coming from and what they’re interested in. You can even connect your blog directly to Google Analytics for a more detailed look.

    </h5>
    </div>
    </div>
    <div className="col-md-6 col-sm-12" >
    <img className='img-fluid ma' src={map} alt="" />
    <img className='img-fluid ma' src={know} alt="" />
    </div>
    </div>
    
      
    </div>
  )
}

export default D6
