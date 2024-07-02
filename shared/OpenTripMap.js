const axios = require("axios");
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

module.exports.getPlaceDetails = async (xid) => {
    const options = {
        method: 'GET',
        url: `https://api.opentripmap.com/0.1/en/places/xid/${xid}`,
        params: {
            apikey: process.env.OPENTRIPMAP_API_KEY_2
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


module.exports.getFamousPlaces = async (lon, lat) => {
  const options = {
    method: "GET",
    url: `https://api.opentripmap.com/0.1/en/places/radius`,
    params: {
      radius: 10000,
      lon,
      lat,
      rate: "3",
      format: "json",
      apikey: process.env.OPENTRIPMAP_API_KEY,
    },
  };

    try {
        const response = await axios.request(options);
        const places = response.data.slice(0, 12); // Limit to 8 places

        const detailedPlaces = [];
        
        for (const place of places) {
            const placeDetails = await module.exports.getPlaceDetails(place.xid);
            // Simulate one second delay between each API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            detailedPlaces.push({
                xid: place.xid,
                name: place.name,
                description: placeDetails?.wikipedia_extracts?.text || 'No description available',
                image: placeDetails?.preview?.source || null,
            });
        }

        return detailedPlaces;
    } catch (error) {
        console.error(`Error fetching famous places: ${error.message}`);
        throw error;
    }
};

module.exports.getCityCoordinates = async (city) => {
  const options = {
    method: "GET",
    url: `https://api.opentripmap.com/0.1/en/places/geoname`,
    params: {
      name: city,
      apikey: process.env.OPENTRIPMAP_API_KEY,
    },
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
