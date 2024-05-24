import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const OTPVerification = ({ 
  emailOTP, 
  setEmailOTP, 
  emailVerified, 
  setEmailVerified, 
  mobileOTP, 
  setMobileOTP, 
  mobileVerified, 
  setMobileVerified, 
  otpMessage,
  handleClosePopup 
}) => {
  const [bothOTPVerified, setBothOTPVerified] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  useEffect(() => {
    if (emailVerified && mobileVerified) {
      setBothOTPVerified(true);
    } else {
      setBothOTPVerified(false);
    }
  }, [emailVerified, mobileVerified]);

  const verifyEmailOTP = () => {
    if (emailOTP === '123456') {
      setEmailVerified(true);
      setOtpMessage('Email OTP verified successfully');
      setTimeout(() => setOtpMessage(''), 5000);
    } else {
      setOtpMessage('Invalid Email OTP');
    }
  };

  const verifyMobileOTP = () => {
    if (mobileOTP === '654321') {
      setMobileVerified(true);
      setOtpMessage('Mobile OTP verified successfully');
    } else {
      setOtpMessage('Invalid Mobile OTP');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
      <div className="bg-white p-8 rounded-lg flex flex-col mx-4">
        <div className="text-xl mb-4 text-center">Sign Up Successful!</div>
        <div className='text-sm text-neutral-500'>An OTP sent to entered Email and Mobile Number</div>
        <div className='text-sm text-neutral-500'>Verify It's You : )</div>
        <div className='mt-4 flex flex-col items-start'>
          <label className='text-neutral-500 text-sm' htmlFor="emailOTP">Email OTP</label>
          <input
            className='border-b pt-[1px] pb-[12px] border-neutral-300 outline-none mb-2 w-9/12'
            type="text"
            name="emailOTP"
            id="emailOTP"
            value={emailOTP}
            onChange={(e) => setEmailOTP(e.target.value)}
          />
          <button className="bg-teal-500 text-white py-2 px-4 rounded mb-2" onClick={verifyEmailOTP}>Verify</button>
          {emailVerified && <p className="text-green-500 text-sm">Email OTP verified successfully</p>}
        </div>
        <div className='mt-4'>
          <label className='text-neutral-500 text-sm' htmlFor="mobileOTP">Mobile OTP</label>
          <input
            className='border-b pt-[1px] pb-[12px] border-neutral-300 outline-none mb-2'
            type="text"
            name="mobileOTP"
            id="mobileOTP"
            value={mobileOTP}
            onChange={(e) => setMobileOTP(e.target.value)}
          />
          <button className="bg-teal-500 text-white py-2 px-4 rounded mb-2" onClick={verifyMobileOTP}>Verify</button>
          {mobileVerified && <p className="text-green-500 text-sm">Mobile OTP verified successfully</p>}
        </div>
        {otpMessage && <p className="text-red-500 text-sm">{otpMessage}</p>}
        <NavLink to='/login' className={`bg-teal-500 text-white py-2 px-4 rounded mt-4 ${!bothOTPVerified && 'opacity-50 pointer-events-none'}`} onClick={bothOTPVerified ? handleClosePopup : null}>OK</NavLink>
      </div>
    </div>
  );
};

export default OTPVerification;
