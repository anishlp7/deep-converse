import React, { useState } from "react";
import OneColumnLayout from "../layouts/oneColumnLayout";
import { BiLoaderAlt } from 'react-icons/bi';
import "../styles/storeUserDetails.scss";
import { handleButtonClick } from "../utils/handleButtonClick";

const StoreUserDetails = ({setQuestionNumber}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isBtnClicked, setIsBtnClicked] = useState(false);
  const [errorMsgName, setErrorMsgName] = useState('');
  const [errorMsgEmail, setErrorMsgEmail] = useState('');

  const handleUserDetails = (e) => {
    e.preventDefault();
    setIsBtnClicked(true);
    setErrorMsgName('');
    setErrorMsgEmail('');

    if(name.length === 0){
      setErrorMsgName('Please enter your name');
      return setIsBtnClicked(false);
    } 
    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)){
      setErrorMsgEmail('Please enter a valid email address');
      return setIsBtnClicked(false);
    }

    console.log("Name: ", name);
    console.log("Email: ", email);
    handleButtonClick('Failure', setQuestionNumber)

  }
  return (
    <OneColumnLayout>
      <form className="dc-form-container">
        <div className="dc-input-style-container">
          <label className="dc-label-style">Name</label>
          <input
            type="text"
            className="dc-input-style"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <span className="dc-error-style">{errorMsgName}</span>
        </div>
        <div className="dc-input-style-container">
          <label className="dc-label-style">Email</label>
          <input
            type="email"
            className="dc-input-style"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <span className="dc-error-style">{errorMsgEmail}</span>
        </div>
        
        <button type="submit" className="dc-store-details-btn" onClick={handleUserDetails}>
        {
          isBtnClicked ?
          <BiLoaderAlt className='dc-btn-loader' />
          :
          "Submit"
      }
        </button>
      </form>
    </OneColumnLayout>
  );
};

export default StoreUserDetails;
