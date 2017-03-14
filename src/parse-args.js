'use strict'

// This module exports a method used for parsing arguments
// This method will be used in the cli file

// Possible inputs from user:
// 	- add baseball michael
//  - remove michael baseball
//  - ls
//  - ls suzy
//  - delivered suzy
//
//  Check first word
//  	- if not "add", "remove", "ls", or "delivered", that's an error
//

// Can a toy be added to a child before it exists in the toys table?
// Can we create the toy, then add it to the child in one operation?

// Method should return error argument (may be null) and arguments from user optionally proccessed

const parseArgs = function(args) {
	let err = null

	return {err, args}
}

module.exports = {parseArgs}
