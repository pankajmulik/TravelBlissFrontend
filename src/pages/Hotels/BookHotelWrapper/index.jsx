import React from 'react';

const BookHotelWrapper = ({ hotel, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 overflow-auto flex items-center justify-center">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="bg-white p-8 rounded-lg z-10 relative">
        <h2 className="text-2xl font-bold mb-4">{hotel.name}</h2>
        <p className="text-gray-700 mb-4">Location: {hotel.address}</p>
        <div className="text-gray-600">
            {Object.entries(hotel.pricing).map(([type, price]) => (
                <p key={type} className="mb-1">{type}: {price}</p>
            ))}
        </div>
        <div className="flex justify-end">
          <button
            className="bg-teal-500 px-4 py-2 text-white rounded hover:bg-teal-700"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookHotelWrapper;
