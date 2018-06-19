require('dotenv').config();
const PouchDB = require('pouchdb-core');
PouchDB.plugin(require('pouchdb-adapter-http'));
const db = new PouchDB(
	`${process.env.COUCH_HOSTNAME}${process.env.COUCH_DBNAME}`
);
const dogs = [
	{
		_id: 'dog-golden-retriever-nugget',
		name: 'Nugget',
		breed: 'golden retriever',
		owner: 'Will Adkins',
		age: 11
	},
	{
		_id: 'dog-german-shepherd-trapper',
		name: 'Trapper',
		breed: 'german shepherd',
		owner: 'Reyne Moore',
		age: 2
	},
	{
		_id: 'dog-german-shepherd-delta',
		name: 'Delta',
		breed: 'german shepherd',
		owner: 'Reyne Moore',
		age: 1
	},
	{
		_id: 'dog-german-shepherd-thor',
		name: 'Thor',
		breed: 'german shepherd',
		owner: 'Will Adkins',
		age: 1
	},
	{
		_id: 'dog-scottish-terrier-piper',
		name: 'Piper',
		breed: 'scottish terrier',
		owner: 'Will Adkins',
		age: 14
	},
	{
		_id: 'dog-pit-bull-ernie',
		name: 'Ernie',
		breed: 'pit bull',
		owner: 'Josh Paulsen',
		age: 10
	}
];

db.bulkDocs(dogs, function(err, result) {
	if (err) {
		console.log('ERROR', err);
		return;
	}
	console.log('success', result);
});
