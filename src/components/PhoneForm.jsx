import React, { useState } from "react";
import OtpInput from "./OtpInput";

const PhoneForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtpField, setShowOtpField] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    if (phoneNumber.length > 10) {
      alert(
        "Entered number is Greater than 10 , phone number must contain 10 digits"
      );
      return;
    } else if (phoneNumber.length < 10) {
      alert(
        "Entered number is Less than 10 ,phone number must contain 10 digits"
      );
      return;
    }
    setShowOtpField(true);
  };

  const onOtpSubmithandler = (otp) => {
    console.log("login successfull with otp", otp);
  };

  return (
    <div className="border max-w-lg p-5">
      {!showOtpField ? (
        <form onSubmit={submitHandler}>
          <div className="w-full flex gap-2">
            <input
              className="w-full h-[2rem] text-black p-2 outline-none border-none "
              type="number"
              required
              placeholder="enter phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <button className="px-4 border" type="submit">
              Add
            </button>
          </div>
        </form>
      ) : (
        <div className=" flex flex-col items-center gap-5">
          <p className="text-2xl">Enter OTP sent to {phoneNumber}</p>
          <OtpInput length={4} onOtpSubmithandler={onOtpSubmithandler} />
        </div>
      )}
    </div>
  );
};

export default PhoneForm;
