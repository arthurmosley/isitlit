// import dependencies
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express() // create your express app

const mongo = require('mongodb')
const MongoClient = mongo.MongoClient
const uri = "mongodb+srv://nums:14MQwIH5WDRhMwuP@cluster0-v8o7j.mongodb.net/test?retryWrites=true&w=majority";
var client;

var mongoClient = new MongoClient(uri, { reconnectTries : Number.MAX_VALUE, 
autoReconnect : true, useNewUrlParser : true }) // allows for connection to the db

mongoClient.connect((err, db) => { // returns a connection to the mongodb
  if (err != null) {
    console.log(err)
    return
  }
  client = db
})

// make app use dependencies
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

app.get('/points', (req, res) => {
  const collection = client.db("isitlit").collection("location_data")
  collection.find().toArray(function (err, results) {
    if (err) {
      console.log(err)
      res.send([])
      return
    }
    res.json(results)
  })
})

app.post('/points', (req, res) => {
  const collection = client.db("isitlit").collection("location_data")
  const { latitude, longitude } = req.body;
  if (
    typeof latitude === 'number' &&
    typeof longitude === 'number' &&
    -90 <= latitude && latitude <= 90 &&
    -180 <= longitude && longitude <= 180
  ) {
    collection.insertOne({latitude: latitude, longitude: longitude}, function (err, results) {
      if (err) {
        console.log(err)
        res.send('')
        return
      }
      res.json(results.ops[0]) // returns the new document
    })
    console.log(`new point (${latitude}, ${longitude})`);
  } else {
    // Reject the new point that is in an invalid format.
    res.json({ error: 'invalid latitude or longitude' });
  }
});


// app.post('/deleteTodo', (req, res) => {
//   const collection = client.db('test').collection('todos')
//   // remove document by its unique _id
//   collection.removeOne({'_id': mongo.ObjectID(req.body.todoID)},   function (err, results) {
//     if (err) {
//       console.log(err)
//       res.send('')
//       return
//     }
//     res.send() // return
//   })
// })

app.listen(process.env.PORT || 3000) // client is already running on 3000


//atlas password: alsfd#1sdadD





// const express = require('express');
// const bodyParser = require('body-parser');

// const PORT = process.env.PORT || 3000;
// const HOSTNAME = process.env.HOSTNAME || 'localhost';

// const app = express();

// // Parses JSON post data automatically.
// app.use(bodyParser.json());

// const points = [];

// // POST /points
// //
// // Takes a point from the POST body in JSON format and records in in the global
// // list of points. Responds with the total list of points.
// app.post('/points', (req, res) => {
//   const { latitude, longitude } = req.body;
//   if (
//     typeof latitude === 'number' &&
//     typeof longitude === 'number' &&
//     -90 <= latitude && latitude <= 90 &&
//     -180 <= longitude && longitude <= 180
//   ) {
//     // Create a new point at the given latitude and longitude.
//     points.push({ latitude, longitude });
//     console.log(`new point (${latitude}, ${longitude})`);
//     res.json(points);
//   } else {
//     // Reject the new point that is in an invalid format.
//     res.json({ error: 'invalid latitude or longitude' });
//   }
// });

// // GET /points
// //
// // Responds with the total list of points in the global map.
// app.get('/points', (req, res) => {
//   // Send back the array of points in JSON format.
//   res.json(points);
// });

// app.listen(PORT, HOSTNAME, () => {
//   console.log(`isitlit API listening @ http://${HOSTNAME}:${PORT}`);
// });
