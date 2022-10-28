import React from 'react'
import wb from "../Images/wb.png"
import w from "../Images/w..png"
import y from "../Images/y..png"

import "./D3.css"

const D3 = () => {
  return (
    <div className='bg'>
     <div className='d-flex flex-md-row flex-column '>
      <div className='col-md-6 col-sm-12 p-5'>
    <div className="container  text-light py">
    <h1>Get a domain</h1>
    <h5 className='py-5'>Give your blog the perfect home. Get a blogspot.com domain or buy a custom domain with just a few clicks.
    </h5>
    </div>
      </div>
      <div className='b col-md-6 col-sm-12'>
        <div className='p-5 container'>
        
        <img className="im img-fluid"  src={wb}
      alt="" />
      <img className="im im1 img-fluid" src={w} alt="" />
      <img className="im im2 img-fluid" src={y} alt="" />       
        
        </div>
      </div>

      </div>
      
    </div>
  )
}

export default D3
