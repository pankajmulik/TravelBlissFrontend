import React, { useState } from 'react';
import WishlistTable from "../WishlistTable/WishlistTable";

class BookHotelWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedType: null,
            numberOfNights: 1,
            numberOfAdults: 1,
            numberOfChildren: 0,
            wishlist: [],
        };
    }

    handleTypeChange = (type) => {
        this.setState({ selectedType: type });
    };

    handleNightChange = (nights) => {
        this.setState({ numberOfNights: nights });
    };

    handleAdultChange = (adults) => {
        this.setState({ numberOfAdults: adults });
    };

    handleChildChange = (children) => {
        this.setState({ numberOfChildren: children });
    };

    calculatePrice = () => {
        const { selectedType, numberOfNights, numberOfAdults, numberOfChildren } = this.state;
        const basePrice = parseFloat(this.props.hotel.pricing[selectedType]);
        let totalAdults = numberOfAdults;
        let totalChildren = numberOfChildren;

        if (totalAdults > 4) {
            totalAdults = 4;
        }

        if (totalChildren > 3) {
            totalChildren = 3;
        }

        const totalPeople = totalAdults + Math.floor(totalChildren / 4);
        const pricePerPerson = basePrice / 2;
        const totalCost = totalPeople * pricePerPerson * numberOfNights;

        return totalCost;
    };
    handleLetsGo = () => {
        const { selectedType, numberOfNights, numberOfAdults, numberOfChildren } = this.state;
        const price = this.calculatePrice();

        const selectedHotel = {
            name: this.props.hotel.name,
            selectedType,
            numberOfNights,
            numberOfAdults,
            numberOfChildren,
            price,
        };

        this.setState((prevState) => ({
            wishlist: [...prevState.wishlist, selectedHotel],
        }));

        // Close the modal or perform any other desired action
        this.props.onClose();
    };

    handleRemoveFromWishlist = (index) => {
        this.setState((prevState) => ({
            wishlist: prevState.wishlist.filter((_, i) => i !== index),
        }));
    };
    render() {
        return (
            <div className="fixed inset-0 z-50 overflow-auto flex items-center justify-center">
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="bg-white p-8 rounded-lg z-10 relative">
                    <h2 className="text-2xl font-bold mb-4">{this.props.hotel.name}</h2>
                    <div className="flex justify-end">
                        <button
                            className="bg-teal-500 px-4 py-2 text-white rounded hover:bg-teal-700"
                            onClick={this.props.onClose}
                        >
                            Close
                        </button>
                    </div>
                    <p className="text-gray-700 mb-4">Location: {this.props.hotel.address}</p>
                    <div className="text-gray-600">
                        {Object.entries(this.props.hotel.pricing).map(([type, price]) => (
                            <button
                                key={type}
                                className={`bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded ${this.state.selectedType === type ? 'bg-teal-500 text-white' : ''}`}
                                onClick={() => this.handleTypeChange(type)}
                            >
                                {type} - Price: {price}
                            </button>
                        ))}
                    </div>

                    {this.state.selectedType && (
                        <div className="flex justify-center mb-4">
                            <label className="mr-4">Number of Nights:</label>
                            <select
                                value={this.state.numberOfNights}
                                onChange={(e) => this.handleNightChange(parseInt(e.target.value))}
                                className="bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded"
                            >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                        </div>
                    )}
                    {this.state.selectedType && (
                        <div className="flex justify-center mb-4">
                            <label className="mr-4">Number of Adults:</label>
                            <select
                                value={this.state.numberOfAdults}
                                onChange={(e) => this.handleAdultChange(parseInt(e.target.value))}
                                className="bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded"
                            >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </div>
                    )}
                    {this.state.selectedType && (
                        <div className="flex justify-center mb-4">
                            <label className="mr-4">Number of Children:</label>
                            <select
                                value={this.state.numberOfChildren}
                                onChange={(e) => this.handleChildChange(parseInt(e.target.value))}
                                className="bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded"
                            >
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                    )}
                    <div className="flex justify-end">
                        <button
                            className="bg-teal-500 px-4 py-2 text-white rounded hover:bg-teal-700"
                            onClick={this.handleLetsGo}
                        >
                            Let's go
                        </button>
                    </div>
                    {this.state.selectedType && (
                        <div>
                            <p className="text-gray-600 mb-4">
                                Price <span className="text-red-500">with 50 % discount</span> : {this.calculatePrice()}
                            </p>
                        </div>
                    )}
                    <WishlistTable hotels={this.state.wishlist} onRemove={this.handleRemoveFromWishlist} />

                </div>
            </div>
        );
    }
}

export default BookHotelWrapper;