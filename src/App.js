import React, {useState, useRef} from 'react';
import OtpVerification from './components/OtpVerification';
import './App.css'

const App = () => {

  const [otp, setOtp] = useState(new Array(6).fill(null));
  const [displayOtpForm, setDisplayOtpForm] = useState(false); 
  const inputs = useRef([]);

  // setDisplay function sets the displayOtpForm value to true to display the otp fields and it's also shows altert box after clicking submit button.
  const setDisplay = () => {
    if(displayOtpForm && otp.every(x => Boolean(x) === true)){
      alert('Otp has submited.')
    }

    setDisplayOtpForm(true);
  }

  // receiving otp into fileds and make it move forword to the next field
  const handleChange = (index, event) => {
    const value = event.target.value;
    if (isNaN(value)) {
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value !== '' && index < 5) {
      inputs.current[index + 1].focus();
    }
  };

  // Setting behaviours for backSpace, arrowLeft, and arrowRight keys

  const handleKeyDown = (index, event) => {
    if (event.key === 'Backspace' && index > 0) {
      const newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);
      inputs.current[index - 1].focus();
    }

    if (event.key === 'ArrowLeft' && index > 0) {
      inputs.current[index - 1].focus();
    }

    if (event.key === 'ArrowRight' && index < 5) {
      inputs.current[index + 1].focus();
    }
  };

  // functionality which makes copied otp paste into fields

  const handlePaste = (event) => {
    event.preventDefault();
    const pastedData = event.clipboardData.getData('Text').slice(0, 6);
    const newOtp = [...otp];
    for (let i = 0; i < pastedData.length; i++) {
      if (i > 5) break;
      newOtp[i] = pastedData[i];
    }
    setOtp(newOtp);
  };

  return (
    <OtpVerification
    handleChange = {handleChange}
    handleKeyDown ={handleKeyDown}
    handlePaste = {handlePaste}
    otp = {otp}
    displayOtpForm = {displayOtpForm}
    inputs = {inputs}
    setDisplay = {setDisplay}
     />
  );
}

export default App;
