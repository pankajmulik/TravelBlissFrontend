import React, { useState } from 'react';

const BookHotelWrapper = (props) => {
  const [selectedType, setSelectedType] = useState(null);
  const [numberOfNights, setNumberOfNights] = useState(1);
  const [numberOfAdults, setNumberOfAdults] = useState(1);
  const [numberOfChildren, setNumberOfChildren] = useState(0);

  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

  const handleNightChange = (nights) => {
    setNumberOfNights(nights);
  };

  const handleAdultChange = (adults) => {
    setNumberOfAdults(adults);
  };

  const handleChildChange = (children) => {
    setNumberOfChildren(children);
  };

  const calculatePrice = () => {
    if (selectedType) {
      const basePrice = parseFloat(
        props.hotel.prices.find((price) => price.roomType === selectedType).price
      );
      let totalAdults = numberOfAdults;
      let totalChildren = numberOfChildren;

      if (totalAdults > 4) {
        totalAdults = 4;
      }

      if (totalChildren > 3) {
        totalChildren = 3;
      }

      const totalPeople = totalAdults + Math.floor(totalChildren / 4);
      const pricePerPerson = basePrice / 2; // Assuming a 50% discount
      const totalCost = totalPeople * pricePerPerson * numberOfNights;

      return totalCost;
    }
    return 0;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-auto flex items-center justify-center">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="bg-white p-8 rounded-lg z-10 relative">
        <div className="flex justify-end">
          <button
            className="bg-teal-500 px-4 py-2 text-white rounded hover:bg-teal-700"
            onClick={props.onClose}
          >
            X
          </button>
        </div>
        <h2 className="text-2xl font-bold mb-4">{props.hotel.hotelName}</h2>
        <p className="text-gray-700 mb-4">Location: {props.hotel.hotelAddress}</p>
        <div className="text-gray-600">
          {props.hotel.prices.map((priceInfo) => (
            <button
              key={priceInfo.roomType}
              className={`bg-gray-200 ml-4 hover:shadow-xl py-2 px-4 rounded ${
                selectedType === priceInfo.roomType ? 'text-white bg-teal-600 shadow-md' : ''
              }`}
              onClick={() => handleTypeChange(priceInfo.roomType)}
            >
              {priceInfo.roomType} - Price: {priceInfo.price}
            </button>
          ))}
        </div>

        {selectedType && (
          <div className='w-full flex justify-center items-center'>
            <div className="w-4/12 flex justify-evenly mb-4 mt-8">
              <label className="mr-4">Number of Nights:</label>
              <select
                value={numberOfNights}
                onChange={(e) => handleNightChange(parseInt(e.target.value))}
                className="w-16 bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded outline-none"
              >
                {[...Array(10).keys()].map((num) => (
                  <option key={num + 1} value={num + 1}>
                    {num + 1}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
        {selectedType && (
          <div className='w-full flex justify-center items-center'>
            <div className="w-4/12 flex justify-evenly mb-4">
              <label className="mr-4">Number of Adults:</label>
              <select
                value={numberOfAdults}
                onChange={(e) => handleAdultChange(parseInt(e.target.value))}
                className="w-16 bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded outline-none"
              >
                {[...Array(4).keys()].map((num) => (
                  <option key={num + 1} value={num + 1}>
                    {num + 1}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
        {selectedType && (
          <div className='w-full flex justify-center'>
            <div className="w-4/12 flex justify-evenly mb-4">
              <label className="mr-4">Number of Children:</label>
              <select
                value={numberOfChildren}
                onChange={(e) => handleChildChange(parseInt(e.target.value))}
                className="w-16 bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded outline-none"
              >
                {[...Array(4).keys()].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
        <div className="flex justify-end">
          <button
            className="mt-4 bg-teal-500 px-4 py-2 text-white rounded hover:bg-teal-700"
            onClick={props.onClose}
          >
            Let's go
          </button>
        </div>
        {selectedType && (
          <div>
            <p className="text-gray-600 text-2xl mb-4">
              You Got <span className="text-red-500">50% discount</span> Final Price : <span className='text-black text-3xl'> {calculatePrice()}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookHotelWrapper;
