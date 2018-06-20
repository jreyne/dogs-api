require("dotenv").config()
const PouchDB = require("pouchdb-core")
PouchDB.plugin(require("pouchdb-adapter-http"))
const {} = require("ramda")

// Creates an instance of a couchdb database @ the url provided in the string template
const db = new PouchDB(
  `${process.env.COUCH_HOSTNAME}${process.env.COUCH_DBNAME}`
)

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

module.exports = dal
