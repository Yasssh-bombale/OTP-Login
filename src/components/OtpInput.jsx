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
      console.log(combinedOTP);
      onOtpSubmithandler(combinedOTP);
    }
  };

  const handlerClick = (index) => {};
  const handleKeyDown = (index, e) => {};

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
          onClick={() => handlerClick(index)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          className="w-14 h-14 mx-2 text-black text-3xl font-semibold text-center"
        />
      ))}
    </div>
  );
};

export default OtpInput;
