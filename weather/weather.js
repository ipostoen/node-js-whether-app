const request = require('request');

var getWeather = (lat, lng, callback) => {

    request({
        uri: `https://api.darksky.net/forecast/2025e9d6e9b60ceb7e37450f7a851824/${lat},${lng}?units=si`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to Forecast.io.');
        } else if (body.code === 400) {
            callback('Unable to fetch weather.');
        } else {
            callback(undefined, body.currently);
        }
    });
};

module.exports.getWeather = getWeather;