import React, { useState, useEffect} from 'react';
import hotelsData from '../../Hotel/datafile/hoteldata.json';
import BookHotelWrapper from './BookHotelWrapper/BookHotelWrapper';
import { useContext } from 'react';
import { userLoginContext } from '../../../context/userLogoncontext'
import { FaX } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';

const Hotels = () => {
  const [data, setData] = useState({});
  const [selectedCities, setSelectedCities] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [selectedHotel, setSelectedHotel] = useState(null);

  const { userstatus, setuserstatus } = useContext(userLoginContext)
  const [bookingalert, setbookingalert] = useState(false)
  const {
    hotels,sethotels
  } = useContext(userLoginContext)
  const handleBookNowClick = (hotel) => {
    if (userstatus === 'Login') {
      return setbookingalert(true)
    }
   setSelectedHotel(hotel);
    // sethotels(selectedHotel)
    sethotels([...hotels,hotel])
    console.log(selectedHotel)
  };

  const handleCloseModal = () => {
    setSelectedHotel(null);
  };

  useEffect(() => {

    setData(hotelsData);
  }, []);

  const handleCityClick = (cityName) => {
    setSelectedCities((prev) => {
      if (prev.includes(cityName)) {
        return prev.filter((city) => city !== cityName);
      } else {
        return [...prev, cityName];
      }
    });
  };

  const handleRatingClick = (rating) => {
    setSelectedRatings((prev) => {
      if (prev.includes(rating)) {
        return prev.filter((r) => r !== rating);
      } else {
        return [...prev, rating];
      }
    });
  };

  const getFilteredHotels = () => {
    if (!data.cities) {
      return [];
    }

    let filteredCities = selectedCities.length === 0 ? data.cities : data.cities.filter((city) => selectedCities.includes(city.cityName));

    return filteredCities.map((city) => ({
      ...city,
      rating: city.rating.filter((rating) => selectedRatings.length === 0 || selectedRatings.includes(rating.hotelRating))
    }));
  };

  return (
    <>

      {
        bookingalert && <div className='backdrop-blur w-full h-screen mt-8'>
          <div className='px-[35%]  ' >
            <div className='grid w-full'>
              <div className='grid grid-cols-2  bg-slate-900 text-white'>
                <div className='m-5'>
                  <h1 className='text-3xl'>
                    Alert!
                  </h1>
                </div>
                <div className='flex justify-end'>
                  <div onClick={() => setbookingalert(false)}>
                    <FaX />
                  </div>


                </div>
              </div>
              <div className='m-3 border-1'>

                <h1>
                  Please login for more informatiom!


                </h1>




              </div>

              <div className='flex flex-row '>
                <div className='mr-[10%] p-5'>
                  <button onClick={() => setbookingalert(!bookingalert)} className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-blue-700 rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                    close
                  </button>
                </div>
                <div className='mx-[10%] p-5'>
                  <NavLink to='/login'> <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">

                     Login here
                  </button>
                  </NavLink>
                </div>

              </div>
            </div>

          </div>
        </div>
      }


      <div className='bg-gray-100'>

        {data.stateName && <h1 className="text-3xl font-bold pb-4">{data.stateName}</h1>}
      </div>
      <div className="p-6 md:flex lg:flex bg-gray-100 gap-4">
        <div className='md:w-2/12 lg:w-2/12 bg-white md:h-fit lg:h-fit'>

          <div className="flex p-4 md:flex-col lg:flex-col flex-wrap gap-2 mb-4">
            <div className='text-neutral-600'>Cities</div>
            {data.cities && data.cities.map((city) => (
              <button
                key={city.cityName}
                onClick={() => handleCityClick(city.cityName)}
                className={`px-4 py-2 rounded ${selectedCities.includes(city.cityName) ? 'bg-teal-500 text-white' : 'bg-gray-200 text-gray-700'
                  } transition duration-300 ease-in-out`}
              >
                {city.cityName}
              </button>
            ))}
          </div>
          <div className="flex p-4 md:flex-col lg:flex-col flex-wrap gap-2 mb-6">
            <div className='text-neutral-600'>Rating</div>
            {data.cities && data.cities.flatMap((city) => city.rating.map((rating) => rating.hotelRating)).filter((value, index, self) => self.indexOf(value) === index).map((rating) => (
              <button
                key={rating}
                onClick={() => handleRatingClick(rating)}
                className={`px-4 py-2 rounded ${selectedRatings.includes(rating) ? 'bg-teal-500 text-white' : 'bg-gray-200 text-gray-700'
                  } transition duration-300 ease-in-out`}
              >
                {rating}
              </button>
            ))}
          </div>
        </div>


        <div className="grid sm:grid md:flex lg:flex flex-col md:w-8/12 lg:w-8/12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {getFilteredHotels().flatMap((city) =>
            city.rating.flatMap((rating) =>
              rating.hotels.map((hotel) => (
                <div key={hotel.name} className="relative border md:flex lg:flex rounded-lg hover:shadow-xl bg-white">
                  <div className='md:w-4/12 lg:w-4/12 flex justify-center items-center'>
                    <img src={hotel.image} alt={hotel.name} className="mx-2 w-full rounded my-2 h-56 object-cover" />
                  </div>
                  <div className="p-4 md:w-8/12 lg:w-8/12">
                    <h2 className="text-xl font-bold mb-2">{hotel.name}</h2>
                    <p className="text-gray-700 mb-2 w-10/12">Location: {hotel.address}</p>
                    <div className="text-gray-600">
                      {Object.entries(hotel.pricing).map(([type, price]) => (
                        <p key={type} className="mb-1">{type}: {price}</p>
                      ))}
                    </div>
                  </div>
                  <div className="md:absolute lg:absolute sm:ml-4 ml-4 right-0 bottom-0 mr-4 mb-4">
                    <button
                      className="bg-teal-500 px-8 py-2 text-white rounded transition-all duration-500 hover:bg-teal-700"
                      onClick={() => handleBookNowClick(hotel)}
                    >
                      Book Now
                    </button>

                  </div>
                </div>
              ))
            )
          )}

        </div>
        {selectedHotel && (
          <BookHotelWrapper hotel={selectedHotel} onClose={handleCloseModal} />
        )}
      </div>
    </>
  );
};

export default Hotels;

// Replace the URL with your actual API endpoint
// axios.get('/path/to/api')
//   .then(response => setData(response.data))
//   .catch(error => console.error('Error fetching data:', error));