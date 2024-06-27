import React from 'react';

const WishlistTable = ({ hotels, onRemove }) => {
    if (!hotels || hotels.length === 0) {
        return <p>Your wishlist is empty.</p>;
    }
    console.log(hotels);

    return (
        <table className="w-full">
            <thead>
                <tr className="bg-gray-200">
                    <th className="py-2 px-4">Hotel Name</th>
                    <th className="py-2 px-4">Room Type</th>
                    <th className="py-2 px-4">Nights</th>
                    <th className="py-2 px-4">Adults</th>
                    <th className="py-2 px-4">Children</th>
                    <th className="py-2 px-4">Price</th>
                    <th className="py-2 px-4">Action</th>
                </tr>
            </thead>
            <tbody>
                {hotels.map((hotel, index) => (
                    <tr key={index} className="border-b">
                        <td className="py-2 px-4">{hotel.name}</td>
                        <td className="py-2 px-4">{hotel.selectedType}</td>
                        <td className="py-2 px-4">{hotel.numberOfNights}</td>
                        <td className="py-2 px-4">{hotel.numberOfAdults}</td>
                        <td className="py-2 px-4">{hotel.numberOfChildren}</td>
                        <td className="py-2 px-4">{hotel.price}</td>
                        <td className="py-2 px-4">
                            <button
                                className="bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded"
                                onClick={() => onRemove(index)}
                            >
                                Remove
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default WishlistTable;