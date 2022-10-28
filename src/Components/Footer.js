import React from 'react'
import "./Footer.css"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Footer = () => {
  return (
    <div className='bg6'>
    <div className="container">
        <div className="d-flex flex-md-row flex-column gap-5 text pt-5">
            <div>
            <h1 className='text-light'>Help</h1>
            <h5 className='pt-5'>Help Center</h5>
            <h5>Help Forum</h5>
            <h5>video Tutorials</h5>
            </div>

            <div>
            <h1 className='text-light'>Community</h1>
            <h5 className='pt-5'>Blogger Buzz</h5>
            {/* <h5>Help Forum</h5>
            <h5>video Tutorials</h5> */}
            </div>
            <div>
            <h1 className='text-light'>Developer</h1>
            <h5 className='pt-5'>Blogger Api</h5>
            <h5>Developer Forum</h5>
            
            </div>
            
        </div>
       
        <p className='border-top border-light'></p>
        <div className='d-flex flex-md-row flex-column py-5'>
        <div className="d-flex gap-4 text h6  flex-grow-1">
            <div>
                Terms of Services
            </div>
            <div className='bor px-3'>
                Privacy
            </div>
            <div className=''>
                Content Policy
            </div>
        </div>
        <div className=''>
        <div className="btn-group dropup">
  

  
<Dropdown>
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
          English
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark">
          <Dropdown.Item href="#/action-1" active>
            Action
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">Hidi</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Bengali</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-4">Chinese</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
</div>
        </div>
      





        </div>
      
    </div>
      
    </div>
  )
}

export default Footer
