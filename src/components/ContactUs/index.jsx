import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactUs = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all required fields are filled
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields.');
      return;
    }

    // Send email using EmailJS
    emailjs.send(
      'service_vjrahaq', // Replace with your EmailJS service ID
      'template_iv4cq3p', // Replace with your EmailJS template ID
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        to_email: 'mailto:sushmidharreddyseelam@gmail.com', // Replace with the recipient's email address
      },
      'wksgdfI_D2H8fEwZ-' // Replace with your EmailJS user ID
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Message sent successfully');
      // Clear form fields
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      console.error('FAILED...', error);
      alert('Failed to send message');
    });
  };

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div 
      className='w-full bg-teal-300 flex justify-center py-16 bg-cover bg-center mt-2 border border-black' 
      style={{ 
        backgroundImage: isFormVisible ? "url('https://udaipurkiran.com/wp-content/uploads/2023/04/City-of-Lakes-1.jpg')" : "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://udaipurkiran.com/wp-content/uploads/2023/04/City-of-Lakes-1.jpg')", 
        minHeight: '100px' 
      }}
    >
      <div className='w-5/6 ' >
        <div className="flex sm:flex flex-col md:grid lg:grid grid-cols-5 sm:grid-cols-5 md:grid-cols-11 lg:grid-cols-11 gap-0">
          <div className="grid-items order-2 sm:order-2 md:order-1 lg:order-1 col-span-4 bg-cover       bg-center px-4 py-4 flex flex-col justify-center items-center" 
            style={{ 
              backgroundImage: "url('./images/ContactBackground.jpg')", 
              minHeight: '40vh', 
              backgroundColor: isFormVisible ? 'rgba(255, 255, 255, 0.2)' : 'transparent' 
            }}>
            <div className='text-4xl '>Contact Us</div>
            <div className='my-4 text-lg text-natural-500 mt-5 text-center'>Here are few wa ys to get in touch with us</div>
            <button
              className='bg-teal-300 border border-black px-8 py-2 mt-4 hover:transition-all duration-500 hover:bg-teal-500 shadow-md hover:shadow-lg'
              onClick={toggleFormVisibility}
            >
              {isFormVisible ? 'Cancel' : 'Contact Us'}
            </button>
          </div>

          {isFormVisible && (
            < >
              <div className="grid-items order-1 sm:order-1 md:order-2 lg:order-2 bg-white col-span-7 w-full py-8" style={{ 
              backgroundImage: "url('./images/ContactBackground.jpg')", 
              minHeight: '40vh', 
              backgroundColor: isFormVisible ? 'rgba(255, 255, 255, 0.2)' : 'transparent' 
            }}>
                {/* <div className='flex justify-center items-center'>
                  <img 
                    className='w-5/6 max-h-40 md:max-h-60 lg:max-h-80 object-contain' 
                    src="./images/BuildingsSVG.svg" 
                    alt="Buildings" 
                  />
                </div> */}
              </div>
              <div className="grid-items order-1 sm:order-1 md:order-2 lg:order-2 bg-white col-span-5 w-full px-4 py-2" style={{ 
              backgroundImage: "url('./images/ContactBackground.jpg')", 
              minHeight: '40vh', 
              backgroundColor: isFormVisible ? 'rgba(255, 255, 255, 0.2)' : 'transparent' 
            }}>
                <div className='-mt-16'>
                  <form className='w-full' onSubmit={handleSubmit}>
                    <div className='text-2xl my-4'>Message Us</div>
                    <div className='flex flex-col items-start'>
                      <input className='border border-black shadow-xl h-12 w-full pl-4 my-2 outline-none' placeholder='Your Name' name="name" type="text" value={formData.name} onChange={handleChange} required />
                      <input className='border border-black shadow-xl h-12 w-full pl-4 my-2 outline-none' placeholder='Email' name="email" type="email" value={formData.email} onChange={handleChange} required />
                      <textarea className='border border-black shadow-xl h-24 w-full pl-4 my-2 outline-none' placeholder='Message' name="message" value={formData.message} onChange={handleChange} required />
                    </div>
                    <div className='flex justify-center items-center my-2'>
                      <button className='bg-teal-300 border border-black px-12 py-3 hover:transition-all duration-500 hover:bg-teal-500'>Submit</button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="grid-items order-1 sm:order-1 md:order-2 lg:order-2 bg-white col-span-6 w-full px-4 py-2 rounded-lg" style={{ 
              backgroundImage: "url('./images/ContactBackground.jpg')", 
              minHeight: '40vh', 
              backgroundColor: isFormVisible ? 'rgba(255, 255, 255, 0.9)' : 'transparent' 
            }}>
                <div className='flex flex-col justify-center items-center'>
                  <div className='my-4 mb-2'>
                    <div className='text-2xl my-2'>Our Phone</div>
                    <div className='text-2xl text-neutral-400 my-2'>1234567890</div>
                    <div className='text-2xl mt-2'>Email</div>
                    <div className='text-2xl text-neutral-400 mailto:my-2'>abc@gmail.com</div>
                    <div className='text-2xl mt-2'>Address</div>
                    <div className='text-2xl text-neutral-400 my-2'>Building A, Flat No.5, Gardenia Park Phase-II, 6 S, Somnath Nagar Rd, Pune, Maharashtra 411014</div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;