import React from 'react';

// Loader or Skeleton Component for Hotel Card
const HotelCardLoader = () => {
  
  // Placeholder data for initial loading state
  const placeholders = Array.from({ length: 3 }).map((_, index) => (
    <div key={index} className="relative border md:flex lg:flex rounded-lg bg-white p-4 mb-4">
      <div className="md:w-4/12 lg:w-4/12 flex justify-center items-center">
        {/* Placeholder for hotel image */}
        <div className="animate-pulse w-36 h-36 bg-gray-300 rounded-lg"></div>
      </div>
      <div className="p-4 md:w-8/12 lg:w-8/12">
        {/* Placeholder text */}
        <div className="animate-pulse bg-gray-300 h-8 mb-2 w-2/3 rounded-full"></div>
        <div className="animate-pulse bg-gray-300 h-4 mb-2 w-3/4 rounded-full"></div>
        <div className="animate-pulse bg-gray-300 h-4 mb-2 w-2/4 rounded-full"></div>
        <div className="animate-pulse bg-gray-300 h-4 mb-2 w-3/4 rounded-full"></div>
        <div className="animate-pulse bg-gray-300 h-4 mb-2 w-2/5 rounded-full"></div>
        <div className="animate-pulse bg-gray-300 h-4 mb-2 w-3/5 rounded-full"></div>
        <div className="animate-pulse bg-gray-300 h-4 mb-2 w-4/5 rounded-full"></div>
      </div>
    </div>
  ));

  // Handle image load error
  const handleImageError = (event) => {
    event.target.onerror = null; // Prevent infinite loop in case of repeated errors
    event.target.src = 'https://ruckuscomp.com/wp-content/uploads/2021/02/noimg.jpg'; // Fallback image URL
    event.target.classList.add('object-cover'); // Apply object-cover class to handle image dimensions
    event.target.nextElementSibling.style.display = 'block'; // Display error message
  };

  return (
    <>
      {/* Display 3 initial loading placeholders */}
      {placeholders}

      {/* Specific loader and error handling for hotel image */}
      <div className="relative border md:flex lg:flex rounded-lg bg-white p-4 mb-4">
        <div className="md:w-4/12 lg:w-4/12 flex justify-center items-center">
          {/* Hotel image with error handling */}
          <img
            src="invalid-url.jpg" // Example invalid URL to demonstrate error handling
            alt="Hotel Image"
            className="w-36 h-36 bg-gray-300 rounded-lg animate-pulse"
            onError={handleImageError} // Handle image load error
          />
          {/* Error message or alternate loader */}
          <div className="absolute inset-0 flex items-center justify-center text-red-500 font-bold hidden">
            Image failed to load
          </div>
        </div>
        <div className="p-4 md:w-8/12 lg:w-8/12">
          {/* Placeholder text */}
          <div className="animate-pulse bg-gray-300 h-8 mb-2 w-2/3 rounded-full"></div>
          <div className="animate-pulse bg-gray-300 h-4 mb-2 w-3/4 rounded-full"></div>
          <div className="animate-pulse bg-gray-300 h-4 mb-2 w-2/4 rounded-full"></div>
          <div className="animate-pulse bg-gray-300 h-4 mb-2 w-3/4 rounded-full"></div>
          <div className="animate-pulse bg-gray-300 h-4 mb-2 w-2/5 rounded-full"></div>
          <div className="animate-pulse bg-gray-300 h-4 mb-2 w-3/5 rounded-full"></div>
          <div className="animate-pulse bg-gray-300 h-4 mb-2 w-4/5 rounded-full"></div>
        </div>
      </div>
    </>
  );
};

export default HotelCardLoader;
