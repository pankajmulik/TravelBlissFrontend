
// import React, { useState, useEffect } from 'react';
import hotelsData from '../../data/hotelsData.json';
// import BookHotelWrapper from './BookHotelWrapper';
// import axios from 'axios'; // Import Axios for HTTP requests

import React, { useState, useEffect } from 'react';
import BookHotelWrapper from './BookHotelWrapper';

const Hotels = () => {
  const [data, setData] = useState({});
  const [selectedCities, setSelectedCities] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [selectedState, setSelectedState] = useState('Karnataka');
  const [currentPage, setCurrentPage] = useState(1); // Added pagination state
  const hotelsPerPage = 9; // Number of hotels per page

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await ToursandTravelsServices.getHotelDataByStateName(selectedState); 
  //       setData(res.data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };
  //   fetchData();
  // }, [selectedState]);
  useEffect(() => {
    setData(hotelsData);
  }, []);

  const handleBookNowClick = (hotel) => {
    setSelectedHotel(hotel);
  };

  const handleCloseModal = () => {
    setSelectedHotel(null);
  };

  const handleCityClick = (cityName) => {
    setSelectedCities((prev) =>
      prev.includes(cityName) ? prev.filter((city) => city !== cityName) : [...prev, cityName]
    );
    setCurrentPage(1); // Reset to first page on filter change
  };

  const handleRatingClick = (rating) => {
    setSelectedRatings((prev) =>
      prev.includes(rating) ? prev.filter((r) => r !== rating) : [...prev, rating]
    );
    setCurrentPage(1); // Reset to first page on filter change
  };

  const getFilteredHotels = () => {
    if (!data.cities) {
      return [];
    }

    let filteredCities =
      selectedCities.length === 0
        ? data.cities
        : data.cities.filter((city) => selectedCities.includes(city.cityName));

    return filteredCities.map((city) => ({
      ...city,
      rating: city.hotelRating.filter(
        (rating) => selectedRatings.length === 0 || selectedRatings.includes(rating.hotelRating)
      ),
    }));
  };

  // Pagination logic
  const filteredHotels = getFilteredHotels().flatMap((city) =>
    city.rating.flatMap((rating) => rating.hotels)
  );
  const indexOfLastHotel = currentPage * hotelsPerPage;
  const indexOfFirstHotel = indexOfLastHotel - hotelsPerPage;
  const currentHotels = filteredHotels.slice(indexOfFirstHotel, indexOfLastHotel);
  const totalPages = Math.ceil(filteredHotels.length / hotelsPerPage);

  return (
    <>
      <div className='bg-gray-100'>
        {data.stateName && <h1 className='text-3xl font-bold pb-4'>{data.stateName}</h1>}
      </div>
      <div className='p-6 md:flex lg:flex bg-gray-100 gap-4'>
        <div className='md:w-2/12 lg:w-2/12 bg-white md:h-fit lg:h-fit'>
          <div className='flex p-4 md:flex-col lg:flex-col flex-wrap gap-2 mb-4'>
            <div className='bg-gray-100'>
              <h1 className='text-3xl font-bold pb-4'>{selectedState}</h1>
              {/* {/ Select menu for states /} */}
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className='px-4 py-2 rounded bg-white text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400'
              >
                <option value='Karnataka'>Karnataka</option>
                <option value='Another State'>Another State</option>
                {/* {/ Add more options for other states /} */}
              </select>
            </div>
            <div className='text-neutral-600'>Cities</div>
            {data.cities &&
              data.cities.map((city) => (
                <button
                  key={city.cityName}
                  onClick={() => handleCityClick(city.cityName)}
                  className={`px-4 py-2 rounded ${
                    selectedCities.includes(city.cityName) ? 'bg-teal-500 text-white' : 'bg-gray-200 text-gray-700'
                  } transition duration-300 ease-in-out`}
                >
                  {city.cityName}
                </button>
              ))}
          </div>
          <div className='flex p-4 md:flex-col lg:flex-col flex-wrap gap-2 mb-6'>
            <div className='text-neutral-600'>Rating</div>
            {data.cities &&
              data.cities
                .flatMap((city) => city.hotelRating.map((rating) => rating.hotelRating))
                .filter((value, index, self) => self.indexOf(value) === index)
                .map((rating) => (
                  <button
                    key={rating}
                    onClick={() => handleRatingClick(rating)}
                    className={`px-4 py-2 rounded ${
                      selectedRatings.includes(rating) ? 'bg-teal-500 text-white' : 'bg-gray-200 text-gray-700'
                    } transition duration-300 ease-in-out`}
                  >
                    {rating}
                  </button>
                ))}
          </div>
        </div>
        <div className='grid sm:grid md:flex lg:flex flex-col md:w-8/12 lg:w-8/12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {currentHotels.map((hotel) => (
            <div
              key={hotel.hotelName}
              className='relative border md:flex lg:flex rounded-lg hover:shadow-xl bg-white overflow-hidden'
            >
              <div className='md:w-4/12 lg:w-4/12 flex justify-center items-center'>
                <img
                  src={hotel.hotelImage}
                  alt={hotel.hotelName}
                  className='mx-2 w-full rounded my-2 h-56 object-cover transform scale-100 transition duration-300 hover:scale-105'
                />
              </div>
              <div className='p-4 md:w-8/12 lg:w-8/12'>
                <h2 className='text-xl font-bold mb-2'>{hotel.hotelName}</h2>
                <p className='text-gray-700 mb-2 w-10/12'>Location: {hotel.hotelAddress}</p>
                <div className='text-gray-600'>
                  {hotel.prices.map((priceInfo, index) => (
                    <p key={index} className='mb-1'>
                      {priceInfo.roomType}: {priceInfo.price}
                    </p>
                  ))}
                </div>
              </div>
              <div className='md:absolute lg:absolute sm:ml-4 ml-4 right-0 bottom-0 mr-4 mb-4'>
                <button
                  className='bg-teal-500 px-8 py-2 text-white rounded transition-all duration-500 hover:bg-teal-700'
                  onClick={() => handleBookNowClick(hotel)}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* {/ Pagination controls /} */}
      <div className='flex justify-center mt-4'>
        <button
          className={`px-4 py-2 mx-1 rounded ${
            currentPage === 1 ? 'bg-gray-200 text-gray-700' : 'bg-teal-500 text-white hover:bg-teal-700'
          }`}
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          {'<'}
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-4 py-2 mx-1 rounded ${
              currentPage === index + 1 ? 'bg-teal-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-teal-500 hover:text-white'
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          className={`px-4 py-2 mx-1 rounded ${
            currentPage === totalPages ? 'bg-gray-200 text-gray-700' : 'bg-teal-500 text-white hover:bg-teal-700'
          }`}
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          {'>'}
        </button>
      </div>
      {selectedHotel && <BookHotelWrapper hotel={selectedHotel} onClose={handleCloseModal} />}
    </>
  );
};

export default Hotels;

// // Replace the URL with your actual API endpoint
//     // axios.get('/path/to/api')
//     //   .then(response => setData(response.data))
//     //   .catch(error => console.error('Error fetching data:', error));


//     // import hotelsData from '../../data/hotelsData.json';

    
  


//       // useEffect(() => {
//   //   setData(hotelsData);
//   // }, []);

//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     try {
//   //       // Replace with your actual API endpoint
//   //       const response = await axios.get('https://your-api-endpoint'); 
//   //       setData(response.data); // Assuming API response structure matches hotelsData.json
//   //     } catch (error) {
//   //       console.error('Error fetching data:', error);
//   //     }
//   //   };
  

//   //   fetchData();
//   // // }, []);
//   // useEffect(() => {
//   //   setData(hotelsData);
//   // }, []);                   