<<<<<<< HEAD
require("dotenv").config()
const PouchDB = require("pouchdb-core")
PouchDB.plugin("pouch-adapter-http")
const {} = require("ramda")

// Creates an instance of a couchdb database @ the url provided in the string template
const db = new PouchDB(
  `${process.env.COUCH_HOSTNAME}${process.env.COUCH_DBNAME}`
)
=======
require('dotenv').config()

const PouchDB = require('pouchdb-core')
PouchDB.plugin('pouch-adapter-http')

const db = new PouchDB(
  `${process.env.COUCH_HOSTNAME}${process.env.COUCH_DBNAME}`
)
const {} = require('ramda')
>>>>>>> b520a2e2d729efce4a1792ed3e9755d8b77c6b6a
