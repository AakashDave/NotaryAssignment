import React, { useState } from 'react';
import axios from "axios";

const Stepper1 = () => {

  const [stepper,setStepper]=useState(1);
  const [data1,setData1]=useState({
    chooseInsurance:"",
    extraSignNum:0,
    fileNum:0,
    signNum:0,
    isWitness:"",
    Name:"",
    phone:"",
    email:"",
    cName:"",
    agentName:"",
    cphone:"",
    cemail:"",
    loanNo:"",
    propAddress:"",
    location:"",
    date:"",
    time:""
})


const inputEvent=(event)=>{
  const value=event.target.value;
  const name=event.target.name;
  setData1(preVal=>{
    return{
      ...preVal,
      [name]:value
    }
  })
}

const submitData=()=>{
  axios.post('https://notaryapp-staging.herokuapp.com/plugin/submitApptDetails', data1)
  .then(response => console.log({ articleId: response.data.msg }))
  .catch(error => {
      console.error('There was an error!', error);
  });
}

  return (
    <>
     {stepper===1 ? <div className='Stepper1'>
        <div className='box1'>
          <button name='chooseInsurance' onClick={inputEvent} value={"Notary signing Agent"}>
            <h2>Notary signing Agent</h2>
            <p>Suitable for thos who purchase a brnad new car</p>
            <p>View Details </p>
          </button>
          <button name='chooseInsurance' onClick={inputEvent} value={"Remote Online Notary"}>
            <h2>Remote Online Notary</h2>
            <p>Suitable for thos who have alerady third party cover</p>
            <p>View Details </p>
          </button>
          <button name='chooseInsurance' onClick={inputEvent} value={"Mobile General Notary"}>
            <h2>Mobile General Notary</h2>
            <p>Suitable for thos who use this car infrequently</p>
            <p>View Details </p>
          </button>
        </div>
        <div className='box2'>
          <h2>Calculate your cost for RON!</h2>
          <div className='borderedDiv'>
            <div className="signerData">
              <div className="dataHead">
                <h3>No of Extra Signature</h3>
                <p>please enter zero if only requires one signature</p>
              </div>
              <input type="number"  name="extraSignNum" id="extraSignNum" onChange={inputEvent} value={data1.extraSignNum}/>
            </div>
            <div className="signerData">
              <div className="dataHead">
                <h3>How many files will you be uploading in this sesstion</h3>
              </div>
              <input type="number" name="fileNum" id="fileNum" onChange={inputEvent} value={data1.fileNum}/>
            </div>
            <div className="signerData">
              <div className="dataHead">
                <h3>No of Signers</h3>
              </div>
              <input type="number" name="signNum" id="signNum" onChange={inputEvent} value={data1.signNum}/>
            </div>
            <div className="signerData">
              <div className="dataHead">
                <h3>Do You Need Witness?</h3>
                <p>do Not Enter Anything if you are being yout own witness</p>
              </div>
              <input type="text" name="isWitness" id="isWitness" onChange={inputEvent} value={data1.isWitness} />
            </div>
          </div>
        </div>
      </div> : null}

     {stepper===2 ? <div className='Stepper2'>
        <div className="signerDetails">
          <h1>Signer Details</h1>
          <hr />
          <div className='inputDiv'>
            <label  for="Name">Name:</label>
            <input name="Name" id="Name" onChange={inputEvent} value={data1.Name}/>

            <label for="phone">Phone:</label>
            <input name="phone" id="phone" onChange={inputEvent} value={data1.phone}/>

            <label for="email">email:</label>
            <input type="email" name="email" id="email" onChange={inputEvent} value={data1.email}/>
          </div>
        </div>

        <div className="companyDetials">
        <h1>Title Company Details</h1>
          <hr />
          <div className='inputDiv'>
            <label  for="cName">Company Name:</label>
            <input name="cName" id="cName" onChange={inputEvent} value={data1.cName}/>

            <label  for="agentName">Agent Name:</label>
            <input name="agentName" id="agentName" onChange={inputEvent} value={data1.agentName}/>

            <label for="cphone">Phone:</label>
            <input name="cphone" id="cphone" onChange={inputEvent} value={data1.cphone}/>

            <label for="cemail">email:</label>
            <input type="email" name="cemail" id="cemail" onChange={inputEvent} value={data1.cemail}/>
          </div>
        </div>

        <div className="orderInfo">
        <h1>Ordered Info</h1>
          <hr />
          <div className='inputDiv'>
            <label  for="loanNo">Loan No:</label>
            <input name="loanNo" id="loanNo" onChange={inputEvent} value={data1.loanNo}/>

            <label  for="propAddress">Property Address:</label>
            <input name="propAddress" id="propAddress" onChange={inputEvent} value={data1.propAddress}/>

          </div>
        </div>
      </div> : null}

     {stepper===3 ? <div className='Stepper3'>
        <div className="signingLocation">
          <h1>Signing Location</h1>
          <hr />
          <div className='inputDivLoc'>
            <label  for="location">Enter Signing Location:</label>
            <input name="location" id="location" onChange={inputEvent} value={data1.location}/>

            <label for="date">Date:</label>
            <input type={"date"} name="date" id="date" onChange={inputEvent} value={data1.date}/>

            <label for="email">email:</label>
            <input  type={"time"} name="time" id="time" onChange={inputEvent} value={data1.time}/>
          </div>

          <button className='submitbtn' onClick={submitData}>Schedule Appointment</button>
        </div>
        
      </div> : null}
  
      {
        stepper===1 || stepper===2 ? <p className='nextStepBtn' onClick={()=>{
          setStepper(stepper+1);
        }}>Next Step</p> : null
      }
      {
        stepper===2 || stepper===3 ? <p className='nextStepBtn' onClick={()=>{
          setStepper(stepper-1);
        }}>Go Back</p> : null
      }
      
    </>
  )
}

export default Stepper1
