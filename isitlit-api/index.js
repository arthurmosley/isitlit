const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;
const HOSTNAME = process.env.HOSTNAME || 'localhost';

const app = express();

// Parses JSON post data automatically.
app.use(bodyParser.json());

const points = [];

// POST /points
//
// Takes a point from the POST body in JSON format and records in in the global
// list of points. Responds with the total list of points.
app.post('/points', (req, res) => {
  const { latitude, longitude } = req.body;
  if (
    typeof latitude === 'number' &&
    typeof longitude === 'number' &&
    -90 <= latitude && latitude <= 90 &&
    -180 <= longitude && longitude <= 180
  ) {
    // Create a new point at the given latitude and longitude.
    points.push({ latitude, longitude });
    console.log(`new point (${latitude}, ${longitude})`);
    res.json(points);
  } else {
    // Reject the new point that is in an invalid format.
    res.json({ error: 'invalid latitude or longitude' });
  }
});

// GET /points
//
// Responds with the total list of points in the global map.
app.get('/points', (req, res) => {
  // Send back the array of points in JSON format.
  res.json(points);
});

app.listen(PORT, HOSTNAME, () => {
  console.log(`isitlit API listening @ http://${HOSTNAME}:${PORT}`);
});
