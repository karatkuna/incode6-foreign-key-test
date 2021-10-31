// LOADING AND INITIALISE THE LIBRARY
const pgp = require('pg-promise')()

// CONNECTION STRING
const connection = 'postgres://postgres:karat1234@localhost:5432/foreign_key_test'

const db = pgp(connection)

module.exports = db

