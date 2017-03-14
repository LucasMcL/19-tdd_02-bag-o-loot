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
 * processes user input and returns an error (may be null if no problems)
 * @param  {array} args - array of user input arguments
 * @return {object || null}     - error object or null
 */
const checkArgs = function(args) {
	let err = null
	if(!args[0]) {
		err = new Error('Please enter a command')
		return err
	}

	const validCommands = ['add', 'remove', 'ls', 'delivered']
	const [command, arg2, arg3] = args

	if(!validCommands.includes(command)) {
		err = new Error('Not a valid command.  Please begin your request with "add", "remove", "ls", or "delivered"')
		return err
	}
	if(command === 'remove') {
		if(!arg3) {
			err = new Error('Please specify child and toy to remove.  Example: "remove michael baseball".')
		}
		return err
	}

	return err
}

module.exports = {checkArgs}













