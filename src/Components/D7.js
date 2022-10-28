import React from 'react'
import par from "../Images/par.png"
import vid from "../Images/vid.png"

const D7 = () => {
  return (
    <div className='bg'>
    <div className='d-flex flex-md-row flex-column '>
     <div className='col-md-6 col-sm-12 p-5'>
   <div className="container  text-light py">
   <h1>Hang onto your memories</h1>
   <h5 className='py-5'>Save the moments that matter. Blogger lets you safely store thousands of posts, photos, and more with Google.
   </h5>
   </div>
     </div>
     <div className='b col-md-6 col-sm-12'>
       <div className='p-5 container'>
       
       <img className="im img-fluid"  src=""
     alt="" />
     <img className="im img-fluid" src={par} alt="" />
    <img className='img-fluid' src={vid} alt="" />
       
       </div>
     </div>

     </div>
     
   </div>
  )
}

export default D7
