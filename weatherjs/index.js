// index.js

const axios = require('axios');

const apiKey = 'a324378e99550b9cb203d178bf7b33de';

async function getWeatherData(latitude, longitude) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

    try {
        const res = await axios.get(apiUrl);
        console.log(res.data);
        return res.data;  // Returning the data for further use
    } catch (error) {
        console.error('Error making API call:', error.message);
        throw error;  // Re-throw the error for the caller to handle
    }
}
// getWeatherData();
module.exports = {
    getWeatherData,
};
