require('dotenv').config()

const PouchDB = require('pouchdb-core')
PouchDB.plugin('pouch-adapter-http')

const db = new PouchDB(
  `${process.env.COUCH_HOSTNAME}${process.env.COUCH_DBNAME}`
)
const {} = require('ramda')
