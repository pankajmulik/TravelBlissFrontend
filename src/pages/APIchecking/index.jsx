import React, { useEffect, useState } from "react";
import { FaHeart, FaRegHeart, FaTrashAlt } from "react-icons/fa";
import data from '../../data/stateData.json';

const APIchecking = () => {
    const [stateList, setStateList] = useState([
        'Telangana',
        'Andra Pradesh',
        'Karnataka',
        'Kerala',
        'Tripura',
        'Assam',
        'Haryana',
        'Gujarat',
        'Himachal Pradesh',
        'Bihar',
        'Goa',
        'Odisha',
        'Punjab',
        'Rajasthan',
        'Uttarakhand'
    ]);
    const [dataObj, setData] = useState([]);
    const [categories, setCategories] = useState({});
    const [search, setSearch] = useState('');
    
    const [liked, setLiked] = useState({});
    const [showWishlist, setShowWishlist] = useState(false);

    useEffect(() => {
        const initialCategories = {};
        dataObj.forEach((category) => {
            initialCategories[category.categoryName] = false;
        });
        setCategories(initialCategories);
    }, [dataObj]);

    const fetchInfo = async (stateName) => {
        console.log("data: ", data);
        const categoryNamesNew = {};
        data.categories.forEach((category) => {
            categoryNamesNew[category.categoryName] = true;
        });
        setCategories(categoryNamesNew);
        setData(data.categories);
    };

    useEffect(() => {
        fetchInfo("Karnataka");
    }, []);

    

   

    const toggleCategories = (categoryName) => {
        const newCategories = { ...categories, [categoryName]: !categories[categoryName] };
        setCategories(newCategories);
    };

    

    const toggleLike = (placeName) => {
        setLiked(prevLiked => ({ ...prevLiked, [placeName]: !prevLiked[placeName] }));
    };

    const anyCategorySelected = Object.values(categories).some((value) => value);
    const filteredProducts = dataObj.filter(category => !anyCategorySelected || categories[category.categoryName])
        .flatMap(category => category.places)
        .filter(product => search ? product.placeName.toLowerCase().includes(search.toLowerCase()) || product.nearbyAirport.toLowerCase().includes(search.toLowerCase()) : true);

    const likedPlaces = filteredProducts.filter(place => liked[place.placeName]);

    const removeFromWishlist = (placeName) => {
        setLiked(prevLiked => {
            const newLiked = { ...prevLiked };
            delete newLiked[placeName];
            return newLiked;
        });
    };

    return (
        <div className="App bg-gray-100 flex w-full px-8">
            <div className="w-1/5 bg-white h-94">
                <div className="ml-4 mt-8 text-xl font-bold">Find Your Place</div>
                {stateList.map((state, i) => (
                    <div key={i} onClick={() => fetchInfo(state)} className="cursor-pointer py-2 px-4 hover:bg-gray-200">
                        {state}
                    </div>
                ))}
            </div>
            <div className="w-4/5">
                <div className="flex justify-between items-center">
                    <input
                        type="text"
                        className="h-12 focus:outline-none border border-black ml-4 p-2 rounded my-4 w-96"
                        placeholder="Search"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button
                        className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded my-4 relative"
                        onClick={() => setShowWishlist(!showWishlist)}
                    >
                        {showWishlist ? "Show All" : "Wishlist"}
                        {likedPlaces.length > 0 && (
                            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-3 py-1 text-sm font-bold leading-none text-red-100 bg-red-600 rounded-full transform translate-x-1/2 -translate-y-1/2">
                                {likedPlaces.length}
                            </span>
                        )}
                    </button>
                </div>
                <div className="flex flex-wrap">
                    {dataObj.map((category, k) => (
                        <button key={k} onClick={() => toggleCategories(category.categoryName)} className={`px-4 py-2 border-2 text-neutral-600 rounded-md border-teal-500 m-2 ${categories[category.categoryName] ? "bg-teal-500 bg-opacity-30 text-neutral-600" : ""}`}>
                            {category.categoryName}
                        </button>
                    ))}
                </div>
                <div className="datacard grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                    {(showWishlist ? likedPlaces : filteredProducts).map((innerdata, index) => (
                        <div
                            key={index}
                            className="relative flex flex-col justify-start mb-4 border bg-white rounded p-2 shadow hover:bg-gray-100  transition-colors duration-300"
                        >
                            <div className="relative">
                                <img className="h-64 w-full rounded object-cover transition-transform duration-300 ease-in-out transform hover:scale-105" src={innerdata.placeImage} alt={innerdata.placeName} />
                                <div className="absolute top-2 right-2 cursor-pointer text-2xl text-red-500">
                                    {liked[innerdata.placeName] ? (
                                        <FaHeart onClick={() => toggleLike(innerdata.placeName)} />
                                    ) : (
                                        <FaRegHeart onClick={() => toggleLike(innerdata.placeName)} />
                                    )}
                                </div>
                            </div>
                            <div className="flex flex-col items-start p-4">
                                <div className="text-lg font-semibold">
                                    {innerdata.placeName}
                                </div>
                                <div className="text-lg">Nearby Railway Station: {innerdata.nearbyRailwayStation}</div>
                                <div className="text-lg">Nearby Airport: {innerdata.nearbyAirport}</div>
                                <div className="text-lg">Nearby Bus Stop: {innerdata.nearbyBusStop}</div>
                                <div className="w-full mt-2">
                                    <button
                                        className="bg-teal-500 hover:bg-teal-600 text-black py-2 rounded w-full"
                                    >
                                        Book Your Trip Now
                                    </button>
                                </div>
                                {showWishlist && (
                                    <div className="absolute top-3 left-3 cursor-pointer text-2xl text-red-500">
                                        <FaTrashAlt onClick={() => removeFromWishlist(innerdata.placeName)} />
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default APIchecking;
