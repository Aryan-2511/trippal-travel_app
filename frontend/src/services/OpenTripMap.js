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