// Enviornment Variables
require('dotenv').config();
const port = process.env.PORT || 5000;

// Dependeceies
const express = require('express');
const NodeHTTPError = require('node-http-error');
const bodyParser = require('body-parser');
const api = express();
const { propOr, pick, isEmpty, curry, difference } = require('ramda');
const cleanObj = (arrApprovedKeys, obj) => pick(arrApprovedKeys, obj);
const checkRequredFields = curry((arrProps, obj) =>
	difference(arrProps, keys(obj))
);

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

api.listen(port, () => console.log('API is up and running.', port));
