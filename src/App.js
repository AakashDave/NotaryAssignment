import React from 'react';
import Navbar from './Navbar';
import Stepper1 from './Stepper1';
import { Routes , Route } from 'react-router-dom';
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
        <Routes>
          <Route path='/' element={<Stepper1/>}></Route>
        </Routes>
        </section>
       
      </main>
    </>     
  )
}

export default App;
