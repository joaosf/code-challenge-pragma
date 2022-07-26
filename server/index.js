const express = require('express');
const cors = require('cors');

const temperature = require('./temperature');

const app = express();
const port = 8081;

app.use(cors());

app.get('/temperature/:id', (req, res) => {
  temperature.getTemperatureList(req.params.id)
    .then((response) => response.json())
    .then((response) => res.send(response));
});

app.listen(port, () => {
  console.log(`SensorTech server at http://localhost:${port}`);
});
