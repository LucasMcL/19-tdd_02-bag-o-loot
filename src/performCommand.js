'use strict'

// Exports method that controls the logically flow
// of which DB calls to make based on user input
const {addChild, addToy, addGift, changeDelivered, getChildId, getToyId, getChildrenWithGifts, getGiftsForChild} = require('./db-calls.js')

const performCommand = function(args) {
	const command = args[0]
	switch(command) {
		case 'add':

			break;
		case 'remove':

			break;
		case 'ls':

			break;
		case 'delivered':

			break;
	}
}

const onAddCommand = function(arg2, arg3) {
	return null
}

const onRemoveCommand = function(arg2, arg3) {
	return null
}

const onLsCommand = function(arg2) {

	// return getChildrenWithGifts().then(data => {return data})
	return null
}

const onDeliveredCommand = function(arg2) {
	return null
}



module.exports = {performCommand, onAddCommand, onRemoveCommand, onLsCommand, onDeliveredCommand}
