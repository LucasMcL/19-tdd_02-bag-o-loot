'use strict'

// Exports method that controls the logically flow
// of which DB calls to make based on user input
const {addChild, addToy, addGift, changeDelivered, getChildId, getToyId, getChildrenWithGifts, getGiftsForChild, removeGift} = require('./db-calls.js')

const performCommand = function(args) {
	const [command, arg2, arg3] = args
	switch(command) {
		case 'add':
			onAddCommand(arg2, arg3)
				.then(() => console.log(`${arg2} added for ${arg3}`))
				.catch(err => console.error(`Error: ${err.message}`))
			break
		case 'remove':
			onRemoveCommand(arg2, arg3)
				.then(() => console.log(`${arg3} removed from ${arg2}`))
				.catch(err => console.error(`Error: ${err.message}`))
			break
		case 'ls':
			if(arg2) {
				onLsCommandWithChild(arg2).then(gifts => {
					if(gifts.length === 0) console.log(`no gifts found for ${arg2}`)
					else gifts.forEach(gift => console.log(gift.toyName))
				}).catch(err => {
					console.error(`Error: ${err.message}`)
				})
			}
			else {
				onLsCommandNoChild().then(children => {
					if(children.length === 0) console.log(`no children are receiving gifts :(`)
					else children.forEach(child => console.log(child.childName))
				}).catch(err => {
					console.error(`Error: ${err.message}`)
				})
			}
			break
		case 'delivered':

			break
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
		if(!arg3) return reject(new Error('Please enter both a child and toy.  Example: add suzy kite.'))
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
	// remove suzy kite
	// Remove all instances of kites for suzy
	// Return promise with error on reject or response on resolve

	return new Promise((resolve, reject) => {
		if(!arg3) return reject(new Error('Please enter both a toy and child.  Example: remove kite suzy.'))
		const child = arg2, toy = arg3

		getGiftsForChild(child).then(gifts => {
			let childHasGift = false
			gifts.forEach(gift => {if(gift.toyName === toy) childHasGift = true})
			if(!childHasGift) return reject(new Error(`Gift ${toy} not found for child ${child}`))
			else {
				removeGift(child, toy)
					.then(() => resolve())
					.catch(err => reject(err))
			}
		})
	})
}

const onLsCommandNoChild = function() {
	return new Promise((resolve, reject) => {
		getChildrenWithGifts().then(data => {
			resolve(data)
		}).catch(err => {
			reject(err)
		})
	})
}

const onLsCommandWithChild = function(arg2) {
	const child = arg2
	return new Promise((resolve, reject) => {
		getGiftsForChild(child).then(data => {
			resolve(data)
		}).catch(err => {
			reject(err)
		})
	})
}

const onDeliveredCommand = function(arg2) {
	return null
}



module.exports = {performCommand, onAddCommand, onRemoveCommand, onLsCommandWithChild, onLsCommandNoChild, onDeliveredCommand}
