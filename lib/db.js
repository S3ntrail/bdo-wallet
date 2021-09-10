const connect = {
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  database: process.env.DATABASE_NAME,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  max: 30
}

const initOptions = {
  noWarnings: true
}

const pgp = require('pg-promise')(initOptions)

const db = pgp(connect)

module.exports = db



