<<<<<<< HEAD
require("dotenv").config()
const PouchDB = require("pouchdb-core")
PouchDB.plugin(require("pouchdb-adapter-http"))
const {} = require("ramda")
=======
require('dotenv').config()
const PouchDB = require('pouchdb-core')
PouchDB.plugin(require('pouchdb-adapter-http'))
const {} = require('ramda')
>>>>>>> 8a8fe045a3f01af797ed81073bf89886584bfaa0

// Creates an instance of a couchdb database @ the url provided in the string template
const db = new PouchDB(
  `${process.env.COUCH_HOSTNAME}${process.env.COUCH_DBNAME}`
)

<<<<<<< HEAD
const replaceDog = (dogs, callback) => {
  db.get(dogs._id, function(err, oldDogObj) {
    if (err) {
      callback(err)
      return
    }
    db.put(dogs, function(err, replaceResult) {
      if (err) {
        callback(err)
        return
      }
      callback(null, replaceResult)
    })
  })
}

const dal = {
  replaceDog
}
=======
const getDog = (dogID, callback) => {
  db.get(dogID, callback)
}
const dal = { getDog }
>>>>>>> 8a8fe045a3f01af797ed81073bf89886584bfaa0

module.exports = dal
