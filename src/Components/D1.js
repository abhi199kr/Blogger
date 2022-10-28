import React from 'react'
import "./D1.css"
import un from "../Images/unnamed.png"

const D1 = () => {
  return (
    <div className='bg'>
    
    <div className="container text-center pp">
        <h1 className='text-light text-center'>Publish your passions, your way</h1>
       
        <p className='text-light text-center h5'>Create a unique and beautiful blog easily.</p>
        {/* <div className='py-2 my-3 btn btn-warning rounded text-light cr '>CREATE YOUR BLOG</div> */}
        <button className='rounded bg1 py-2 px-2 text-light cre'>Create your blog</button>


        <div>
            <img className='img-fluid' src={un}
           alt="52621" />
        </div>
    </div>
      
    </div>
  )
}

export default D1
