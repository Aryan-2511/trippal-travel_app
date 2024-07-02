import { getFamousPlaces, getCityCoordinates } from '../../../shared/OpenTripMap';

export const fetchFamousPlaces = async (city) => {
    try {
        const { lon, lat } = await getCityCoordinates(city);
        const placesData = await getFamousPlaces(lon, lat);
        return placesData;
    } catch (error) {
        console.error('Error fetching famous places:', error);
        throw error;
    }
};

export const fetchPlaceDetails = async (xid) => {
    try {
        const response = await axios.get('/api/places/place-details', {
            params: { xid }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching place details:', error);
        throw error;
    }
};