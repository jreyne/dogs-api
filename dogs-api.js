// Enviornment Variables
require('dotenv').config()
const port = process.env.PORT || 5000

// Dependeceies
const express = require('express')
const NodeHTTPError = require('node-http-error')
const bodyParser = require('body-parser')
const api = express()
const {} = require('ramda')
const { deleteDog } = require('./dal')

// Get route

api.get('/', function(req, res, next) {
  res.status(200).send('Welcome to the dog api dawg.')
})

api.get('/dogs/:dogID', function(req, res, next) {
  const dogID = req.params.dogID
})

// Error Handling Middleware

api.use(function(err, req, res, next) {
  console.log(
    'ERROR! ',
    'METHOD: ',
    req.method,
    ' PATH',
    req.path,
    ' error:',
    JSON.stringify(err)
  )
  res.status(err.status || 500)
  res.send(err)
})

api.listen(port, () => console.log('API is up and running.', port))
