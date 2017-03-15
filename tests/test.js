const {assert} = require('chai')

// Testing for parse arguments method
const {checkArgs} = require('../src/parse-args.js')
describe('checkArgs method', function() {
	it('should be a function', function() {
		assert.isFunction(checkArgs)
	})

	describe('return an error when', function() {
		it('the first argument is not within the list of correct words', function() {
			const err = checkArgs(['dumbUserInput'])
			assert.isNotNull(err)
			assert.isDefined(err)
		})
		it('there were no arguments passed', function() {
			const err = checkArgs([])
			assert.isNotNull(err)
			assert.isDefined(err)
		})
		it('the user tries to remove without specifying toy and child', function() {
			const err1 = checkArgs(['remove', 'toy'])
			const err2 = checkArgs(['remove', 'michael'])
			assert.isNotNull(err1); assert.isNotNull(err2)
			assert.isDefined(err1); assert.isDefined(err2)
		})
	})
})

describe('parseArgs', function() {

})

describe('db-calls', function() {
	const {addChild, addToy, addGift, changeDelivered, getChildId, getToyId, getChildrenWithGifts, getGiftsForChild, removeGift, checkChildHasGift} = require('../src/db-calls.js')
	describe('should add ', function() {
		it('a toy to the toys table', function() {
			// Manually tested
		})
		it('a child to the children table', function() {
			// Manually tested
		})
		it('a gift to the gift table', function() {
			// Manually tested
		})
		it('delivered true to a child', function() {
			// Manually tested
		})
	})
	describe('should get', function() {
		it('a childs id from their name', function() {
			return getChildId('suzy').then(id => {
				assert.equal(id, '2')
			})
		})
		it(`a response of 0 if a child's name isn't in the list`, function() {
			return getChildId('Donald Trump').then(id => {
				assert.equal(id, 0)
			})
		})
		it('a toys id from its name', function() {
			return getToyId('yo-yo').then(id => {
				assert.equal(id, '1')
			})
		})
		it(`a response of 0 if a toy's name isn't in the list`, function() {
			return getToyId('Missile Launcher').then(id => {
				assert.equal(id, 0)
			})
		})
		it('a list of children who have gifts', function() {
			return getChildrenWithGifts().then(children => {
				assert.isDefined(children[0].childName)
			})
		})
		it('a list of gifts for a child', function() {
			return getGiftsForChild('suzy').then(gifts => {
				assert.isDefined(gifts[0].toyName)
			})
		})
	})
	describe('should remove', function() {
		it('a child-toy pair in the gifts table', function() {
			// Check manually
		})
	})
})

describe('The on (whatever) functions: ', function() {
	const {performCommand, onAddCommand, onRemoveCommand, onLsCommandNoChild, onLsCommandWithChild, onDeliveredCommand} = require('../src/performCommand.js')
	// add kite suzy
	describe('onAddCommand:', function() {
		it('should be a function', function() {
			assert.isFunction(onAddCommand)
		})
		describe('return an error when:', function() {
			it('only one argument (either child or toy) is specified', function() {
				return onAddCommand('suzy').then(err => {
					assert.isNotNull(err)
				}).catch(err => {
					assert.isNotNull(err)
				})
			})
		})
		it('should return undefined when it is a good command', function() {
			// Check manually
		})
		it(`should only add a child if the child didn't exist`, function() {
			// Check manually
		})
		it(`should only add a toy if the toy didn't exist`, function() {
			// check manually
		})
	})
	// remove suzy kite
	describe('onRemoveCommand:', function() {
		it(`should be a function`, function() {
			assert.isFunction(onRemoveCommand)
		})
		describe('return an error when:', function() {
			it('only one argument (either child or toy) is specified', function() {
				return onRemoveCommand('kite').catch(err => {
					assert.isNotNull(err)
				})
			})
			it(`that child did not have that gift`, function() {
				return onRemoveCommand('brat', 'yo-yo')
					.catch(err => assert.isNotNull(err))
					.then(() => assert.equal(1, 2))
			})
		})
		it('should return undefined when it is a good command', function() {
			return onRemoveCommand('suzy', 'kite').then(response => {
				assert.isUndefined(response)
			})
		})
		it('should remove all instances of that gift for that child', function() {
			// Check manually
		})
	})
	// ls
	// ls suzy
	describe('onLsCommandWithChild:', function() {
		it(`return an Array`, function() {
			return onLsCommandWithChild('suzy').then(data => {
				assert.isArray(data)
			})
		})
		it(`should return an empty array for a child with no gifts`, function() {
			return onLsCommandWithChild('brat').then(data => {
				assert.equal(data.length, 0)
			})
		})
	})
	describe(`onLsCommandNoChild:`, function() {
		it(`return an Array`, function() {
			return onLsCommandNoChild().then(data => {
				assert.isArray(data)
			})
		})
	})
	// delivered suzy
	describe('onDeliveredCommand:', function() {
		describe('return an error when:', function() {
			it(`there is no argument after delivered`, function() {
				return onDeliveredCommand(undefined).then(err => {
					assert.isNotNull(err)
				})
			})
			it(`the argument after delivered isn't a child`, function() {
				return onDeliveredCommand('Purple').then(err => {
					assert.isNotNull(err)
				})
			})
		})
		it('should return null when it is a good command', function() {
			// Check manuallys
		})
	})
})














