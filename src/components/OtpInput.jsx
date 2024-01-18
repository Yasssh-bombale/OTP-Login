import React, { useEffect, useRef, useState } from "react";

const OtpInput = ({ length = 4, onOtpSubmithandler = () => {} }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);
  console.log(inputRefs);

  const handleChange = (index, e) => {
    setOtp(e.target.value);
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
          className="w-14 h-14 mx-2"
        />
      ))}
    </div>
  );
};

export default OtpInput;
