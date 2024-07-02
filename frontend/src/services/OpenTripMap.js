const apiKey = "5ae2e3f221c38a28845f05b6d54d582c14e557d2ee4c7bd43ed294da";
import axios from "axios";

const getFamousPlaces = async (lon, lat) => {
  const options = {
    method: "GET",
    url: `https://api.opentripmap.com/0.1/en/places/radius`,
    params: {
      radius: 10000,
      lon,
      lat,
      rate: "3",
      format: "json",
      apikey: apiKey,
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

const getCityCoordinates = async (city) => {
  const options = {
    method: "GET",
    url: `https://api.opentripmap.com/0.1/en/places/geoname`,
    params: {
      name: city,
      apikey: apiKey,
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

export const fetchFamousPlaces = async (city) => {
  try {
    const { lon, lat } = await getCityCoordinates(city);
    const placesData = await getFamousPlaces(lon, lat);
    return placesData;
  } catch (error) {
    console.error("Error fetching famous places:", error);
    throw error;
  }
};
