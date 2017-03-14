'use strict'

// Process the arguments passed in from the user
// Load other modules and call appropriate methods

const {checkArgs} = require('./parse-args.js')
const {Database} = require('sqlite3')

const [,, ...args] = process.argv,
						   err = checkArgs(args)


if(err) return console.error(`Error: ${err.message}`)

const db = new Database('data/lootbag.sqlite')

