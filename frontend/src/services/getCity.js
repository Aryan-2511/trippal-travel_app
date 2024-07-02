import axios from "axios";
const key = "2a9644d502mshfcb1bd4a8ee5a99p14c3fcjsn1b7db94c1935";

export const getCity = async (name) => {
  const options = {
    method: "GET",
    url: "https://booking-com.p.rapidapi.com/v1/hotels/locations",
    params: {
      name,
      locale: "en-gb",
    },
    headers: {
      "x-rapidapi-key": key,
      "x-rapidapi-host": "booking-com.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    const data = await response.data;
    const city = data.find(
      (el) =>
        el.name.toLowerCase() === name.toLowerCase() && el.dest_type === "city"
    );
    return city;
  } catch (error) {
    console.error("Error fetching city:", error);
    throw error;
  }
};
