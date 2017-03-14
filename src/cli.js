'use strict'

// Process the arguments passed in from the user
// Load other modules and call appropriate methods

const {checkArgs} = require('./parse-args.js')

const [,, ...args] = process.argv,
						   err = checkArgs(args)


if(err) return console.error(`Error: ${err.message}`)

