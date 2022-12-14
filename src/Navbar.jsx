import React from 'react'
import image from "./image.jpg";
import MailIcon from '@material-ui/icons/Mail';
import CallIcon from '@material-ui/icons/Call';
import PinDropIcon from '@material-ui/icons/PinDrop';
import PersonIcon from '@material-ui/icons/Person';

const Navbar = () => {
  return (
    <>
      <nav className='navbar'>
        <div className='heading'><h1>BeInsurance</h1></div>
        <div className='profileData'>
            <div className="headDetail">
                <img className='profilepic' src={image} alt="images" />
                <h1>Jacob Jones</h1>
            </div>
            
            <div className="details">
                <p>
                    <MailIcon/> jacson.io@gmail.com
                </p>
                <p>
                    <CallIcon/> (316-777777)
                </p>
                <p>
                    <PinDropIcon/> 3891 Ranchview California 69638
                </p>
                <p>
                    <PersonIcon/> Insurance Id 784562534
                </p>
            </div>
        </div>
        
      </nav>
    </>
  )
}

export default Navbar;
