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

describe('db-calls', function() {
	const {addChild, addToy, addGift, changeDelivered, getChildId, getToyId, getChildrenWithGifts, getGiftsForChild} = require('../src/db-calls.js')
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
		it('a toys id from its name', function() {
			return getToyId('Yo-yo').then(id => {
				assert.equal(id, '1')
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
})














