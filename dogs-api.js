// Enviornment Variables
require('dotenv').config()
const port = process.env.PORT || 5000

// Dependeceies
const express = require('express')
const NodeHTTPError = require('node-http-error')
const bodyParser = require('body-parser')
const api = express()
const {} = require('ramda')
const { getDog } = require('./dal')

// Get route

api.get('/', function(req, res, next) {
  res.status(200).send('Welcome to the dog api dawg.')
})

// Get Dog Route

api.get('/dogs/:dogID', function(req, res, next) {
  const dogID = req.params.dogID

  getDog(dogID, function(err, dog) {
    if (err) {
      next(new NodeHTTPError(err.status, err.message, err))
      return
    }
    res.status(200).send(dog)
  })
})

api.listen(port, () => console.log('API is up and running.', port))
