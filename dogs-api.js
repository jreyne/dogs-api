// Enviornment Variables
require('dotenv').config();
const port = process.env.PORT || 5000;

// Dependeceies
const express = require('express')
const NodeHTTPError = require('node-http-error')
const bodyParser = require('body-parser')
const api = express()
const { deleteDog, getDog, replaceDog, listDogs, postDog } = require('./dal')
const {
  isEmpty,
  propOr,
  curry,
  difference,
  keys,
  not,
  pathOr
} = require('ramda')
const createMissingFieldsMsg = require('./lib/create-missing-fields-msg')
const cleanObj = require('./lib/clean-obj')
const stringToNumber = require('./lib/string-to-number')
const stringToBool = require('./lib/string-to-bool')

// Lib files
const checkRequiredFields = require('./lib/check-required-fields')

api.use(bodyParser.json())


// Get route

api.get('/', function(req, res, next) {

	res.status(200).send('Welcome to the dog api dawg.');
});

api.get('/dogs/:dogID', function(req, res, next) {
	const dogID = req.params.dogID;
});

//POST-CREATE route

api.post('/dogs', function(req, res, next) {
	const newDog = propOr({}, 'body', req);

	if (isEmpty(newDog)) {
		next(
			new NodeHTTPError(
				400,
				`There is no dog data in the request.  Please address and resubmit.`
			)
		);
		return;
	}

	const missingFields = checkRequiredFields(
		['breed', 'name', 'owner', 'age'],
		newDog
	);
	if (not(isEmpty(missingFields))) {
		next(
			new nodeHTTPError(
				400,
				`${'You are missing the following fields (missingFields)'}`
			)
		);
		return;
	}

	const newNewDog = merge(cleanObj(['breed', 'name', 'owner', 'age'], newDog), {
		id: newDog.name
	});
	const db = append(newNewDog, db);
	res.status(201).send({ ok: true, data: newNewDog });
});


api.get('/dogs', function(req, res, next) {
  const limit = pathOr(100, ['query', 'limit'], req)

  listDogs(limit, function(err, dogs) {
    if (err) {
      next(new NodeHTTPError(err.status, err.message, err))
      return
    }
    res.status(200).send(dogs)
  })
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

// Delete Dog Route

api.delete('/dogs/:dogID', function(req, res, next) {
  deleteDog(req.params.dogID, function(err, data) {
    if (err) {
      next(new NodeHTTPError(err.status, err.message, err))
      return
    }
    res.status(200).send(data)
  })
})

api.put('/dogs/:dogID', function(req, res, next) {
  const newDog = propOr({}, 'body', req)
  console.log('newDog', newDog)
  if (isEmpty(newDog)) {
    next(
      new NodeHTTPError(
        400,
        `Missing dog in request body, use a header of 'Content-Type' with a value of 'application/json'.  Be sure to provide valid JSON to represent the cat you wish to add.`
      )
    )
    return
  }

  const missingFields = checkRequiredFields(
    ['_id', '_rev', 'breed', 'owner', 'age', 'name'],
    newDog
  )
  if (not(isEmpty(missingFields))) {
    next(new NodeHTTPError(400, `${createMissingFieldsMsg(missingFields)}`))
    return
  }

  const cleanDog = cleanObj(
    ['_id', '_rev', 'breed', 'owner', 'age', 'name'],
    newDog
  )

  replaceDog(cleanDog, function(err, data) {
    if (err) {
      next(new NodeHTTPError(err.status, err.message, err))
      return
    }
    res.status(200).send(data)
  })
})

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

