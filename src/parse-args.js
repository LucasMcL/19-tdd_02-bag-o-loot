'use strict'

// This module exports a method used for parsing arguments
// This method will be used in the cli file

// Possible inputs from user:
// 	- add baseball michael
//  - remove michael baseball
//  - ls
//  - ls suzy
//  - delivered suzy

// Can a toy be added to a child before it exists in the toys table?
// Can we create the toy, then add it to the child in one operation?

// Method should return error argument (may be null) and arguments from user optionally proccessed

/**
 * processes user input and returns on object with error (may be null) and args
 * @param  {array} args - array of user input arguments
 * @return {object}     - object containing err and args
 */
const checkArgs = function(args) {
	let [command, arg2, arg3] = args

	let err = null
	const validCommands = ['add', 'remove', 'ls', 'delivered']
	if(!command) {
		err = new Error('Please enter a command')
		return {err, args}
	}
	if(!validCommands.includes(command)) {
		err = new Error('Not a valid command.  Please begin your request with "add", "remove", "ls", or "delivered"')
		return {err, args}
	}
	if(command === 'remove') {
		if(!arg3) {
			err = new Error('Please specify child and toy to remove.  Example: "remove michael baseball".')
		}
	}


	return {err, args}
}

module.exports = {checkArgs}













