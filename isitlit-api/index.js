const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const map = [];

app.post('/itslit', (req, res) => {
  const { latitude, longitude } = req.body;
  map.push({ latitude, longitude });
  console.log(`Recording new position at (${latitude}, ${longitude}).`);
  res.json(map);
});

app.get('/map', (req, res) => {
  res.json(map);
});

app.listen(3000);
