import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import ToursandTravelsServices from '../../Services/ToursandTravelsServices';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    userName: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [popup, setPopup] = useState({ isVisible: false, message: '', isSuccess: false });

  const validate = {
    userName: (value) => value ? '' : 'Username is required.',
    password: (value) => value ? '' : 'Password is required.'
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validate[name](value)
    }));
  };

//   const checkLogin = async () => {
//     try {
//       const res = await ToursandTravelsServices.loginuser(formData);
//       if (res.status === 202) {
//         setPopup({ isVisible: true, message: 'Login successful!', isSuccess: true });
//       } else {
//         setPopup({ isVisible: true, message: 'Invalid credentials.', isSuccess: false });
//       }
//     } catch (error) {
//       setPopup({ isVisible: true, message: 'An error occurred. Please try again.', isSuccess: false });
//     }
//   };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = Object.keys(formData).reduce((acc, key) => {
      const error = validate[key](formData[key]);
      if (error) acc[key] = error;
      return acc;
    }, {});

    if (Object.keys(newErrors).length === 0) {
      checkLogin();
    } else {
      setErrors(newErrors);
    }
  };

  const handleClosePopup = () => {
    setPopup({ isVisible: false, message: '', isSuccess: false });
    setFormData({
      userName: '',
      password: ''
    });
    if (!popup.isSuccess) {
      window.location.reload();
    }
  };

  return (
    <div className='flex flex-col justify-center items-center w-8/12 py-16'>
      <div className='bg-white py-2 px-8 opacity-80 rounded-lg w-full text-center'>Login to your Account</div>
      <form className='bg-white opacity-80 w-full rounded-lg px-8 flex flex-col' onSubmit={handleSubmit}>
        <div className='mt-6 flex flex-col'>
          <label className='text-neutral-500 text-sm' htmlFor="userName">Username</label>
          <input
            className='border-b pt-[1px] pb-[12px] border-neutral-300 outline-none'
            type="text"
            name="userName"
            id="userName"
            value={formData.userName}
            onChange={handleChange}
            required
          />
          {errors.userName && <p className="text-red-500 text-sm">{errors.userName}</p>}
        </div>
        <div className='mt-6 flex flex-col'>
          <label className='text-neutral-500 text-sm' htmlFor="password">Password</label>
          <input
            className='border-b pt-[1px] pb-[12px] border-neutral-300 outline-none'
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>
        <button className='bg-teal-500 text-white py-2 rounded-xl my-4' type="submit">Login</button>
        <div className='h-12 opacity-5 transparent'></div>
      </form>
      {popup.isVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg text-center">
            <h2 className="text-xl mb-4">{popup.message}</h2>
            <button className="bg-teal-500 text-white py-2 px-4 rounded" onClick={handleClosePopup}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
