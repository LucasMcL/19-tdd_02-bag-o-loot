'use strict'

// Exports method that controls the logically flow
// of which DB calls to make based on user input
const {addChild, addToy, addGift, changeDelivered, getChildId, getToyId, getChildrenWithGifts, getGiftsForChild, removeGift} = require('./db-calls.js')

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

const onAddCommand = (arg2, arg3) => {
	// Add child-toy pairing in database
	// If toy or child don't exist yet, add them first
	// Take child arg and check if exists
	// 	If not, make child
	// Take toy arg and check if exists
	// 	If not, make toy
	// Add gift


	return new Promise((resolve, reject) => {
		if(!arg3) reject(new Error('Please enter both a child and toy.  Example: add suzy kite.'))
		const toy = arg2, child = arg3

		const p1 = new Promise((res, rej) => {
			getChildId(child).then(id => {
				if(id === 0) {
					addChild(child)
						.then(() => res())
						.catch(err => rej(err))
				}
				else res()
			})
		})

		const p2 = new Promise((res, rej) => {
			getToyId(toy).then(id => {
				if(id === 0) {
					addToy(toy)
						.then(() => res())
						.catch(err => rej(err))
				}
				else res()
			})
		})

		Promise.all([p1, p2]).then(() => {
			addGift(child, toy)
				.then(() => resolve())
				.catch(err => reject(err))
		}).catch(err => {
			reject(err)
		})
	})
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
