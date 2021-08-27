const connect = {
  host: process.env.local.DATABASE_HOST,
  port: process.env.local.DATABASE_PORT,
  database: process.env.local.DATABASE_NAME,
  user: process.env.local.DATABASE_USER,
  password: process.env.local.DATABASE_PASSWORD,
  max: 30
}

const initOptions = {
  noWarnings: true
}

const pgp = require('pg-promise')(initOptions)

const db = pgp(connect)

module.exports = db



