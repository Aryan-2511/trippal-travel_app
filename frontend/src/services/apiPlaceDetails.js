// import axios from "axios";

// const id = "5132009123fa5a244059c72f70125fb04840f00102f9014496730800000000";
// const key = "2062b7123d65401f9cea343467368d92";
const key = "5ae2e3f221c38a28845f05b6f129fa0e5e2a61875fd94904e3b41530";
// const API_KEY = "AIzaSyAQ_l2zecqLsTJkPUDb9n-dAJ4GHXtfhAU";
function apiPlaceDetails() {
  fetch(`https://api.opentripmap.com/0.1/en/places/xid/Q372040?apikey=${key}`)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}

export default apiPlaceDetails;
