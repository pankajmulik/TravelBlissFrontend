import React, { useEffect, useState } from "react";
import HomeFlexSlider from "../../components/HomeFlexSlider";
import data from '../../data/stateData.json';
import StateLoader from "./StateLoader";
import { FaHeart, FaRegHeart, FaTrashAlt } from "react-icons/fa";

const States = () => {
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
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
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
        // const { data } = await ToursandTravelsServices.getDataByState(stateName);
        console.log("data: " + data);
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

    

    const addToCart = (id, pimage, product, pprice) => {
        alert("Item added to cart, please scroll down");
        setTotal(total + parseInt(pprice));
        setCart([...cart, { id, pimage, product, pprice }]);
    };

    const toggleCategories = (categoryName) => {
        const newCategories = { ...categories, [categoryName]: !categories[categoryName] };
        setCategories(newCategories);
    };


    const anyCategorySelected = Object.values(categories).some((value) => value);
    const filteredProducts = dataObj
        .filter(category => !anyCategorySelected || categories[category.categoryName])
        .flatMap(category => {
            if (search) {
                if (category.categoryName.toLowerCase().includes(search.toLowerCase())) {
                    return category.places;
                }
                return category.places.filter(product => 
                    product.placeName.toLowerCase().includes(search.toLowerCase()) ||
                    product.nearbyAirport.toLowerCase().includes(search.toLowerCase())
                );
            }
            return category.places;
        });

        // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

        // Calculate pagination
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const displayedProducts = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };


    //Wishlist
    const toggleLike = (placeName) => {
        setLiked(prevLiked => ({ ...prevLiked, [placeName]: !prevLiked[placeName] }));
    };
    const likedPlaces = filteredProducts.filter(place => liked[place.placeName]);

    const removeFromWishlist = (placeName) => {
        setLiked(prevLiked => {
            const newLiked = { ...prevLiked };
            delete newLiked[placeName];
            return newLiked;
        });
    };

    return (
        <>
            <div className="">
                <HomeFlexSlider />
            </div>
            <div className="App bg-gray-100 flex w-full px-8 -mt-16 ">
                <div className="w-1/5 h-fit bg-white rounded-lg border">
                    <div className="mt-8 text-2xl italic text-center">Find Your Place</div>
                    {stateList.map((state, i) => (
                        <div key={i} onClick={() => fetchInfo(state)} className="ml-6 mb-4 mt-6 flex cursor-pointer text-neutral-500 hover:text-teal-500">
                            {state}
                        </div>
                    ))}
                </div>
                <div className="w-4/5">
                    <div className="w-full flex justify-center">
                        <input
                            type="text"
                            className="h-12 w-6/12 focus:outline-none border-[1.5px] border-teal-600 focus:border-teal-400 ml-8 p-2 rounded-xl"
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
                    {dataObj.map((category, k) => (
                        <button key={k} onClick={() => toggleCategories(category.categoryName)} className={`px-10 py-2 border-2 text-neutral-600 rounded-md border-teal-500 m-4 ${categories[category.categoryName] ? "bg-teal-500 bg-opacity-30 text-neutral-600" : ""}`}>
                            {category.categoryName}
                        </button>
                    ))}
                    <div className="datacard grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {(showWishlist ? likedPlaces : displayedProducts).map((innerdata, index) => (
                        <div key={index} className="relative flex flex-col justify-start mb-4 border bg-white rounded-lg shadow-lg overflow-hidden">
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
                                <div className="text-lg font-semibold mb-2">
                                    {innerdata.placeName}
                                </div>
                                <div className="text-sm mb-1">Nearby Railway Station: {innerdata.nearbyRailwayStation}</div>
                                <div className="text-sm mb-1">Nearby Airport: {innerdata.nearbyAirport}</div>
                                <div className="text-sm mb-1">Nearby Bus Stop: {innerdata.nearbyBusStop}</div>
                                <div className="w-full mt-4">
                                    <button
                                        className="bg-teal-500 hover:bg-teal-600 text-white py-2 rounded w-full"
                                        onClick={() => addToCart(innerdata.id, innerdata.placeImage, innerdata.placeName, innerdata.nearbyRailwayStation)}
                                    >
                                        Add to favourite
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

                    {/* / Pagination Controls / */}
                <div className="flex justify-center mt-8">
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i}
                            className={`px-4 py-2 mx-1 border rounded ${currentPage === i + 1 ? "bg-teal-500 text-white" : "bg-white text-black border-gray-300"}`}
                            onClick={() => handlePageChange(i + 1)}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>
                </div>
            </div>
        </>
    );
};

export default States;
