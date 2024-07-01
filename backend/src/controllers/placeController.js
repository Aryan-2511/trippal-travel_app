const express = require('express');
const router = express.Router();
const openTripMapService = require('../../../shared/OpenTripMap');

router.post('/famous-places',async (req, res) => {
    const { city } = req.query;
    console.log(`Received request for city: ${city}`); // Add this line

    try {
        const { lon, lat } = await openTripMapService.getCityCoordinates(city);
        console.log("lat and long : ", lat,lon)
        const placesData = await openTripMapService.getFamousPlaces(lon, lat);
        res.json(placesData);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving famous places', error });
    }
});

module.exports = router;