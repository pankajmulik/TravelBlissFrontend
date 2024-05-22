import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    contact: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const validate = {
    username: (value) => /^[a-zA-Z0-9_]{3,16}$/.test(value) ? '' : 'Username must be 3-16 characters and can only contain letters, numbers, and underscores.',
    email: (value) => /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(value) ? '' : 'Email must be in lowercase, include "@" and a valid domain extension.',
    contact: (value) => /^[6-9]\d{9}$/.test(value) ? '' : 'Contact number must be 10 digits and start with a digit from 6 to 9.',
    password: (value) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!]).{8,}$/.test(value) ? '' : 'Password must be at least 8 characters long, contain uppercase and lowercase letters, and include special characters.',
    confirmPassword: (value, password) => value === password ? '' : 'Passwords do not match.'
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validate[name](value, formData.password)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = Object.keys(formData).reduce((acc, key) => {
      const error = validate[key](formData[key], formData.password);
      if (error) acc[key] = error;
      return acc;
    }, {});

    if (Object.keys(newErrors).length === 0) {
      // Proceed with form submission (e.g., API call)
      console.log('Form submitted successfully');
      setIsPopupVisible(true);
    } else {
      setErrors(newErrors);
    }
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
    setFormData({
      username: '',
      email: '',
      contact: '',
      password: '',
      confirmPassword: ''
    });
  };

  return (
    <div className='flex flex-col justify-center items-center w-8/12 py-16'>
      <div className='bg-white py-2 px-8 opacity-90 rounded-lg w-full text-center'>SignUp to your Account</div>
      <form className='bg-white opacity-90 w-full rounded-lg px-8 flex flex-col' onSubmit={handleSubmit}>
        {['username', 'email', 'contact', 'password', 'confirmPassword'].map((field) => (
          <div key={field} className='mt-6 flex flex-col'>
            <label className='text-neutral-500 text-sm' htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
            <input
              className='border-b pt-[1px] pb-[12px] border-neutral-300 outline-none'
              type={field === 'password' || field === 'confirmPassword' ? 'password' : 'text'}
              name={field}
              id={field}
              value={formData[field]}
              onChange={handleChange}
              required
            />
            {errors[field] && <p className="text-red-500 text-sm">{errors[field]}</p>}
          </div>
        ))}
        <button className='bg-teal-500 text-white py-2 rounded-xl my-4' type="submit">SignUp</button>
      </form>
      {isPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-xl mb-4">Sign Up Successful!</h2>
            <button className="bg-teal-500 text-white py-2 px-4 rounded" onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;
