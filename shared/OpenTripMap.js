const axios = require('axios');
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
module.exports.getFamousPlaces = async (lon, lat) => {
    const options = {
        method: 'GET',
        url: `https://api.opentripmap.com/0.1/en/places/radius`,
        params: {
            radius: 10000,
            lon,
            lat,
            rate: '3',
            format: 'json',
            apikey: process.env.OPENTRIPMAP_API_KEY
        }
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

module.exports.getCityCoordinates = async (city) => {
    const options = {
        method: 'GET',
        url: `https://api.opentripmap.com/0.1/en/places/geoname`,
        params: {
            name: city,
            apikey: process.env.OPENTRIPMAP_API_KEY
        }
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// module.exports = {
//     getFamousPlaces,
//     getCityCoordinates
// };