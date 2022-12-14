import React from 'react';
import Navbar from './Navbar';
import Steppers from './Steppers';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
const App = () => {


  return (
    <>
      <Navbar/>
      <main>
        <section>
          <div className='topMenu'>
            <h1> <span> <ArrowBackIcon/> </span> New Appointment Request</h1>
            <p>same great courage for less</p>
          </div>
        </section>
        <section className='stepperClass'>
        <Steppers/>
        </section>
       
      </main>
    </>     
  )
}

export default App;
