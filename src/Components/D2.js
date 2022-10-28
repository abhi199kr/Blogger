import React from 'react'
import "./D2.css"
import around from "../Images/around.png"

const D2 = () => {
  return (
    <div className='bg1'>
      <div className='d-flex flex-md-row flex-column '>
      <div className='col-md-6 col-sm-12 p-5'>
    <div className="container text-center text-light py">
    <h1 className='fe'>Choose the perfect design</h1>
    <h5>Create a beautiful blog that fits your style. Choose from a selection of easy-to-use templates – all with flexible layouts and hundreds of background images – or design something new.
    </h5>
    </div>
      </div>
      <div className='b col-md-6 col-sm-12'>
        <div className='p-5 container'>
        
        <img className='img-fluid' src={around}
         alt="12" />
        
        
        </div>
      </div>

      </div>
    </div>
  )
}

export default D2
