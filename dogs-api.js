// Enviornment Variables
require('dotenv').config()
const port = process.env.PORT || 5000

// Dependeceies
const express = require('express')
const NodeHTTPError = require('node-http-error')
const bodyParser = require('body-parser')
const api = express()
<<<<<<< HEAD
const { isEmpty, propOr, curry, difference, keys, not } = require("ramda")
const createMissingFieldsMsg = require("./lib/create-missing-fields-msg")
const cleanObj = require("./lib/clean-obj")
const stringToNumber = require("./lib/string-to-number")
const stringToBool = require("./lib/string-to-bool")

// Lib files
const checkRequiredFields = require("./lib/check-required-fields")
=======
const {} = require('ramda')
const { getDog } = require('./dal')
>>>>>>> 8a8fe045a3f01af797ed81073bf89886584bfaa0

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

<<<<<<< HEAD
api.put("/dogs/:dogID", function(req, res, next) {
  const newDog = propOr({}, "body", req)

  if (isEmpty(newDog)) {
    next(
      new NodeHTTPError(
        400,
        `Missing dog in request body, use a header of 'Content-Type' with a value of 'application/json'.  Be sure to provide valid JSON to represent the cat you wish to add.`
      )
    )
    return
  }

  const missingFields = checkRequiredFields(["type", "breed"], newBreed)
  if (not(IsEmpty(missingFields))) {
    next(new NodeHTTPError(400)`${createMissingFieldsMsg(missingFields)}`)
    return
  }

  const cleanDog = cleanObj(["breed", "type"], newDog)

  replaceDog(cleanDog, function(err, data) {
    if (err) {
      next(new NodeHTTPError(err.status, err.message, err))
      return
    }
    res.status(200).send(data)
  })
})

api.listen(port, () => console.log("API is up and running.", port))

// TODO: DONE No dog in request body, send the 400 response status code and message to the client.
// TODO: DONE Missing required fields send 400 response
// TODO: DONE Clean unnecessary prop
// TODO: id prop value in resource matches the name within in route/path
=======
api.listen(port, () => console.log('API is up and running.', port))
>>>>>>> 8a8fe045a3f01af797ed81073bf89886584bfaa0
