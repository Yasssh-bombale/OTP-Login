import React, { useEffect, useRef, useState } from "react";

const OtpInput = ({ length = 4, onOtpSubmithandler = () => {} }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return;
    let newOTP = [...otp];
    // Allowing only one input
    newOTP[index] = value.substring(value.length - 1);
    setOtp(newOTP);

    // setter function for setOtp() is an asynchronous function hence we are using newOTP;
    const combinedOTP = newOTP.join("");
    if (combinedOTP.length === length) {
      //submit trigger
      onOtpSubmithandler(combinedOTP);
    }
    // move to next input if current input is filled;
    if (value && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // move focus to previous input when "backspace" is entered
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      inputRefs.current[index - 1].focus();
    }
  };
  const handleClick = (index) => {
    inputRefs.current[index].setSelectionRange(1, 1);
    //optional
    if (index > 0 && inputRefs.current[index - 1]) {
      inputRefs.current[otp.indexOf("")].focus();
    }
  };

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  return (
    <div>
      {otp.map((value, index) => (
        <input
          key={index}
          ref={(input) => (inputRefs.current[index] = input)}
          type="text"
          value={value}
          onChange={(e) => handleChange(index, e)}
          onClick={() => handleClick(index)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          className="w-14 h-14 mx-2 text-black text-3xl font-semibold text-center"
        />
      ))}
    </div>
  );
};

export default OtpInput;
