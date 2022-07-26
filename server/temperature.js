const fetch = require('node-fetch');
const sensor_url = 'https://temperature-sensor-service.herokuapp.com/sensor';

module.exports.getTemperatureList = function(id) {
  return fetch(
    `${sensor_url}/${id}`
  );
}