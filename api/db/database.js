knexfile = require('./knexfile.js')
knex = require('knex')

const database = knex(knexfile.development);

module.exports = database