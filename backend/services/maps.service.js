const axios = require('axios');

module.exports.getAddressCoordinate = async (address) => {
    const apiKey = process.env.GOOGLE_MAPS_API ;
    const url = `https://maps.gomaps.pro/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

    try {
        const response = await axios.get(url);
        if (response.data.status === 'OK') {
            const location = response.data.results[0].geometry.location;
            return {
                lat: location.lat,
                lng: location.lng
            };
        } else {
            throw new Error('Unable to find the address');
        }
    } catch (error) {
        console.error(error);
        throw new Error('Error fetching the coordinates');
    }
};

module.exports.getDistanceTime = async(origin , destination ) => {
    if ( !origin || !destination ){
        throw new Error('origin and destination are required') ; 
    }

    const apikey = process.env.GOOGLE_MAPS_API ; 

    const url = `https://maps.gomaps.pro/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${apikey}` ; 

    try {
        const response = await axios.get(url);
        if (response.data.status === 'OK') {

            if(response.data.rows[0].elements[0].status === "ZERO_RESULT"){
                throw new Error("no route found") ; 
            }
            
            return response.data.rows[0].elements[0];
        } else {
            throw new Error('Unable to calculate distance and time');
        }
    } catch (error) {
        console.error(error);
        throw new Error('Error fetching the distance and time');
    }


}

module.exports.getAutoCompleteSuggestions = async (input) => {
    
    if(!input){
        throw new Error('query is required') ; 
    }
    
    const apiKey = process.env.GOOGLE_MAPS_API;
    const url = `https://maps.gomaps.pro/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${apiKey}`;

    try {
        const response = await axios.get(url);
        if (response.data.status === 'OK') {
            return response.data.predictions;
        } else {
            throw new Error('Unable to fetch autocomplete suggestions');
        }
    } catch (error) {
        console.error(error);
        throw new Error('Error fetching autocomplete suggestions');
    }
};