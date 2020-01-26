const express = require('express');  //import express
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');

const customersRoute = require('./api/routes/customers');

mongoose.connect(
  'mongodb://localhost:27017/StitchesDB',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  (err) => {
    if (!err) {
      console.log('Connection success ');

    } else {
      console.log('Couldnt connect to DB' + JSON.stringify(err, undefined, 2));
    }

  }
)

const app = express();

app.use(morgan('dev')); // morgan for logging
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// allowing CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");

  if (req.method === 'OPTIONS'){
    res.header("Access-Control-Allow-Methods", "PUT, DELETE, GET, POST, PATCH")
    return res.status(200).json({})
  }
  next();
})

app.use('/customers',customersRoute);

// error handling
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error)
})

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    Message : error.message
  })
})

module.exports = app;
