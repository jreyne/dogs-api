require("dotenv").config()
const PouchDB = require("pouchdb-core")
PouchDB.plugin(require("pouchdb-adapter-http"))
const {} = require("ramda")

// Creates an instance of a couchdb database @ the url provided in the string template
const db = new PouchDB(
  `${process.env.COUCH_HOSTNAME}${process.env.COUCH_DBNAME}`
)

const deleteDog = (dogID, callback) => {
  db.get(dogID, function(err, dog) {
    if (err) {
      callback(err)
      return
    }
    db.remove(dog, function(err, deleteResult) {
      if (err) {
        callback(err)
        return
      }
      callback(null, deleteResult)
    })
  })
}

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

const getDog = (dogID, callback) => {
  db.get(dogID, callback)
}

const dal = { getDog, replaceDog, deleteDog }
module.exports = dal
